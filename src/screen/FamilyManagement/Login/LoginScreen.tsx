import React, { useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, View, Image, Text, TextInput, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import login from '../../../styles/FamilyManagement/Login/LoginScreen';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../type/type';
import { Formik } from 'formik';
import SigninSchema from '../../../hook/FamilyManagement/Login/useValidateLogin';
import { ApiSignIn } from '../../../api/useApiSignIn';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
interface Login {
  email: string;
  password: string;
}
const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const useNavigationRegisterScreen = () => {
    navigation.navigate('RegisterScreen');
  };
  const useNavigationForgetPasswordScreen = () => {
    navigation.navigate('ForgetPasswordScreen');
  };
  const inputRef: any = useRef();
  // const [error, setError] = useState('');
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
  const mutationLoginFamily = useMutation({
    mutationFn: async (data: Login) => {
      try {
        const response = await axios.post(ApiSignIn, data);
        setIsLoading(true);
        if (response.status === 200) {
          const { completed, message } = response.data;
          if (completed) {
            // Lưu token vào async-storage
            // await AsyncStorage.setItem('token', token);
            // console.log(token);
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
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SigninSchema}
      onSubmit={values => mutationLoginFamily.mutate(values)}>
      {({ errors, touched, handleChange, values, handleSubmit }) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={login.container}>
          <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <TouchableOpacity
              activeOpacity={1}
              style={login.inner}
              onPress={dismissKeyboardAndHideButton}>
              <View style={login.viewCreate}>
                <View style={login.viewLogo}>
                  <Image source={require('../../../image/logo.png')} />
                  <Text style={login.textLogo}>TRT</Text>
                </View>
                <Text style={login.textLogo}>Hi, How are you today? </Text>
                <Text style={login.textWe}>Hope you’re doing fine.</Text>
                <View style={login.view}>
                  <View style={login.viewForm}>
                    <View style={login.viewInput}>
                      <View style={login.image}>
                        <Image source={require('../../../image/sms.png')} />
                      </View>
                      <TextInput
                        keyboardType="email-address"
                        placeholderTextColor="#9CA3AF"
                        placeholder="Email"
                        style={login.textinput}
                        onFocus={handleEmailFocus}
                        onBlur={handleEmailFocus}
                        onSubmitEditing={() => inputRef.current?.focus()}
                        enterKeyHint={'next'}
                        onChangeText={handleChange('email')}
                        value={values.email}
                      />
                    </View>
                    {errors.email && touched.email ? (
                      <Text style={login.textError}>* {errors.email}</Text>
                    ) : null}
                    <View style={login.viewInput}>
                      <View style={login.image}>
                        <Image source={require('../../../image/lock.png')} />
                      </View>
                      <TextInput
                        placeholderTextColor="#9CA3AF"
                        placeholder="Password"
                        secureTextEntry={!showPassword}
                        style={login.textinput}
                        onFocus={handlePasswordFocus}
                        onBlur={handlePasswordFocus}
                        onSubmitEditing={() => inputRef.current?.focus()}
                        enterKeyHint={'next'}
                        onChangeText={handleChange('password')}
                        value={values.password}
                      />
                      {isPasswordFocused && !isEmailFocused && (
                        <TouchableOpacity
                          style={login.showPassword}
                          onPress={toggleShowPassword}>
                          <Image
                            style={login.iconShowPassword}
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
                      <Text style={login.textError}>* {errors.password}</Text>
                    ) : null}
                    <View style={login.viewbutton}>
                      <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                          setModalVisible(!modalVisible);
                        }}>
                        <View style={login.centeredView}>
                          <View style={login.modalView}>
                            <View>
                              <Image
                                source={require('../../../image/succesfully.png')}
                              />
                            </View>
                            <Text style={login.textCon}>Congratulations!</Text>
                            <Text style={login.textYour}>
                              Your account is ready to use. You will be
                              redirected to the Home Page in a few seconds...
                            </Text>
                            <View style={login.viewloadding}>
                              <ActivityIndicator size="large" color="#87CEFA" />
                            </View>
                          </View>
                        </View>
                      </Modal>
                      <TouchableOpacity
                        style={login.buttonCreate}
                        onPress={handleSubmit}>
                        <Text style={login.textCreate}>Sign In</Text>
                      </TouchableOpacity>
                    </View>
                    {/* {errors && <Text style={{ color:'red' }}>{error}</Text>} */}
                    <View style={login.viewor}>
                      <View style={login.viewborder} />
                      <Text style={login.textor}>or</Text>
                      <View style={login.viewborder} />
                    </View>
                    <View style={login.viewContinue}>
                      <TouchableOpacity style={login.Google}>
                        <View style={login.viewGoogle}>
                          <Image
                            source={require('../../../image/Google-Original.png')}
                          />
                          <Text style={login.textGoogle}>Google</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={login.Google}>
                        <View style={login.viewGoogle}>
                          <Image
                            source={require('../../../image/Facebook.png')}
                          />
                          <Text style={login.textGoogle}>Facebook</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <Text
                      style={login.textForgetPassword}
                      onPress={useNavigationForgetPasswordScreen}>
                      Forgot password?
                    </Text>
                    <View style={login.viewNavigationSignIn}>
                      <Text style={login.textviewNavigationSignIn}>
                        Don’t have an account yet?
                      </Text>
                      <Text
                        style={login.textSignIn}
                        onPress={useNavigationRegisterScreen}>
                        Sign up
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
export default LoginScreen;