import { useEffect, useRef, useState } from 'react';
import {  Keyboard } from 'react-native';
import { useNavigation, NavigationProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../type/type';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { ApiSignInWithRole } from '../../../api/useApiSignInWithRole';
interface LoginWithRole {
    role: string;
    password: string;
}
const useLoginWithRole = () =>{
    const route = useRoute();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [modalVisible, setModalVisible] = useState(false);
    const { familyId } = route.params as {familyId:string};
    console.log(familyId);
    const [isLoading, setIsLoading] = useState(false);
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
    const mutationLoginWithRole = useMutation({
      mutationFn: async (data: LoginWithRole) => {
        try {
          const requestData = {
            ...data,
            familyId: familyId,
          };
          const response = await axios.post(ApiSignInWithRole, requestData);
          console.log(requestData);
          setIsLoading(true);
          if (response.status === 200) {
            const { completed, message } = response.data;
            if (completed) {
              setModalVisible(true);
              console.log('Đăng nhập thành công.');
            } else {
              console.log('Đăng nhập thất bại:', message);
            }
          } else {
            console.log('Phản hồi:', response);
            console.log('Lỗi:', 'Phản hồi không mong đợi');
          }
          setIsLoading(false);
        } catch (error) {
          console.log('Lỗi gửi yêu cầu:', error);
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
    return {route,navigation,modalVisible,setModalVisible,familyId,isLoading,setIsLoading,inputRef,showPassword,setShowPassword,isPasswordFocused,setIsPasswordFocused,isEmailFocused,setIsEmailFocused,toggleShowPassword,handlePasswordFocus,handleEmailFocus,dismissKeyboard,dismissKeyboardAndHideButton,mutationLoginWithRole};
};
export default useLoginWithRole;
