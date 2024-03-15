import React, {useEffect} from 'react';
import homepagewithmanagement from '../../../../../styles/HomePage/Home/ManagementFamily/HomePageWithManagement/HomePageWithManagement';
import {renderHeader} from './RenderHeader';
import renderCalendar from './RenderCalendar';
import renderListMemberWithManagement from './RenderMemberWithManagement';
import renderButonCreate from './RenderButtonCreate';
import {Alert, FlatList,  View} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const HomePageWithManagement = () => {
  useEffect(() => {
    messaging().onMessage(async remoteMessage => {
      const { title, body } = remoteMessage.notification;
      Alert.alert('Thông báo mới', `${title}\n\n${body}`);
    });

  });
  const headerComponent = () => {
    return (
      <View style={homepagewithmanagement.container}>
        {renderCalendar()}
        {renderListMemberWithManagement()}
        {renderButonCreate()}
      </View>
    );
  };
  return (
    <View style={homepagewithmanagement.container}>
      {renderHeader()}
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
export default HomePageWithManagement;
