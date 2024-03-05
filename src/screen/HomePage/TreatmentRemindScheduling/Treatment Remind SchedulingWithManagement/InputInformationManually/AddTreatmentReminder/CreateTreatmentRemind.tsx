/* eslint-disable radix */
/* eslint-disable no-catch-shadow */
import React, { useState } from 'react';
import { TouchableOpacity, Text, TextInput, View, Image, KeyboardAvoidingView,  ScrollView, Alert, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../../../type/type';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useMutation } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiCreateTreatmentReminder } from '../../../../../../api/useApiCreateTreatmentReminder';
import axios from 'axios';
import styles from '../../../../../../styles/HomePage/HealthCheckScheduling/Treatment Remind SchedulingWithManagement/InputInformationManually/AddTreatmentReminder/CreateTreatmentRemind';
type TimePeriod = 'morning' | 'noon' | 'evening';
interface MedicationData {
  medicationName: string;
  dosage: string;
}
const CreateTreatmentRemindScreen = () => {
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
        medications: medications,
      };
      console.log(dataToSend);
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
    newMedications[index].dosage = text;
    setMedications({ ...medications, [timePeriod]: newMedications});
  };

  const renderMedicationForms = (timePeriod: TimePeriod) => {
    return medications[timePeriod].map((medication, index) => (
      <View key={index}>
        <Text style={styles.textLabel}>Medication {index + 1}:</Text>
        <View style={styles.viewRenderItem}>
          <TextInput
            placeholderTextColor="#9CA3AF"
            placeholder="Medicine Name"
            style={styles.viewInput}
            value={medication.medicationName}
            onChangeText={(text) => handleMedicationNameChange(timePeriod, text, index)}
          />
          <TextInput
            placeholderTextColor="#9CA3AF"
            placeholder="Dosage"
            style={styles.viewInput}
            value={medication.dosage}
            onChangeText={(text) => handleDosageChange(timePeriod, text, index)}
          />
        </View>
      </View>
    ));
  };
  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView behavior={ 'padding' }>
        <TouchableWithoutFeedback>
          <TouchableOpacity activeOpacity={1} style={styles.inner}>
            <View style={styles.viewForm}>
              <View style={styles.viewGoBack}>
                <TouchableOpacity onPress={useGoBack}>
                  <Image source={require('../../../../../../image/back-icon.png')} />
                </TouchableOpacity>
                <Text style={styles.textFill}>Add-Your-Medicines</Text>
              </View>
              <View>
                <Text style={styles.textLabel}>Start day</Text>
                <TouchableOpacity style={styles.dateInput} onPress={() => setOpen(true)}>
                  <Text>{startDate ? startDate.toDateString() : 'Start day'}</Text>
                </TouchableOpacity>
                {open && <DateTimePicker mode="date" value={startDate || new Date()} onChange={(event, date) => { setOpen(false); setStartDate(date); }} />}
              </View>
              <View>
                <Text style={styles.textLabel}>End Day</Text>
                <TouchableOpacity style={styles.dateInput} onPress={() => setOpen(true)}>
                  <Text>{endDate ? endDate.toDateString() : 'End Day'}</Text>
                </TouchableOpacity>
                {open && <DateTimePicker mode="date" value={endDate || new Date()} onChange={(event, date) => { setOpen(false); setEndDate(date); }} />}
              </View>
              <View>
                <Text style={styles.textLabel}>Number of times per day</Text>
                <TextInput
                  placeholderTextColor="#9CA3AF"
                  placeholder="Enter the number of times"
                  style={styles.viewInput}
                  value={frequency}
                  onChangeText={setFrequency}
                  keyboardType="numeric"
                />
              </View>
               <View>
                <Text style={styles.textLabel}>Choose time</Text>
                <View style={styles.viewTimeOptions}>
                  {['morning', 'noon', 'evening'].map((timePeriod) => (
                    <TouchableOpacity
                      key={timePeriod}
                      style={selectedTime.includes(timePeriod) ? styles.timeOptionChoose : styles.timeOption}
                      onPress={() => handlePress(timePeriod as TimePeriod)}>
                      <Text style={selectedTime.includes(timePeriod) ? styles.timeOptionTextChoose : styles.timeOptionText}>{timePeriod}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              <View style={styles.viewRenderItem}>
              {['Morning', 'Noon', 'Evening'].map((timePeriodStr) => {
                const timePeriod = timePeriodStr.toLowerCase() as TimePeriod;
                if (!selectedTime.includes((timePeriod))) {
                  return null;
                }
                return (
                <View key={timePeriodStr}>
                  <Text style={styles.textLabel}>{timePeriod}</Text>
                  <View style={styles.viewRenderEnter}>
                    <Text style={styles.textHour}>Drink time</Text>
                    <TextInput
                      style={styles.viewInput}
                      placeholder="Drink Time"
                      value={treatmentTime[timePeriod]}
                      onChangeText={(value) => setTreatmentTime({ ...treatmentTime, [timePeriod]: value })}
                    />
                  </View>
                  <View style={styles.viewRenderEnter}>
                    <Text style={styles.textHour}>Enter number of medications</Text>
                    <TextInput
                      style={styles.viewInputEnter}
                      onChangeText={(value) => handleNumMedicationsChange(timePeriod, value)}
                      keyboardType="numeric"
                    />
                  </View>
                  {renderMedicationForms(timePeriod)}
                </View>
              );})}
              </View>
            </View>
            {error.length > 0 && (
              <View style={{ paddingLeft: 20 }}>
                {error.map((errorMessage, index) => (
                  <Text key={index}>{errorMessage}</Text>
                ))}
              </View>
            )}
            <View style={styles.viewButton}>
              <TouchableOpacity onPress={handleSave} style={styles.buttonSave}>
                <Text style={styles.textSave}>Lưu</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
export default CreateTreatmentRemindScreen;
