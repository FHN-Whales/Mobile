import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screen/Landing/SplashScreen';
import OnboardingScreen from '../screen/Landing/OnboardingScreen';
const Stack = createNativeStackNavigator();
const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  options={{headerShown: false}}  name="SplashScreen" component={SplashScreen} />
        <Stack.Screen  options={{headerShown: false}}  name="OnboardingScreen" component={OnboardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;