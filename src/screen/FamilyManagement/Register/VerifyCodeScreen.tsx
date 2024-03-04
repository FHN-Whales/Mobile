import React from 'react';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, View, Image,Text, TextInput, TouchableOpacity} from 'react-native';
import verifycode from '../../../styles/FamilyManagement/ForgetPassword/VerifyCodeScreen';
import useVerifyCode from '../../../hook/FamilyManagement/Register/useVerifyCode';
import { useRoute } from '@react-navigation/native';
const VerifyCodeScreen = () => {
  const route = useRoute();
  const { code, setCode, otpInputs, email, handleVerification, focusNextInput, useGoBack } = useVerifyCode(route);
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
              <Text style={verifycode.textLogo}>FHN</Text>
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
                  <Text style={verifycode.textviewNavigationSignIn}>Didn’t get the Code?</Text>
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
