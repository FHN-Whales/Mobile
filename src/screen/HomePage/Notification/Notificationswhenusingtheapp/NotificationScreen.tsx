import React from 'react';
import {FlatList, View} from 'react-native';
import renderTitleNotification from './RenderTitleNotification';
import renderNewNotification from './RenderTreatment';
// import renderYesterdayNotification from './RenderYesterdayNotification';
import notification from '../../../../styles/HomePage/Notification/Notificationswhenusingtheapp/NotificationScreen';
const NotificationScreen = () => {
  const headerComponent = () => {
    return (
      <View style={notification.container}>
        {renderNewNotification()}
      </View>
    );
  };
  return (
    <View style={notification.container}>
      {renderTitleNotification()}
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={headerComponent}
        data={[]}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        renderItem={({item}) => (
          <View>
            <></>
          </View>
        )}
      />
    </View>
  );
};
export default NotificationScreen;
