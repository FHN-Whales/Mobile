/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import renderlistmembermanagement from '../../../../../styles/HomePage/Home/ManagementFamily/HomePageWithManagement/RenderListMemberWithManagement';
// import useRenderMemberWithManagement from '../../../../../hook/HomePage/Home/ManagementWithFamily/HomePageWithFamily/useRenderMemberWithManagement';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../../type/type';
interface User {
  id: string;
  name: string;
  old: string;
  major: string;
  image: string;
}
const renderListMemberWithManagement = () => {
  // const { user ,useNavigationAllMemberWithManagement,useNavigationAddMember } = useRenderMemberWithManagement();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const useNavigationAllMemberWithManagement = (): void => {
    navigation.navigate('AllMemberFamilyScreen');
  };
  const useNavigationAddMember = (): void => {
    navigation.navigate('AddMemberScreen');
  };
  const useNavigationEditMember = (): void => {
    navigation.navigate('EditMemberScreen');
  };
  const user: User[] = [
    {
      id: '1',
      name: 'Mẹ',
      old: '21 year old',
      major: 'Mobile Developer',
      image: require('../../../../../image/ha.jpg'),
    },
    {
      id: '2',
      name: 'Bố',
      old: '21 year old',
      major: 'Mobile Developer',
      image: require('../../../../../image/nhat.jpg'),
    },
    {
      id: '3',
      name: 'Con ',
      old: '21 year old',
      major: 'Mobile Developer',
      image: require('../../../../../image/xuan.jpg'),
    },
    {
      id: '4',
      name: 'Con',
      old: '22 year old',
      major: 'Front End Developer',
      image: require('../../../../../image/tien.jpg'),
    },
    {
      id: '5',
      name: 'Con',
      old: '21 year old',
      major: 'Tester Engeneer',
      image: require('../../../../../image/luan.jpg'),
    },
    {
      id: '6',
      name: 'Mẹ',
      old: '21 year old',
      major: 'Mobile Developer',
      image: require('../../../../../image/ha.jpg'),
    },
  ];
  return (
    <View style={renderlistmembermanagement.viewlistMember}>
      <View style={renderlistmembermanagement.view}>
        <View style={renderlistmembermanagement.viewmember}>
          <Text style={renderlistmembermanagement.textMember}>Thành viên</Text>
          <TouchableOpacity style={renderlistmembermanagement.touchableOpacity} onPress={useNavigationAddMember}>
            <Image source={require('../../../../../image/flat-color-icons_plus.png')} />
          </TouchableOpacity>
        </View>
        <Text style={renderlistmembermanagement.textMember} onPress={useNavigationAllMemberWithManagement}>Xem tất cả</Text>
      </View>
      <FlatList
        data={user}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ gap: 18, paddingTop: 20, paddingBottom: 20 }}
        keyExtractor={(item: User) => item.id}
        renderItem={({ item, index }: { item: User, index: number }) => (
          <View style={renderlistmembermanagement.viewItemMember}>
            <Image style={renderlistmembermanagement.image} source={item.image} />
            <Text style={renderlistmembermanagement.textmate}>{item.name}</Text>
          </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default renderListMemberWithManagement;
