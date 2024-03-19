/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { TouchableOpacity, Text, TextInput, View, Modal, ScrollView, Image } from 'react-native';
import { Formik } from 'formik';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import healthcheck from '../../../../styles/HomePage/TreatmentReminderScheduling/HealthCheckSchedulingwithManager/CreateHeathCheckWithManager';
import rendermodaledit from '../../../../styles/HomePage/Home/ManagementFamily/EditMember/RenderModelEdit';
import useEditHealthCheck from '../../../../hook/HomePage/HeathCheckScheduling/HealthCheckSchedulingwithManager/useEditHealthCheck';
import { useQueryClient } from '@tanstack/react-query';
const EditHeathCheckWithManagerScreen = () => {
  const queryClient = useQueryClient();
  const {modalVisible, setModalVisible,isDatePickerVisible,setDatePickerVisibility,selectedDate,setSelectedDate,healthCheck,setHealthCheck,showDatePicker,hideDatePicker,handleConfirm,navigation,mutationEditHealthCheck,healthCheckId,data,isLoading,isError,useGoBack,handleOnChange} = useEditHealthCheck();
  return (
    <ScrollView style={healthcheck.container}>
      <Formik
        initialValues={healthCheck}
        // validationSchema={CreateHealthCheckSchema}
        onSubmit={async (values) => {
          await mutationEditHealthCheck.mutateAsync(values);
          queryClient.invalidateQueries({ queryKey: ['healthcheckReminders'] });
        }}
      >
        {({ errors, touched, handleChange, values, handleSubmit, setFieldValue }) => (
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
                      <Text style={healthcheck.textLabel}>Re-examination Time</Text>
                      <View style={healthcheck.viewInput}>
                        <TextInput
                          placeholderTextColor="#9CA3AF"
                          placeholder="Re-examination Time"
                          style={healthcheck.textInput}
                          onChangeText={(text) => handleOnChange('reExaminationTime', text)}
                          value={healthCheck.reExaminationTime}
                        />
                      </View>
                    </View>
                    {/* {errors.reExaminationTime && touched.reExaminationTime ? (
                      <Text style={register.textError}>* {errors.reExaminationTime}</Text>
                    ) : null} */}
                    <View style={healthcheck.viewIteminput}>
                      <Text style={healthcheck.textLabel}>Re-examination Date</Text>
                      <View style={healthcheck.viewInput}>
                        <TouchableOpacity style={{ padding: 15 }} onPress={showDatePicker}>
                          <Text>{selectedDate ? selectedDate : 'Re-examination Date'}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <DateTimePickerModal
                      isVisible={isDatePickerVisible}
                      mode="date"
                      onConfirm={(date) => {
                        handleConfirm(date);
                        setFieldValue('reExaminationDate', date.toISOString());
                      }}
                      onCancel={hideDatePicker}
                    />
                    {/* {errors.reExaminationDate && touched.reExaminationDate ? (
                      <Text style={register.textError}>* {errors.reExaminationDate}</Text>
                    ) : null} */}
                    <View style={healthcheck.viewIteminput}>
                      <Text style={healthcheck.textLabel}>Re-examination Location</Text>
                      <View style={healthcheck.viewInput}>
                        <TextInput
                          placeholderTextColor="#9CA3AF"
                          placeholder="Re-examination Location"
                          style={healthcheck.textInput}
                          onChangeText={(text) => handleOnChange('reExaminationLocation', text)}
                          value={healthCheck.reExaminationLocation}
                        />
                      </View>
                    </View>
                    {/* {errors.reExaminationLocation && touched.reExaminationLocation ? (
                      <Text style={register.textError}>* {errors.reExaminationLocation}</Text>
                    ) : null} */}
                    <View style={healthcheck.viewIteminput}>
                      <Text style={healthcheck.textLabel}>Name Hospital</Text>
                      <View style={healthcheck.viewInput}>
                        <TextInput
                          placeholderTextColor="#9CA3AF"
                          placeholder="Name Hospital"
                          style={healthcheck.textInput}
                          onChangeText={(text) => handleOnChange('nameHospital', text)}
                          value={healthCheck.nameHospital}
                        />
                      </View>
                    </View>
                    {/* {errors.nameHospital && touched.nameHospital ? (
                      <Text style={register.textError}>* {errors.nameHospital} </Text>
                    ) : null} */}
                    <View style={healthcheck.viewIteminput}>
                      <Text style={healthcheck.textLabel}>User Note</Text>
                      <View style={healthcheck.viewInput}>
                        <TextInput
                          placeholderTextColor="#9CA3AF"
                          placeholder="User Note"
                          style={healthcheck.textInput}
                          onChangeText={(text) => handleOnChange('userNote', text)}
                          value={healthCheck.userNote}
                        />
                      </View>
                    </View>
                    {/* {errors.userNote && touched.userNote ? (
                      <Text style={register.textError}>* {errors.userNote}</Text>
                    ) : null} */}
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
                              <Text style={rendermodaledit.textCon}>Update health check schedule?</Text>
                              <Text style={rendermodaledit.textYour}> Are you sure you want to update health check schedule?</Text>
                            </View>
                            <View style={rendermodaledit.viewloadding}>
                              <TouchableOpacity style={rendermodaledit.buttonCancle} onPress={() => setModalVisible(false)}>
                                <Text style={rendermodaledit.textCancle}>Cancel</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={rendermodaledit.buttonOk} onPress={() => {
                                setModalVisible(false);
                                navigation.navigate('HomePage');
                              }}>
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
        )}
      </Formik>
    </ScrollView>
  );
};
export default EditHeathCheckWithManagerScreen;
