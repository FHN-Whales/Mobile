import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../type/type';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const useDeleteHealthCheck = () => {
    const [selectedItemId, setSelectedItemId] = useState('');
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const queryClient = useQueryClient();

    const mutationDeleteHealthCheck = useMutation({
        mutationFn: async (healthCheckId: string) => {
            try {
                const response = await axios.delete(
                    `http://www.whales-fhn.dns-dynamic.net:8000/Reminder/DeleteHealthCheckReminder/${healthCheckId}`,
                );
                if (response.status === 200) {
                    const { completed, message } = response.data;
                    if (completed) {
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
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['healthcheckReminders'] });
          setModalVisible(true); // Hiển thị modal sau khi xóa thành công
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
