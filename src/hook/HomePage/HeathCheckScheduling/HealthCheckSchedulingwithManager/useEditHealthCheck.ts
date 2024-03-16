import { useState, useEffect } from 'react';
import { useNavigation, NavigationProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../../type/type';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
interface HealthCheckData {
    reExaminationTime: string;
    reExaminationDate: string;
    reExaminationLocation: string;
    nameHospital: string;
    userNote: string;
  }
const useEditHealthCheck  = () =>{
    const route = useRoute();
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [healthCheck, setHealthCheck] = useState<HealthCheckData>({
      reExaminationTime: '',
      reExaminationDate: '',
      reExaminationLocation: '',
      nameHospital: '',
      userNote: '',
    });
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
    const handleConfirm = (date: Date) => {
      hideDatePicker();
      setSelectedDate(date.toISOString());
      setHealthCheck({ ...healthCheck, reExaminationDate: date.toISOString() });
    };
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const mutationEditHealthCheck = useMutation({
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      mutationFn: async (dataHealthCheck: HealthCheckData) => {
        try {
          const response = await axios.put(`http://3.25.181.251:8000/Reminder/EditHealthCheckReminder/${healthCheckId}`,healthCheck);
          if (response.status === 200) {
            const { completed, message } = response.data;
            if (completed ) {
              setModalVisible(true);
              console.log('Health Check successfully updated.');
            } else {
              console.log('Failed to update Health Check:', message);
            }
          } else {
            console.log('Unexpected response status:', response.status);
          }
        } catch (error: any) {
          console.log('Error updating Health Check:', error.message);
        }
      },
    });
    const healthCheckId = route.params.id;
    console.log(healthCheckId);
    const { data, isLoading, isError } = useQuery({
      queryKey: ['healthCheckData', healthCheckId],
      queryFn: async () => {
        try {
          const response = await axios.get(`http://3.25.181.251:8000/Reminder/getHealthCheckRemindersByHealthCheckId/${healthCheckId}`);
          console.log(response.data.dataHealthCheck);
          const outData = response.data.dataHealthCheck;
          return outData;
        } catch (error) {
          throw new Error(error.message);
        }
      },
    });
    const useGoBack = () => {
      navigation.goBack();
    };
    const handleOnChange = (key: string, value: string) => {
      setHealthCheck(prevUserData => ({
        ...prevUserData,
        [key]: value,
      }));
    };
    useEffect(() => {
      if (data) {
        const { reExaminationTime, reExaminationDate, reExaminationLocation, nameHospital, userNote } = data;
        setHealthCheck({
          reExaminationTime,
          reExaminationDate,
          reExaminationLocation,
          nameHospital,
          userNote,
        });
        setSelectedDate(reExaminationDate);
      }
    }, [data]);
    return {
        modalVisible,
        setModalVisible,
        isDatePickerVisible,
        setDatePickerVisibility,
        selectedDate,
        setSelectedDate,
        healthCheck,
        setHealthCheck,
        showDatePicker,
        hideDatePicker,
        handleConfirm,
        navigation,
        mutationEditHealthCheck,
        healthCheckId,
        data,
        isLoading,
        isError,
        useGoBack,
        handleOnChange,
    };
};
export default useEditHealthCheck;
