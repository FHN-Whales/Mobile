import React from 'react';
import {KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard,View} from 'react-native';
import editmember from '../../../../../styles/HomePage/Home/ManagementFamily/EditMember/EditMemberScreen';
import renderViewGoBack from './RenderViewGoBack';
import renderViewFormEdit from './RenderViewFormEdit';
import renderModalEdit from './RenderModelEdit';
const EditMemberScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={ editmember.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={ editmember.inner}>
          <View>
            {renderViewGoBack()}
            {renderViewFormEdit()}
            {renderModalEdit()}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default EditMemberScreen;
