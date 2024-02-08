import React from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import renderbuttoncreate from '../../../../../styles/HomePage/Home/ManagementFamily/HomePageWithManagement/RenderButtonCreate';
const renderButonCreate = () =>{
    return (
        <View style={renderbuttoncreate.view}>
            <TouchableOpacity style={renderbuttoncreate.button}>
                <Text style={renderbuttoncreate.textbutton}>Create health check</Text>
            </TouchableOpacity>
            <TouchableOpacity style={renderbuttoncreate.button}>
                <Text style={renderbuttoncreate.textbutton}>CreateTreatment Remind Scheduling</Text>
            </TouchableOpacity>
        </View>
    );
};
export  default renderButonCreate;
