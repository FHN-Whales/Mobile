import React, {useState} from 'react';
import {KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard,View,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import registerasmanager from '../../../styles/FamilyManagement/Register/RegisterAsAManagerscreen';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../type/type';

const RegisterAsManagerScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const useNavigationAddInformationProfileScreen = () => {
    navigation.navigate('FillYourProfile');
  };
  const radioButtonsData: RadioButtonProps[] = [
    {
      id: '1',
      label: 'Dad',
      value: 'Dad',
    },
    {
      id: '2',
      label: 'Mom',
      value: 'Mom',
    },
    {
      id: '3',
      label: 'Con',
      value: 'Con',
    },
  ];
  const [selectedId, setSelectedId] = useState<string | undefined>();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={registerasmanager.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={registerasmanager.inner}>
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
                  <RadioGroup
                    radioButtons={radioButtonsData}
                    onPress={setSelectedId}
                    selectedId={selectedId}
                    layout="row"
                    containerStyle={registerasmanager.radioGroup}
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
                    style={registerasmanager.textinput}
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
