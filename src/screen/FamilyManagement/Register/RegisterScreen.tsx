import React from 'react';
import {KeyboardAvoidingView,Platform,TouchableWithoutFeedback,View,Image,Text,TextInput,TouchableOpacity,Modal,ActivityIndicator} from 'react-native';
import register from '../../../styles/FamilyManagement/Register/RegisterScreen';
import {Formik} from 'formik';
import SignupSchema from '../../../hook/FamilyManagement/Register/useValidateRegister';
import useRegister from '../../../hook/FamilyManagement/Register/useRegister';
const RegisterScreen = () => {
  const {modalVisible,setModalVisible,useNavigationLoginScreen,inputRef,showPassword,showConfirmPassword,isPasswordFocused,isConfirmPasswordFocused,isEmailFocused,mutationRegisterUser,toggleShowPassword,toggleShowConfirmPassword,handleConfirmPasswordFocus,handleEmailFocus,dismissKeyboard,dismissKeyboardAndHideButton,handlePasswordFocus} = useRegister();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => mutationRegisterUser.mutate(values)}>
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
                  <Text style={register.textLogo}>FHN</Text>
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
                      <Text style={register.textError}> * {errors.password}</Text>
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
                      <Text style={register.textError}> * {errors.confirmPassword}</Text>
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
                              <Image source={require('../../../image/succesfully.png')}/>
                            </View>
                            <Text style={register.textCon}>Congratulations!</Text>
                            <Text style={register.textYour}>Your account is ready to use. You will be redirected to Verify in a few seconds...</Text>
                            <View style={register.viewloadding}>
                              <ActivityIndicator size="large" color="#87CEFA" />
                            </View>
                          </View>
                        </View>
                      </Modal>
                      <TouchableOpacity
                        style={register.buttonCreate}
                        onPress={() => handleSubmit()}>
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
                          <Image source={require('../../../image/Google-Original.png')}/>
                          <Text style={register.textGoogle}>Google</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={register.Google}>
                        <View style={register.viewGoogle}>
                          <Image source={require('../../../image/Facebook.png')}/>
                          <Text style={register.textGoogle}>Facebook</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={register.viewNavigationSignIn}>
                      <Text style={register.textviewNavigationSignIn}>Do you have an account ?</Text>
                      <Text style={register.textSignIn}onPress={useNavigationLoginScreen}>Sign In</Text>
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
