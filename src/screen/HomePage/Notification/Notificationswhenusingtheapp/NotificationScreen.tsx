import React from 'react';
import { View } from 'react-native';
import renderTitleNotification from './RenderTitleNotification';
import renderNewNotification from './RenderNewNotification';
import renderYesterdayNotification from './RenderYesterdayNotification';
import notification from '../../../../styles/HomePage/Notification/Notificationswhenusingtheapp/NotificationScreen';
const NotificationScreen = () =>{
    return (
        <View style={notification.container}>
           {renderTitleNotification()}
           {renderNewNotification()}
           {renderYesterdayNotification()}
        </View>
    );
};
export default NotificationScreen;
