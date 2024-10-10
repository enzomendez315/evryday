import React, { useState, useEffect } from 'react';
import {
  Modal, SafeAreaView, StatusBar, Text, StyleSheet, Button, TouchableWithoutFeedback,
  ScrollView, View, TouchableOpacity, TextInput, Dimensions, Image
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit';
import DatePicker from 'react-native-date-picker'
import MonthPicker from 'react-native-month-picker';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Calendar } from 'react-native-calendars';
import {
  makeSleepEntry, deleteSleepEntry,
  editSleepEntry, syncUsersMonthLog,
  getSleepEntry
} from '../../logic/sleep-api'
import { AccountContext } from '../../../App';
import {
  getFormattedDate, getActiveDate,
  getActiveDateMonth, getActiveDateYear,
  setActiveDate, convertDatetoString, convertStringToDate
} from '../../logic/date-time';
// for selecting dates at the top of the screen
import { PickDatePopup } from '../../components/datePicker';

// for adding sleep slider
import { useSharedValue } from 'react-native-reanimated';
import { Slider } from 'react-native-awesome-slider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { COLORS } from '../../theme/theme';

// sleep data comes in the form { day: string, hours: int, quality: int }
// only in this format for sleep tab UI component, received from sync functions
// the values are saved in the sleepData state as an array of objects

// these are defined once at the beginning of opening the page in useEfect
let userID;

// chart that renders sleepData on UI
const MyLineChart = ({ sleepArray, useHours }) => {
  let largestDay = Math.max(...sleepArray.map(day => parseInt(day.day.split('-')[2])));
  let daysArray = Array.from({ length: largestDay }, (_, index) => (index + 1).toString().padStart(2, '0'));
  let hoursArray = daysArray.map(day => {
    const sleepEntry = sleepArray.find(entry => entry.day.split('-')[2] === day);
    return sleepEntry ? sleepEntry.hours : 0;
  });
  let qualityArray = daysArray.map(day => {
    const sleepEntry = sleepArray.find(entry => entry.day.split('-')[2] === day);
    return sleepEntry ? sleepEntry.quality : 0;
  });

  return (
    <>
      <LineChart
        data={{
          labels: daysArray,
          datasets: [
            {
              data: useHours ? hoursArray : qualityArray,
            },
            // hack so that chart starts at 0
            { data: [0, 0], color: () => 'transparent', strokeWidth: 0, withDots: false, }
          ],
          legend: useHours ? ["Hours of Sleep"] : ["Quality of Sleep"]
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisInterval={1}
        chartConfig={{
          fromZero: true,
          withHorizontalLabels: true,
          backgroundColor: "#00a8e2",
          backgroundGradientFrom: "#00c6ff",
          backgroundGradientTo: "#0072ff",
          decimalPlaces: 1, // optional, defaults to 2dp
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

// called by add sleep button and when a sleep tab is pressed
// if a sleep tab is pressed, the user can edit the sleep data
// TODO: filter the input from the user to make sure it is valid
// (e.g. dates are recent and hours is a number)
const AddSleepPopup = ({ isAddPopupVisible, setIsAddPopupVisible, setSleepData, monthValue }) => {
  // these are not hooks because useState re-renders the page
  let hours = 0;
  let tempStartDate = convertStringToDate(getActiveDate());
  // flags for when user makes an oopsie

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

              <Text style={styles.popupTitle}>New Sleep Session</Text>

              <TouchableOpacity onPress={() => { /* Handle edit */ }}>
                <Text style={styles.editButton}>Edit</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.popupContent}>
              {/* <View style={{ borderWidth: 1, borderColor: 'black', margin: 10 }}>
                <Text>Wakeup Date</Text>
                <DatePicker mode='date' date={new Date()}
                  onDateChange={(newDate) => {
                    tempStartDate = newDate;
                  }} />
              </View> */}

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
                  await makeSleepEntry(userID, tempStartDate, hours, progress.value);
                  setIsAddPopupVisible(false);
                  syncUsersMonthLog(userID, tempStartDate.getMonth() + 1, getActiveDateYear(), setSleepData);
                }
                }>
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
                syncUsersMonthLog(userID, getActiveDateMonth(), getActiveDateYear(), setSleepData);
              }}>
                <Text style={{ color: 'red' }}>Delete</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.popupContent}>
              <View style={{ borderWidth: 1, borderColor: 'black', margin: 10 }}>
                {isEditPopupVisible ? <Text>Wakeup Date: {getFormattedDate(wakeDate.toISOString().substring(0, 10))}</Text> : null}
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
                onPress={async () => {
                  await editSleepEntry(userID, wakeDate.toISOString().substring(0, 10), hours, progress2.value);
                  setIsEditPopupVisible(false);
                  syncUsersMonthLog(userID, getActiveDateMonth(), getActiveDateYear(), setSleepData);
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
  tempDate, setTempDate, setMonthValue, setIsLoading, setShowChart }) => {
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
              setShowChart(true);
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
const SleepTab = ({ dayReport, setIsEditPopupVisible, setEditPopupData }) => {
  return (
    <TouchableOpacity onPress={() => {
      setEditPopupData(dayReport);
      setIsEditPopupVisible(true);
    }}>
      <View style={styles.sleepTab}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.dateName}>{`${monthNames[dayReport.day.split('-')[1] - 1]} ${dayReport.day.split('-')[2]}`}</Text>
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
            <Text style={styles.qualityLabel}>Quality</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

// Main Screen
const SleepScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dateHook, setDateHook] = useState(getActiveDate());
  // for adding and editing sleep data
  const [isAddPopupVisible, setIsAddPopupVisible] = useState(false);
  const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);
  const [isPickMonthPopupVisible, setIsPickMonthPopupVisible] = useState(false);
  // for the date picker
  const [isPickDatePopupVisible, setIsPickDatePopupVisible] = useState(false);
  const [calendarDate, setCalendarDate] = useState(getActiveDate());
  // for the month picker
  const [tempDate, setTempDate] = useState(getActiveDate()); // hook used in modal
  const [monthValue, setMonthValue] = useState(getActiveDate()); // what UI sees, updated when modal is closed
  // when a sleep tab is pressed, the data is saved here
  const [editPopupData, setEditPopupData] = useState({ day: '', hours: 0, quality: 0 });
  // a list of all the sleep entries to show the user in the UI
  const [sleepData, setSleepData] = useState([]);
  // sort order of sleep entries
  const [isAscending, setIsAscending] = useState(true);
  const [showChart, setShowChart] = useState(true);
  const [useHours, setUseHours] = useState(true); // toggle between hours and quality line chart

  // gets the context created in the App.tsx file
  userID = React.useContext(AccountContext);

  useEffect(() => {
    setMonthValue(getActiveDate());
    setTempDate(getActiveDate());
    syncUsersMonthLog(userID, getActiveDateMonth(), getActiveDateYear(), setSleepData, setIsLoading);
    setDateHook(getActiveDate());
  }, []);

  // called every time the screen is opened
  useFocusEffect(
    React.useCallback(() => {
      setMonthValue(getActiveDate());
      setTempDate(getActiveDate());
      syncUsersMonthLog(userID, getActiveDateMonth(), getActiveDateYear(), setSleepData, setIsLoading);
      setDateHook(getActiveDate());
      return;
    }, [])
  );

  // sorts the sleep data based on the order of dates (either ascending or descending)
  const sortEntriesByDate = () => {
    const sortedData = [...sleepData].sort((a, b) => {
      const dateA = new Date(a.day);
      const dateB = new Date(b.day);
      return isAscending ? dateA - dateB : dateB - dateA;
    });
    setSleepData(sortedData);
    setIsAscending(!isAscending); // toggles the sort order after each press
  };

  let totalHours = sleepData.reduce((total, day) => total + day.hours, 0);
 
  return (
    <>
      <StatusBar barStyle='default' />
      <SafeAreaView style={styles.container}>
        <AddSleepPopup setSleepData={setSleepData} monthValue={monthValue}
          setIsAddPopupVisible={setIsAddPopupVisible} isAddPopupVisible={isAddPopupVisible} />

        <EditSleepPopup setSleepData={setSleepData} editPopupData={editPopupData} monthValue={monthValue}
          setIsEditPopupVisible={setIsEditPopupVisible} isEditPopupVisible={isEditPopupVisible} />

        <PickDatePopup isPickDatePopupVisible={isPickDatePopupVisible} calendarDate={calendarDate} setCalendarDate={setCalendarDate}
          setDateHook={setDateHook} setIsPickDatePopupVisible={setIsPickDatePopupVisible} />

        <PickMonthPopup isPickMonthPopupVisible={isPickMonthPopupVisible} setSleepData={setSleepData}
          tempDate={tempDate} setTempDate={setTempDate} setMonthValue={setMonthValue} setIsLoading={setIsLoading}
          setIsPickMonthPopupVisible={setIsPickMonthPopupVisible} setShowChart={setShowChart} />

        <View style={styles.dateHeaderContainer}>
          <Button title="<"
            onPress={() => {
              setActiveDate(-1);
              setDateHook(getActiveDate());
            }} />

          <TouchableOpacity style={styles.dateTitleContainer} onPress={() => setIsPickDatePopupVisible(true)}>
            <Text style={styles.dateTitle}>{getFormattedDate(dateHook)}</Text>
            <FeatherIcon name="calendar" size={24} color="black" />
          </TouchableOpacity>

          <Button title=">"
            onPress={() => {
              setActiveDate(1);
              setDateHook(getActiveDate());
            }} />
        </View>

        <ScrollView>
          <Text style={styles.title}>Sleep</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingBottom: 10 }}>
            <View style={styles.monthButton}>
              <TouchableOpacity onPress={() => setIsPickMonthPopupVisible(true)}>
                <Text style={styles.monthText}>{getMonthYearFormat(monthValue)}</Text>
                <Text>Select Month</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.addSleepButton}
              onPress={() => setIsAddPopupVisible(true)}>
              <Text style={styles.addSleepButtonText}>Add Sleep</Text>
            </TouchableOpacity>
          </View>

          {sleepData.length == 0 && !isLoading ? null :
            <TouchableOpacity
              style={styles.showChartButton}
              onPress={() => setShowChart(!showChart)}>
              <Text style={styles.addSleepButtonText}>{showChart ? 'Hide Chart' : 'Show Chart'}</Text>
            </TouchableOpacity>
          }

          {showChart && sleepData.length > 0 &&
            <TouchableOpacity
              style={styles.showChartButton}
              onPress={() => setUseHours(!useHours)}>
              <Text style={styles.addSleepButtonText}>{useHours ? 'Hours of Sleep' : 'Quality of Sleep'}</Text>
            </TouchableOpacity>}

          {/* Chart, this nested if loop sucks*/}
          {showChart ? !isLoading ? sleepData.length > 0 ?
            <View style={styles.chartContainer}>
              <MyLineChart sleepArray={sleepData} useHours={useHours} />
            </View>
            : <View>
              <Image style={styles.image} source={require('../../images/sleepingSloth.png')} />
              <Text style={{ textAlign: 'center' }}>No sleep data found</Text>
            </View>
            : <Text>Loading...</Text> // if showChart is true but still loading
            : null // if showChart is false, not very often
          }


          {/* Sleep data rendered in tabs */}

          {sleepData.length > 0 &&
            <TouchableOpacity
              style={styles.showChartButton}
              onPress={sortEntriesByDate}>
              <Text style={styles.addSleepButtonText}>
                {isAscending ? 'Show Descending' : 'Show Ascending'}</Text>
            </TouchableOpacity>
          }

          {totalHours !== 0 ? <Text style={styles.heading3Text}>
            Average Hours: {(totalHours / sleepData.length).toFixed(2)}
          </Text> : null}

          <ScrollView style={styles.sleepScrollContainer}>
            {sleepData.map((day, index) => (
              <View style={styles.sleepTabContainer} key={index}>
                <SleepTab dayReport={day} setEditPopupData={setEditPopupData}
                  setIsEditPopupVisible={setIsEditPopupVisible} />
              </View>
            ))}
          </ScrollView>

        </ScrollView>
      </SafeAreaView >
    </>
  );
};

export default SleepScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.backgroundBlue,
  },
  dateHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: COLORS.backgroundBlue2,
  },
  monthButton: {
    backgroundColor: COLORS.primaryPurpleHex,
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
  },
  dateTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateTitle: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
    paddingHorizontal: 20,

  },
  monthText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'left',
    fontWeight: 'bold',

  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'left'
  },

  heading3Text: {
    fontSize: 20,
    color: COLORS.darkGray,
    textAlign: 'left',
    fontWeight: 'bold',

  },

  addSleepButton: {
    backgroundColor: COLORS.primaryPurpleHex,
    borderRadius: 15,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    height: 50,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
  },
  addSleepButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  showChartButton: {
    backgroundColor: COLORS.primaryPurpleHex,
    borderRadius: 15,
    padding: 10,
    justifyContent: 'center',
    marginVertical: 5,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
  },
  chartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  sleepScrollContainer: {
    marginVertical: 10,
  },

  sleepTabContainer: {
    marginVertical: 10,
    borderRadius: 15,
    borderColor: 'black',
    //borderWidth: 2,
  },
  sleepTab: {
    backgroundColor: COLORS.secondaryPurpleHex, // This is a placeholder color
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
  },
  dateName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.whiteHex,
    marginLeft: 20,
    marginTop: 5,
  },

  hoursText: {
    fontSize: 16,
    color: COLORS.lightPurple,
    fontWeight: 'bold',
    marginLeft: 20,
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

  qualityLabel: {
    fontSize: 16,
    color: COLORS.lightPurple,

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
    color: COLORS.primaryBlueHex, // Replace with your theme color
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
    backgroundColor: COLORS.whiteHex,
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