/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../../../type/type';
interface DataTreatment {
    timeOfDay: string;
    treatmentTime: string;
    medications: {
      medicationName: string;
      dosage: number | null;
    }[];
    reminderId: string;
    __v: number;
  }
const useEditTreatment =  ()  =>{
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [treatment, setTreatment] = useState<DataTreatment>({
      // _id: '',
      timeOfDay: '',
      treatmentTime: '',
      medications: [{ medicationName: '', dosage: null}],
      reminderId: '',
      __v: 0,
    });
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const route = useRoute();
    const treatmentId = route.params.id;
    console.log(treatmentId);
    const { data, isLoading, isError } = useQuery<DataTreatment>({
      queryKey: ['dataTreatment', treatmentId],
      queryFn: async () => {
        try {
          const response = await axios.get<DataTreatment>(`http://www.whales-fhn.dns-dynamic.net:8000/Reminder/GetTreatmentRemindersbyTreatmentId/${treatmentId}`);
          console.log(response.data.dataTreatment);
          return response.data.dataTreatment;
        } catch (error) {
          throw new Error(error.message);
        }
      },
    });
    useEffect(() => {
      if (data ) {
        const {  timeOfDay, treatmentTime, medications, reminderId, __v } = data;
        setTreatment({
          timeOfDay,
          treatmentTime,
          medications,
          reminderId,
          __v,
        });
      }
    }, [data]);
    const mutationEditTreatment = useMutation({
      mutationFn: async (dataTreatment: DataTreatment) => {
        try {
          const response = await axios.put(`http://www.whales-fhn.dns-dynamic.net:8000/Reminder/EditTreatmentReminders/${treatmentId}`, treatment);
          if (response.status === 200) {
            const { completed, message } = response.data;
            if (completed) {
              setModalVisible(true);
              console.log('Treatment successfully updated.');
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
    const useGoBack = () => {
      navigation.goBack();
    };
    const handleOnChange = (key: string, value: string) => {
      setTreatment(prevTreatment => ({
        ...prevTreatment,
        [key]: value,
      }));
    };
    const handleMedicationNameChange = (index: number, value: string) => {
      const updatedMedications = [...treatment.medications];
      updatedMedications[index].medicationName = value;
      setTreatment(prevTreatment => ({
        ...prevTreatment,
        medications: updatedMedications,
      }));
    };
    const handleDosageChange = (index: number, value: string) => {
      const updatedMedications = [...treatment.medications];
      updatedMedications[index].dosage = parseInt(value) || null;
      setTreatment(prevTreatment => ({
        ...prevTreatment,
        medications: updatedMedications,
      }));
    };
    return {
        modalVisible,
        setModalVisible,
        treatment,
        setTreatment,
        navigation,
        route,
        treatmentId,
        data,
        isLoading,
        isError,
        mutationEditTreatment,
        useGoBack,
        handleOnChange,
        handleMedicationNameChange,
        handleDosageChange,
    };
};
export default useEditTreatment;
