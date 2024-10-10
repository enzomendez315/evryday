import React, { useState, useEffect } from 'react';
import {
  Modal, Text, StyleSheet, Button, TouchableWithoutFeedback,
  ScrollView, View, TouchableOpacity, TextInput, Dimensions, Image
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import {
  getFormattedDate, getActiveDate, getActiveDateMonth, getActiveDateYear,
  setActiveDate, convertDatetoString, getDaysBetween
} from '../logic/date-time';

import { COLORS } from '../theme/theme';

// used for selecting dates at the top of the screen
export const PickDatePopup = ({ isPickDatePopupVisible, setIsPickDatePopupVisible,
  calendarDate, setCalendarDate, setDateHook }) => {

  const [selectedDate, setSelectedDate] = useState(calendarDate || new Date());
  const todayDate = getActiveDate();

  return (
    <Modal
      transparent
      animationType="fade"
      visible={isPickDatePopupVisible}
      onRequestClose={() => {
        setIsPickDatePopupVisible(false);
      }}>
      <TouchableWithoutFeedback onPress={() => setIsPickDatePopupVisible(false)}>
        <View style={styles.contentContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.content}>
              <Calendar
                current={selectedDate}
                onDayPress={(day) => {
                  const selectedDate = day.dateString;
                  setSelectedDate(selectedDate);
                  const selectedDateObj = new Date(day.timestamp);
                  setCalendarDate(selectedDateObj);

                  // Get the number of days between the current and new dates
                  const newDate = convertDatetoString(selectedDateObj);
                  const daysBetween = getDaysBetween(getActiveDate(), newDate);

                  // Adjust the active date based on offset
                  setActiveDate(daysBetween);
                  setDateHook(getActiveDate());

                  // Close popup
                  setIsPickDatePopupVisible(false);
                }}
                markedDates={{
                  [selectedDate]: {
                    selected: true,
                    selectedColor: 'blue',
                  },
                  [todayDate]: {
                    selected: true,
                    selectedColor: 'orange',
                  }
                }}
                theme={{
                  arrowColor: 'black',
                }}
              />
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={() => {
                  setSelectedDate(todayDate);
                  const selectedDateObj = new Date(todayDate.timestamp);
                  setCalendarDate(selectedDateObj);
                  setDateHook(todayDate);
                  setIsPickDatePopupVisible(false);
                }}>
                <Text>Today</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundBlue,
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    backgroundColor: COLORS.backgroundBlue,
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