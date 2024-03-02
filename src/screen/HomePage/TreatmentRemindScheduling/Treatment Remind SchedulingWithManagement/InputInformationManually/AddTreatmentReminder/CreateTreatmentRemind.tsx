import React, { useState } from 'react';
import { TouchableOpacity, Text, TextInput, View, Image, KeyboardAvoidingView, Platform, ScrollView, Alert, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../../../type/type';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useMutation } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiCreateTreatmentReminder } from '../../../../../../api/useApiCreateTreatmentReminder';
import axios from 'axios';
import styles from '../../../../../../styles/HomePage/HealthCheckScheduling/Treatment Remind SchedulingWithManagement/InputInformationManually/AddTreatmentReminder/CreateTreatmentRemind';

interface MedicationData {
  medicationName: string;
  dosage: string;
}

const CreateTreatmentRemindScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [frequency, setFrequency] = useState<string>('');
  const [treatmentTimeMorning, setTreatmentTimeMorning] =  useState<string>('');
  const [treatmentTimeNoon, setTreatmentTimeNoon] =  useState<string>('');
  const [treatmentTimeEvening, setTreatmentTimeEvening] =  useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string[]>([]);
  const [numMedicationsMorning, setNumMedicationsMorning] = useState(0);
  const [numMedicationsNoon, setNumMedicationsNoon] = useState(0);
  const [numMedicationsEvening, setNumMedicationsEvening] = useState(0);
  const [open, setOpen] = useState<boolean>(false);
  const [medications, setMedications] = useState<MedicationData[]>([]);
  const [error, setError] = useState<string[]>([]);

  const handlePress = (time: string) => {
    if (selectedTime.includes(time)) {
      setSelectedTime(selectedTime.filter(item => item !== time));
    } else {
      setSelectedTime([...selectedTime, time]);
    }
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
    if (!startDate) newErrors.push('Start date is required');
    if (!endDate) newErrors.push('End date is required');
    if (!frequency) newErrors.push('Frequency is required');
    if (selectedTime.length === 0) newErrors.push('At least one time must be selected');
    if (selectedTime.includes('morning') && !treatmentTimeMorning) newErrors.push('Morning treatment time is required');
    if (selectedTime.includes('noon') && !treatmentTimeNoon) newErrors.push('Noon treatment time is required');
    if (selectedTime.includes('evening') && !treatmentTimeEvening) newErrors.push('Evening treatment time is required');
    setError(newErrors);

    if (newErrors.length > 0) {
      return;
    }

    try {
      const userId = await AsyncStorage.getItem('userId');
      const dataToSend = {
        userId: userId,
        startDate: startDate?.toISOString().split('T')[0],
        endDate: endDate?.toISOString().split('T')[0],
        frequency: parseInt(frequency),
        timeOfDay: selectedTime,
        treatmentTime: [], // Khởi tạo mảng trống để lưu thời gian
        medications: medications,
      };
      console.log(dataToSend);
      // Đưa thời gian vào mảng treatmentTime dựa trên selectedTime
      if (selectedTime.includes('morning')) {
        dataToSend.treatmentTime.push(treatmentTimeMorning);
      }
      if (selectedTime.includes('noon')) {
        dataToSend.treatmentTime.push(treatmentTimeNoon);
      }
      if (selectedTime.includes('evening')) {
        dataToSend.treatmentTime.push(treatmentTimeEvening);
      }

      await createTreatmentReminderMutation.mutateAsync(dataToSend);
      Alert.alert('Success', 'Data sent successfully');
      navigation.navigate('HomeScreen')
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  const handleNumMedicationsMorningChange = (value: string) => {
    const numMedications = parseInt(value, 10);
    setNumMedicationsMorning(numMedications);
    const newMedications = [...medications];
    for (let i = medications.length; i < numMedications; i++) {
      newMedications.push({ medicationName: '', dosage: '' });
    }
    setMedications(newMedications);
  };
  
  const handleNumMedicationsNoonChange = (value: string) => {
    const numMedications = parseInt(value, 10);
    setNumMedicationsNoon(numMedications);
    const newMedications = [...medications];
    for (let i = medications.length; i < numMedications; i++) {
      newMedications.push({ medicationName: '', dosage: '' });
    }
    setMedications(newMedications);
  };

  const handleNumMedicationsEveningChange = (value: string) => {
    const numMedications = parseInt(value, 10);
    setNumMedicationsEvening(numMedications);
    const newMedications = [...medications];
    for (let i = medications.length; i < numMedications; i++) {
      newMedications.push({ medicationName: '', dosage: '' });
    }
    setMedications(newMedications);
  };


  const renderMedicationForms = (numMedications: number) => {
    return medications.map((medication, index) => (
      <View key={index}>
        <Text style={styles.textLabel}>Medication {index + 1}:</Text>
        <View style={styles.viewRenderItem}>
          <TextInput
            placeholderTextColor="#9CA3AF"
            placeholder="Medicine Name"
            style={styles.viewInput}
            value={medication.medicationName}
            onChangeText={(text) => handleMedicationNameChange(text, index)}
          />
          <TextInput
            placeholderTextColor="#9CA3AF"
            placeholder="Dosage"
            style={styles.viewInput}
            value={medication.dosage}
            onChangeText={(text) => handleDosageChange(text, index)}
          />
        </View>
      </View>
    ));
  };

  const handleMedicationNameChange = (text: string, index: number) => {
    const newMedications = [...medications];
    newMedications[index].medicationName = text;
    setMedications(newMedications);
  };

  const handleDosageChange = (text: string, index: number) => {
    const newMedications = [...medications];
    newMedications[index].dosage = text;
    setMedications(newMedications);
  };

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
                  <TouchableOpacity
                    style={selectedTime.includes('morning') ? styles.timeOptionChoose : styles.timeOption}
                    onPress={() => handlePress('morning')}>
                    <Text style={selectedTime.includes('morning') ? styles.timeOptionTextChoose : styles.timeOptionText}>Morning</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={selectedTime.includes('noon') ? styles.timeOptionChoose : styles.timeOption}
                    onPress={() => handlePress('noon')}>
                    <Text style={selectedTime.includes('noon') ? styles.timeOptionTextChoose : styles.timeOptionText}>Noon</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={selectedTime.includes('evening') ? styles.timeOptionChoose : styles.timeOption}
                    onPress={() => handlePress('evening')}>
                    <Text style={selectedTime.includes('evening') ? styles.timeOptionTextChoose : styles.timeOptionText}>Evening</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.viewRenderItem}>
                {selectedTime.includes('morning') && (
                  <>
                    <Text style={styles.textLabel}>Morning</Text>
                    <View style={styles.viewRenderEnter}>
                      <Text style={styles.textHour}>Drink time</Text>
                      <TextInput
                        style={styles.viewInput}
                        placeholder="Drink Time"
                        value={treatmentTimeMorning}
                        onChangeText={setTreatmentTimeMorning}
                      />
                    </View>
                    <View style={styles.viewRenderEnter}>
                      <Text style={styles.textHour}>Enter number of medications</Text>
                      <TextInput
                        style={styles.viewInputEnter}
                        onChangeText={handleNumMedicationsMorningChange}
                        keyboardType="numeric"
                      />
                    </View>
                    {renderMedicationForms(numMedicationsMorning)}
                  </>
                )}
                {selectedTime.includes('noon') && (
                  <>
                    <Text style={styles.textLabel}>Noon</Text>
                    <View style={styles.viewRenderEnter}>
                      <Text style={styles.textHour}>Drink time</Text>
                      <TextInput
                        style={styles.viewInput}
                        placeholder="Drink Time"
                        value={treatmentTimeNoon}
                        onChangeText={setTreatmentTimeNoon}
                      />
                    </View>
                    <View style={styles.viewRenderEnter}>
                      <Text style={styles.textHour}>Enter number of medications</Text>
                      <TextInput
                        style={styles.viewInputEnter}
                        onChangeText={handleNumMedicationsNoonChange}
                        keyboardType="numeric"
                      />
                    </View>
                    {renderMedicationForms(numMedicationsNoon)}
                  </>
                )}

                {selectedTime.includes('evening') && (
                  <>
                    <Text style={styles.textLabel}>Evening</Text>
                    <View style={styles.viewRenderEnter}>
                      <Text style={styles.textHour}>Drink time</Text>
                      <TextInput
                        style={styles.viewInput}
                        placeholder="Drink Time"
                        value={treatmentTimeEvening}
                        onChangeText={setTreatmentTimeEvening}
                      />
                    </View>
                    <View style={styles.viewRenderEnter}>
                      <Text style={styles.textHour}>Enter number of medications</Text>
                      <TextInput
                        style={styles.viewInputEnter}
                        onChangeText={handleNumMedicationsEveningChange}
                        keyboardType="numeric"
                      />
                    </View>
                    {renderMedicationForms(numMedicationsEvening)}
                  </>
                )}
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
