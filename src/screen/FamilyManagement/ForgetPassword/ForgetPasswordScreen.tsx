import React from 'react';
import {KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard,View,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import forgetpassword from '../../../styles/FamilyManagement/ForgetPassword/ForgetPasswordScreen';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../type/type';
const ForgetPasswordScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const useGoBack = () =>{
    navigation.goBack();
  };
  const useVerifyCodeScreen = () =>{
    navigation.navigate('VerifyCodeScreen');
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={forgetpassword .container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={forgetpassword .inner}>
          <View style={forgetpassword.viewGoBack}>
              <TouchableOpacity onPress={useGoBack}>
                <Image source={require('../../../image/back-icon.png')} />
              </TouchableOpacity>

            </View>
          <View style={forgetpassword .viewCreate}>
            <View style={forgetpassword .viewLogo}>
              <Image source={require('../../../image/logo.png')} />
              <Text style={forgetpassword .textLogo}>TRT</Text>
            </View>
            <Text style={forgetpassword .textLogo}>Forgot Password?</Text>
            <Text style={forgetpassword .textWe}>Enter your Email, we will send you a verification code.</Text>
            <View style={forgetpassword .view}>
              <View style={forgetpassword .viewForm}>
                <View style={forgetpassword .viewInput}>
                  <View style={forgetpassword .image}>
                    <Image source={require('../../../image/sms.png')} />
                  </View>
                  <TextInput
                    placeholderTextColor="#9CA3AF"
                    placeholder=" Your Email"
                    style={forgetpassword .textinput}
                  />
                </View>
                <View style={forgetpassword .viewbutton}>
                  <TouchableOpacity style={forgetpassword .buttonCreate} onPress={useVerifyCodeScreen} >
                    <Text style={forgetpassword .textCreate}>Send Code</Text>
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
export default ForgetPasswordScreen;
