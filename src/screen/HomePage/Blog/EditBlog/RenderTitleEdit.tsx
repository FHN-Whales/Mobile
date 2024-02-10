import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../../../type/type';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import rendertitleedit from '../../../../styles/HomePage/Blog/EditBlog/RenderTitleEdit';
const renderTitleEdit = () =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const useGoBack = () => {
        navigation.goBack();
      };
    return (
      <View style={rendertitleedit.viewGoBack}>
        <View style={rendertitleedit.viewBack}>
          <TouchableOpacity onPress={useGoBack}>
            <Image source={require('../../../../image/back-icon.png')} />
          </TouchableOpacity>
          <Text style={rendertitleedit.textFill}>Edit Blog</Text>
        </View>
        <Text style={rendertitleedit.textPost}>EDIT</Text>
      </View>
    );
};
export default renderTitleEdit;
