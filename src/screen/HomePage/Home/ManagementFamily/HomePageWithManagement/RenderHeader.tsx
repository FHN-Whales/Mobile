import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import renderheader from '../../../../../styles/HomePage/Home/ManagementFamily/HomePageWithManagement/RenderHeader';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../../type/type';
export const renderHeader = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const useNavigationNotification = (): void => {
    navigation.navigate('NotificationScreen');
  }
  return (
    <View style={renderheader.viewrenderHeader} >
      <View style={renderheader.viewText}>
        <Text style={renderheader.textHi}>Hi</Text>
        <Text style={renderheader.textUser}>Ha</Text>
      </View>
      <TouchableOpacity style={renderheader.viewiconnotification} onPress={useNavigationNotification}>
        <Image source={require('../../../../../image/Notification.png')} />
      </TouchableOpacity>
    </View>
  );
};
