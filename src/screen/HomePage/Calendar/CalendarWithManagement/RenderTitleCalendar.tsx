import React from 'react';
import {Text, View } from 'react-native';
import rendertitleblog from '../../../../styles/HomePage/Blog/BlogScreen/RenderTitleBlog';
const renderTitleCalender = () =>{
    return (
        <View style={rendertitleblog.viewTitle}>
            <Text style={rendertitleblog.texttitle}>Medication schedule</Text>
        </View>
    );
};
export default  renderTitleCalender;
