/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image,Text, View } from 'react-native';
import rendernewnotification from '../../../../styles/HomePage/Notification/Notificationswhenusingtheapp/RenderNewNotification';
const renderNewNotification = () =>{
    return (
        <View style={rendernewnotification.container}>
            <View style={rendernewnotification.viewRenderNotification}>
                <Text style={rendernewnotification.textToday}>TODAY</Text>
                <Text style={rendernewnotification.renderTextMarkAll}>Mark all as read</Text>
            </View>
            <View style={rendernewnotification.viewListNewNotification}>
                <View style={rendernewnotification.itemNotification}>
                    <View style={rendernewnotification.viewImageNoti}>
                        <Image source={require('../../../../image/noti.png')} />
                    </View>
                    <View style={rendernewnotification.viewContent}>
                        <View style={rendernewnotification.viewContentNoti}>
                            <Text style={rendernewnotification.textNoti}>Notification</Text>
                            <Text style={rendernewnotification.textTime}>1h</Text>
                        </View>
                        <View style={rendernewnotification.viewRemider}>
                            <Text style={rendernewnotification.textRemider}>Please take your medicine before  <Text style={rendernewnotification.textTimeRemider}>7 AM this morning.</Text></Text>
                        </View>
                        <View style={rendernewnotification.viewRemider}>
                            <Text style={rendernewnotification.textRemider}>The quantity is  <Text style={rendernewnotification.textTimeRemider}>3 tablets of medication.</Text></Text>
                        </View>
                        <View style={rendernewnotification.viewRemider}>
                            <Text style={rendernewnotification.textRemider}>The medicine that needs to be taken is   <Text  style={[rendernewnotification.textTimeRemider, { alignSelf: 'flex-start' }]}>Oxaprozin.</Text></Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};
export default  renderNewNotification;
