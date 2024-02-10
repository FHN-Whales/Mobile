import React from 'react';
import {KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard,View,Image,Text,TextInput,TouchableOpacity,} from 'react-native';
import verifycode from '../../../styles/FamilyManagement/ForgetPassword/VerifyCodeScreen';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../type/type';
const VerifyCodeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const useGoBack = () => {
    navigation.goBack();
  };
  const useNavigationResetPasswordScreen = () =>{
    navigation.navigate('ResetPasswordScreen');
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={verifycode.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={verifycode.inner}>
          <View style={verifycode.viewGoBack}>
            <TouchableOpacity onPress={useGoBack}>
              <Image source={require('../../../image/back-icon.png')} />
            </TouchableOpacity>
          </View>
          <View style={verifycode.viewCreate}>
            <View style={verifycode.viewLogo}>
              <Image source={require('../../../image/logo.png')} />
              <Text style={verifycode.textLogo}>TRT</Text>
            </View>
            <Text style={verifycode.textLogo}>Verify Code</Text>
            <Text style={verifycode.textWe}>
              Enter the the code we just sent you on your registered Email
            </Text>
            <View style={verifycode.view}>
              <View style={verifycode.viewForm}>
                <View style={verifycode.viewinputverify}>
                  <TextInput style={verifycode.textInput} keyboardType="numeric" />
                  <TextInput style={verifycode.textInput} keyboardType="numeric" />
                  <TextInput style={verifycode.textInput} keyboardType="numeric" />
                  <TextInput style={verifycode.textInput} keyboardType="numeric" />
                  <TextInput style={verifycode.textInput} keyboardType="numeric" />
                </View>
                <View style={verifycode.viewbutton}>
                  <TouchableOpacity style={verifycode.buttonCreate} onPress={useNavigationResetPasswordScreen}>
                    <Text style={verifycode.textCreate}>Verify</Text>
                  </TouchableOpacity>
                </View>
                <View style={verifycode.viewNavigationSignIn}>
                  <Text style={verifycode.textviewNavigationSignIn}>
                    Didn’t get the Code?
                  </Text>
                  <Text style={verifycode.textSignIn}>Resend</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default VerifyCodeScreen;
