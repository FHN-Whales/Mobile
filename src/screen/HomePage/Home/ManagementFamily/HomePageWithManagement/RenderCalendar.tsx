/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { useQuery } from '@tanstack/react-query'; // Import useQuery from react-query
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApiSearchReminder } from '../../../../../api/useApiSearchReminder';
import rendercalendar from '../../../../../styles/HomePage/Home/ManagementFamily/HomePageWithManagement/RenderCalendar';
import axios from 'axios';
import rendertreatmentremindscheduling from '../../../../../styles/HomePage/Calender/CalendarWithManagement/RenderTreatmentRemindScheduling';

interface Medication {
  medicationName: string;
  dosage: number;
}

interface Treatment {
  timeOfDay: string;
  medications: Medication[];
  treatmentTime: string;
  reminderId: string;
}

interface User {
  username: string;
}

interface TreatmentReminder {
  user: User;
  treatmentInfo: Treatment[];
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

  // Use React Query to fetch reminder data
  const { data: ReminderData, isError, refetch } = useQuery<TreatmentReminder>({
    queryKey: ['reminderData', selected], // Pass an object with queryKey property
    queryFn: async () => {
      const familyId = await AsyncStorage.getItem('familyId');
      const userId = await AsyncStorage.getItem('userId');
      console.log(selected);
      console.log(familyId);
      console.log(userId);
      const response = await axios.get(ApiSearchReminder, {
        params: {
          date: selected,
          familyId: familyId,
          userId: userId,
        },
      });
      console.log(response);
      return response.data;
    },
  });

  const handleDayPress = (day: { dateString: string }): void => {
    setSelected(day.dateString);
    setShowModal(true);
    refetch(); // Trigger data refetch when day is pressed
  };

  const handleCloseModal = (): void => {
    setShowModal(false);
  };

  // Function to handle refetching data after a delay
  const handleRefetchWithDelay = (): void => {
    setTimeout(() => {
      refetch();
    }, 200);
  };

  return (
    <View style={rendercalendar.view}>
      <Calendar
        style={rendercalendar.calendar}
        onDayPress={handleDayPress}
        markedDates={{ [selected]: { selected: true } }}
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
            <View style={{ paddingTop: 10, paddingBottom: 10 }}>
              <View style={rendercalendar.viewBorder} />
            </View>
            {isError ? (
              <Text>Error fetching data</Text>
            ) : ReminderData ? (
              <View style={rendertreatmentremindscheduling.container}>
                <View>
                  <Text>{ReminderData.user.username}</Text>
                  {ReminderData.treatmentInfo.map((treatment, index1) => (
                    <View key={index1}>
                      <Text>Time of day: {treatment.timeOfDay}</Text>
                      <Text>Treatment Time: {treatment.treatmentTime}</Text>
                      <Text>Medications:</Text>
                      {treatment.medications.map((medication, index2) => (
                        <View key={`${index1}-${index2}`}>
                          <Text>-Medication name {medication.medicationName}</Text>
                          <Text>  Quantity: {medication.dosage}</Text>
                        </View>
                      ))}
                    </View>
                  ))}
                </View>
              </View>
            ) : (
              <Text style={rendercalendar.text}>No reminders for this day.</Text>
            )}
            <TouchableOpacity
              style={rendercalendar.viewClose}
              onPress={() => {
                handleCloseModal();
                handleRefetchWithDelay(); // Call refetch with a delay after modal is closed
              }}>
              <Image source={require('../../../../../image/x.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RenderCalendar;
