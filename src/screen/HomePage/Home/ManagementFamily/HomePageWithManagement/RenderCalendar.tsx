/* eslint-disable react-native/no-inline-styles */

import React, { useState, useEffect } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import rendercalendar from '../../../../../styles/HomePage/Home/ManagementFamily/HomePageWithManagement/RenderCalendar';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
const RenderCalendar = () => {
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

  const [selected, setSelected] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [reminderData, setReminderData] = useState<any[]>([]);

  useEffect(() => {
    const updateReminderData = () => {
      const updatedData = [
        {
          date: '2024-02-29',
          period: 'Sáng',
          medicine: 'Cetirizine, Hetamine',
          quantity: '3 viên/ 1 lần',
          time: '7:00 AM',
          note:
            'Nhớ phải ăn nó trước khi uống .',
        },
        {
          date: '2024-03-01',
          period: 'Trưa',
          medicine: 'Cetirizine, Hetamine',
          quantity: '3 viên/ 1 lần',
          time: '12:00 PM',
          note:
            'Nhớ phải ăn nó trước khi uống .',
        },
        {
          date: '2024-03-02',
          period: 'Tối',
          medicine: 'Cetirizine, Hetamine',
          quantity: '3 viên/ 1 lần',
          time: '6:00 PM',
          note:
            'Nhớ phải ăn nó trước khi uống',
        },
      ];
      setReminderData(updatedData);
    };

    updateReminderData();
  }, []);

  const handleDayPress = (day: { dateString: string }) => {
    setSelected(day.dateString);
    const hasReminder = reminderData.some((data) => data.date === day.dateString);

    if (hasReminder) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
      <Modal style={rendercalendar.modal} visible={showModal} animationType="slide"
        transparent={true} onRequestClose={handleCloseModal}>
        <View style={rendercalendar.modal}>
          <View style={rendercalendar.modalView}>
            <View style={rendercalendar.viewIconFuntion}>
              <TouchableOpacity>
                  <Image source={require('../../../../../image/icomoon-free_notification.png')} />
              </TouchableOpacity>
              <View style={rendercalendar.viewFunction}>
                <TouchableOpacity>
                  <Image source={require('../../../../../image/tdesign_edit-2.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('../../../../../image/streamline_recycle-bin-2.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ paddingTop:10, paddingBottom:10 }}>
              <View style={rendercalendar.viewBorder} />
            </View>
          {reminderData.map((data) =>
            data.date === selected ? (
              <View style={rendercalendar.renderViewItem}  key={data.date}>
                <View style={rendercalendar.viewItem}>
                  <Text style={rendercalendar.textDate}>Date:</Text>
                  <Text style={rendercalendar.text}>{data.date}</Text>
                </View>
                <View style={rendercalendar.viewItem}>
                  <Text style={rendercalendar.textDate}>Period: </Text>
                  <Text style={rendercalendar.text}>{data.period}</Text>
                </View>
                <View style={rendercalendar.viewItem} >
                  <Text style={rendercalendar.textDate}>Period:</Text>
                  <Text style={rendercalendar.text}>{data.medicine}</Text>
                </View>
                <View style={rendercalendar.viewItem}>
                  <Text style={rendercalendar.textDate}>Medicine:</Text>
                  <Text style={rendercalendar.text}>{data.medicine}</Text>
                </View>
                <View style={rendercalendar.viewItem}>
                  <Text style={rendercalendar.textDate}>Quantity:</Text>
                  <Text style={rendercalendar.text}>{data.quantity}</Text>
                </View>
                <View style={rendercalendar.viewItem}>
                  <Text style={rendercalendar.textDate}>Time:</Text>
                  <Text style={rendercalendar.text}>{data.time}</Text>
                </View>
                <View style={rendercalendar.viewItem}>
                  <Text style={rendercalendar.textDate}>Reminder:</Text>
                  <Text style={rendercalendar.text}>{data.note}</Text>
                </View>
              </View>
            ) : null
          )}
          <TouchableOpacity style={rendercalendar.viewClose} onPress={handleCloseModal}>
              <Image source={require('../../../../../image/x.png')} />
          </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RenderCalendar;
