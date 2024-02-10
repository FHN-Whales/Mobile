import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../../../type/type';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import rendertitlecreate from '../../../../styles/HomePage/Blog/CreateBlog/RenderTitleCreate';
const renderTitleCreate = () =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const useGoBack = () => {
        navigation.goBack();
      };
    return (
      <View style={rendertitlecreate.viewGoBack}>
        <View style={rendertitlecreate.viewBack}>
          <TouchableOpacity onPress={useGoBack}>
            <Image source={require('../../../../image/back-icon.png')} />
          </TouchableOpacity>
          <Text style={rendertitlecreate.textFill}>Create Blog</Text>
        </View>
        <Text style={rendertitlecreate.textPost}>POST</Text>
      </View>
    );
};
export default renderTitleCreate;
