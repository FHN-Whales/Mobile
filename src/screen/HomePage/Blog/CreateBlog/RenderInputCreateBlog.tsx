import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import renderinputcreateblog from '../../../../styles/HomePage/Blog/CreateBlog/RenderInputCreateBlog';
const renderInputCreateBlog = () =>{
    return (
        <View style={renderinputcreateblog.viewrenderinputcreatblog}>
            <View style={renderinputcreateblog.viewrendernameuser}>
                <Image style={renderinputcreateblog.imageuser} source={require('../../../../image/ha.jpg')} />
                <Text style={renderinputcreateblog.textname}>Võ Thị Thúy Hà</Text>
            </View>
            <View style={renderinputcreateblog.viewtextinput} >
                <TextInput style={renderinputcreateblog.textinput} placeholderTextColor="#9CA3AF" placeholder="Post a new Blog" />
            </View>
            <View style={renderinputcreateblog.viewInput}>
                <TouchableOpacity style={renderinputcreateblog.viewInputImage}>
                    <Image source={require('../../../../image/Union.png')} />
                    <Text style={renderinputcreateblog.textImage}>Image</Text>
                </TouchableOpacity>
                <TouchableOpacity style={renderinputcreateblog.viewInputImage}>
                    <Image source={require('../../../../image/video.png')} />
                    <Text style={renderinputcreateblog.textImage}>Video</Text>
                </TouchableOpacity>
                <TouchableOpacity style={renderinputcreateblog.viewInputImage}>
                    <Image source={require('../../../../image/location.png')} />
                    <Text style={renderinputcreateblog.textImage}>Location</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default renderInputCreateBlog;
