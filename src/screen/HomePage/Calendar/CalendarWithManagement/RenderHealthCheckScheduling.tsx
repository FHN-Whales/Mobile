/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import {ActivityIndicator, FlatList, Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import renderhealthscheduling from '../../../../styles/HomePage/Calender/CalendarWithManagement/RenderHealthCheckScheduling';
import useRenderHealthCheck from '../../../../hook/HomePage/Calendar/ManagementWithFamily/useRenderHealthCheck';
import rendermodaledit from '../../../../styles/HomePage/Home/ManagementFamily/EditMember/RenderModelEdit';
import useDeleteHealthCheck from '../../../../hook/HomePage/HeathCheckScheduling/HealthCheckSchedulingwithManager/useDeleteHealthCheck';
const renderHealthScheduling = () => {
  const {data,isLoading,refetch,formatDate,useNavigationEditHealthCheck} = useRenderHealthCheck();
  const {selectedItemId,setSelectedItemId,modalVisible,setModalVisible,navigation,mutationDeleteHealthCheck,handleDelete} = useDeleteHealthCheck();
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const renderItem = ({item}: {item: HealthCheck}) => (
    <View style={renderhealthscheduling.renderViewItem}>
      <View style={renderhealthscheduling.viewItem}>
        <Text style={renderhealthscheduling.textDate}>Username:</Text>
        <Text style={renderhealthscheduling.text}> {item.user.username}</Text>
      </View>
      <View style={renderhealthscheduling.viewTitle}>
        <Text style={renderhealthscheduling.textDate}>Health Check Info:</Text>
      </View>
      {item.reminders &&
        item.reminders.map((info: any, index: number) => (
          <View style={renderhealthscheduling.viewTimeOfDay} key={index}>
            <View style={renderhealthscheduling.viewSession}>
            <TouchableOpacity onPress={() => handleDelete(info._id)}>
                <Image source={require('../../../../image/Vector.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => useNavigationEditHealthCheck(info._id)}>
                <Image source={require('../../../../image/icon_pencil.png')} />
              </TouchableOpacity>
            </View>
            <View style={renderhealthscheduling.viewItem}>
              <Text style={renderhealthscheduling.textDate}>Re examination Time:</Text>
              <Text style={renderhealthscheduling.text}>{' '}{info.reExaminationTime}</Text>
            </View>
            <View style={renderhealthscheduling.viewItem}>
              <Text style={renderhealthscheduling.textDate}>{' '}Re Examination Date:</Text>
              <Text style={renderhealthscheduling.text}>{formatDate(info.reExaminationDate)}</Text>
            </View>
            <View style={renderhealthscheduling.viewItem}>
              <Text style={renderhealthscheduling.textDate}>{' '}Re Examination Location:</Text>
              <Text style={renderhealthscheduling.text}>{info.reExaminationLocation}</Text>
            </View>
            <View style={renderhealthscheduling.viewItem}>
              <Text style={renderhealthscheduling.textDate}>Name Hospital:</Text>
              <Text style={renderhealthscheduling.text}>{info.nameHospital}</Text>
            </View>
            <View style={renderhealthscheduling.viewItem}>
              <Text style={renderhealthscheduling.textDate}>User Note:</Text>
              <Text style={renderhealthscheduling.text}>{info.userNote}</Text>
            </View>
          </View>
        ))}
    </View>
  );
  return (
    <View>
      {showLoader ? (
        <ActivityIndicator size="large" color="#87CEFA" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          onRefresh={refetch}
          refreshing={isLoading}
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
                Delete health check schedule?
              </Text>
              <Text style={rendermodaledit.textYour}>
                Are you sure you want to delete health check schedule?
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
export default renderHealthScheduling;
