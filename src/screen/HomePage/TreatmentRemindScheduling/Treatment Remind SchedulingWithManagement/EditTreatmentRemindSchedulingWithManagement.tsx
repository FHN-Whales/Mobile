/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { TouchableOpacity,Text,TextInput,View,Modal,KeyboardAvoidingView,TouchableWithoutFeedback,Image,ScrollView} from 'react-native';
import { useQueryClient } from '@tanstack/react-query';
import { Formik } from 'formik';
import healthcheck from '../../../../styles/HomePage/TreatmentReminderScheduling/HealthCheckSchedulingwithManager/CreateHeathCheckWithManager';
import rendermodaledit from '../../../../styles/HomePage/Home/ManagementFamily/EditMember/RenderModelEdit';
import useEditTreatment from '../../../../hook/HomePage/TreatmentRemindScheduling/Treatment Remind SchedulingWithManagement/InputInformationManualy/useEditTreatmentRemind';
const EditTreatmentReminderScreen = () => {
  const queryClient = useQueryClient();
  const {modalVisible,setModalVisible,treatment,setTreatment,navigation,route,treatmentId,data,isLoading,isError,mutationEditTreatment,useGoBack,handleOnChange,handleMedicationNameChange,handleDosageChange,} = useEditTreatment();
  return (
    <ScrollView>
      <Formik
        initialValues={treatment}
        onSubmit={async values => {
          await mutationEditTreatment.mutateAsync(values);
          queryClient.invalidateQueries({ queryKey: ['treatmentReminders'] });
        }}>
        {({handleSubmit}) => (
          <KeyboardAvoidingView
            behavior={'padding'}
            style={healthcheck.container}>
            <TouchableWithoutFeedback>
              <View style={healthcheck.inner}>
                <View style={healthcheck.viewForm}>
                  <View>
                    <View>
                      <View style={healthcheck.viewGoBack}>
                        <TouchableOpacity onPress={useGoBack}>
                          <Image source={require('../../../../image/back-icon.png')}/>
                        </TouchableOpacity>
                        <Text style={healthcheck.textFill}>Examination Information</Text>
                      </View>
                      <View style={{paddingTop: 20}}>
                        <View style={healthcheck.viewIteminput}>
                          <Text style={healthcheck.textLabel}>Time Of Day</Text>
                          <View style={healthcheck.viewInput}>
                            <TextInput
                              placeholderTextColor="#9CA3AF"
                              placeholder=" Time Of Day"
                              style={healthcheck.textInput}
                              onChangeText={text =>handleOnChange('timeOfDay', text)}
                              value={treatment.timeOfDay}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={{paddingTop: 20}}>
                        <View style={healthcheck.viewIteminput}>
                          <Text style={healthcheck.textLabel}>TreatmentTime</Text>
                          <View style={healthcheck.viewInput}>
                            <TextInput
                              placeholderTextColor="#9CA3AF"
                              placeholder="TreatmentTime"
                              style={healthcheck.textInput}
                              onChangeText={text =>handleOnChange('treatmentTime', text)}
                              value={treatment.treatmentTime}
                            />
                          </View>
                        </View>
                        <View style={{paddingTop: 20}}>
                          {treatment.medications.map((medication, index) => (
                            <View key={index}>
                              <View style={healthcheck.viewIteminput}>
                                <Text style={healthcheck.textLabel}>Medication Name</Text>
                                <View style={healthcheck.viewInput}>
                                  <TextInput
                                    placeholderTextColor="#9CA3AF"
                                    placeholder="Medication Name"
                                    style={healthcheck.textInput}
                                    onChangeText={text => handleMedicationNameChange(index, text)}
                                    value={medication.medicationName}
                                  />
                                </View>
                              </View>
                              <View style={healthcheck.viewIteminput}>
                                <Text style={healthcheck.textLabel}> Dosage</Text>
                                <View style={healthcheck.viewInput}>
                                  <TextInput
                                    placeholderTextColor="#9CA3AF"
                                    placeholder="Dosage"
                                    style={healthcheck.textInput}
                                    onChangeText={text => handleDosageChange(index, text)}
                                    value={medication.dosage !== null ? medication.dosage.toString() : ''}
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
                                  <Text style={rendermodaledit.textCon}>Update treatment schedule?</Text>
                                  <Text style={rendermodaledit.textYour}>{' '}Are you sure you want to Update health check schedule?</Text>
                                </View>
                                <View style={rendermodaledit.viewloadding}>
                                  <TouchableOpacity style={rendermodaledit.buttonCancle} onPress={() => setModalVisible(false)}>
                                    <Text style={rendermodaledit.textCancle}>Cancle</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity style={rendermodaledit.buttonOk} onPress={() => { setModalVisible(false); navigation.navigate('HomePage');}}>
                                    <Text style={rendermodaledit.textOk}>OK{' '}</Text>
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
export default EditTreatmentReminderScreen;
