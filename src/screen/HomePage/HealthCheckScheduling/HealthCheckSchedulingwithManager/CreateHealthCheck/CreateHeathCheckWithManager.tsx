/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity, Text, TextInput, View, Modal, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Image, ScrollView } from 'react-native';
import healthcheck from '../../../../../styles/HomePage/TreatmentReminderScheduling/HealthCheckSchedulingwithManager/CreateHeathCheckWithManager';
import rendermodaledit from '../../../../../styles/HomePage/Home/ManagementFamily/EditMember/RenderModelEdit';
import { Formik } from 'formik'; // Import only Formik
import register from '../../../../../styles/FamilyManagement/Register/RegisterScreen';
import CreateHealthCheckSchema from '../../../../../hook/HomePage/HeathCheckScheduling/HealthCheckSchedulingwithManager/useValidateCreateHealthCheckScheduling';
import useCreateHealthCheck from '../../../../../hook/HomePage/HeathCheckScheduling/HealthCheckSchedulingwithManager/useCreateHealthCheckScheduling';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const CreateHeathCheckWithManagerScreen = () => {
  const  {modalVisible,setModalVisible,isDatePickerVisible,selectedDate,showDatePicker,handleConfirm,handleCancel,handleOK,useGoBack, mutationCreatHealthCheck,hideDatePicker} = useCreateHealthCheck();
  return (
    <ScrollView style={healthcheck.container}>
      <Formik
        initialValues={{
          reExaminationTime: '',
          reExaminationDate: '',
          reExaminationLocation: '',
          nameHospital: '',
          userNote: '',
        }}
        validationSchema={CreateHealthCheckSchema}
        onSubmit={values => mutationCreatHealthCheck.mutate(values)}>
        {({errors, touched, handleChange, values, handleSubmit, setFieldValue}) => (
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
                          <Image source={require('../../../../../image/back-icon.png')}/>
                        </TouchableOpacity>
                        <Text style={healthcheck.textFill}>Examination Information</Text>
                      </View>
                      <View style={{paddingTop: 20}}>
                        <View style={healthcheck.viewIteminput}>
                          <Text style={healthcheck.textLabel}>Re-examination Time</Text>
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
                        {errors.reExaminationTime && touched.reExaminationTime ? (
                          <Text style={register.textError}>* {errors.reExaminationTime}</Text>) : null}
                        <View style={healthcheck.viewIteminput}>
                          <Text style={healthcheck.textLabel}>Re-examination Date</Text>
                          <View style={healthcheck.viewInput}>
                            <TouchableOpacity  style={{ padding:15 }} onPress={showDatePicker}>
                              <Text>{selectedDate ? selectedDate : 'Re-examination Date'}</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <DateTimePickerModal
                          isVisible={isDatePickerVisible}
                          mode="date"
                          onConfirm={(date) => { handleConfirm(date); setFieldValue('reExaminationDate', date.toISOString()); }}
                          onCancel={hideDatePicker}
                        />
                        {errors.reExaminationDate && touched.reExaminationDate ? (<Text style={register.textError}>* {errors.reExaminationDate}</Text> ) : null}
                        <View style={healthcheck.viewIteminput}>
                          <Text style={healthcheck.textLabel}>Re-examination Location</Text>
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
                        {errors.reExaminationLocation && touched.reExaminationLocation ? (
                          <Text style={register.textError}>* {errors.reExaminationLocation}</Text>) : null}
                        <View style={healthcheck.viewIteminput}>
                          <Text style={healthcheck.textLabel}>Name Hospital</Text>
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
                        {errors.nameHospital && touched.nameHospital ? (<Text style={register.textError}>* {errors.nameHospital} </Text>) : null}
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
                        {errors.userNote && touched.userNote ? (<Text style={register.textError}>* {errors.userNote}</Text> ) : null}
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
                          <TouchableOpacity style={healthcheck.buttonSave}onPress={() => handleSubmit()}>
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
