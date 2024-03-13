import {useRef, useState} from 'react';
import { Alert} from 'react-native';
import {useNavigation, NavigationProp, ParamListBase, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../type/type';
import axios from 'axios';
import {ApiVerifyCode} from '../../../api/useApiVerifyCode';
const useVerifyCode = (route: RouteProp<ParamListBase>) =>{
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const otpInputs = useRef<any[]>([]);
    const { familyId , email } = route.params as {familyId:string, email:string};
    console.log(familyId);
    const handleVerification = () => {
      const enteredOTP = code.join('');
      axios
        .post(ApiVerifyCode, {
          familyId,
          code: enteredOTP,
        })
        .then(response => {
          console.log('Verification successful:', response.data);
          if (response.data.completed) {
            navigation.navigate('RegisterAsManagerScreen' ,{ familyId: familyId  });
          } else {
            console.log('Verification Failed', response.data.message);
          }
        })
        .catch(error => {
          console.error('Verification failed:', error);
          Alert.alert(
            'Verification Failed',
            'Invalid OTP. Please enter the correct code.',
          );
        });
    };
    const focusNextInput = (index: number) => {
      if (otpInputs.current[index + 1]) {
        otpInputs.current[index + 1].focus();
      }
    };
    const useGoBack = () => {
      navigation.navigate('RegisterScreen');
    };
    return {navigation,code,setCode,otpInputs,familyId,email,handleVerification,focusNextInput,useGoBack};
};
export default useVerifyCode;
