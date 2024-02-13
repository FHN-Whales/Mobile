/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import rendermodaleditprofile from '../../../../styles/HomePage/Profile/EditProfile/RenderModelEditProfile';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../type/type';
const renderModalEditProfile = () => {
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
      navigation.navigate('Profile');
    };
  return (
    <View style={rendermodaleditprofile.viewbutton}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={rendermodaleditprofile.centeredView}>
          <View style={rendermodaleditprofile.modalView}>
            <View style={rendermodaleditprofile.viewtitle}>
              <Text style={rendermodaleditprofile.textCon}>Edit Profile</Text>
              <Text style={rendermodaleditprofile.textYour}>
                Edit Profile successfully!
              </Text>
            </View>
            <View style={rendermodaleditprofile.viewloadding}>
              <TouchableOpacity style={rendermodaleditprofile.buttonCancle}onPress={handleCancel}>
                <Text style={rendermodaleditprofile.textCancle}>Cancle</Text>
              </TouchableOpacity>
              <TouchableOpacity style={rendermodaleditprofile.buttonOk} onPress={handleOK}>
                <Text style={rendermodaleditprofile.textOk}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={rendermodaleditprofile.buttonCreate}
        onPress={handleCreateMember}>
        <Text style={rendermodaleditprofile.textCreate}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
export default renderModalEditProfile;
