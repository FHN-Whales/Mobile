import {useQuery} from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
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
  const {data, isLoading, isError} = useQuery<TreatmentReminder[]>({
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
          const outData =  response.data.dataTreatment;
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
  return [data,isLoading,isError];
};
export default useRenderTreatmentRemindScheduling;
