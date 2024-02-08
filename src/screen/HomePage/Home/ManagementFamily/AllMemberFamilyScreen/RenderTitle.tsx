import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../../type/type';
import rendertitle from '../../../../../styles/HomePage/Home/ManagementFamily/AllMemberFamily/RenderTitle';
const renderTitle = () =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const useGoBack = () => {
        navigation.goBack();
      };
    return (
        <View style={rendertitle.viewGoBack}>
        <TouchableOpacity onPress={useGoBack}>
          <Image source={require('../../../../../image/back-icon.png')} />
        </TouchableOpacity>
        <Text style={rendertitle.textFill}>All Members</Text>
      </View>
    );
};
export default renderTitle;
