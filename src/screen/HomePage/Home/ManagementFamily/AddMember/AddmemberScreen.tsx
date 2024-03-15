import React from 'react';
import {KeyboardAvoidingView,Platform,TouchableWithoutFeedback, View,TouchableOpacity,Text,Image,TextInput,Modal} from 'react-native';
import addmember from '../../../../../styles/HomePage/Home/ManagementFamily/AddMember/AddMemberScreen';
import renderViewGoBack from './RenderViewGoBack';
import {Formik} from 'formik';
import AddNewMemberSchema from '../../../../../hook/HomePage/Home/ManagementWithFamily/AddNewMember/useValidateAddNewMember';
import login from '../../../../../styles/FamilyManagement/Login/LoginScreen';
import renderviewformcreate from '../../../../../styles/HomePage/Home/ManagementFamily/AddMember/RenderViewForrmCreate';
import rendermodalcreate from '../../../../../styles/HomePage/Home/ManagementFamily/AddMember/RenderModelCreate';
import useAddNewMember from '../../../../../hook/HomePage/Home/ManagementWithFamily/AddNewMember/useAddNewMember';
const AddMemberScreen = () => {
  const {showPassword,isPasswordFocused,isUserNameFocused,isDateOfBirthFocused,isRoleFocused,isGenderFocused,modalVisible,toggleShowPassword,handlePasswordFocus,handleUserNameFocus,handleDateOfBirthFocus,handleRoleFocus,handleGenderFocus,dismissKeyboardAndHideButton,handleCancel,handleOK,selectedImage,openImagePicker,mutationAddMemberFamily,setModalVisible,dismissKeyboard} = useAddNewMember();
  return (
    <View style={addmember.container}>
      {renderViewGoBack()}
      <Formik
        initialValues={{
          username: '',
          password: '',
          role: '',
          avatar: '',
          dateOfBirth: '',
          gender: '',
        }}
        validationSchema={AddNewMemberSchema}
        onSubmit={values => {
          mutationAddMemberFamily.mutate(values);
        }}>
        {({errors, touched, handleChange, values, handleSubmit}) => (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={addmember.container}>
            <TouchableWithoutFeedback onPress={dismissKeyboard}>
              <TouchableOpacity
                onPress={dismissKeyboardAndHideButton}
                style={addmember.inner}>
                <View>
                  <View>
                    <TouchableOpacity
                      style={renderviewformcreate.viewImageProfile}
                      onPress={openImagePicker}>
                      {selectedImage ? (
                        <Image
                          style={renderviewformcreate.imageAvater}
                          source={{uri: selectedImage}}
                        />
                      ) : (
                        <Image
                          source={require('../../../../../image/profile-circle.png')}
                        />
                      )}
                      <View style={renderviewformcreate.viewEdit}>
                        <Image
                          source={require('../../../../../image/edit-icon.png')}
                        />
                      </View>
                    </TouchableOpacity>
                    <View style={renderviewformcreate.viewForm}>
                      <View style={renderviewformcreate.viewInput}>
                        <View style={renderviewformcreate.image}>
                          <Image
                            source={require('../../../../../image/user.png')}
                          />
                        </View>
                        <TextInput
                          placeholderTextColor="#9CA3AF"
                          placeholder="Nickname"
                          enterKeyHint={'next'}
                          onChangeText={handleChange('username')}
                          style={renderviewformcreate.textinput}
                          value={values.username}
                          onFocus={handleUserNameFocus}
                          onBlur={handleUserNameFocus}
                        />
                      </View>
                      {errors.username && touched.username ? (
                        <Text style={login.textError}>* {errors.username}</Text>
                      ) : null}
                      <View style={renderviewformcreate.viewInput}>
                        <View style={login.image}>
                          <Image
                            source={require('../../../../../image/lock.png')}
                          />
                        </View>
                        <TextInput
                          placeholderTextColor="#9CA3AF"
                          placeholder="Role Password"
                          secureTextEntry={!showPassword}
                          enterKeyHint={'next'}
                          onChangeText={handleChange('password')}
                          style={renderviewformcreate.textinput}
                          value={values.password}
                          onFocus={handlePasswordFocus}
                          onBlur={handlePasswordFocus}
                        />
                        {isPasswordFocused &&
                          !isUserNameFocused &&
                          !isDateOfBirthFocused &&
                          !isGenderFocused &&
                          !isRoleFocused && (
                            <TouchableOpacity
                              style={login.showPassword}
                              onPress={toggleShowPassword}>
                              <Image
                                style={login.iconShowPassword}
                                source={
                                  showPassword
                                    ? require('../../../../../image/hide.png')
                                    : require('../../../../../image/show.png')
                                }
                              />
                            </TouchableOpacity>
                          )}
                      </View>
                      {errors.password && touched.password ? (
                        <Text style={login.textError}>* {errors.password}</Text>
                      ) : null}
                            <View style={renderviewformcreate.viewInput}>
                        <View style={renderviewformcreate.image}>
                          <Image
                            source={require('../../../../../image/user.png')}
                          />
                        </View>
                        <TextInput
                          placeholderTextColor="#9CA3AF"
                          placeholder="Role User"
                          enterKeyHint={'next'}
                          onChangeText={handleChange('role')}
                          style={renderviewformcreate.textinput}
                          value={values.role}
                          onFocus={handleRoleFocus}
                          onBlur={handleRoleFocus}
                        />
                      </View>
                      {errors.gender && touched.gender ? (
                        <Text style={login.textError}>* {errors.gender}</Text>
                      ) : null}
                      <View style={renderviewformcreate.viewInput}>
                        <View style={renderviewformcreate.image}>
                          <Image
                            source={require('../../../../../image/calendar-2.png')}
                          />
                        </View>
                        <TextInput
                          placeholderTextColor="#9CA3AF"
                          placeholder="Date of Birth"
                          enterKeyHint={'next'}
                          onChangeText={handleChange('dateOfBirth')}
                          style={renderviewformcreate.textinput}
                          value={values.dateOfBirth}
                          onFocus={handleDateOfBirthFocus}
                          onBlur={handleDateOfBirthFocus}
                        />
                      </View>
                      {errors.dateOfBirth && touched.dateOfBirth ? (
                        <Text style={login.textError}>* {errors.dateOfBirth}</Text>
                      ) : null}
                      <View style={renderviewformcreate.viewInput}>
                        <View style={renderviewformcreate.image}>
                          <Image
                            source={require('../../../../../image/user.png')}
                          />
                        </View>
                        <TextInput
                          placeholderTextColor="#9CA3AF"
                          placeholder="Gender"
                          enterKeyHint={'next'}
                          onChangeText={handleChange('gender')}
                          style={renderviewformcreate.textinput}
                          value={values.gender}
                          onFocus={handleGenderFocus}
                          onBlur={handleGenderFocus}
                        />
                      </View>
                      {errors.gender && touched.gender ? (
                        <Text style={login.textError}>* {errors.gender}</Text>
                      ) : null}
                    </View>
                  </View>
                  <View style={rendermodalcreate.viewbutton}>
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={modalVisible}
                      onRequestClose={() => {
                        setModalVisible(!modalVisible);
                      }}>
                      <View style={rendermodalcreate.centeredView}>
                        <View style={rendermodalcreate.modalView}>
                          <View style={rendermodalcreate.viewtitle}>
                            <Text style={rendermodalcreate.textCon}>
                              Create Member
                            </Text>
                            <Text style={rendermodalcreate.textYour}>
                              Created member successfully!
                            </Text>
                          </View>
                          <View style={rendermodalcreate.viewloadding}>
                            <TouchableOpacity
                              style={rendermodalcreate.buttonCancle}
                              onPress={handleCancel}>
                              <Text style={rendermodalcreate.textCancle}>
                                Cancle
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={rendermodalcreate.buttonOk}
                              onPress={handleOK}>
                              <Text style={rendermodalcreate.textOk}>OK</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </Modal>
                    <TouchableOpacity
                      style={rendermodalcreate.buttonCreate}
                      onPress={() => handleSubmit()}>
                      <Text style={rendermodalcreate.textCreate}>Save</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        )}
      </Formik>
      </View>
  );
};
export default AddMemberScreen;
