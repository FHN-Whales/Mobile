import React from 'react';
import {KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard,View,Image,Text, TextInput, TouchableOpacity} from 'react-native';
import AddInformationProfile from '../../../styles/FamilyManagement/Register/AddInformationProfileScreen';
import useAddInformationProfile from '../../../hook/FamilyManagement/Register/useAddInformationProfile';
const AddInformationProfileScreen: React.FC = () => {
  const { username,setUsername,gender,setGender,dateOfBirth,setDateOfBirth,handleSubmit,useGoBack} = useAddInformationProfile();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={AddInformationProfile.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={AddInformationProfile.inner}>
          <View>
            <View style={AddInformationProfile.viewGoBack}>
              <TouchableOpacity onPress={useGoBack}>
                <Image source={require('../../../image/back-icon.png')} />
              </TouchableOpacity>
              <Text style={AddInformationProfile.textFill}>Fill Your Profile</Text>
            </View>
            <View style={AddInformationProfile.viewImageProfile}>
              <Image source={require('../../../image/profile-circle.png')} />
              <View style={AddInformationProfile.viewEdit}>
                <Image source={require('../../../image/edit-icon.png')} />
              </View>
            </View>
            <View>
              <View style={AddInformationProfile.viewForm}>
                <View style={AddInformationProfile.viewInput}>
                  <View style={AddInformationProfile.image}>
                    <Image source={require('../../../image/user.png')} />
                  </View>
                  <TextInput
                    placeholderTextColor="#9CA3AF"
                    placeholder="Nick Name"
                    onChangeText={setUsername}
                    value={username}
                    style={AddInformationProfile.textinput}
                  />
                </View>
                <View style={AddInformationProfile.viewInput}>
                  <View style={AddInformationProfile.image}>
                    <Image source={require('../../../image/calendar-2.png')} />
                  </View>
                  <TextInput
                    placeholderTextColor="#9CA3AF"
                    placeholder="Date of Birth"
                    onChangeText={setDateOfBirth}
                    value={dateOfBirth}
                    style={AddInformationProfile.textinput}
                  />
                </View>
                <View style={AddInformationProfile.viewInput}>
                <View style={AddInformationProfile.image}>
                    <Image source={require('../../../image/user.png')} />
                  </View>
                    <TextInput
                    placeholderTextColor="#9CA3AF"
                    placeholder="Gender"
                    onChangeText={setGender}
                    value={gender}
                    style={AddInformationProfile.textinput}
                  />
                </View>
                <View style={AddInformationProfile.viewbutton}>
                  <TouchableOpacity style={AddInformationProfile.buttonCreate} onPress={handleSubmit}>
                    <Text style={AddInformationProfile.textCreate}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default AddInformationProfileScreen;
