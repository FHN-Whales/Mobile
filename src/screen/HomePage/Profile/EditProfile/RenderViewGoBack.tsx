/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../type/type';
import renderviewgoback from '../../../../styles/HomePage/Home/ManagementFamily/AddMember/RenderViewGoBack';
const renderViewGoBackProfile = () =>{
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const useGoBack = () => {
      navigation.goBack();
    };
    return (
      <View style={renderviewgoback.viewGoBack}>
        <TouchableOpacity onPress={useGoBack}>
          <Image source={require('../../../../image/back-icon.png')} />
        </TouchableOpacity>
        <Text style={renderviewgoback.textFill}>Edit Your Profile</Text>
      </View>
    );
};
export default renderViewGoBackProfile;
