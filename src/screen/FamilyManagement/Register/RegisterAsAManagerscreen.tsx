import React from 'react';
import {KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard,View,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import registerasmanager from '../../../styles/FamilyManagement/Register/RegisterAsAManagerscreen';
import { useRoute } from '@react-navigation/native';
import useRegisterWithManagement from '../../../hook/FamilyManagement/Register/useRegisterWithManagement';
const RegisterAsManagerScreen = () => {
  const route = useRoute();
  const   {useNavigationAddInformationProfileScreen,error,useGoBack,role,setRule,password,setPassword} = useRegisterWithManagement(route);
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
            <View style={registerasmanager.view}>
              <View style={registerasmanager.viewForm}>
               <View style={registerasmanager.viewInput}>
                  <View style={registerasmanager.image}>
                    <Image source={require('../../../image/lock.png')} />
                  </View>
                  <TextInput
                    placeholderTextColor="#9CA3AF"
                    placeholder="Rule"
                    onChangeText={text => setRule(text)}
                    value={role}
                    style={registerasmanager.textinput}
                  />
                </View>
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
                {error ? <Text>{error}</Text> : null}
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
