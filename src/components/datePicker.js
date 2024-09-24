import React, { useState, useEffect } from 'react';
import {
    Modal, Text, StyleSheet, Button, TouchableWithoutFeedback, 
    ScrollView, View, TouchableOpacity, TextInput, Dimensions, Image
  } from 'react-native';
import { Calendar } from 'react-native-calendars';
import {
    getFormattedDate, getActiveDate,
    getActiveDateMonth, getActiveDateYear,
    setActiveDate, convertDatetoString
  } from '../logic/date-time';
import { COLORS } from '../theme/theme';

// used for selecting dates at the top of the screen
export const PickDatePopup = ({ isPickDatePopupVisible, setIsPickDatePopupVisible,
    calendarDate, setCalendarDate, setDateHook, setIsLoading }) => {
    
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
                    const dateString = convertDatetoString(selectedDateObj);
                    setDateHook(dateString);
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
                    // TODO: Find out why getActiveDate() doesn't return todays date
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
      backgroundColor: '#DADADA',
    },
    dateHeaderContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    dateTitleContainer: {
      flex: 1,
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