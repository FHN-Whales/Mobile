import React, {useRef, useState} from 'react';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, View, Image,Text, TextInput, TouchableOpacity, Alert,} from 'react-native';
import verifycode from '../../../styles/FamilyManagement/ForgetPassword/VerifyCodeScreen';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../type/type';
import axios from 'axios';
import {ApiVerifyCode} from '../../../api/useApiVerifyCode';
const VerifyCodeScreen = ({route}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const otpInputs = useRef<any[]>([]);
  const {email} = route.params;
  console.log(email);
  const handleVerification = () => {
    const enteredOTP = code.join('');
    axios
      .post(ApiVerifyCode, {
        email,
        code: enteredOTP,
      })
      .then(response => {
        console.log('Verification successful:', response.data);
        if (response.data.completed) {
          navigation.navigate('RegisterAsManagerScreen' ,{ email: email });
        } else {
          console.log('Verification Failed', response.data.message);
        }
      })
      .catch(error => {
        console.error('Verification failed:', error);
        Alert.alert(
          'Verification Failed',
          'Invalid OTP. Please enter the correct code.',
        );
      });
  };
  const focusNextInput = (index: number) => {
    if (otpInputs.current[index + 1]) {
      otpInputs.current[index + 1].focus();
    }
  };

  const useGoBack = () => {
    navigation.navigate('RegisterScreen');
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
              Enter the code we just sent you on your registered Email: {email}
            </Text>
            <View style={verifycode.view}>
              <View style={verifycode.viewForm}>
                <View style={verifycode.viewinputverify}>
                  {code.map((digit, index) => (
                    <TextInput
                      key={index}
                      style={verifycode.textInput}
                      keyboardType="numeric"
                      maxLength={1}
                      onChangeText={text => {
                        const newCode = [...code];
                        newCode[index] = text;
                        setCode(newCode);
                        if (text !== '') {
                          focusNextInput(index);
                        }
                      }}
                      value={digit}
                      ref={input => (otpInputs.current[index] = input)}
                    />
                  ))}
                </View>
                <View style={verifycode.viewbutton}>
                  <TouchableOpacity
                    style={verifycode.buttonCreate}
                    onPress={handleVerification}>
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
