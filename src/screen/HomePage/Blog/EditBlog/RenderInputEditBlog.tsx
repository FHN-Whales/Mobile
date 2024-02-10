import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import renderinputeditblog from '../../../../styles/HomePage/Blog/EditBlog/RenderInputEditBlog';
const renderInputEditBlog = () =>{
    return (
        <View style={renderinputeditblog.viewrenderinputcreatblog}>
            <View style={renderinputeditblog.viewrendernameuser}>
                <Image style={renderinputeditblog.imageuser} source={require('../../../../image/ha.jpg')} />
                <Text style={renderinputeditblog.textname}>Võ Thị Thúy Hà</Text>
            </View>
            <View style={renderinputeditblog.viewtextinput} >
                <TextInput style={renderinputeditblog.textinput} placeholderTextColor="#9CA3AF" placeholder="Post a new Blog" />
            </View>
            <View style={renderinputeditblog.viewInput}>
                <TouchableOpacity style={renderinputeditblog.viewInputImage}>
                    <Image source={require('../../../../image/Union.png')} />
                    <Text style={renderinputeditblog.textImage}>Image</Text>
                </TouchableOpacity>
                <TouchableOpacity style={renderinputeditblog.viewInputImage}>
                    <Image source={require('../../../../image/video.png')} />
                    <Text style={renderinputeditblog.textImage}>Video</Text>
                </TouchableOpacity>
                <TouchableOpacity style={renderinputeditblog.viewInputImage}>
                    <Image source={require('../../../../image/location.png')} />
                    <Text style={renderinputeditblog.textImage}>Location</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default renderInputEditBlog;
