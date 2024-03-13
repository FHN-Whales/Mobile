import React from 'react';
import { Image } from 'react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../type/type';
import rendertitlenotification from '../../../../styles/HomePage/Notification/Notificationswhenusingtheapp/RenderTitleNotification';
const renderTitleNotification = () =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const useGoBack = () => {
      navigation.goBack();
    };
    return (
        <View style={rendertitlenotification.container}>
            <View style={rendertitlenotification.view}>
                <TouchableOpacity onPress={useGoBack} >
                    <Image source={require('../../../../image/arrow-left.png')} />
                </TouchableOpacity>
                <Text style={rendertitlenotification.textNotification}>Notification</Text>
                <View style={rendertitlenotification.viewNewNotification}>
                    <Text style={rendertitlenotification.textNewNotification}>1 New</Text>
                </View>
            </View>
        </View>
    );
};
export default renderTitleNotification;
