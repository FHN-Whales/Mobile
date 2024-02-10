import React from 'react';
import {Text, View } from 'react-native';
import rendertitleblog from '../../../../styles/HomePage/Blog/BlogScreen/RenderTitleBlog';
const renderTitleBlog = () =>{
    return (
        <View style={rendertitleblog.viewTitle}>
            <Text style={rendertitleblog.texttitle}>Wellcome to Blog</Text>
        </View>
    );
};
export default  renderTitleBlog;
