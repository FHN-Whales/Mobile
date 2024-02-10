/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import renderbuttoncreate from '../../../../../styles/HomePage/Home/ManagementFamily/AllMemberFamily/RenderButonCreate';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../../type/type';
const renderbuttonCreate = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const useNavigationAddMember = (): void => {
    navigation.navigate('AddMemberScreen');
  };
  return (
    <LinearGradient
      colors={['transparent', 'transparent', 'transparent']}
      style={renderbuttoncreate.container}
    >
      <TouchableOpacity onPress={useNavigationAddMember}>
        <Image source={require('../../../../../image/flat-color-icons_plus1.png')} />
      </TouchableOpacity>
    </LinearGradient>
  );
};
export default renderbuttonCreate;
