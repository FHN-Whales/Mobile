import React, { useState } from 'react';
import { LocaleConfig } from 'react-native-calendars';
import { useQuery } from '@tanstack/react-query'; // Import useQuery from react-query
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
interface SearchReminder {
  foundTreatmentReminders: any[]
  foundHealthCheckReminders:any[]
  dataTreatmentSearch: {
    foundTreatmentReminders: {
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
          dosage: number;
          _id: string;
        }[];
        reminderId: string;
        __v: number;
      }[];
    }[];
    foundHealthCheckReminders: {
      user: {
        _id: string;
        username: string;
      };
      healthCheckInfo: {
        _id: string;
        reExaminationDate: string;
        reExaminationTime: string;
        reExaminationLocation: string;
        nameHospital: string;
        userNote: string;
        __v: number;
      };
    }[];
  };
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
          `http://www.whales-fhn.dns-dynamic.net:8000/Reminder/getRemindersByYearMonthDay/${date}/${familyId}/${userId}`,
          {
            headers: {
              Accept: 'application/json',
            },
          },
        );
        if (response.status === 200) {
          const outDataTreatment = response.data.dataTreatmentSearch.foundTreatmentReminders;
          const outDataHealthCheck = response.data.dataTreatmentSearch.foundHealthCheckReminders;
          console.log(outDataTreatment);
          const outData = outDataTreatment.concat(outDataHealthCheck);
          console.log('Merged Data:', outData);
          return outData;
        } else {
          console.error('Error fetching data: ');
          return [];
        }
      } catch (error) {
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
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('en-US', options);
  };
  return {selected, setSelected, handleDayPress,showModal,handleCloseModal,handleRefetchWithDelay,SearchReminder,isError,refetch ,formatDate};
};

export default useRenderCalendar;
