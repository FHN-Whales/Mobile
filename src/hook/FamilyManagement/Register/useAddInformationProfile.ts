import { useState } from 'react';
import { useNavigation, NavigationProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../type/type';
import axios from 'axios';
import { ApiGetNewUser } from '../../../api/useApiGetNewUser';
const useAddInformationProfile = () =>{
  const route = useRoute();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {  familyId, email, password, role } = route.params as {  familyId: string; email: string; password: string; role: string };
  const [username, setUsername] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    // Validation
    if (!username || !gender || !dateOfBirth) {
      setError('Please fill in all fields');
      return;
    }

    axios
      .post(ApiGetNewUser, {
        familyId,
        email,
        password,
        role,
        username,
        gender,
        dateOfBirth: dateOfBirth?.toISOString() || '',
      })
      .then(response => {
        console.log(response.data);
        if (response.data.completed) {
          navigation.navigate('LoginScreen');
        } else {
          console.log('Verification Failed', response.data.message);
        }
      })
      // eslint-disable-next-line @typescript-eslint/no-shadow
      .catch(error => {
        console.error('Verification failed:', error);
      });
  };

  const useGoBack = () => {
    navigation.goBack();
  };
    return {route,navigation, familyId, password, role,error, username,open,setUsername,setError, setOpen,gender,setGender,dateOfBirth,setDateOfBirth,handleSubmit,useGoBack};
};
export default useAddInformationProfile;
