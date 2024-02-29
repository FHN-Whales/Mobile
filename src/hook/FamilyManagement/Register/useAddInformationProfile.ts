import { useState } from 'react';
import { useNavigation, NavigationProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../type/type';
import axios from 'axios';
import { ApiGetNewUser } from '../../../api/useApiGetNewUser';
const useAddInformationProfile = () =>{
    const route = useRoute();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { familyId, password, role } = route.params as {familyId:string, email:string, password: string; role: string };
    const [username, setUsername] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [dateOfBirth, setDateOfBirth] = useState<string>('');
    const handleSubmit = () => {
      axios
        .post(ApiGetNewUser, {
        familyId,
        password,
        role,
        username,
        gender,
        dateOfBirth,
        })
        .then(response => {
          console.log(response.data);
          if (response.data.completed) {
            navigation.navigate('LoginScreen');
          } else {
            console.log('Verification Failed', response.data.message);
          }
        })
        .catch(error => {
          console.error('Verification failed:', error);
        });
    };
    const useGoBack = () => {
      navigation.goBack();
    };
    return {route,navigation, familyId, password, role, username,setUsername,gender,setGender,dateOfBirth,setDateOfBirth,handleSubmit,useGoBack};
};
export default useAddInformationProfile;
