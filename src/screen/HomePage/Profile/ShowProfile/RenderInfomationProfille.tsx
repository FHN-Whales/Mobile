import React from 'react';
import { Image, Text, TouchableOpacity,View  } from 'react-native';
import renderinfomationprofile from '../../../../styles/HomePage/Profile/ShowProfile/RenderInfomationProfille';
import useProfile from '../../../../hook/HomePage/Profile/useProfille';
const renderInformationProfile = () =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {   useNavigationEditProfileScreen} = useProfile();
    return (
        <View style={renderinfomationprofile.container} >
            <View style={renderinfomationprofile.viewInformation}>
                <Image style={renderinfomationprofile.image} source={require('../../../../image/ha.jpg')} />
                <TouchableOpacity onPress={useNavigationEditProfileScreen}>
                    <Image source={require('../../../../image/edit-icon.png')} />
                </TouchableOpacity>
                <Text style={renderinfomationprofile.textName}>Thúy Hà</Text>
                <Text style={renderinfomationprofile.textPhone}>0123456789</Text>
            </View>
        </View>
    );
};
export default renderInformationProfile;
