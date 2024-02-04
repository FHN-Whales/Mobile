import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screen/Landing/SplashScreen';
import OnboardingScreen from '../screen/Landing/OnboardingScreen';
import RegisterScreen from '../screen/FamilyManagement/Register/RegisterScreen';
import RegisterAsManagerScreen from '../screen/FamilyManagement/Register/RegisterAsAManagerscreen';
import AddInformationProfileScreen from '../screen/FamilyManagement/Register/AddInformationProfileScreen';
import LoginScreen from '../screen/FamilyManagement/Login/LoginScreen';
import ForgetPasswordScreen from '../screen/FamilyManagement/ForgetPassword/ForgetPasswordScreen';
import VerifyCodeScreen from '../screen/FamilyManagement/ForgetPassword/VerifyCodeScreen';
import ResetPasswordScreen from '../screen/FamilyManagement/ForgetPassword/ResetPasswordScreen';
const Stack = createNativeStackNavigator();
const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="OnboardingScreen"
          component={OnboardingScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="RegisterScreen"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="RegisterAsManagerScreen"
          component={RegisterAsManagerScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="FillYourProfile"
          component={AddInformationProfileScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="LoginScreen"
          component={LoginScreen}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="ForgetPasswordScreen"
          component={ForgetPasswordScreen}
        />
          <Stack.Screen
          options={{headerShown: false}}
          name="VerifyCodeScreen"
          component={VerifyCodeScreen}
        />
          <Stack.Screen
          options={{headerShown: false}}
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
