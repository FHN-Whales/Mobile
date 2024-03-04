import  { useState} from 'react';
import {Keyboard} from 'react-native';
import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../../../type/type';
import {ApiGetNewUser} from '../../../../../api/useApiGetNewUser';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface AddNewMemberFamily {
    username: string;
    password: string;
    role: string;
    avatar: string;
    dateOfBirth: string;
    gender: string;
  }
const useAddNewMember = () =>{
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [isUserNameFocused, setIsUserNameFocused] = useState(false);
    const [isDateOfBirthFocused, setDateOfBirthFocused] = useState(false);
    const [isRoleFocused, setRoleFocused] = useState(false);
    const [isGenderFocused, setGenderFocused] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
    const handlePasswordFocus = () => {
      setIsPasswordFocused(true);
      setIsUserNameFocused(false);
      setDateOfBirthFocused(false);
      setRoleFocused(false);
      setGenderFocused(false);
    };
    const handleUserNameFocus = () => {
      setIsPasswordFocused(false);
      setIsUserNameFocused(true);
      setDateOfBirthFocused(false);
      setRoleFocused(false);
      setGenderFocused(false);
    };
    const handleDateOfBirthFocus = () => {
      setIsPasswordFocused(false);
      setIsUserNameFocused(false);
      setDateOfBirthFocused(true);
      setRoleFocused(false);
      setGenderFocused(false);
    };
    const handleRoleFocus = () => {
      setIsPasswordFocused(false);
      setIsUserNameFocused(false);
      setDateOfBirthFocused(false);
      setRoleFocused(true);
      setGenderFocused(false);
    };
    const handleGenderFocus = () => {
      setIsPasswordFocused(false);
      setIsUserNameFocused(false);
      setDateOfBirthFocused(false);
      setRoleFocused(false);
      setGenderFocused(true);
    };
    const dismissKeyboard = () => {
      Keyboard.dismiss();
      setIsPasswordFocused(false);
      setIsUserNameFocused(false);
      setDateOfBirthFocused(false);
      setRoleFocused(false);
      setGenderFocused(false);
    };
    const dismissKeyboardAndHideButton = () => {
      dismissKeyboard();
      setIsPasswordFocused(false);
      setIsUserNameFocused(false);
      setDateOfBirthFocused(false);
      setRoleFocused(false);
      setGenderFocused(false);
    };
    const handleCancel = () => {
      setModalVisible(false);
    };
    const handleOK = () => {
      setModalVisible(false);
      navigation.navigate('AllMemberFamilyScreen');
    };
    const [selectedImage, setSelectedImage] = useState(null);
    const openImagePicker = () => {
      ImagePicker.openPicker({
        mediaType: 'photo',
      })
        .then(image => {
          // Xử lý ảnh đã chọn ở đây
          console.log('Selected image: ', image.path);
          // Cập nhật trạng thái selectedImage với đường dẫn của ảnh đã chọn
          setSelectedImage(image.path);
          // Gửi ảnh đã chọn lên máy chủ hoặc xử lý theo nhu cầu của bạn
          const formData = new FormData();
          formData.append('image', {
            uri: image.path,
            type: image.mime,
            name: image.filename || 'image.jpg',
          });
        })
        .catch(error => {
          console.log('ImagePicker Error: ', error);
        });
    };
    const mutationAddMemberFamily = useMutation({
      mutationFn: async (data: AddNewMemberFamily) => {
        try {
          const familyId = await AsyncStorage.getItem('familyId');
          console.log(familyId);
          const requestData = {
            ...data,
            familyId: familyId,
            };
          const response = await axios.post(ApiGetNewUser, requestData);
          console.log(requestData);
          setTimeout(async () => {
            if (response.status === 200) {
              const {completed, message} = response.data;
              console.log('data', data);
              if (completed) {
                setModalVisible(true);
                console.log('Add member successfully.');
              } else {
                console.log('Add member failed:', message);
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
            console.log('User has been successfully registered');
          } else {
            console.log('Unexpected error:', error);
          }
        }
      },
    });
    return {
      navigation,
      showPassword,
      isPasswordFocused,
      isUserNameFocused,
      isDateOfBirthFocused,
      isRoleFocused,
      isGenderFocused,
      modalVisible,
      toggleShowPassword,
      handlePasswordFocus,
      handleUserNameFocus,
      handleDateOfBirthFocus,
      handleRoleFocus,
      handleGenderFocus,
      dismissKeyboard,
      dismissKeyboardAndHideButton,
      handleCancel,
      handleOK,
      selectedImage,
      setSelectedImage,
      openImagePicker,
      ImagePicker,
      mutationAddMemberFamily,
      setModalVisible,
    };
};
export default useAddNewMember;
