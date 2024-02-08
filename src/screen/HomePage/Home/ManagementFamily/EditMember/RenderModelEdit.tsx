/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import rendermodaledit from '../../../../../styles/HomePage/Home/ManagementFamily/EditMember/RenderModelEdit';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../../type/type';
const renderModalEdit = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [modalVisible, setModalVisible] = useState(false);
    const handleCreateMember = () => {
        setModalVisible(true);
    };
    const handleCancel = () => {
      setModalVisible(false);
    };
    const handleOK = () => {
      setModalVisible(false);
      navigation.navigate('AllMemberFamilyScreen');
    };
  return (
    <View style={rendermodaledit.viewbutton}>
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
              <Text style={rendermodaledit.textCon}>Edit Member</Text>
              <Text style={rendermodaledit.textYour}>
                Edit member successfully!
              </Text>
            </View>
            <View style={rendermodaledit.viewloadding}>
              <TouchableOpacity style={rendermodaledit.buttonCancle} onPress={handleCancel}>
                <Text style={rendermodaledit.textCancle}>Cancle</Text>
              </TouchableOpacity>
              <TouchableOpacity style={rendermodaledit.buttonOk}onPress={handleOK}>
                <Text style={rendermodaledit.textOk}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={rendermodaledit.buttonCreate}
        onPress={handleCreateMember}>
        <Text style={rendermodaledit.textCreate}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
export default renderModalEdit;
