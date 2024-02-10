import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import renderbuttoncreateblog from '../../../../styles/HomePage/Blog/BlogScreen/RenderButtonCreaeBlog';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../type/type';
const renderButtonCreateBlog = () =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const useNavigationPostBlogScreen = ()=> {
        navigation.navigate('PostBlogScreen');
      };
    return (
        <View style={renderbuttoncreateblog.viewButtonCreateBlog}>
            <View style ={renderbuttoncreateblog.viewCreateBlog}>
                <Image style={renderbuttoncreateblog.image} source={require('../../../../image/ha.jpg')}  />
                <TouchableOpacity style={renderbuttoncreateblog.button} onPress={useNavigationPostBlogScreen } >
                    <Text style={renderbuttoncreateblog.text}>Hello Ha, Please add a new blog.</Text>
                </TouchableOpacity>
                <Image source={require('../../../../image/camera.png')} />
            </View>
        </View>
    );
};
export  default renderButtonCreateBlog;
