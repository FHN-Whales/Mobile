import React, {useRef, useState} from 'react';
import {KeyboardAvoidingView,Platform,TouchableWithoutFeedback, Keyboard,View,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import register from '../../../styles/FamilyManagement/Register/RegisterScreen';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../type/type';
// import useRegister from '../../../hook/FamilyManagement/Register/useRegister';
import {Formik} from 'formik';
import SignupSchema from '../../../hook/FamilyManagement/Register/useValidateRegister';
import { ApiSignUp } from '../../../api/useAuthApi';
import axios from 'axios';
import {useMutation} from '@tanstack/react-query';
interface Register {
  email: string;
  password: string;
  confirmPassword: string;
}
const RegisterScreen = () => {
  // const {mutationRegisterUser} = useRegister()
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const useNavigationLoginScreen = () => {
    navigation.navigate('LoginScreen');
  };
  const inputRef: any = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
    setIsConfirmPasswordFocused(false);
    setIsEmailFocused(false);
  };
  const handleConfirmPasswordFocus = () => {
    setIsPasswordFocused(false);
    setIsConfirmPasswordFocused(true);
    setIsEmailFocused(false);
  };
  const handleEmailFocus = () => {
    setIsEmailFocused(true);
    setIsPasswordFocused(false);
    setIsConfirmPasswordFocused(false);
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
    setIsEmailFocused(false);
    setIsPasswordFocused(false);
    setIsConfirmPasswordFocused(false);
  };
  const dismissKeyboardAndHideButton = () => {
    dismissKeyboard();
    setIsEmailFocused(false);
    setIsPasswordFocused(false);
    setIsConfirmPasswordFocused(false);
  };
  const mutationRegisterUser = useMutation({
    mutationFn: async (data: Register) => {
      try {
        const response = await axios.post(ApiSignUp, data);
        setTimeout(() => {
        if (response.status === 200) { // Kiểm tra status là 200 thay vì 201
          navigation.navigate('VerifyCodeScreen', { email: data.email });
          console.log('Email verification sent successfully.');
        } else {
          console.log('Response:', response);
          console.log('Error:', 'Unexpected response status');
          // Xử lý các trường hợp lỗi không mong đợi từ máy chủ
        }
      }, 200);
      } catch (error) {
        console.log('Error sending the request:');
        // Xử lý các trường hợp lỗi mạng, lỗi máy chủ, v.v.
      }
    },
  });
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => mutationRegisterUser.mutate(values)}
      >
      {({errors, touched, handleChange, values, handleSubmit}) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={register.container}>
          <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <TouchableOpacity
              activeOpacity={1}
              style={register.inner}
              onPress={dismissKeyboardAndHideButton}>
              <View style={register.viewCreate}>
                <View style={register.viewLogo}>
                  <Image source={require('../../../image/logo.png')} />
                  <Text style={register.textLogo}>TRT</Text>
                </View>
                <Text style={register.textLogo}>Create Account</Text>
                <Text style={register.textWe}>We are here to help you!</Text>
                <View style={register.view}>
                  <View style={register.viewForm}>
                    <View style={register.viewInput}>
                      <View style={register.image}>
                        <Image source={require('../../../image/sms.png')} />
                      </View>
                      <TextInput
                        keyboardType="email-address"
                        placeholderTextColor="#9CA3AF"
                        placeholder="Your Email"
                        style={register.textinput}
                        onFocus={handleEmailFocus}
                        onBlur={handleEmailFocus}
                        onSubmitEditing={() => inputRef.current?.focus()}
                        enterKeyHint={'next'}
                        onChangeText={handleChange('email')}
                        value={values.email}
                      />
                    </View>
                    {errors.email && touched.email ? (
                      <Text style={register.textError}>* {errors.email}</Text>
                    ) : null}
                    <View style={register.viewInput}>
                      <View style={register.image}>
                        <Image source={require('../../../image/lock.png')} />
                      </View>
                      <TextInput
                        placeholderTextColor="#9CA3AF"
                        placeholder="Password"
                        secureTextEntry={!showPassword}
                        style={register.textinput}
                        onFocus={handlePasswordFocus}
                        onBlur={handlePasswordFocus}
                        onSubmitEditing={() => inputRef.current?.focus()}
                        enterKeyHint={'next'}
                        onChangeText={handleChange('password')}
                        value={values.password}
                      />
                      {isPasswordFocused && !isEmailFocused && (
                        <TouchableOpacity
                          style={register.showPassword}
                          onPress={toggleShowPassword}>
                          <Image
                            style={register.iconShowPassword}
                            source={
                              showPassword
                                ? require('../../../image/hide.png')
                                : require('../../../image/show.png')
                            }
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                    {errors.password && touched.password ? (
                      <Text style={register.textError}>
                        * {errors.password}
                      </Text>
                    ) : null}
                    <View style={register.viewInput}>
                      <View style={register.image}>
                        <Image source={require('../../../image/lock.png')} />
                      </View>
                      <TextInput
                        placeholderTextColor="#9CA3AF"
                        placeholder="Confirm Password"
                        secureTextEntry={!showConfirmPassword}
                        style={register.textinput}
                        onFocus={handleConfirmPasswordFocus}
                        onBlur={handleConfirmPasswordFocus}
                        onSubmitEditing={() => inputRef.current?.focus()}
                        enterKeyHint={'next'}
                        onChangeText={handleChange('confirmPassword')}
                        value={values.confirmPassword}
                      />
                      {isConfirmPasswordFocused && !isEmailFocused && (
                        <TouchableOpacity
                          style={register.showPassword}
                          onPress={toggleShowConfirmPassword}>
                          <Image
                            style={register.iconShowPassword}
                            source={
                              showConfirmPassword
                                ? require('../../../image/hide.png')
                                : require('../../../image/show.png')
                            }
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                    {errors.confirmPassword && touched.confirmPassword ? (
                      <Text style={register.textError}>
                        * {errors.confirmPassword}
                      </Text>
                    ) : null}
                    <View style={register.viewbutton}>
                      <TouchableOpacity
                        style={register.buttonCreate}
                        onPress={handleSubmit}>
                        <Text style={register.textCreate}>Create Account</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={register.viewor}>
                      <View style={register.viewborder} />
                      <Text style={register.textor}>or</Text>
                      <View style={register.viewborder} />
                    </View>
                    <View style={register.viewContinue}>
                      <TouchableOpacity style={register.Google}>
                        <View style={register.viewGoogle}>
                          <Image
                            source={require('../../../image/Google-Original.png')}
                          />
                          <Text style={register.textGoogle}>Google</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={register.Google}>
                        <View style={register.viewGoogle}>
                          <Image
                            source={require('../../../image/Facebook.png')}
                          />
                          <Text style={register.textGoogle}>Facebook</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={register.viewNavigationSignIn}>
                      <Text style={register.textviewNavigationSignIn}>
                        Do you have an account ?
                      </Text>
                      <Text
                        style={register.textSignIn}
                        onPress={useNavigationLoginScreen}>
                        Sign In
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};
export default RegisterScreen;
