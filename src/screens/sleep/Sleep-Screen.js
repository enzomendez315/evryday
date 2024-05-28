import React, { useState, useEffect } from 'react';
import {
  Modal, SafeAreaView, StatusBar, Text, StyleSheet,
  ScrollView, View, TouchableOpacity, TextInput, Dimensions, Image
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit';
import DatePicker from 'react-native-date-picker'
import MonthPicker from 'react-native-month-picker';
import {
  makeSleepEntry, deleteSleepEntry,
  editSleepEntry, syncUsersMonthLog
} from '../../logic/sleep-api'
import { AccountContext } from '../../../App';

// for adding sleep slider
import { useSharedValue } from 'react-native-reanimated';
import { Slider } from 'react-native-awesome-slider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// sleep data comes in the form { day: string, hours: int, quality: int }
// only in this format for sleep tab UI component, received from sync functions
// the values are saved in the sleepData state as an array of objects

// these are defined once at the beginning of opening the page in useEfect
let userID;
let date;

// gets date in format 'YYYY-MM-DD', just new Date() is UTC not local time
// converts UTC to local, subtracts local offset from hours
// this is hacky and causes some bugs with dates being off by 1 day
// that or timezones shouldn't exist and there should be 1 earth time
function getLocalDate(dateObject) {
  let offset = new Date().getTimezoneOffset() / 60;
  let tempDate = new Date(dateObject);
  tempDate.setHours(tempDate.getHours() - offset);
  const year = tempDate.getFullYear();
  const month = String(tempDate.getMonth() + 1).padStart(2, '0');
  const day = String(tempDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

// chart that renders sleepData on UI
const MyLineChart = ({ sleepArray }) => {
  return (
    <>
      <LineChart
        data={{
          labels: sleepArray.map(day => day.day.split('-')[2]),
          datasets: [
            {
              data: sleepArray.map(day => day.hours),
              //color: (opacity = 1) => `rgba(234, 255, 244, ${opacity})`, // optional
              //strokeWidth: 2 // optional
            }
          ],
          //legend: ["Hours of Sleep"] // optional
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisInterval={1}
        chartConfig={{
          withHorizontalLabels: true,
          backgroundColor: "#00a8e2",
          backgroundGradientFrom: "#00c6ff",
          backgroundGradientTo: "#0072ff",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#00c6ff"
          }
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

// called by add slepp button and when a sleep tab is pressed
// if a sleep tab is pressed, the user can edit the sleep data
// TODO: filter the input from the user to make sure it is valid
// (e.g. dates are recent and hours is a number)
const AddSleepPopup = ({ isAddPopupVisible, setIsAddPopupVisible, setSleepData, monthValue }) => {
  // these are not hooks because useSate re-renders the page
  let hours = 0;
  let tempStartDate = new Date(getLocalDate(new Date()));

  // for slider
  const progress = useSharedValue(5);
  const min = useSharedValue(1);
  const max = useSharedValue(10);

  return (
    <Modal
      visible={isAddPopupVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setIsAddPopupVisible(!isAddPopupVisible)}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.popupOverlay}>
          <View style={styles.popup}>
            <View style={styles.popupHeader}>
              <TouchableOpacity onPress={() => setIsAddPopupVisible(false)}>
                <Text style={[styles.closeButton, { alignSelf: 'flex-start', fontSize: 24 }]}>x</Text>
              </TouchableOpacity>

              <Text style={styles.popupTitle}>New Sleep Data</Text>

              <TouchableOpacity onPress={() => { /* Handle edit */ }}>
                <Text style={styles.editButton}>Edit</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.popupContent}>
              <View style={{ borderWidth: 1, borderColor: 'black', margin: 10 }}>
                <Text>Wakeup Date</Text>
                <DatePicker mode='date' date={tempStartDate}
                  onDateChange={(newDate) => {
                    tempStartDate = newDate;
                  }} />
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.addSleepInputText}>Hours Slept: </Text>
                <TextInput style={styles.textInput} placeholder="Enter hours slept"
                  keyboardType='numeric'
                  onChangeText={(newText) => hours = parseInt(newText)} />
              </View>

              <View style={styles.sliderContainer}>
                <Text style={styles.addSleepInputText}>Quality: </Text>
                <Slider
                  style={styles.sliderStuff}
                  progress={progress}
                  minimumValue={min}
                  maximumValue={max}
                  step={9}
                  onSlidingComplete={(value) => { progress.value = value }}
                />
              </View>

              <TouchableOpacity
                style={[styles.addSleepButton, { marginTop: 20 }]}
                onPress={async () => {
                  await makeSleepEntry(userID, getLocalDate(tempStartDate), hours, progress.value);
                  setIsAddPopupVisible(false);
                  syncUsersMonthLog(userID, monthValue.getMonth() + 1, monthValue.getFullYear(), setSleepData);
                }}>
                <Text style={styles.addSleepButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </GestureHandlerRootView>
    </Modal>
  );
}

// opened when a sleep tab is pressed
const EditSleepPopup = ({ isEditPopupVisible, setIsEditPopupVisible, setSleepData, editPopupData, monthValue }) => {
  // these are not hooks because useSate re-renders the page
  // they are the 3 values of the sleep data that the user can edit
  let hours = editPopupData.hours;
  let wakeDate = new Date(editPopupData.day);
  let pickerStartDate = new Date(wakeDate);
  pickerStartDate.setDate(wakeDate.getDate() + 1); // this is a hack to make the date picker work

  // for slider
  // TODO: figure out how to make this progress start at the value of the sleep data
  // something like progress2.value = editSleepdata.quality
  // it doesn't work because useSharedValue is a mystery
  const progress2 = useSharedValue(5);
  const min = useSharedValue(1);
  const max = useSharedValue(10);

  return (
    <Modal
      visible={isEditPopupVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setIsEditPopupVisible(!isEditPopupVisible)}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.popupOverlay}>
          <View style={styles.popup}>
            <View style={styles.popupHeader}>
              <TouchableOpacity onPress={() => setIsEditPopupVisible(false)}>
                <Text style={[styles.closeButton, { alignSelf: 'flex-start', fontSize: 24 }]}>x</Text>
              </TouchableOpacity>

              <Text style={styles.popupTitle}>Edit Sleep Data</Text>

              <TouchableOpacity onPress={() => {
                deleteSleepEntry(userID, editPopupData.day);
                setIsEditPopupVisible(false);
                syncUsersMonthLog(userID, monthValue.getMonth() + 1, monthValue.getFullYear(), setSleepData);
              }}>
                <Text style={{ color: 'red' }}>Delete</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.popupContent}>
              <View style={{ borderWidth: 1, borderColor: 'black', margin: 10 }}>
                {isEditPopupVisible ? <Text>Wakeup Date {wakeDate.toISOString().substring(0, 10)}</Text> : null}
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.addSleepInputText}>Hours Slept: </Text>
                <TextInput style={styles.textInput} placeholder={hours.toString()}
                  keyboardType='numeric'
                  onChangeText={(newText) => hours = parseInt(newText)} />
              </View>

              <View style={styles.sliderContainer}>
                <Text style={styles.addSleepInputText}>Quality: </Text>
                <Slider
                  style={styles.sliderStuff}
                  progress={progress2}
                  minimumValue={min}
                  maximumValue={max}
                  step={9}
                  onSlidingComplete={(value) => { progress2.value = value }}
                />
              </View>
              <Text>Original Quality: {editPopupData.quality}</Text>

              <TouchableOpacity
                style={[styles.addSleepButton, { marginTop: 20 }]}
                onPress={() => {
                  editSleepEntry(userID, wakeDate.toISOString().substring(0, 10), hours, progress2.value);
                  setIsEditPopupVisible(false);
                  syncUsersMonthLog(userID, monthValue.getMonth() + 1, monthValue.getFullYear(), setSleepData);
                }}>
                <Text style={styles.addSleepButtonText}>Save Changes</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </GestureHandlerRootView>
    </Modal>
  );
}

// opened when the month and year text is pressed
const PickMonthPopup = ({ setSleepData, isPickMonthPopupVisible, setIsPickMonthPopupVisible,
  tempDate, setTempDate, setMonthValue, setIsLoading }) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={isPickMonthPopupVisible}
      onRequestClose={() => {
        setIsPickMonthPopupVisible(false);
      }}>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <MonthPicker
            selectedDate={tempDate || new Date()}
            onMonthChange={setTempDate}
          />
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => {
              setIsPickMonthPopupVisible(false);
              setMonthValue(new Date(tempDate));
              setIsLoading(true);
              syncUsersMonthLog(userID, new Date(tempDate).getMonth() + 1, new Date(tempDate).getFullYear(), setSleepData, setIsLoading);
            }}>
            <Text>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
// takes in a date object and returns a string in the format "March 2024"
// used for UI to display the month and year 
function getMonthYearFormat(date) {
  // if date is in a string format, convert it to a date object
  let date2 = new Date(date);
  return monthNames[date2.getMonth()] + " " + date2.getFullYear();
}

// UI component for each sleep entry
const SleepTab = ({ dayReport, setIsEditPopupVisible, setEditPopupData }) => (
  <TouchableOpacity onPress={() => {
    setEditPopupData(dayReport);
    setIsEditPopupVisible(true);
  }}>
    <View style={styles.sleepTab}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={styles.dateName}>{`${monthNames[new Date(dayReport.day).getMonth()]} ${new Date(dayReport.day).getDate() + 1}`}</Text>
          <Text style={styles.hoursText}>{`Hours of Sleep: ${dayReport.hours}`}</Text>
        </View>
        <View>
          <View style={[styles.qualityCircle,
          {
            backgroundColor: dayReport.quality < 4 ? 'red'
              : dayReport.quality < 6 ? 'blue' : 'green'
          }]}>
            {<Text style={styles.qualityText}>{dayReport.quality}</Text>}
          </View>
          <Text>Quality</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
)

// Main Screen
const SleepScreen = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  // for adding and editing sleep data
  const [isAddPopupVisible, setIsAddPopupVisible] = useState(false);
  const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);
  const [isPickMonthPopupVisible, setIsPickMonthPopupVisible] = useState(false);
  // for the month picker
  const [tempDate, setTempDate] = useState(new Date()); // hook used in modal
  const [monthValue, setMonthValue] = useState(new Date()); // what UI sees, updated when modal is closed
  // when a sleep tab is pressed, the data is saved here
  const [editPopupData, setEditPopupData] = useState({ day: '', hours: 0, quality: 0 });
  // a list of all the sleep entries to show the user in the UI
  const [sleepData, setSleepData] = useState([]);

  // gets the context created in the App.tsx file
  userID = React.useContext(AccountContext);

  useEffect(() => {
    date = getLocalDate(new Date());
    syncUsersMonthLog(userID, new Date().getMonth() + 1, new Date().getFullYear(), setSleepData, setIsLoading);
  }, []);

  // called every time the screen is opened
  useFocusEffect(
    React.useCallback(() => {
      syncUsersMonthLog(userID, new Date().getMonth() + 1, new Date().getFullYear(), setSleepData, setIsLoading);
      return;
    }, [])
  );

  let totalHours = sleepData.reduce((total, day) => total + day.hours, 0);

  return (
    <>
      <StatusBar barStyle='default' />
      <SafeAreaView style={styles.container}>
        <View>
          <AddSleepPopup setSleepData={setSleepData} monthValue={monthValue}
            setIsAddPopupVisible={setIsAddPopupVisible} isAddPopupVisible={isAddPopupVisible} />

          <EditSleepPopup setSleepData={setSleepData} editPopupData={editPopupData} monthValue={monthValue}
            setIsEditPopupVisible={setIsEditPopupVisible} isEditPopupVisible={isEditPopupVisible} />

          <PickMonthPopup isPickMonthPopupVisible={isPickMonthPopupVisible} setSleepData={setSleepData}
            tempDate={tempDate} setTempDate={setTempDate} setMonthValue={setMonthValue} setIsLoading={setIsLoading}
            setIsPickMonthPopupVisible={setIsPickMonthPopupVisible} />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
            <View>
              <TouchableOpacity onPress={() => setIsPickMonthPopupVisible(true)}>
                <Text style={styles.monthText}>{getMonthYearFormat(monthValue)}</Text>
                <Text>Select Month</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.addSleepButton}
              onPress={() => setIsAddPopupVisible(true)}>
              <Text style={styles.addSleepButtonText}>+ Add Sleep</Text>
            </TouchableOpacity>
          </View>

          {totalHours !== 0 ? <Text style={styles.monthText}>
            Average Hours: {(totalHours / sleepData.length).toFixed(2)}
          </Text> : null}

          {/* Chart */}
          {!isLoading ? sleepData.length > 0 ?
            <View style={styles.chartContainer}>
              <MyLineChart sleepArray={sleepData} />
            </View>
            : <View>
              <Image style={styles.image} source={require('../../images/sleepingSloth.png')} />
              <Text style={{ textAlign: 'center' }}>No sleep data found</Text>
            </View>
            : <Text>Loading...</Text>
          }

          {/* Sleep data rendered in tabs*/}
          {sleepData.length > 0 ? <Text style={[styles.monthText, { marginLeft: 10 }]}>Sleep Logs</Text> : null}
          <ScrollView style={styles.sleepScrollContainer}>
            {sleepData.map((day, index) => (
              <View style={styles.sleepTabContainer} key={index}>
                <SleepTab dayReport={day} setEditPopupData={setEditPopupData}
                  setIsEditPopupVisible={setIsEditPopupVisible} />
              </View>
            ))}
          </ScrollView>

        </View>
      </SafeAreaView>
    </>
  );
};

export default SleepScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DADADA',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
  monthText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'left',
    marginTop: 10,
  },
  addSleepButton: {
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    height: 50,
  },
  addSleepButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  chartContainer: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sleepScrollContainer: {
    marginHorizontal: 1,
    marginVertical: 10,
  },
  sleepTabContainer: {
    marginVertical: 10,
    borderRadius: 8,
    borderColor: 'black',
    //borderWidth: 2,
  },
  sleepTab: {
    backgroundColor: '#fff', // This is a placeholder color
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 10,
  },
  dateName: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  hoursText: {
    fontSize: 16,
    marginBottom: 4,
  },
  qualityCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  qualityText: {
    color: 'white',
    fontWeight: 'bold',
  },
  popupOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  image: {
    width: 300,
    height: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    marginBottom: 20,
  },
  // styles for the popup
  popup: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '90%',
  },
  popupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  popupTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  editButton: {
    fontSize: 18,
    color: '#0000ff', // Replace with your theme color
  },
  popupContent: {
    marginVertical: 20,
  },
  addSleepInputText: {
    fontSize: 18,
    margin: 10,
  },
  textInput: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 5,
  },
  sliderContainer: {
    flexDirection: 'row',
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  sliderStuff: {
    margin: 10,
    marginTop: 20,
  },
  // for pick month popup
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 70,
  },
  confirmButton: {
    borderWidth: 0.5,
    padding: 15,
    margin: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});