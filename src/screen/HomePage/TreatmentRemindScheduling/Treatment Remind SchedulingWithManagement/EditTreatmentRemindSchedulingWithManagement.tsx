/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import {TouchableOpacity,Text,TextInput,View,Modal,KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Image,ScrollView} from 'react-native';
import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Formik } from 'formik'; // Import only Formik
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../../type/type';
import healthcheck from '../../../../styles/HomePage/TreatmentReminderScheduling/HealthCheckSchedulingwithManager/CreateHeathCheckWithManager';
import rendermodaledit from '../../../../styles/HomePage/Home/ManagementFamily/EditMember/RenderModelEdit';
interface DataTreatment {
  treatmentInfo: {
    _id: string;
    timeOfDay: string;
    treatmentTime: string;
    medications: {
      medicationName: string;
      dosage: number | null;
      _id: string;
    }[];
    reminderId: string;
    __v: number;
  }[];
}
const EditTreatmentReminderScreen = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [treatment, setTreatment] = useState<any>({
    timeOfDay: '',
    treatmentTime: '',
    medications: [{ medicationName: '', dosage: null }],
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
        const outData = response.data.dataTreatment;
        return outData;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  });

  useEffect(() => {
    if (data) {
      const { treatmentInfo } = data;
      if (treatmentInfo && treatmentInfo.length > 0) { // Kiểm tra xem treatmentInfo có tồn tại và không rỗng không
        const { timeOfDay, treatmentTime, medications } = treatmentInfo[0];
        setTreatment({
          timeOfDay: timeOfDay || '',
          treatmentTime: treatmentTime || '',
          medications: medications || [{ medicationName: '', dosage: null }],
        });
      }
    }
  }, [data]);

  const mutationEditTreatment = useMutation({
    mutationFn: async (dataTreatment: DataTreatment) => {
      try {
        const response = await axios.put(`http://www.whales-fhn.dns-dynamic.net:8000/Reminder/EditHealthCheckReminder/${treatmentId}`, dataTreatment);
        if (response.status === 200) {
          const { completed, message } = response.data;
          if (completed) {
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

  const useGoBack = () => {
    navigation.goBack();
  };

  const handleOnChange = (key: string, value: string) => {
    setTreatment((prevUserData: any) => ({
      ...prevUserData,
      [key]: value,
    }));
  };
  const handleMedicationNameChange = (index: number, value: string) => {
    const updatedMedications = [...treatment.medications];
    updatedMedications[index].medicationName = value;
    setTreatment((prevUserData: any) => ({
      ...prevUserData,
      medications: updatedMedications,
    }));
  };

  const handleDosageChange = (index: number, value: string) => {
    const updatedMedications = [...treatment.medications];
    updatedMedications[index].dosage = parseInt(value) || null;
    setTreatment((prevUserData: any) => ({
      ...prevUserData,
      medications: updatedMedications,
    }));
  };

  return (
    <ScrollView>
      <Formik
        initialValues={treatment}
        onSubmit={async values => {
          await mutationEditTreatment.mutateAsync(values);
        }}>
        {({handleChange, handleSubmit, values}) => (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={healthcheck.container}>
            <TouchableWithoutFeedback>
              <View style={healthcheck.inner}>
                <View style={healthcheck.viewForm}>
                  <View>
                    <View>
                      <View style={healthcheck.viewGoBack}>
                        <TouchableOpacity onPress={useGoBack}>
                          <Image
                            source={require('../../../../image/back-icon.png')}
                          />
                        </TouchableOpacity>
                        <Text style={healthcheck.textFill}>
                          Examination Information
                        </Text>
                      </View>
                      <View style={{paddingTop: 20}}>
                        <View style={healthcheck.viewIteminput}>
                          <Text style={healthcheck.textLabel}>Time Of Day</Text>
                          <View style={healthcheck.viewInput}>
                            <TextInput
                              placeholderTextColor="#9CA3AF"
                              placeholder=" Time Of Day"
                              style={healthcheck.textInput}
                              onChangeText={text =>
                                handleOnChange('timeOfDay', text)
                              }
                              value={treatment.timeOfDay}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={{paddingTop: 20}}>
                        <View style={healthcheck.viewIteminput}>
                          <Text style={healthcheck.textLabel}>
                            TreatmentTime
                          </Text>
                          <View style={healthcheck.viewInput}>
                            <TextInput
                              placeholderTextColor="#9CA3AF"
                              placeholder="TreatmentTime"
                              style={healthcheck.textInput}
                              onChangeText={text =>
                                handleOnChange('treatmentTime', text)
                              }
                              value={treatment.treatmentTime}
                            />
                          </View>
                        </View>
                        <View style={{paddingTop: 20}}>
                          {treatment.medications.map((medication: { medicationName: string | undefined; dosage: { toString: () => string | undefined; }; }, index: React.Key | null | undefined) => (
                            <View key={index}>
                              <View style={healthcheck.viewIteminput}>
                                <Text style={healthcheck.textLabel}>
                                  Medication Name
                                </Text>
                                <View style={healthcheck.viewInput}>
                                  <TextInput
                                    placeholderTextColor="#9CA3AF"
                                    placeholder="Medication Name"
                                    style={healthcheck.textInput}
                                    onChangeText={text =>
                                      handleMedicationNameChange(index, text)
                                    }
                                    value={medication.medicationName}
                                  />
                                </View>
                              </View>
                              <View style={healthcheck.viewIteminput}>
                                <Text style={healthcheck.textLabel}>
                                  Dosage
                                </Text>
                                <View style={healthcheck.viewInput}>
                                  <TextInput
                                    placeholderTextColor="#9CA3AF"
                                    placeholder="Dosage"
                                    style={healthcheck.textInput}
                                    onChangeText={text =>
                                      handleDosageChange(index, text)
                                    } 
                                    value={medication.dosage.toString()}
                                  />
                                </View>
                              </View>
                            </View>
                          ))}
                        </View>

                        <View style={healthcheck.viewButton}>
                          <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                              setModalVisible(!modalVisible);
                            }}>
                            <View style={rendermodaledit.centeredView}>
                              <View style={rendermodaledit.modalView}>
                                <View style={rendermodaledit.viewtitle}>
                                  <Text style={rendermodaledit.textCon}>
                                    Create health check schedule?
                                  </Text>
                                  <Text style={rendermodaledit.textYour}>
                                    {' '}
                                    Are you sure you want to Create health check
                                    schedule?
                                  </Text>
                                </View>
                                <View style={rendermodaledit.viewloadding}>
                                  <TouchableOpacity
                                    style={rendermodaledit.buttonCancle}
                                    onPress={() => setModalVisible(false)}>
                                    <Text style={rendermodaledit.textCancle}>
                                      Cancle
                                    </Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                    style={rendermodaledit.buttonOk}
                                    onPress={() => {
                                      setModalVisible(false);
                                      navigation.navigate('HomePage');
                                    }}>
                                    <Text style={rendermodaledit.textOk}>
                                      OK{' '}
                                    </Text>
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>
                          </Modal>
                          <TouchableOpacity
                            style={healthcheck.buttonSave}
                            onPress={() => handleSubmit()}>
                            <Text style={healthcheck.textCreate}>Save</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </ScrollView>
  );
};
export default EditTreatmentReminderScreen;
