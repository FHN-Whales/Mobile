/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {Calendar} from 'react-native-calendars';
import rendercalendar from '../../../../../styles/HomePage/Home/ManagementFamily/HomePageWithManagement/RenderCalendar';
import { View } from 'react-native';
import useRenderCalendar from '../../../../../hook/HomePage/Home/ManagementWithFamily/HomePageWithFamily/useRenderCalendar';
const renderCalendar = () => {
  const  [selected, setSelected, handleDayPress] = useRenderCalendar();
  return (
    <View style={rendercalendar.view}>
      <Calendar
        style={rendercalendar.calendar}
        onDayPress={handleDayPress}
        markedDates={{
          [selected]: {selected: true, disableTouchEvent: true},
        }}
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
    </View>
  );
};

export default renderCalendar;
