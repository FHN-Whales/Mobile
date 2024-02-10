/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import renderlistmembermanagement from '../../../../../styles/HomePage/Home/ManagementFamily/HomePageWithManagement/RenderListMemberWithManagement';
import useRenderMemberWithManagement from '../../../../../hook/HomePage/Home/ManagementWithFamily/HomePageWithFamily/useRenderMemberWithManagement';
interface User {
  id: string;
  image: any;
  name: string;
}
const renderListMemberWithManagement = () => {
  const { user ,useNavigationAllMemberWithManagement,useNavigationAddMember } = useRenderMemberWithManagement();
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
