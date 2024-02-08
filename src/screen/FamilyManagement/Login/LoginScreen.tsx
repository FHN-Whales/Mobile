import React, {useState} from 'react';
import {KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard,View,Image,Text,TextInput,TouchableOpacity,Modal,ActivityIndicator} from 'react-native';
import login from '../../../styles/FamilyManagement/Login/LoginScreen';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../type/type';
const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const useNavigationRegisterScreen = () => {
    navigation.navigate('RegisterScreen');
  };
  const useNavigationForgetPasswordScreen = () => {
    navigation.navigate('ForgetPasswordScreen');
  };
  const handleLogin = () => {
    setIsLoading(true);
    // Simulating a delay of 2 seconds
    setTimeout(() => {
      setIsLoading(false);
      setModalVisible(true);
      // Simulating a delay of 0.5 seconds before navigating to Home Page
      setTimeout(() => {
        setModalVisible(false);
        navigation.navigate('HomeScreen');
      }, 2000);
    }, 2000);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={login.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={login.inner}>
          <View style={login.viewCreate}>
            <View style={login.viewLogo}>
              <Image source={require('../../../image/logo.png')} />
              <Text style={login.textLogo}>TRT</Text>
            </View>
            <Text style={login.textLogo}>Hi, How are you today?</Text>
            <Text style={login.textWe}>Hope you’re doing fine.</Text>
            <View style={login.view}>
              <View style={login.viewForm}>
                <View style={login.viewInput}>
                  <View style={login.image}>
                    <Image source={require('../../../image/sms.png')} />
                  </View>
                  <TextInput
                    placeholderTextColor="#9CA3AF"
                    placeholder="Email"
                    style={login.textinput}
                  />
                </View>
                <View style={login.viewInput}>
                  <View style={login.image}>
                    <Image source={require('../../../image/lock.png')} />
                  </View>
                  <TextInput
                    placeholderTextColor="#9CA3AF"
                    placeholder="Password"
                    style={login.textinput}
                  />
                </View>
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
                              <Image source={require('../../../image/succesfully.png')} />
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
                    onPress={handleLogin}>
                    <Text style={login.textCreate}>Sign In</Text>
                  </TouchableOpacity>
                </View>
                <View style={login.viewor}>
                  <View style={login.viewborder} />
                  <Text style={login.textor}>or</Text>
                  <View style={login.viewborder} />
                </View>
                <View style={login.viewContinue}>
                  <TouchableOpacity style={login.Google}>
                    <View style={login.viewGoogle}>
                      <Image
                        source={require('../../../image/Google-Original.png')}
                      />
                      <Text style={login.textGoogle}>Sign In with Google</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={login.Google}>
                    <View style={login.viewGoogle}>
                      <Image source={require('../../../image/Facebook.png')} />
                      <Text style={login.textGoogle}>
                        Sign In with Facebook
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <Text
                  style={login.textForgetPassword}
                  onPress={useNavigationForgetPasswordScreen}>
                  Forgot password?
                </Text>
                <View style={login.viewNavigationSignIn}>
                  <Text style={login.textviewNavigationSignIn}>
                    Don’t have an account yet?
                  </Text>
                  <Text
                    style={login.textSignIn}
                    onPress={useNavigationRegisterScreen}>
                    Sign up
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default LoginScreen;
