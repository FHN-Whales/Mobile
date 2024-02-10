import React, { useState } from 'react';
import { LocaleConfig } from 'react-native-calendars';

const useRenderCalendar = (): [string, React.Dispatch<React.SetStateAction<string>>, (day: { dateString: string }) => void] => {
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

  const handleDayPress = (day: { dateString: string }) => {
    setSelected(day.dateString);
  };

  return [selected, setSelected, handleDayPress];
};

export default useRenderCalendar;
