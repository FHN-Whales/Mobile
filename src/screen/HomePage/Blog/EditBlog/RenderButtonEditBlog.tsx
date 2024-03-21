/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import rendermodalcreate from '../../../../styles/HomePage/Home/ManagementFamily/AddMember/RenderModelCreate';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../type/type';
const renderButtonEditBlog = () => {
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
      navigation.navigate('Blog');
    };
  return (
    <View style={rendermodalcreate.viewbutton}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={rendermodalcreate.centeredView}>
          <View style={rendermodalcreate.modalView}>
            <View style={rendermodalcreate.viewtitle}>
              <Text style={rendermodalcreate.textCon}>Edit Blog</Text>
              <Text style={rendermodalcreate.textYour}>
              Are you sure you want to edit this Blog?
              </Text>
            </View>
            <View style={rendermodalcreate.viewloadding}>
              <TouchableOpacity style={rendermodalcreate.buttonCancle}onPress={handleCancel}>
                <Text style={rendermodalcreate.textCancle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={rendermodalcreate.buttonOk} onPress={handleOK}>
                <Text style={rendermodalcreate.textOk}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={rendermodalcreate.buttonCreate}
        onPress={handleCreateMember}>
        <Text style={rendermodalcreate.textCreate}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default renderButtonEditBlog;
