import { useState, useEffect } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../../../type/type';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
const useDeleteTreatment = () =>{
    const [selectedItemId, setSelectedItemId] = useState('');
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const queryClient = useQueryClient();
  
    const mutationDeleteHealthCheck = useMutation({
        mutationFn: async (treatmentReminderId: string) => {
            try {
                const response = await axios.delete(
                    `http://www.whales-fhn.dns-dynamic.net:8000/Reminder/DeleteTreatmentReminders/${treatmentReminderId}`,
                );
                if (response.status === 200) {
                    const { completed, message } = response.data;
                    if (completed) {
                        console.log('Treament Schedule successfully deleted.');
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
          queryClient.invalidateQueries({ queryKey: ['treatmentReminders'] });
          setModalVisible(true); // Hiển thị modal sau khi xóa thành công
        },
    });
  
    const handleDelete = (treatmentReminderId: string) => {
        setSelectedItemId(treatmentReminderId);
        mutationDeleteHealthCheck.mutate(treatmentReminderId);
    };
    return {
        selectedItemId,
        setSelectedItemId,
        modalVisible,
        setModalVisible,
        navigation,
        queryClient,
        mutationDeleteHealthCheck,
        handleDelete,
    }
}
export default useDeleteTreatment;