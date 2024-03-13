import React from 'react';
import { Image, Text, TouchableOpacity,View  } from 'react-native';
import renderinfomationprofile from '../../../../styles/HomePage/Profile/ShowProfile/RenderInfomationProfille';
const renderInformationProfile = () =>{
    return (
        <View style={renderinfomationprofile.container} >
            <View style={renderinfomationprofile.viewInformation}>
                <Image style={renderinfomationprofile.image} source={require('../../../../image/ha.jpg')} />
                <TouchableOpacity>
                    <Image source={require('../../../../image/edit-icon.png')} />
                </TouchableOpacity>
                <Text style={renderinfomationprofile.textName}>Thúy Hà</Text>
                <Text style={renderinfomationprofile.textPhone}>0123456789</Text>
            </View>
        </View>
    );
};
export default renderInformationProfile;
