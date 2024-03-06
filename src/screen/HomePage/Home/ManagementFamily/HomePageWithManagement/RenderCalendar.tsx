/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ApiSearchReminder} from '../../../../../api/useApiSearchReminder';
import rendercalendar from '../../../../../styles/HomePage/Home/ManagementFamily/HomePageWithManagement/RenderCalendar';
interface ReminderData {
  startDate: string;
  endDate: string;
  frequency: string;
  timeOfDay: string[];
  treatmentTime: string[];
  medications: Medication[];
}
interface Medication {
  medicationName: string;
  dosage: string;
}
const RenderCalendar = () => {
  // Configuring locale
  LocaleConfig.locales.fr = {
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    today: 'Today',
  };

  LocaleConfig.defaultLocale = 'fr';

  // States
  const [selected, setSelected] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [reminderData, setReminderData] = useState<ReminderData | null>(null);

  // Function to fetch reminder data from API
  const fetchReminderData = async (): Promise<void> => {
    const storedUserId = await AsyncStorage.getItem('userId');
    console.log(storedUserId);
    try {
      const response = await axios.get(ApiSearchReminder, {
        params: {
          date: selected,
          userId: storedUserId,
        },
      });
      console.log(response);
      setReminderData(response.data);
    } catch (error) {
      console.error('Failed to fetch reminder data:', error);
    }
  };
  useEffect(() => {
    if (selected) {
      fetchReminderData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);
  const handleDayPress = (day: {dateString: string}): void => {
    setSelected(day.dateString);
    setShowModal(true);
  };

  const handleCloseModal = (): void => {
    setShowModal(false);
  };
  return (
    <View style={rendercalendar.view}>
      <Calendar
        style={rendercalendar.calendar}
        onDayPress={handleDayPress}
        markedDates={{[selected]: {selected: true}}}
        theme={{
          backgroundColor: '#F9FAFB',
          calendarBackground: '#F9FAFB',
          textSectionTitleColor: '#111928',
          selectedDayBackgroundColor: '#87CEFA',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#87CEFA',
          dayTextColor: '#6B7280',
        }}
      />
      <Modal
        style={rendercalendar.modal}
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}>
        <View style={rendercalendar.modal}>
            <View style={rendercalendar.modalView}>
              <View style={rendercalendar.viewIconFuntion}>
                <TouchableOpacity>
                  <Image
                    source={require('../../../../../image/icomoon-free_notification.png')}
                  />
                </TouchableOpacity>
                <View style={rendercalendar.viewFunction}>
                  <TouchableOpacity>
                    <Image
                      source={require('../../../../../image/tdesign_edit-2.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../../../../../image/streamline_recycle-bin-2.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{paddingTop: 10, paddingBottom: 10}}>
                <View style={rendercalendar.viewBorder} />
              </View>
              {reminderData ? (
                <View style={rendercalendar.renderViewItem}>
                  <View style={rendercalendar.viewItem}>
                    <Text style={rendercalendar.textDate}>
                      Start Date: {reminderData.startDate}
                    </Text>
                    <Text style={rendercalendar.text}>
                       {reminderData.startDate}
                    </Text>
                  </View>
                  <View style={rendercalendar.viewItem}>
                    <Text style={rendercalendar.textDate}>
                      End Date:
                    </Text>
                    <Text style={rendercalendar.text}>
                       {reminderData.endDate}
                    </Text>
                  </View>
                  <View style={rendercalendar.viewItem}>
                    <Text style={rendercalendar.textDate}>
                    Frequency:
                    </Text>
                    <Text style={rendercalendar.text}>
                       {reminderData.frequency}
                    </Text>
                  </View>
                  <Text style={{fontWeight: 'bold'}}>Times of Day:</Text>
                  <View>
                    {reminderData.timeOfDay.map((time, index) => (
                      <Text key={index}>{time}</Text>
                    ))}
                  </View>
                  <Text style={{fontWeight: 'bold'}}>Treatment Time:</Text>
                  <View>
                    {reminderData.treatmentTime.map((time, index) => (
                      <Text key={index}>{time}</Text>
                    ))}
                  </View>
                  {reminderData.medications.map((medication, index) => (
                    <View key={index} style={{marginVertical: 5}}>
                      <Text>Medication Name: {medication.medicationName}</Text>
                      <Text>Dosage: {medication.dosage}</Text>
                    </View>
                  ))}
                </View>
              ) : (
                <Text style={rendercalendar.text}>No reminders for this day.</Text>
              )}
              <TouchableOpacity
                style={rendercalendar.viewClose}
                onPress={handleCloseModal}>
                <Image source={require('../../../../../image/x.png')} />
              </TouchableOpacity>
            </View>
          </View>
      </Modal>
    </View>
  );
};
export default RenderCalendar;
