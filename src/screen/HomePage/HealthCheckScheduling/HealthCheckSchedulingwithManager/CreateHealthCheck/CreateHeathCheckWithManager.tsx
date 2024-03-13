/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { TouchableOpacity, Text, TextInput, View, Modal, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Alert, Image, ScrollView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../../type/type';
import healthcheck from '../../../../../styles/HomePage/TreatmentReminderScheduling/HealthCheckSchedulingwithManager/CreateHeathCheckWithManager';
import rendermodaledit from '../../../../../styles/HomePage/Home/ManagementFamily/EditMember/RenderModelEdit';
import { Formik } from 'formik'; // Import only Formik
import register from '../../../../../styles/FamilyManagement/Register/RegisterScreen';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreateHealthCheckSchema from '../../../../../hook/HomePage/HeathCheckScheduling/HealthCheckSchedulingwithManager/useValidateCreateHealthCheckScheduling';
import { ApiCreateHealthCheckRemindSchedule } from '../../../../../api/useApiCreateHeathCheckRemindScheduling';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface CreateHealthCheck {
  nameDoctor: string;
  reExaminationTime: string;
  reExaminationDate: string;
  reExaminationLocation: string;
  nameHospital: string;
  userNote: string;
}

const CreateHeathCheckWithManagerScreen = () => {
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
        console.log(userId);
        const requestData = {
          ...data,
          userId: userId,
        };
        const response = await axios.post(ApiCreateHealthCheckRemindSchedule, requestData);
        setTimeout(async () => {
          if (response.status === 200) {
            const { completed, message, userId } = response.data;
            console.log('data', requestData);
            if (completed && userId) {
              setModalVisible(true);
              console.log('Create Health  successfully.');
              console.log(userId);
            } else {
              Alert.alert('Create Health Check failed:', message);
              setModalVisible(false);
            }
          }
        }, 2000);
        clearForm();
      } catch (error: any) {
        console.log('Error sending the request:', error.message);
      }
    },
  });

  const clearForm = () => {
    setModalVisible(true);
    mutationCreatHealthCheck.reset();
  };

  return (
    <ScrollView style={healthcheck.container}>
      <Formik
        initialValues={{
          nameDoctor: '',
          reExaminationTime: '',
          reExaminationDate: '',
          reExaminationLocation: '',
          nameHospital: '',
          userNote: '',
        }}
        validationSchema={CreateHealthCheckSchema}
        onSubmit={values => mutationCreatHealthCheck.mutate(values)}>
        {({errors, touched, handleChange, values, handleSubmit, setFieldValue}) => ( // Add setFieldValue here
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
                            source={require('../../../../../image/back-icon.png')}
                          />
                        </TouchableOpacity>
                        <Text style={healthcheck.textFill}>Add Member</Text>
                      </View>
                      <View style={{paddingTop: 20}}>
                        <View style={healthcheck.viewIteminput}>
                          <Text style={healthcheck.textLabel}>
                            {' '}
                            Name Doctor{' '}
                          </Text>
                          <View style={healthcheck.viewInput}>
                            <TextInput
                              placeholderTextColor="#9CA3AF"
                              placeholder=" Name Doctor"
                              style={healthcheck.textInput}
                              onChangeText={handleChange('nameDoctor')}
                              value={values.nameDoctor}
                            />
                          </View>
                        </View>
                        {errors.nameDoctor && touched.nameDoctor ? (
                          <Text style={register.textError}>
                            * {errors.nameDoctor}
                          </Text>
                        ) : null}
                        <View style={healthcheck.viewIteminput}>
                          <Text style={healthcheck.textLabel}>
                            Re-examination Time
                          </Text>
                          <View style={healthcheck.viewInput}>
                            <TextInput
                              placeholderTextColor="#9CA3AF"
                              placeholder="Re-examination Time"
                              style={healthcheck.textInput}
                              onChangeText={handleChange('reExaminationTime')}
                              value={values.reExaminationTime}
                            />
                          </View>
                        </View>
                        {errors.reExaminationTime &&
                        touched.reExaminationTime ? (
                          <Text style={register.textError}>
                            * {errors.reExaminationTime}
                          </Text>
                        ) : null}
                        <View style={healthcheck.viewIteminput}>
                          <Text style={healthcheck.textLabel}>
                            Re-examination Date
                          </Text>
                          <View style={healthcheck.viewInput}>
                            <TouchableOpacity  style={{ padding:15 }} onPress={showDatePicker}>
                              <Text>
                                {selectedDate ? selectedDate : 'Select date'}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <DateTimePickerModal
                          isVisible={isDatePickerVisible}
                          mode="date"
                          onConfirm={(date) => { handleConfirm(date); setFieldValue('reExaminationDate', date.toISOString()); }} // Add setFieldValue here
                          onCancel={hideDatePicker}
                        />
                        {errors.reExaminationDate &&
                        touched.reExaminationDate ? (
                          <Text style={register.textError}>
                            * {errors.reExaminationDate}
                          </Text>
                        ) : null}
                        <View style={healthcheck.viewIteminput}>
                          <Text style={healthcheck.textLabel}>
                            Re-examination Location
                          </Text>
                          <View style={healthcheck.viewInput}>
                            <TextInput
                              placeholderTextColor="#9CA3AF"
                              placeholder="Re-examination Location"
                              style={healthcheck.textInput}
                              onChangeText={handleChange(
                                'reExaminationLocation',
                              )}
                              value={values.reExaminationLocation}
                            />
                          </View>
                        </View>
                        {errors.reExaminationLocation &&
                        touched.reExaminationLocation ? (
                          <Text style={register.textError}>
                            * {errors.reExaminationLocation}
                          </Text>
                        ) : null}
                        <View style={healthcheck.viewIteminput}>
                          <Text style={healthcheck.textLabel}>
                            Name Hospital
                          </Text>
                          <View style={healthcheck.viewInput}>
                            <TextInput
                              placeholderTextColor="#9CA3AF"
                              placeholder="Name Hospital"
                              style={healthcheck.textInput}
                              onChangeText={handleChange('nameHospital')}
                              value={values.nameHospital}
                            />
                          </View>
                        </View>
                        {errors.nameHospital && touched.nameHospital ? (
                          <Text style={register.textError}>
                            * {errors.nameHospital}
                          </Text>
                        ) : null}
                        <View style={healthcheck.viewIteminput}>
                          <Text style={healthcheck.textLabel}>User Note</Text>
                          <View style={healthcheck.viewInput}>
                            <TextInput
                              placeholderTextColor="#9CA3AF"
                              placeholder="User Note"
                              style={healthcheck.textInput}
                              onChangeText={handleChange('userNote')}
                              value={values.userNote}
                            />
                          </View>
                        </View>
                        {errors.userNote && touched.userNote ? (
                          <Text style={register.textError}>
                            * {errors.userNote}
                          </Text>
                        ) : null}
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
                                    Are you sure you want to Create health check
                                    schedule?
                                  </Text>
                                </View>
                                <View style={rendermodaledit.viewloadding}>
                                  <TouchableOpacity
                                    style={rendermodaledit.buttonCancle}
                                    onPress={handleCancel}>
                                    <Text style={rendermodaledit.textCancle}>
                                      Cancle
                                    </Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                    style={rendermodaledit.buttonOk}
                                    onPress={handleOK}>
                                    <Text style={rendermodaledit.textOk}>
                                      OK
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
export default CreateHeathCheckWithManagerScreen;
