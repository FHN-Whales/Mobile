import {useState} from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../type/type';
import AsyncStorage from '@react-native-async-storage/async-storage';
const useProfile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleCreateMember = () => {
    setModalVisible(true);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };
  const handleOK = async (): Promise<void> => {
    try {
      setModalVisible(false);
      await AsyncStorage.removeItem('userId');
      await AsyncStorage.removeItem('familyId');
      await AsyncStorage.removeItem('devideId');
      console.log( 'Đăng xuất thành công, xóa userId , familyId ,devideId thành công!',);
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const useNavigationEditProfileScreen = (): void => {
    navigation.navigate('EditProfileScreen');
  };
  const useNavigationNotification = (): void => {
    navigation.navigate('NotificationScreen');
  };
  return {
    modalVisible,
    setModalVisible,
    handleCreateMember,
    handleCancel,
    handleOK,
    navigation,
    useNavigationEditProfileScreen,
    useNavigationNotification,
  };
};
export default useProfile;
