import React from 'react';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback,  View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import login from '../../../styles/FamilyManagement/Login/LoginScreen';
import { Formik } from 'formik';
import SigninSchema from '../../../hook/FamilyManagement/Login/useValidateLogin';
import useSignInWithFamily from '../../../hook/FamilyManagement/Login/useLoginFamily';
import SocialSignIn from './SocialSignIn';
const LoginScreen = () => {
  const  { useNavigationRegisterScreen,useNavigationForgetPasswordScreen,inputRef,showPassword,isPasswordFocused,isEmailFocused,toggleShowPassword,handlePasswordFocus,handleEmailFocus,dismissKeyboard,dismissKeyboardAndHideButton,mutationLoginFamily,errorMessage} = useSignInWithFamily();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SigninSchema}
      onSubmit={values => {
        mutationLoginFamily.mutate(values);
      }}>
      {({ errors, touched, handleChange, values, handleSubmit }) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={login.container}>
          <TouchableWithoutFeedback
           onPress={dismissKeyboard}
          >
            <TouchableOpacity
              activeOpacity={1}
              style={login.inner}
              onPress={dismissKeyboardAndHideButton}
              >
              <View style={login.viewCreate}>
                <View style={login.viewLogo}>
                  <Image source={require('../../../image/logo.png')} />
                  <Text style={login.textLogo}>FHN</Text>
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
                      <TouchableOpacity
                        style={login.buttonCreate}
                        onPress={() => handleSubmit()}>
                        <Text style={login.textCreate}>Sign In</Text>
                      </TouchableOpacity>
                    </View>
                    {errorMessage && <Text style={login.textError}>{errorMessage}</Text>}
                    <View style={login.viewor}>
                      <View style={login.viewborder} />
                      <Text style={login.textor}>or</Text>
                      <View style={login.viewborder} />
                    </View>
                   {SocialSignIn()}
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
