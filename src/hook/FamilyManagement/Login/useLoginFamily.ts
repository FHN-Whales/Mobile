import {  useRef, useState } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../type/type';
import { ApiSignIn } from '../../../api/useApiSignIn';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { Keyboard } from 'react-native';
interface Login {
    email: string;
    password: string;
  }
const useSignInWithFamily = () =>{
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const useNavigationRegisterScreen = () => {
      navigation.navigate('RegisterScreen');
    };
    const useNavigationForgetPasswordScreen = () => {
      navigation.navigate('ForgetPasswordScreen');
    };
    const inputRef: any = useRef();
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
    const handlePasswordFocus = () => {
      setIsPasswordFocused(true);
      setIsEmailFocused(false);
    };
    const handleEmailFocus = () => {
      setIsEmailFocused(true);
      setIsPasswordFocused(false);
    };
    const dismissKeyboard = () => {
      Keyboard.dismiss();
      setIsEmailFocused(false);
      setIsPasswordFocused(false);
    };
    const dismissKeyboardAndHideButton = () => {
      dismissKeyboard();
      setIsEmailFocused(false);
      setIsPasswordFocused(false);
    };
    const mutationLoginFamily = useMutation({
      mutationFn: async (data: Login) => {
        try {
          const response = await axios.post(ApiSignIn, data);
          console.log(data);
          // setIsLoading(true);
          setTimeout(async () => {
            if (response.status === 200) {
              const { completed, message, familyId } = response.data;
              console.log('data', data);
              if (completed && familyId) {
                // setModalVisible(true);
                navigation.navigate('LoginWithRoleScreen', { familyId: familyId });
                console.log('Login successfully.');
                console.log(familyId);
              } else {
                console.log('Registration failed:', message);
              }
              // setIsLoading(false);
            } else {
              console.log('Response:', response);
              console.log('Error:', 'Unexpected response status');
            }
          }, 2000);
        } catch (error: any) {
          console.log('Error sending the request:', error.message);
          if (error.response && error.response.status === 409) {
            console.log('Email is already registered');
          } else {
            console.log('Unexpected error:', error);
          }
        }
      },
    });
    return { navigation,useNavigationRegisterScreen,useNavigationForgetPasswordScreen,inputRef,showPassword,isPasswordFocused,setIsPasswordFocused,isEmailFocused,setIsEmailFocused,toggleShowPassword,handlePasswordFocus,handleEmailFocus,dismissKeyboard,dismissKeyboardAndHideButton,mutationLoginFamily};
};
export default  useSignInWithFamily;
