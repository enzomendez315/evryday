import React from 'react';
import { SafeAreaView, StatusBar, Text, StyleSheet, ScrollView, View } from 'react-native';

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

// Individual day sleep report tab component
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

const SleepScreen = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={styles.title}>Sleep History</Text>

        <Text style={styles.monthText}>March 2024</Text>

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
});