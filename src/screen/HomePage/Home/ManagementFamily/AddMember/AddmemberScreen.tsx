import React from 'react';
import {KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard,View} from 'react-native';
import addmember from '../../../../../styles/HomePage/Home/ManagementFamily/AddMember/AddMemberScreen';
import renderViewGoBack from './RenderViewGoBack';
import renderViewFormCreate from './RenderViewFormCreate';
import renderModalCreate from './RenderModelCreate';
const AddMemberScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={ addmember.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={ addmember.inner}>
          <View>
            {renderViewGoBack()}
            {renderViewFormCreate()}
            {renderModalCreate()}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default AddMemberScreen;
