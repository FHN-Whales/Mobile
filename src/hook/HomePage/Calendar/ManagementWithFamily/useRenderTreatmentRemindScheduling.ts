import { useQuery } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../type/type';

interface TreatmentReminder {
  dataTreatment: any[];
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

const useRenderTreatmentRemindScheduling = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const shouldRefetch = useRef<boolean>(false);

  const { data, isLoading, isError, refetch } = useQuery<TreatmentReminder[]>({
    queryKey: ['treatmentReminders'],
    queryFn: async () => {
      try {
        const familyId = await AsyncStorage.getItem('familyId');
        const userId = await AsyncStorage.getItem('userId');

        const response = await axios.get<TreatmentReminder[]>(
          `http://3.25.181.251:8000/Reminder/getTreatmentRemindersByUserId/${familyId}/${userId}`,
          {
            headers: {
              Accept: 'application/json',
            },
          },
        );

        if (response.status === 200) {
          const outData = response.data.dataTreatment;
          console.log('====================================');
          console.log(response.data.dataTreatment);
          console.log('====================================');
          return outData;
        } else if (response.status === 404) {
          throw new Error('Data not found');
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
        throw new Error('Failed to fetch data');
      }
    },
  });
  const useNavigationEditTreament = () => {
    navigation.navigate('EditTreamentReminderScreen');
  };

  useEffect(() => {
    // Nếu dữ liệu đã được nhận, không có lỗi và không có refetch nào đang chờ, thì thực hiện refetch sau 200ms
    if (data && !isError && !shouldRefetch.current) {
      const timer = setTimeout(() => {
        refetch();
      }, 200);

      // Clear the timeout if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [data, isError, refetch]);

  return [data, isLoading, isError ,useNavigationEditTreament];
};

export default useRenderTreatmentRemindScheduling;
