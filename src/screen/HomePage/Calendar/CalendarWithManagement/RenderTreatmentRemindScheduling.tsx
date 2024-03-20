/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, ActivityIndicator, TouchableOpacity, Image, Modal } from 'react-native';
import useRenderTreatmentRemindScheduling from '../../../../hook/HomePage/Calendar/ManagementWithFamily/useRenderTreatmentRemindScheduling';
import rendertreatmentremindscheduling from '../../../../styles/HomePage/Calender/CalendarWithManagement/RenderTreatmentRemindScheduling';
import renderhealthscheduling from '../../../../styles/HomePage/Calender/CalendarWithManagement/RenderHealthCheckScheduling';
import axios from 'axios';
import rendermodaledit from '../../../../styles/HomePage/Home/ManagementFamily/EditMember/RenderModelEdit';
import useDeleteTreatment from '../../../../hook/HomePage/TreatmentRemindScheduling/Treatment Remind SchedulingWithManagement/InputInformationManualy/useDelete';
const RenderTreatmentRemindScheduling = () => {
  const {data, isLoading, isError,useNavigationEditTreatmentScheduling} = useRenderTreatmentRemindScheduling();
  const {selectedItemId,setSelectedItemId,modalVisible,setModalVisible,navigation,queryClient,mutationDeleteHealthCheck,handleDelete} = useDeleteTreatment()
  const [showLoader, setShowLoader] = useState(true); // State để điều khiển hiển thị hoạt động đang tải
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  const renderItem = ({ item }: { item: TreatmentReminder }) => (
    <View style={rendertreatmentremindscheduling.renderViewItem}>
      <View style={rendertreatmentremindscheduling.viewItem}>
        <Text style={rendertreatmentremindscheduling.textDate}>Username:</Text>
        <Text style={rendertreatmentremindscheduling.text}> {item.user.username}</Text>
      </View>
      <View style={rendertreatmentremindscheduling.viewTitle}>
        <Text style={rendertreatmentremindscheduling.textDate}>Treatment Info:</Text>
      </View>
      {item.treatmentInfo.map((info: any, index: number) => (
        <View style={rendertreatmentremindscheduling.viewTimeOfDay} key={index}>
          <View style={renderhealthscheduling.viewSession}>
            <TouchableOpacity onPress={() => handleDelete(info._id)}>
              <Image source={require('../../../../image/Vector.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => useNavigationEditTreatmentScheduling(info._id)}>
              <Image source={require('../../../../image/icon_pencil.png')} />
            </TouchableOpacity>
          </View>
          <View style={rendertreatmentremindscheduling.viewItem}>
            <Text style={rendertreatmentremindscheduling.textDate}>Time of Day:</Text>
            <Text style={rendertreatmentremindscheduling.text}>{''} {info.timeOfDay}</Text>
          </View>
          <View style={rendertreatmentremindscheduling.viewItem}>
            <Text style={rendertreatmentremindscheduling.textDate}>{''}Treatment Times:</Text>
            <Text style={rendertreatmentremindscheduling.text}>{info.treatmentTime}</Text>
          </View>
          {info.medications.map((medication: { medicationName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; dosage: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, medicationIndex: React.Key | null | undefined) => (
            <View key={medicationIndex}>
              <View style={rendertreatmentremindscheduling.viewItem}>
                <Text style={rendertreatmentremindscheduling.textDate}>{''}Medication Name:</Text>
                <Text style={rendertreatmentremindscheduling.text}>{medication.medicationName}</Text>
              </View>
              <View style={rendertreatmentremindscheduling.viewItem}>
                <Text style={rendertreatmentremindscheduling.textDate}>{''}Dosage:</Text>
                <Text style={rendertreatmentremindscheduling.text}>{medication.dosage}</Text>
              </View>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
  return (
    <View >
      {showLoader ? (
        <ActivityIndicator size="large" color="#87CEFA" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
         <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          navigation.navigate('HomePage');
        }}>
        <View style={rendermodaledit.centeredView}>
          <View style={rendermodaledit.modalView}>
            <View style={rendermodaledit.viewtitle}>
              <Text style={rendermodaledit.textCon}>
                Delete treament schedule?
              </Text>
              <Text style={rendermodaledit.textYour}>
                Are you sure you want to delete treatment schedule?
              </Text>
            </View>
            <View style={rendermodaledit.viewloadding}>
              <TouchableOpacity
                style={rendermodaledit.buttonCancle}
                onPress={() => setModalVisible(false)}>
                <Text style={rendermodaledit.textCancle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={rendermodaledit.buttonOk}
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('HomePage');
                }}>
                <Text style={rendermodaledit.textOk}>OK </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default RenderTreatmentRemindScheduling;
