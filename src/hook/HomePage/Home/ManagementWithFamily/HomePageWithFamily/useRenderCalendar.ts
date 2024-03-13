import React, { useState } from 'react';
import { LocaleConfig } from 'react-native-calendars';
import { useQuery } from '@tanstack/react-query'; // Import useQuery from react-query
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ApiSearchReminder } from '../../../../../api/useApiSearchReminder';
interface SearchReminder {
  map(arg0: (item: any, index: any) => React.JSX.Element): React.ReactNode;
  length: number;
  dataTreatmentSearch: any[];
  user: {
    _id: string;
    username: string;
  };
  treatmentInfo: {
    _id: string;
    timeOfDay: string;
    treatmentTime: string;
    medications: {
      medicationName: string;
      dosage: number | null; // Adjusted type for dosage
      _id: string;
    }[];
    reminderId: string;
    __v: number;
  }[];
}
const useRenderCalendar = (): [string, React.Dispatch<React.SetStateAction<string>>, (day: { dateString: string }) => void] => {
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
  const { data: SearchReminder, isError, refetch } = useQuery<SearchReminder>({
    queryKey: ['searchReminder', selected], // Pass an object with queryKey property
    queryFn: async () => {
      try {
        const familyId = await AsyncStorage.getItem('familyId');
        const userId = await AsyncStorage.getItem('userId');
        const date = selected;
        const response = await axios.get<SearchReminder[]>(
          `http://3.25.181.251:8000/Reminder/getRemindersTreatmentRemindersByYearMonthDay/${date}/${familyId}/${userId}`,
          {
            headers: {
              Accept: 'application/json',
            },
          },
        );

        if (response.status === 200) {
          const outData = response.data.dataTreatmentSearch;
          console.log('====================================');
          console.log(response.data.dataTreatmentSearch);
          console.log('====================================');
          return outData;
        } else {
          console.error('Error fetching data: ');
          return [];
        }
      } catch (error) {
        // console.error('Error fetching data: ', error);
        // Trả về một mảng rỗng nếu có lỗi xảy ra
        return [];
      }
    },
  });

  const handleCloseModal = (): void => {
    setShowModal(false);
  };

  // Function to handle refetching data after a delay
  const handleRefetchWithDelay = (): void => {
    setTimeout(() => {
      refetch();
    }, 200);
  };

  const handleDayPress = (day: { dateString: string }): void => {
    setSelected(day.dateString);
    setShowModal(true);
    refetch(); // Trigger data refetch when day is pressed
  };

  return {selected, setSelected, handleDayPress,showModal,handleCloseModal,handleRefetchWithDelay,SearchReminder,isError,refetch};
};

export default useRenderCalendar;
