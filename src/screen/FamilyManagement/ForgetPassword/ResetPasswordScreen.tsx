import React, { useState } from 'react';
import {KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard,View,Image,Text,TextInput,TouchableOpacity,Modal,ActivityIndicator} from 'react-native';
import resetpassword from '../../../styles/FamilyManagement/ForgetPassword/ResetPasswordScreen';
import {useNavigation} from '@react-navigation/native';
const ResetPasswordScreen = () => {
  const navigation = useNavigation();
  const useGoBack = () =>{
    navigation.goBack();
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={resetpassword .container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={resetpassword .inner}>
          <View style={resetpassword.viewGoBack}>
              <TouchableOpacity onPress={useGoBack}>
                <Image source={require('../../../image/back-icon.png')} />
              </TouchableOpacity>
            </View>
          <View style={resetpassword .viewCreate}>
            <View style={resetpassword .viewLogo}>
              <Image source={require('../../../image/logo.png')} />
              <Text style={resetpassword .textLogo}>TRT</Text>
            </View>
            <Text style={resetpassword .textLogo}>Create new password</Text>
            <Text style={resetpassword .textWe}>Your new password must be different form previously used password</Text>
            <View style={resetpassword .view}>
              <View style={resetpassword .viewForm}>
                <View style={resetpassword .viewInput}>
                  <View style={resetpassword .image}>
                    <Image source={require('../../../image/lock.png')} />
                  </View>
                  <TextInput
                    placeholderTextColor="#9CA3AF"
                    placeholder="Password"
                    style={resetpassword .textinput}
                  />
                </View>
                <View style={resetpassword .viewInput}>
                  <View style={resetpassword .image}>
                    <Image source={require('../../../image/lock.png')} />
                  </View>
                  <TextInput
                    placeholderTextColor="#9CA3AF"
                    placeholder="Confirm Password"
                    style={resetpassword .textinput}
                  />
                </View>
                <View style={resetpassword .viewbutton}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      setModalVisible(!modalVisible);
                    }}>
                    <View style={resetpassword.centeredView}>
                        <View style={resetpassword.modalView}>
                          <View>
                              <Image source={require('../../../image/succesfully.png')} />
                          </View>
                          <Text style={resetpassword.textCon}>Congratulations!</Text>
                          <Text style={resetpassword.textYour}>Your account is ready to use. You will be redirected to the Home Page in a few seconds...</Text>
                          <View style={resetpassword.viewloadding}>
                              <ActivityIndicator size="large" color="#87CEFA" />
                          </View>
                        </View>
                    </View>
                  </Modal>
                  <TouchableOpacity style={resetpassword .buttonCreate}    onPress={() => setModalVisible(true)} >
                    <Text style={resetpassword .textCreate}>Reset Password</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default ResetPasswordScreen;
