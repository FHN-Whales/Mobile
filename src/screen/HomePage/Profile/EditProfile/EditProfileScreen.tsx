import React from 'react';
import {KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard,View,FlatList} from 'react-native';
import editprofile from '../../../../styles/HomePage/Profile/EditProfile/EditProfileScreen';
import renderViewFormEditProfile from './RenderViewFormEditProfile';
import renderViewGoBackProfile from './RenderViewGoBack';
import renderModalEditProfile from './renderModelEditProfile';
const EditProfileScreen = () => {
  const headerComponent = () => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={editprofile.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={editprofile.inner}>
            <View>
              {renderViewFormEditProfile()}
              {renderModalEditProfile()}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  };
  return (
    <View style={editprofile.container}>
      {renderViewGoBackProfile()}
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
export default EditProfileScreen;
