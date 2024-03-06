import { useEffect, useRef, useState } from 'react';
import { Keyboard } from 'react-native';
import { useNavigation, NavigationProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../type/type';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { ApiSignInWithRole } from '../../../api/useApiSignInWithRole';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {requestUserPermission} from '../../../../getFCMTToken';
interface LoginWithRole {
  role: string;
  password: string;
}

const useLoginWithRole = () => {
  const route = useRoute();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);
  const { familyId } = route.params as { familyId: string };
  const [isLoading, setIsLoading] = useState(false);
  const inputRef: any = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [roleError, setRoleError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // const [error, setError] = useState('');
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

  const mutationLoginWithRole = useMutation({
    mutationFn: async (data: LoginWithRole) => {
      try {
         const devideId = await requestUserPermission();
         console.log('devideId',devideId);
        const requestData = {
          ...data,
          familyId: familyId,
          deviceToken: devideId,
        };
        console.log(requestData);

        const response = await axios.post(ApiSignInWithRole, requestData);
        setIsLoading(true);

        if (response.status === 200) {
          const { completed, message, userId } = response.data;

          if (completed && userId) {
            await AsyncStorage.setItem('userId', userId);
            await AsyncStorage.setItem('familyId', familyId);
            setModalVisible(true);
          } else {
            console.log('Sign-in failed:', message);
            // setError(message); // Lưu trữ thông báo lỗi chungelse if (message.includes('password')) {
              setRoleError(message);
              setPasswordError(message);
          }
        } else {
          console.log('Error:', 'Unexpected response');
        }
        setIsLoading(false);
      // eslint-disable-next-line no-catch-shadow, @typescript-eslint/no-shadow
      } catch (error) {
        console.log('Request error:', error);
      }
    },
  });

  useEffect(() => {
    if (modalVisible) {
      setTimeout(() => {
        setModalVisible(false);
        navigation.navigate('HomeScreen');
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalVisible]);


  return {
    route,
    navigation,
    modalVisible,
    setModalVisible,
    familyId,
    isLoading,
    setIsLoading,
    inputRef,
    showPassword,
    setShowPassword,
    isPasswordFocused,
    setIsPasswordFocused,
    isEmailFocused,
    setIsEmailFocused,
    toggleShowPassword,
    handlePasswordFocus,
    handleEmailFocus,
    dismissKeyboard,
    dismissKeyboardAndHideButton,
    mutationLoginWithRole,
    roleError,
    setRoleError,
    passwordError,
    setPasswordError,
  };
};

export default useLoginWithRole;
