/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../type/type';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
const useDeleteHealthCheck = () =>{
    const [selectedItemId, setSelectedItemId] = useState('');
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const mutationDeleteHealthCheck = useMutation({
      mutationFn: async (healthCheckId: string) => {
        try {
          const response = await axios.delete(
            `http://3.25.181.251:8000/Reminder/DeleteHealthCheckReminder/${healthCheckId}`,
          );
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
    const handleDelete = (healthCheckId: string) => {
      setSelectedItemId(healthCheckId);
      mutationDeleteHealthCheck.mutate(healthCheckId);
    };
    return {
        selectedItemId,
        setSelectedItemId,
        modalVisible,
        setModalVisible,
        navigation,
        mutationDeleteHealthCheck,
        handleDelete,
    };

};
export default useDeleteHealthCheck;
