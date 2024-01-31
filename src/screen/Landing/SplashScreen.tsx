/* eslint-disable eol-last */
import React from 'react';
import { Image, ImageBackground, TouchableOpacity } from 'react-native';
import splashscreen from '../../styles/Langding/SplashScreen';
import { useNavigation } from '@react-navigation/native';
const SplashScreen = () => {
  const navigation = useNavigation();
  const useNavigationOnboardingScreen = () =>{
   navigation.navigate('OnboardingScreen')
  }
  return (
    <ImageBackground style={splashscreen.imagebackground} source={require('../../image/01_Splash_screen.png')} >
      <TouchableOpacity onPress={useNavigationOnboardingScreen}>
        <Image source={require('../../image/logo.png')} />
      </TouchableOpacity>
    </ImageBackground>
  );

};

export default SplashScreen;