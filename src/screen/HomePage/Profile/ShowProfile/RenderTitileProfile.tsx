import React from 'react';
import {Text, View } from 'react-native';
import rendertitleblog from '../../../../styles/HomePage/Blog/BlogScreen/RenderTitleBlog';
const renderTitleProfile = () =>{
    return (
        <View style={rendertitleblog.viewTitle}>
            <Text style={rendertitleblog.texttitle}>Profile</Text>
        </View>
    );
};
export default  renderTitleProfile;
