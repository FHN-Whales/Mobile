import  { useState } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../type/type';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApiCreateHealthCheckRemindSchedule } from '../../../../api/useApiCreateHeathCheckRemindScheduling';
interface CreateHealthCheck {
    reExaminationTime: string;
    reExaminationDate: string;
    reExaminationLocation: string;
    nameHospital: string;
    userNote: string;
  }
const useCreateHealthCheck = () =>{
    const [modalVisible, setModalVisible] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
      hideDatePicker();
      setSelectedDate(date.toISOString());
    };
    const handleCancel = () => {
      setModalVisible(false);
    };
    const handleOK = () => {
      setModalVisible(false);
      navigation.navigate('HomePage');
    };
    const useGoBack = () => {
      navigation.goBack();
    };
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const mutationCreatHealthCheck = useMutation({
      mutationFn: async (data: CreateHealthCheck) => {
        try {
          const userId = await AsyncStorage.getItem('userId');
          const requestData = {
            ...data,
            userId: userId,
          };
          const response = await axios.post(ApiCreateHealthCheckRemindSchedule, requestData);
          setTimeout(async () => {
            if (response.status === 200) {
              const {completed, message} = response.data;
              console.log('data', data);
              if (completed) {
                setModalVisible(true);
                console.log('Create Health Check successfully.');
              } else {
                console.log('Create Heath Check  failed:', message);
              }
              // setIsLoading(false);
            } else {
              console.log('Response:', response);
              console.log('Error:', 'Unexpected response status');
            }
          }, 2000);
          clearForm();
        } catch (error: any) {
          console.log('Error sending the request:', error.message);
          if (error.response && error.response.status === 409) {
            console.log('User has been successfully registered');
          } else {
            console.log('Unexpected error:', error);
          }
        }
      },
    });
    const clearForm = () => {
      setModalVisible(true);
      mutationCreatHealthCheck.reset();
    };
    return {
        modalVisible,
        setModalVisible,
        hideDatePicker ,
        isDatePickerVisible,
        setDatePickerVisibility,
        selectedDate,
        setSelectedDate,
        showDatePicker,
        handleConfirm,
        handleCancel,
        handleOK,
        useGoBack,
        navigation,
        mutationCreatHealthCheck,
    };
};
export  default useCreateHealthCheck;
