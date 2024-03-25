import { useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
interface Medication {
    medicationName: string;
    dosage: number | null;
    _id: string;
}
interface TreatmentNotification {
    _id: string;
    treatmentTime: string;
    medications: Medication[];
    noteTreatment: string | null;
    username: string;
    deviceToken: string;
    userId: string;
    __v: number;
}
interface HealthNotification {
    _id: string;
    reExaminationDate: string;
    reExaminationTime: string;
    reExaminationLocation: string;
    nameHospital: string;
    userNote: string;
    username: string;
    deviceToken: string;
    userId: string;
    __v: number;
}
interface DataNotifications {
    treatmentNotifications: TreatmentNotification[];
    healthNotifications: HealthNotification[];
}
const useShowNotification = () =>{
    const shouldRefetch = useRef<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<'treatment' | 'health'>('treatment'); 
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { data, isError, refetch } = useQuery<DataNotifications[]>({
        queryKey: ['dataNotifications'],
        queryFn: async () => {
            try {
                const userId = await AsyncStorage.getItem('userId');
                console.log(userId);
                const response = await axios.get<DataNotifications[]>(
                    `http://www.whales-fhn.dns-dynamic.net:8000/Notification/getNotifications/${userId}`,
                    {
                        headers: {
                            Accept: 'application/json',
                        },
                    },
                );
                if (response.status === 200) {
                    const outData = response.data.dataNotifications;
                    console.log('====================================');
                    console.log(response.data.dataNotifications);
                    console.log('====================================');
                    shouldRefetch.current = true;
                    return outData;
                } else if (response.status === 404) {
                    throw new Error('Data not found');
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data: ', error);
                throw new Error('Failed to fetch data');
            }
        },
    });
    useEffect(() => {
        setIsLoading(true); // Reset isLoading to true on each render
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 200);
        return () => clearTimeout(timer);
    }, []);
    return {shouldRefetch,selectedCategory,setSelectedCategory, isLoading, setIsLoading,data,isError, refetch};};
export default  useShowNotification;
