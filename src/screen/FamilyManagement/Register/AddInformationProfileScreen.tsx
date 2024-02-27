import React, { useState } from 'react';
import {KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard,View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation, NavigationProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../type/type';
import AddInformationProfile from '../../../styles/FamilyManagement/Register/AddInformationProfileScreen';
import axios from 'axios';
import { ApiGetNewUser } from '../../../api/useApiGetNewUser';
// interface DataItem {
//   label: string ;
//   value: number ;
//   id:number;
// }
const AddInformationProfileScreen: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { userId, email, password, role } = route.params as { email:string, password: string; role: string };

  const [username, setUsername] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>('');

  // const handleDropdownChange = (item: DataItem) => {
  //   setGender(item.label);
  // };
  const handleSubmit = () => {
    axios
      .post(ApiGetNewUser, {
      userId,
      email,
      password,
      role,
      username,
      gender,
      dateOfBirth,
      })
      .then(response => {
        console.log(response.data);
        if (response.data.completed) {
          navigation.navigate('LoginScreen');
        } else {
          console.log('Verification Failed', response.data.message);
        }
      })
      .catch(error => {
        console.error('Verification failed:', error);
      });
  };
  const useGoBack = () => {
    navigation.goBack();
  };
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
                  {/* <Dropdown
                    style={AddInformationProfile.dropdown}
                    placeholderStyle={AddInformationProfile.placeholderStyle}
                    selectedTextStyle={AddInformationProfile.selectedTextStyle}
                    itemTextStyle={AddInformationProfile.itemTextStyle}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    value={gender}
                    placeholder="Gender"
                    onChange={handleDropdownChange}
                  /> */}
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
