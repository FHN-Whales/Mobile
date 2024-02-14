/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image,Text, View } from 'react-native';
import renderyesterdaynotification from '../../../../styles/HomePage/Notification/Notificationswhenusingtheapp/RenderYesterdayNotification';
const renderYesterdayNotification = () =>{
    return (
        <View style={renderyesterdaynotification.container}>
            <View style={renderyesterdaynotification.viewRenderNotification}>
                <Text style={renderyesterdaynotification.textToday}>YESTERDAY</Text>
                <Text style={renderyesterdaynotification.renderTextMarkAll}>Mark all as read</Text>
            </View>
            <View style={renderyesterdaynotification.viewListNewNotification}>
                <View style={renderyesterdaynotification.itemNotification}>
                    <View style={renderyesterdaynotification.viewImageNoti}>
                        <Image source={require('../../../../image/noti.png')} />
                    </View>
                    <View style={renderyesterdaynotification.viewContent}>
                        <View style={renderyesterdaynotification.viewContentNoti}>
                            <Text style={renderyesterdaynotification.textNoti}>Notification</Text>
                            <Text style={renderyesterdaynotification.textTime}>1đ</Text>
                        </View>
                        <View style={renderyesterdaynotification.viewRemider}>
                            <Text style={renderyesterdaynotification.textRemider}>Please take your medicine before  <Text style={renderyesterdaynotification.textTimeRemider}>7 AM this morning.</Text></Text>
                        </View>
                        <View style={renderyesterdaynotification.viewRemider}>
                            <Text style={renderyesterdaynotification.textRemider}>The quantity is  <Text style={renderyesterdaynotification.textTimeRemider}>3 tablets of medication.</Text></Text>
                        </View>
                        <View style={renderyesterdaynotification.viewRemider}>
                            <Text style={renderyesterdaynotification.textRemider}>The medicine that needs to be taken is   <Text  style={[renderyesterdaynotification.textTimeRemider, { alignSelf: 'flex-start' }]}>Oxaprozin.</Text></Text>
                        </View>
                    </View>
                </View>
                <View style={renderyesterdaynotification.itemNotification}>
                    <View style={renderyesterdaynotification.viewImageNoti}>
                        <Image source={require('../../../../image/noti.png')} />
                    </View>
                    <View style={renderyesterdaynotification.viewContent}>
                        <View style={renderyesterdaynotification.viewContentNoti}>
                            <Text style={renderyesterdaynotification.textNoti}>Successfully entered information</Text>
                            <Text style={renderyesterdaynotification.textTime}>1đ</Text>
                        </View>
                        <View style={renderyesterdaynotification.viewRemider}>
                            <Text style={renderyesterdaynotification.textRemider}>You just updated your father's health status.</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};
export default  renderYesterdayNotification;
