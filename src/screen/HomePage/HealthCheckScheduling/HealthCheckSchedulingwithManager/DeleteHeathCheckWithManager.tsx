import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Modal } from 'react-native';
import { useMutation } from '@tanstack/react-query';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { RootStackParamList } from '../../../../type/type';
import rendermodaledit from '../../../../styles/HomePage/Home/ManagementFamily/EditMember/RenderModelEdit';
import healthcheck from '../../../../styles/HomePage/TreatmentReminderScheduling/HealthCheckSchedulingwithManager/CreateHeathCheckWithManager';

const DeleteHeathCheckWithManagerScreen = () => {
  // const route = useRoute();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  // const healthCheckId = route.params.id;
  const mutationDeleteHealthCheck = useMutation({
    mutationFn: async () => {
      try {
        const response = await axios.delete(`http://3.25.181.251:8000/Reminder/DeleteHealthCheckReminder/${healthCheckId}`);
        if (response.status === 200) {
          const { completed, message } = response.data;
          if (completed) {
            setModalVisible(true);
            console.log('Health Check successfully deleted.');
          } else {
            console.log('Failed to delete Health Check:', message);
          }
        } else {
          console.log('Unexpected response status:', response.status);
        }
      } catch (error: any) {
        console.log('Error deleting Health Check:', error.message);
      }
    },
  });

  const handleDelete = () => {
    mutationDeleteHealthCheck.mutate();
  };

  return (
    <View style={healthcheck.viewButton}>
      <TouchableOpacity
        style={healthcheck.buttonSave}
        onPress={handleDelete}>
        <Text style={healthcheck.textCreate}>Delete</Text>
      </TouchableOpacity>

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
export default DeleteHeathCheckWithManagerScreen;
