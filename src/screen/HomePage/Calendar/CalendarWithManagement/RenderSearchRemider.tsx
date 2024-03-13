import React from 'react';
import { TextInput } from 'react-native';
import { Image } from 'react-native';
import {  View } from 'react-native';
import rendersearchblog from '../../../../styles/HomePage/Blog/BlogScreen/RenderSearchBlog';
const renderSearchReminder = () =>{
    return (
        <View style={rendersearchblog.viewrendersearchblog}>
            <View style={rendersearchblog.viewsearchblog}>
                <View style={rendersearchblog.viewImage}>
                    <Image source={require('../../../../image/search-normal.png')} />
                </View>
                <TextInput style={rendersearchblog.textInput} placeholderTextColor="#9CA3AF" placeholder="Search reminders.." />
            </View>
        </View>
    );
};

export default  renderSearchReminder;
