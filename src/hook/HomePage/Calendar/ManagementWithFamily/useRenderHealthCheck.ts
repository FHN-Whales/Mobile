import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';
interface HealthCheck  {
    dataHealthCheck: any []
    user: {
      _id: string;
      username: string;
    };
    reminders: {
      _id: string;
      reExaminationDate: string;
      reExaminationTime: string;
      reExaminationLocation:string;
      nameHospital: string;
      userNote:string;
      __v: number;
    }[];
  }
const useRenderHealthCheck = () =>{
    const shouldRefetch = useRef<boolean>(false);
    const { data, isLoading, isError, refetch } = useQuery<HealthCheck[]>({
      queryKey: ['healthcheckReminders'],
      queryFn: async () => {
        try {
          const familyId = await AsyncStorage.getItem('familyId');
          const userId = await AsyncStorage.getItem('userId');
          const response = await axios.get<HealthCheck[]>(
            `http://3.25.181.251:8000/Reminder/getHealthCheckRemindersByUserId/${familyId}/${userId}`,
            {
              headers: {
                Accept: 'application/json',
              },
            },
          );
          if (response.status === 200) {
            const outData = response.data.dataHealthCheck;
            console.log('====================================');
            console.log(response.data.dataHealthCheck);
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
    const formatDate = (dateString: string | number | Date) => {
      const date = new Date(dateString);
      // Options for formatting the date
      const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
      // Format the date according to options
      return date.toLocaleDateString('en-US', options);
    };
    const [showLoader, setShowLoader] = useState(true);
    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 200);
      return () => clearTimeout(timeout);
    }, []);

    return {
        shouldRefetch,
        data,
        isLoading,
        isError,
        refetch,
        formatDate,
        showLoader,
        setShowLoader,
    };
};
export default useRenderHealthCheck;
