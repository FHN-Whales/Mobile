import React, {useEffect, useRef, useState} from 'react';
import {KeyboardAvoidingView,Platform,TouchableWithoutFeedback, Keyboard,View,Image,Text,TextInput,TouchableOpacity, Modal, ActivityIndicator} from 'react-native';
import register from '../../../styles/FamilyManagement/Register/RegisterScreen';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../type/type';
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
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
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
        console.log(data);
        setIsLoading(true);
        setTimeout(async () => {
          if (response.status === 200) {
            const { completed, message } = response.data;
            if (completed) {
              setModalVisible(true);
              navigation.navigate('VerifyCodeScreen', { email: data.email });
              console.log('Email verification sent successfully.');
            } else {
              console.log('Registration failed:', message);
            }
            setIsLoading(false);
          } else {
            console.log('Response:', response);
            console.log('Error:', 'Unexpected response status');
          }
        }, 2000);
      } catch (error) {
        console.log('Error sending the request:', error.message);
        if (error.response && error.response.status === 409) {
          console.log('Email is already registered');
        } else {
          console.log('Unexpected error:', error);
        }
      }
    },
  });
  const { data } = mutationRegisterUser; // Define data at a higher scope
  useEffect(() => {
    if (modalVisible && data) { // Check if data exists before using it
      setTimeout(() => {
        setModalVisible(false)
      }, 2000);
    }
  }, [modalVisible, data]);
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
                      <Text style={register.textError} >
                        * {errors.confirmPassword}
                      </Text>
                    ) : null}
                    <View style={register.viewbutton}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                          setModalVisible(!modalVisible);
                        }}>
                        <View style={register.centeredView}>
                          <View style={register.modalView}>
                            <View>
                              <Image
                                source={require('../../../image/succesfully.png')}
                              />
                            </View>
                            <Text style={register.textCon}>Congratulations!</Text>
                            <Text style={register.textYour}>
                              Your account is ready to use. You will be
                              redirected to the Home Page in a few seconds...
                            </Text>
                            <View style={register.viewloadding}>
                              <ActivityIndicator size="large" color="#87CEFA" />
                            </View>
                          </View>
                        </View>
                      </Modal>
                      <TouchableOpacity
                        style={register.buttonCreate}
                        onPress={handleSubmit}>
                        <Text style={register.textCreate}>Create Account</Text>
                      </TouchableOpacity>
                    </View>
                    {/* {errors && <Text style={{ color:'red' }}>{error}</Text>} */}
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
