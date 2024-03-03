import React from 'react';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View, Image, Text, TextInput, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import login from '../../../styles/FamilyManagement/Login/LoginScreen';
import { Formik } from 'formik';
import SigninWithRoleSchema from '../../../hook/FamilyManagement/Login/useValidateSignInWithRole';
import useLoginWithRole from '../../../hook/FamilyManagement/Login/useLoginWithRole';
const LoginWithRoleScreen = ()=> {
  const {modalVisible,setModalVisible,inputRef,showPassword,isPasswordFocused,isEmailFocused,toggleShowPassword,handlePasswordFocus,handleEmailFocus,dismissKeyboard,dismissKeyboardAndHideButton,mutationLoginWithRole} = useLoginWithRole();
  return (
    <Formik
      initialValues={{
        role: '',
        password: '',
      }}
      validationSchema={SigninWithRoleSchema}
      onSubmit={values => mutationLoginWithRole.mutate(values)}>
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
                        placeholderTextColor="#9CA3AF"
                        placeholder="Role User"
                        style={login.textinput}
                        onFocus={handleEmailFocus}
                        onBlur={handleEmailFocus}
                        onSubmitEditing={() => inputRef.current?.focus()}
                        enterKeyHint={'next'}
                        onChangeText={handleChange('role')}
                        value={values.role}
                      />
                    </View>
                    {errors.role && touched.role ? (
                      <Text style={login.textError}>* {errors.role}</Text>
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
                            <Text style={login.textYour}>Your account is ready to use. You will be redirected to the Home Page in a few seconds...</Text>
                            <View style={login.viewloadding}>
                              <ActivityIndicator size="large" color="#87CEFA" />
                            </View>
                          </View>
                        </View>
                      </Modal>
                      <TouchableOpacity
                        style={login.buttonCreate}
                        onPress={() => handleSubmit()}>
                        <Text style={login.textCreate}>Sign In</Text>
                      </TouchableOpacity>
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
export default LoginWithRoleScreen;
