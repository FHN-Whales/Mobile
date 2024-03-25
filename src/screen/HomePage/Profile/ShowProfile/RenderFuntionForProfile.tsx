import React, { useState } from 'react';
import { TouchableOpacity, View ,Image, Text, Modal} from 'react-native';
import renderfunctionforprofile from '../../../../styles/HomePage/Profile/ShowProfile/RenderFuntionForProfile';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../type/type';
import AsyncStorage from '@react-native-async-storage/async-storage';
const renderFunctionForProfile = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
        console.log('Đăng xuất thành công, xóa userId , familyId thành công!');
        navigation.navigate('SplashScreen');
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const useNavigationEditProfileScreen = (): void => {
    navigation.navigate('EditProfileScreen');
  };
  return (
    <View style={renderfunctionforprofile.container}>
      <View style={renderfunctionforprofile.viewFuntion}>
        <TouchableOpacity
          style={renderfunctionforprofile.Opacitybutton}
          onPress={useNavigationEditProfileScreen}>
          <View style={renderfunctionforprofile.viewImage}>
            <Image source={require('../../../../image/user-edit.png')} />
            <Text style={renderfunctionforprofile.text}>Edit Profile</Text>
          </View>
          <Image source={require('../../../../image/arrow-right.png')} />
        </TouchableOpacity>
        <View style={renderfunctionforprofile.viewBorder} />
      </View>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={renderfunctionforprofile.centeredView}>
          <View style={renderfunctionforprofile.modalView}>
            <View style={renderfunctionforprofile.viewtitle}>
              <Text style={renderfunctionforprofile.textCon}>Log out</Text>
              <Text style={renderfunctionforprofile.textYour}>
              Are you sure you want to log out?
              </Text>
            </View>
            <View style={renderfunctionforprofile.viewloadding}>
              <TouchableOpacity
                style={renderfunctionforprofile.buttonCancle}
                onPress={handleCancel}>
                <Text style={renderfunctionforprofile.textCancle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={renderfunctionforprofile.buttonOk}
                onPress={handleOK}>
                <Text style={renderfunctionforprofile.textOk}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={renderfunctionforprofile.viewFuntion}>
        <TouchableOpacity style={renderfunctionforprofile.Opacitybutton}  onPress={handleCreateMember}>
          <View style={renderfunctionforprofile.viewImage}>
            <Image source={require('../../../../image/logout.png')} />
            <Text style={renderfunctionforprofile.text}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default renderFunctionForProfile;
