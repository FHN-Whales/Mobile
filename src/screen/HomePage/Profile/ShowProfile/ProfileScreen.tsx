import React from 'react';
import {FlatList,View} from 'react-native';
import renderTitleProfile from './RenderTitileProfile';
import renderInformationProfile from './RenderInfomationProfille';
import renderFunctionForProfile from './RenderFuntionForProfile';
import profile from '../../../../styles/HomePage/Profile/ShowProfile/ProfileScreen';
const ProfileScreen = () => {
  const headerComponent = () => {
    return (
    <View style={profile.container}>
        {renderInformationProfile()}
        {renderFunctionForProfile()}
    </View>
    );
  };
  return (
    <View style={profile.container}>
      {renderTitleProfile()}
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
export default ProfileScreen;
