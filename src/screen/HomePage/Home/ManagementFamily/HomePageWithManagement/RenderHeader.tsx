import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import renderheader from '../../../../../styles/HomePage/Home/ManagementFamily/HomePageWithManagement/RenderHeader';
export const renderHeader = () => {
  return (
    <View style={renderheader.viewrenderHeader} >
      <View style={renderheader.viewText}>
        <Text style={renderheader.textHi}>Hi</Text>
        <Text style={renderheader.textUser}>Hà</Text>
      </View>
      <TouchableOpacity style={renderheader.viewiconnotification}>
        <Image source={require('../../../../../image/Notification.png')} />
      </TouchableOpacity>
    </View>
  );
};
