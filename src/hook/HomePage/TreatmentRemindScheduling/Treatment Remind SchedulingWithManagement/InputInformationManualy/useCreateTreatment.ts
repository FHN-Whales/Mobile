/* eslint-disable no-catch-shadow */
import  { useState } from 'react';
import {  Alert} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../../type/type';
import { useMutation } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiCreateTreatmentReminder } from '../../../../../api/useApiCreateTreatmentReminder';
import axios from 'axios';
type TimePeriod = 'morning' | 'noon' | 'evening';
interface MedicationData {
    medicationName: string;
    dosage: number;
  }
const useCreateTreatment = () =>{
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [frequency, setFrequency] = useState<string>('');
    const [treatmentTime, setTreatmentTime] = useState<Record<TimePeriod, string>>({ morning: '', noon: '', evening: '' });
    const [selectedTime, setSelectedTime] = useState<TimePeriod[]>([]);
    const [numMedications, setNumMedications] = useState<Record<TimePeriod, number>>({ morning: 0, noon: 0, evening: 0 });
    const [medications, setMedications] = useState<Record<TimePeriod, MedicationData[]>>({ morning: [], noon: [], evening: [] });
    const [open, setOpen] = useState<boolean>(false);
    const [error, setError] = useState<string[]>([]);
    const handlePress = (time: TimePeriod) => {
      setSelectedTime(prevSelectedTime => {
        if (prevSelectedTime.includes(time)) {
          return prevSelectedTime.filter(item => item !== time);
        } else {
          return [...prevSelectedTime, time];
        }
      });
    };
    const useGoBack = () => {
      navigation.goBack();
    };
    const createTreatmentReminderMutation = useMutation({
      mutationFn: async (dataToSend: any) => {
        try {
          const response = await axios.post(apiCreateTreatmentReminder, dataToSend);
          return response.data;
        } catch (error) {
          throw error;
        }
      },
      onSuccess: (responseData: any) => {
        if (responseData.completed) {
          Alert.alert('Success', responseData.message);
        } else {
          Alert.alert('Error', responseData.message);
        }
      },
      // eslint-disable-next-line @typescript-eslint/no-shadow
      onError: (error: any) => {
        console.error('Error:', error);
        Alert.alert('Error', 'An error occurred. Please try again.');
      },
    });
    const handleSave = async () => {
      const newErrors: string[] = [];
      if (!startDate) {newErrors.push('Start date is required');}
      if (!endDate) {newErrors.push('End date is required');}
      if (!frequency) {newErrors.push('Frequency is required');}
      if (selectedTime.length === 0) {newErrors.push('At least one time must be selected');}

      selectedTime.forEach(time => {
        if (!treatmentTime[time]) {
          newErrors.push(`${time} treatment time is required`);
        }
      });
      setError(newErrors);

      if (newErrors.length > 0) {
        return;
      }
      try {
        const userId = await AsyncStorage.getItem('userId');
        const formattedTreatmentTime = selectedTime.map(time => treatmentTime[time].toString().padStart(5, '0'));
        const dataToSend = {
          userId: userId,
          startDate: startDate?.toISOString().split('T')[0],
          endDate: endDate?.toISOString().split('T')[0],
          frequency: parseInt(frequency),
          timeOfDay: selectedTime,
          treatmentTime: formattedTreatmentTime,
          // medications: medications,
          medications: [...medications.morning, ...medications.noon, ...medications.evening],
        };
        console.log(JSON.stringify(dataToSend));
        await createTreatmentReminderMutation.mutateAsync(dataToSend);
        // Chỉ chuyển hướng nếu không có lỗi
        navigation.navigate('HomeScreen');
      } catch (error) {
        console.error('Error:', error);
        if (error.response) {
          const errorMessage = error.response.data.message;
          Alert.alert('Error', errorMessage);
        } else {
          // Handle other errors
          Alert.alert('Error', 'An error occurred. Please try again.');
        }
      }
    };

    const handleNumMedicationsChange = (timePeriod: TimePeriod, value: string) => {
      const newNumMedications = parseInt(value, 10);
      setNumMedications({ ...numMedications, [timePeriod]: newNumMedications });
      let newMedications;
      if (newNumMedications > medications[timePeriod].length) {
        // Nếu số lượng thuốc mới lớn hơn số lượng thuốc hiện tại
        newMedications = [...medications[timePeriod]];
        for (let i = medications[timePeriod].length; i < newNumMedications; i++) {
          newMedications.push({ medicationName: '', dosage: '' });
        }
      } else {
        // Nếu số lượng thuốc mới nhỏ hơn hoặc bằng số lượng thuốc hiện tại
        newMedications = medications[timePeriod].slice(0, newNumMedications);
      }
      setMedications({ ...medications, [timePeriod]: newMedications});
    };

    const handleMedicationNameChange = (timePeriod: TimePeriod, text: string, index: number) => {
      const newMedications = [...medications[timePeriod]];
      newMedications[index].medicationName = text;
      setMedications({ ...medications, [timePeriod]: newMedications});
    };

    const handleDosageChange = (timePeriod: TimePeriod, text: string, index: number) => {
      const newMedications = [...medications[timePeriod]];
      // eslint-disable-next-line radix
      newMedications[index].dosage = parseInt(text);
      setMedications({ ...medications, [timePeriod]: newMedications});
    };
    return {
        navigation,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        frequency,
        setFrequency,
        treatmentTime,
        setTreatmentTime,
        selectedTime,
        setSelectedTime,
        numMedications,
        setNumMedications,
        medications,
        setMedications,
        open,
        setOpen,
        error,
        setError,
        handlePress,
        useGoBack,
        handleSave,
        createTreatmentReminderMutation,
        handleNumMedicationsChange,
        handleMedicationNameChange,
        handleDosageChange,
    };

};
export default useCreateTreatment;
