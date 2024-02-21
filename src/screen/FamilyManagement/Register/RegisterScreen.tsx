import React from 'react';
import {KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard,View,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import register from '../../../styles/FamilyManagement/Register/RegisterScreen';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../type/type';
const RegisterScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const useNavigationVerifyCodeScreen = () =>{
    navigation.navigate('VerifyCodeScreen');
  };
  const useNavigationLoginScreen = () =>{
    navigation.navigate('LoginScreen');
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={register.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={register.inner}>
          <View style={register.viewCreate}>
            <View style={register.viewLogo}>
              <Image source={require('../../../image/logo.png')} />
              <Text style={register.textLogo}>TRT</Text>
            </View>
            <Text style={register.textLogo}>Create Account</Text>
            <Text style={register.textWe}>We are here to help you!</Text>
            <View style={register.view}>
              <View style={register.viewForm}>
                <View style={register.viewInput}>
                  <View style={register.image}>
                    <Image source={require('../../../image/user.png')} />
                  </View>
                  <TextInput
                    placeholderTextColor="#9CA3AF"
                    placeholder="Your Name"
                    style={register.textinput}
                  />
                </View>
                <View style={register.viewInput}>
                  <View style={register.image}>
                    <Image source={require('../../../image/sms.png')} />
                  </View>
                  <TextInput
                    placeholderTextColor="#9CA3AF"
                    placeholder="Your Email"
                    style={register.textinput}
                  />
                </View>
                <View style={register.viewInput}>
                  <View style={register.image}>
                    <Image source={require('../../../image/lock.png')} />
                  </View>
                  <TextInput
                    placeholderTextColor="#9CA3AF"
                    placeholder="Password"
                    style={register.textinput}
                  />
                </View>
                <View style={register.viewbutton}>
                  <TouchableOpacity style={register.buttonCreate} onPress={useNavigationVerifyCodeScreen}>
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
                      <Image
                        source={require('../../../image/Google-Original.png')}
                      />
                      <Text style={register.textGoogle}>
                        Continue with Google
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={register.Google}>
                    <View style={register.viewGoogle}>
                      <Image
                        source={require('../../../image/Facebook.png')}
                      />
                      <Text style={register.textGoogle}>
                        Continue with Facebook
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={register.viewNavigationSignIn}>
                    <Text style={register.textviewNavigationSignIn}>Do you have an account ?</Text>
                    <Text style={register.textSignIn} onPress={ useNavigationLoginScreen} >Sign In</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default RegisterScreen;
