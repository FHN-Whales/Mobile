import React, {useState} from 'react';
import {KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard,View,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import registerasmanager from '../../../styles/FamilyManagement/Register/RegisterAsAManagerscreen';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../type/type';
import { Dropdown } from 'react-native-element-dropdown';
interface DataItem {
  label: string ;
  value: number ;
  id:number;
}
const RegisterAsManagerScreen = ({ route }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const useNavigationAddInformationProfileScreen = () => {
    navigation.navigate('FillYourProfile', {
      email: email,
      role: value,
      password: password,
    });
    console.log(email);
    console.log(value);
    console.log(password);
  };
  const useGoBack = () => {
    navigation.goBack();
  };
  const { email } = route.params;
  const data: DataItem[] = [
    { label: 'Dad', value: 1 ,id:1},
    { label: 'Mom', value: 2, id:2 },
    { label: 'Con', value: 2, id:3 },
  ];
  const [value, setValue] = useState<number>(0);
  const [password, setPassword] = useState<string>('');

  const handleDropdownChange = (item: DataItem) => {
    setValue(item.value.toString());
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={registerasmanager.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={registerasmanager.inner}>
        <View style={registerasmanager.viewGoBack}>
            <TouchableOpacity onPress={useGoBack}>
              <Image source={require('../../../image/back-icon.png')} />
            </TouchableOpacity>
          </View>
          <View style={registerasmanager.viewCreate}>
            <View style={registerasmanager.viewLogo}>
              <Image source={require('../../../image/logo.png')} />
              <Text style={registerasmanager.textLogo}>TRT</Text>
              <Text style={registerasmanager.textLogo}>
                Register as a manager{' '}
              </Text>
            </View>
            <Text style={registerasmanager.textWe}>
              Please enter the password to have family management rights
            </Text>
            <View style={registerasmanager.viewRadio}>
              <Text style={registerasmanager.textSelect}>Select member</Text>
              <View style={registerasmanager.viewitemSelect}>
                <View style={registerasmanager.viewitemSelectRadio}>
                <Dropdown
                    style={registerasmanager.dropdown}
                    placeholderStyle={registerasmanager.placeholderStyle}
                    selectedTextStyle={registerasmanager.selectedTextStyle}
                    itemTextStyle={registerasmanager.itemTextStyle}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    value={value.toString()}
                    placeholder="Role Member"
                    onChange={handleDropdownChange}
                  />
                </View>
              </View>
            </View>
            <View style={registerasmanager.view}>
              <View style={registerasmanager.viewForm}>
                <View style={registerasmanager.viewInput}>
                  <View style={registerasmanager.image}>
                    <Image source={require('../../../image/lock.png')} />
                  </View>
                  <TextInput
                    placeholderTextColor="#9CA3AF"
                    placeholder="Password"
                    onChangeText={text => setPassword(text)}
                    value={password}
                    style={registerasmanager.textinput}
                    secureTextEntry
                  />
                </View>
                <View style={registerasmanager.viewbutton}>
                  <TouchableOpacity style={registerasmanager.buttonNext} onPress={useNavigationAddInformationProfileScreen}>
                    <Text style={registerasmanager.textNext}>Next</Text>
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
export default RegisterAsManagerScreen;
