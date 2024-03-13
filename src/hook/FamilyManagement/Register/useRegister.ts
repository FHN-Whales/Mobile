import { RootStackParamList } from '../../../type/type';
import { useEffect, useRef, useState } from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import { ApiSignUp } from '../../../api/useAuthApi';
import axios from 'axios';
import {useMutation} from '@tanstack/react-query';
import { Alert, Keyboard } from 'react-native';
interface Register {
  email: string;
  password: string;
  confirmPassword: string;
}
const useRegister = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const useNavigationLoginScreen = () => {
    navigation.navigate('LoginScreen');
  };
  const inputRef: any = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
    setIsConfirmPasswordFocused(false);
    setIsEmailFocused(false);
  };
  const handleConfirmPasswordFocus = () => {
    setIsPasswordFocused(false);
    setIsConfirmPasswordFocused(true);
    setIsEmailFocused(false);
  };
  const handleEmailFocus = () => {
    setIsEmailFocused(true);
    setIsPasswordFocused(false);
    setIsConfirmPasswordFocused(false);
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
    setIsEmailFocused(false);
    setIsPasswordFocused(false);
    setIsConfirmPasswordFocused(false);
  };
  const dismissKeyboardAndHideButton = () => {
    dismissKeyboard();
    setIsEmailFocused(false);
    setIsPasswordFocused(false);
    setIsConfirmPasswordFocused(false);
  };
  const mutationRegisterUser = useMutation({
    mutationFn: async (data: Register) => {
      try {
        const response = await axios.post(ApiSignUp, data);
        console.log(data);
        setIsLoading(true);
        setTimeout(async () => {
          if (response.status === 200) {
            const { completed, message, familyId } = response.data;
            console.log('data', data);
            if (completed && familyId) {
              setModalVisible(true);
              navigation.navigate('VerifyCodeScreen', { familyId: familyId, email: data.email });
              console.log('Email verification sent successfully.');
              console.log(familyId);
            } else {
              Alert.alert( message);
            }
            setIsLoading(false);
          } else {
            console.log('Response:', response);
            console.log('Error:', 'Unexpected response status');
          }
        }, 2000);
      } catch (error: any) {
        console.log('Error sending the request:', error.message);
        if (error.response && error.response.status === 409) {
          Alert.alert('Email is already registered');
        } else {
          console.log('Unexpected error:', error);
        }
      }
    },
  });
  const { data } = mutationRegisterUser;
  useEffect(() => {
    if (modalVisible && data) {
      setTimeout(() => {
        setModalVisible(false);
      }, 2000);
    }
  }, [modalVisible, data]);
  return { modalVisible, setModalVisible, isLoading,setIsLoading,useNavigationLoginScreen,inputRef,showPassword,setShowPassword,showConfirmPassword,setShowConfirmPassword,isPasswordFocused,setIsPasswordFocused,isConfirmPasswordFocused,setIsConfirmPasswordFocused,isEmailFocused,setIsEmailFocused,mutationRegisterUser,toggleShowPassword,toggleShowConfirmPassword,handleConfirmPasswordFocus,handleEmailFocus,dismissKeyboard,dismissKeyboardAndHideButton,handlePasswordFocus,};
};
export default useRegister;
