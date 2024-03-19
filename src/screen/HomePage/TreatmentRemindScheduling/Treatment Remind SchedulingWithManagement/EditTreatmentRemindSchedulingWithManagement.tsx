import React from 'react';
import { StyleSheet, TouchableOpacity, Text, TextInput, View, Modal, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Image, ScrollView } from 'react-native';
import healthcheck from '../../../../styles/HomePage/TreatmentReminderScheduling/HealthCheckSchedulingwithManager/CreateHeathCheckWithManager';
import rendermodaledit from '../../../../styles/HomePage/Home/ManagementFamily/EditMember/RenderModelEdit';
import { Formik } from 'formik'; // Import only Formik
import register from '../../../../styles/FamilyManagement/Register/RegisterScreen';
import CreateHealthCheckSchema from '../../../../hook/HomePage/HeathCheckScheduling/HealthCheckSchedulingwithManager/useValidateCreateHealthCheckScheduling';
import useCreateHealthCheck from '../../../../hook/HomePage/HeathCheckScheduling/HealthCheckSchedulingwithManager/useCreateHealthCheckScheduling';
import DateTimePickerModal from 'react-native-modal-datetime-picker';



const EditTreatmentReminderScreen = ({ route }: { route: { params: { id: string } } }) => {
  const { modalVisible, setModalVisible, isDatePickerVisible, selectedDate, showDatePicker, handleConfirm, handleCancel, handleOK, useGoBack, mutationCreatHealthCheck, hideDatePicker } = useCreateHealthCheck();
  
  const { id } = route.params;
  const treatmentId = id;

  
  return (
    <ScrollView style={healthcheck.container}>
      <Formik
        initialValues={{
          timeOfDay: '',
          treatmentTime: '',
        }}
        validationSchema={CreateHealthCheckSchema}
        onSubmit={values => mutationCreatHealthCheck.mutate(values)}>
        {({ errors, touched, handleChange, values, handleSubmit, setFieldValue }) => (
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
                          <Image source={require('../../../../image/back-icon.png')} />
                        </TouchableOpacity>
                        <Text style={healthcheck.textFill}>Examination Information</Text>
                      </View>
                      <View style={{ paddingTop: 20 }}>
                        <View style={healthcheck.viewIteminput}>
                          <Text style={healthcheck.textLabel}>TimeOfDay</Text>
                          <View style={healthcheck.viewInput}>
                            <TextInput
                              placeholderTextColor="#9CA3AF"
                              placeholder=""
                              style={healthcheck.textInput}
                              onChangeText={handleChange('timeOfDay')}
                              value={values.timeOfDay}
                            />
                          </View>
                        </View>
                        {errors.timeOfDay && touched.timeOfDay ? (
                          <Text style={register.textError}>* {errors.timeOfDay}</Text>) : null}
                      </View>

                      <View style={{ paddingTop: 20 }}>
                        <View style={healthcheck.viewIteminput}>
                          <Text style={healthcheck.textLabel}>TreatmentTime</Text>
                          <View style={healthcheck.viewInput}>
                            <TextInput
                              placeholderTextColor="#9CA3AF"
                              placeholder=""
                              style={healthcheck.textInput}

                              onChangeText={handleChange('treatmentTime')}
                              value={values.treatmentTime}
                            />
                          </View>

                        </View>
                        {errors.treatmentTime && touched.treatmentTime ? (
                          <Text style={register.textError}>* {errors.treatmentTime}</Text>) : null}

                        <View style={{ paddingTop: 20 }}>
                          <View style={healthcheck.viewIteminput}>
                            <Text style={healthcheck.textLabel}>Medication Name</Text>
                            <View style={healthcheck.viewInput}>
                              <TextInput
                                placeholderTextColor="#9CA3AF"
                                placeholder=""
                                style={healthcheck.textInput}
                                onChangeText={handleChange('timeOfDay')}
                                value={values.timeOfDay}
                              />
                            </View>
                          </View>
                          <View style={healthcheck.viewIteminput}>
                            <Text style={healthcheck.textLabel}>Dosage</Text>
                            <View style={healthcheck.viewInput}>
                              <TextInput
                                placeholderTextColor="#9CA3AF"
                                placeholder=""
                                style={healthcheck.textInput}
                                onChangeText={handleChange('timeOfDay')}
                                value={values.timeOfDay}
                              />
                            </View>
                          </View>
                          {errors.timeOfDay && touched.timeOfDay ? (
                            <Text style={register.textError}>* {errors.timeOfDay}</Text>) : null}
                        </View>
                        <View style={{ paddingTop: 20 }}>
                          <View style={healthcheck.viewIteminput}>
                            <Text style={healthcheck.textLabel}>Medication Name</Text>
                            <View style={healthcheck.viewInput}>
                              <TextInput
                                placeholderTextColor="#9CA3AF"
                                placeholder=""
                                style={healthcheck.textInput}
                                onChangeText={handleChange('timeOfDay')}
                                value={values.timeOfDay}
                              />
                            </View>
                          </View>
                          <View style={healthcheck.viewIteminput}>
                            <Text style={healthcheck.textLabel}>Dosage</Text>
                            <View style={healthcheck.viewInput}>
                              <TextInput
                                placeholderTextColor="#9CA3AF"
                                placeholder=""
                                style={healthcheck.textInput}
                                onChangeText={handleChange('timeOfDay')}
                                value={values.timeOfDay}
                              />
                            </View>
                          </View>
                          {errors.timeOfDay && touched.timeOfDay ? (
                            <Text style={register.textError}>* {errors.timeOfDay}</Text>) : null}
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
                                  <Text style={rendermodaledit.textCon}>Create health check schedule?</Text>
                                  <Text style={rendermodaledit.textYour}> Are you sure you want to Create health check schedule?</Text>
                                </View>
                                <View style={rendermodaledit.viewloadding}>
                                  <TouchableOpacity style={rendermodaledit.buttonCancle} onPress={handleCancel}>
                                    <Text style={rendermodaledit.textCancle}>Cancle</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity style={rendermodaledit.buttonOk} onPress={handleOK}>
                                    <Text style={rendermodaledit.textOk}>OK </Text>
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>
                          </Modal>
                          <TouchableOpacity style={healthcheck.buttonSave} onPress={() => handleSubmit()}>
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

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },

  container: {
    flexGrow: 1,
    padding: 20,
  },
  innerContainer: {
    width: '100%',
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  datePickerButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
});

export default EditTreatmentReminderScreen;
