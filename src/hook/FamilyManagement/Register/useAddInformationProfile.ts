/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-catch-shadow */
/* eslint-disable @typescript-eslint/no-shadow */
import { useState } from 'react';
import { useNavigation, NavigationProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../type/type';
import axios from 'axios';
import { ApiGetNewUser } from '../../../api/useApiGetNewUser';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { requestUserPermission } from '../../../../getFCMTToken';
const useAddInformationProfile = () =>{
  const route = useRoute();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { familyId, email, password, role } = route.params as {  familyId: string; email: string; password: string; role: string };
  const [username, setUsername] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const [deviceToken, setDeviceToken] = useState<string>('');
  console.log(familyId);
  const handleSubmit = async () => {
    if (!username || !gender ) {
      setError('Please fill in all fields');
      return;
    }
    try {
      const token = await requestUserPermission();
      setDeviceToken(token);
      const response = await axios.post(ApiGetNewUser, {
        familyId,
        email,
        password,
        role,
        username,
        gender,
        deviceToken: token,
        dateOfBirth: dateOfBirth?.toISOString() || '',
      });
      console.log(response.data);
      if (response.data.completed) {
        const userId = response.data.userId;
        console.log('devideId', token);
        console.log(userId);
        await AsyncStorage.setItem('familyId', familyId);
        await AsyncStorage.setItem('userId', userId);
        Alert.alert('Sign up  with member successfully !');
        navigation.navigate('HomeScreen');
      } else {
        console.log('Verification Failed', response.data.message);
      }
    } catch (error) {
      console.error('Verification failed:', error);
    }
  };
  const useGoBack = () => {
    navigation.goBack();
  };
  return {route,navigation,familyId,password,role,error,username,open,setUsername,setError,setOpen,gender,setGender,dateOfBirth,setDateOfBirth,handleSubmit,useGoBack,};
};

export default useAddInformationProfile;
