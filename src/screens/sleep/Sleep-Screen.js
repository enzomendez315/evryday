import React, { useState } from 'react';
import { Modal, SafeAreaView, StatusBar, Text, StyleSheet, ScrollView, View, TouchableOpacity, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { getAllSleepEntries } from '../../logic/sleep-api'

const sleepData = [
  { day: 'March 1, 2024', hours: 7.5, quality: 'Good' },
  { day: 'March 2, 2024', hours: 6.5, quality: 'Poor' },
  { day: 'March 3, 2024', hours: 8.0, quality: 'Great' },
  { day: 'March 4, 2024', hours: 7.0, quality: 'Good' },
  { day: 'March 5, 2024', hours: 7.5, quality: 'Good' },
  { day: 'March 6, 2024', hours: 6.5, quality: 'Poor' },
  { day: 'March 7, 2024', hours: 8.0, quality: 'Great' },
  { day: 'March 8, 2024', hours: 7.0, quality: 'Good' },
  { day: 'March 9, 2024', hours: 7.5, quality: 'Good' },
  { day: 'March 10, 2024', hours: 6.5, quality: 'Poor' },
];

const SleepScreen = (props) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const AddSleepPopup = () => {
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
                <TextInput placeholder="Enter hours" />
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.addSleepInputText}>Quality: </Text>
                <RNPickerSelect
                  style={pickerSelectStyles}
                  placeholder={{ label: "Select sleep quality", value: null }}
                  onValueChange={(value) => console.log(value)}
                  items={[
                    { label: "Poor", value: "poor" },
                    { label: "Good", value: "good" },
                    { label: "Great", value: "great" },
                  ]}
                />
              </View>

              <TouchableOpacity
                style={[styles.addSleepButton, { marginTop: 20 }]}
                onPress={() => setIsPopupVisible(false)}>
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
          backgroundColor: dayReport.quality === 'Poor' ? 'red'
            : dayReport.quality === 'Good' ? 'blue' : 'green'
        }]}>
          <Text style={styles.qualityText}>{dayReport.quality}</Text>
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
  sleepScrollContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  sleepTabContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 2,
  },
  sleepTab: {
    backgroundColor: 'lightblue', // This is a placeholder color
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