import React, { useState, useEffect } from 'react';
import { Modal, SafeAreaView, StatusBar, Text, StyleSheet, ScrollView, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { LineChart } from 'react-native-chart-kit';
import { makeSleepEntry, getSleepEntry, deleteSleepEntry, getAllSleepEntries } from '../../logic/sleep-api'
import { currentUserDetails } from '../../logic/account';

// sleep data comes in the form { day: string, hours: int, quality: int }
// only in this format for sleep tab UI component
// put in this form by getUsersLog after getting data from datastore
// the values are saved in the sleepData state

let userID;
let date;

// gets the user's id and associated sleep log
// called in useEffect when screen is loaded
// called when data is added/removed to update UI
async function getUsersLog(setSleepData) {
  let tempSleepData = [];
  console.debug("Getting user's sleep log");
  await currentUserDetails().then(async (user) => {
    userID = user;
    console.log(`userid: ${userID}`)
    date = new Date(Date.now()).toISOString().substring(0, 10);
    await getAllSleepEntries(userID, date).then(async (data) => {
      if (data === null) {
        console.log(`No Sleep Log found for userId: ${userID} date: ${date}`);
        setSleepData([]);
        return;
      }
      data.forEach(element => {
        tempSleepData.push({ day: element.date, hours: element.hoursSlept, quality: element.sleepQuality });
      });
      setSleepData(tempSleepData);
    });
  });
}

const MyLineChart = () => {
  return (
    <>
      <LineChart
        data={{
          labels: sleepData.map(day => day.day.split(' ')[1].replace(',', '')),
          datasets: [
            {
              data: sleepData.map(day => day.hours),
              color: (opacity = 1) => `rgba(234, 255, 244, ${opacity})`, // optional
              //strokeWidth: 2 // optional
            }
          ],
          legend: ["Hours Asleep"] // optional
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisInterval={1}
        chartConfig={{
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

const SleepScreen = (props) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [sleepData, setSleepData] = useState([]);

  useEffect(() => {
    getUsersLog(setSleepData);
  }, []);

  const AddSleepPopup = () => {
    let hours = 0;
    let quality = 0;
    return (
      <Modal
        visible={isPopupVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsPopupVisible(!isPopupVisible)}
      >
        <View style={styles.popupOverlay}>
          <View style={styles.popup}>
            <View style={styles.popupHeader}>
              <TouchableOpacity onPress={() => setIsPopupVisible(false)}>
                <Text style={[styles.closeButton, { alignSelf: 'flex-start', fontSize: 24 }]}>x</Text>
              </TouchableOpacity>

              <Text style={styles.popupTitle}>New Sleep Data</Text>

              <TouchableOpacity onPress={() => { /* Handle edit */ }}>
                <Text style={styles.editButton}>Edit</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.popupContent}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.addSleepInputText}>Hours Slept: </Text>
                <TextInput placeholder="Enter hours" onChangeText={newText => hours = parseInt(newText)} />
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.addSleepInputText}>Quality: </Text>
                <RNPickerSelect
                  style={pickerSelectStyles}
                  placeholder={{ label: "Select sleep quality", value: null }}
                  onValueChange={(value) => quality = value}
                  items={[
                    { label: "Poor", value: 1 },
                    { label: "Good", value: 2 },
                    { label: "Great", value: 3 },
                  ]}
                />
              </View>

              <TouchableOpacity
                style={[styles.addSleepButton, { marginTop: 20 }]}
                onPress={() => {
                  makeSleepEntry(userID, date, hours, quality);
                  setIsPopupVisible(false);
                  getUsersLog(setSleepData);
                }}>
                <Text style={styles.addSleepButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>
    );
  }

  const SleepTab = ({ dayReport }) => (
    <View style={styles.sleepTab}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={styles.dateName}>{dayReport.day}</Text>
          <Text style={styles.hoursText}>{`Hours of Sleep: ${dayReport.hours}`}</Text>
        </View>
        <View style={[styles.qualityCircle,
        {
          backgroundColor: dayReport.quality === 1 ? 'red'
            : dayReport.quality === 2 ? 'blue' : 'green'
        }]}>
          {<Text style={styles.qualityText}>{dayReport.quality}</Text>}
        </View>
      </View>
    </View>
  )

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <AddSleepPopup />
        <Text style={styles.title}>Sleep History</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
          <Text style={styles.monthText}>March 2024</Text>
          <TouchableOpacity
            style={styles.addSleepButton}
            onPress={() => setIsPopupVisible(true)}>
            <Text style={styles.addSleepButtonText}>+ Add Sleep</Text>
          </TouchableOpacity>
        </View>


        <View>
          <TouchableOpacity
            style={styles.addSleepButton}
            onPress={async () => {
              await makeSleepEntry(userID, date, 7, 1);
              getUsersLog(setSleepData);
            }}>
            <Text style={styles.addSleepButtonText}>Add sleep data to datastore</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addSleepButton}
            onPress={async () => {
              await deleteSleepEntry(userID, date);
              getUsersLog(setSleepData);
            }}>
            <Text style={styles.addSleepButtonText}>remove data from datastore</Text>
          </TouchableOpacity>
        </View>

        {/* Chart */}
        {/*
        <View style={styles.chartContainer}>
          <MyLineChart />
        </View>
        */}

        {/* Sleep data */}
        {sleepData.length > 0 ? <Text>Hi there</Text> : <Text>I am deeply troubled by the lack of sleep data</Text>}

        <ScrollView style={styles.sleepScrollContainer}>
          {sleepData.map((day, index) => (
            <View style={styles.sleepTabContainer} key={index}>
              <SleepTab dayReport={day} />
            </View>
          ))}

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SleepScreen;

const styles = StyleSheet.create({
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
    backgroundColor: '#DADADA', // This is a placeholder color
    borderRadius: 8,
    padding: 16,
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
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 4,
    color: 'blue',
    paddingRight: 30 // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'blue',
    borderRadius: 8,
    color: 'blue',
    paddingRight: 30 // to ensure the text is never behind the icon
  }
});