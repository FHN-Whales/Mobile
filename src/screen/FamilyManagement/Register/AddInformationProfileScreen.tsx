import React, { useState } from 'react';
import {KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard,View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../type/type';
import AddInformationProfile from '../../../styles/FamilyManagement/Register/AddInformationProfileScreen';
interface DataItem {
  label: string ;
  value: number ;
  id:number;
}

const AddInformationProfileScreen: React.FC = () => {
  const data: DataItem[] = [
    { label: 'Male', value: 1 ,id:1},
    { label: 'Female', value: 2, id:2 },
  ];
  const [value, setValue] = useState<number>(0);

  const handleDropdownChange = (item: DataItem) => {
    setValue(item.value);
  };
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const useNavigationLoginScreen = () => {
    navigation.navigate('LoginScreen');
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
                    style={AddInformationProfile.textinput}
                  />
                </View>
                <View>
                  <Dropdown
                    style={AddInformationProfile.dropdown}
                    placeholderStyle={AddInformationProfile.placeholderStyle}
                    selectedTextStyle={AddInformationProfile.selectedTextStyle}
                    itemTextStyle={AddInformationProfile.itemTextStyle}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    value={value}
                    placeholder="Gender"
                    onChange={handleDropdownChange}
                  />
                </View>
                <View style={AddInformationProfile.viewbutton}>
                  <TouchableOpacity style={AddInformationProfile.buttonCreate} onPress={useNavigationLoginScreen}>
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
