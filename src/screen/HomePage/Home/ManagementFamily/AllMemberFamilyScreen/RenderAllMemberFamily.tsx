/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {FlatList,Image,Modal,Text,TouchableOpacity,View} from 'react-native';
import useRenderMemberWithManagement from '../../../../../hook/HomePage/Home/ManagementWithFamily/HomePageWithFamily/useRenderMemberWithManagement';
import renderallmemberfamily from '../../../../../styles/HomePage/Home/ManagementFamily/AllMemberFamily/RenderAllMemberFamily';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../../type/type';
interface User {
  id: string;
  name: string;
  old: string;
  major: string;
  image: any;
}
const renderAllMemberFamily = () => {
  const {user ,useNavigationEditMember} = useRenderMemberWithManagement();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);
  const handleCreateMember = () => {
      setModalVisible(true);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };
  const handleOK = () => {
    setModalVisible(false);
    navigation.navigate('AllMemberFamilyScreen');
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={user}
      contentContainerStyle={{
        gap: 18,
        paddingTop: 0,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
      }}
      keyExtractor={(item: User) => item.id}
      renderItem={({item, index}: {item: User; index: number}) => (
        <View style={renderallmemberfamily.viewItemMember}>
          <Image
            style={renderallmemberfamily.imageMember}
            source={item.image}
          />
          <View style={renderallmemberfamily.renderInformation}>
            <TouchableOpacity
              style={renderallmemberfamily.viewImage}
              onPress={useNavigationEditMember}>
              <Image source={require('../../../../../image/icon_pencil.png')} />
            </TouchableOpacity>
            <View style={renderallmemberfamily.viewInformation}>
              <Text style={renderallmemberfamily.textname}>{item.name}</Text>
            </View>
            <View style={renderallmemberfamily.viewborder} />
            <View>
              <Text style={renderallmemberfamily.textold}>{item.old}</Text>
              <Text style={renderallmemberfamily.textmajor}>{item.major}</Text>
              <View>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <View style={renderallmemberfamily.centeredView}>
                    <View style={renderallmemberfamily.modalView}>
                      <View style={renderallmemberfamily.viewtitle}>
                        <Text style={renderallmemberfamily.textCon}>Delete Member</Text>
                        <Text style={renderallmemberfamily.textYour}>Delete member successfully!</Text>
                      </View>
                      <View style={renderallmemberfamily.viewloadding}>
                        <TouchableOpacity style={renderallmemberfamily.buttonCancle}onPress={handleCancel}>
                          <Text style={renderallmemberfamily.textCancle}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={renderallmemberfamily.buttonOk}onPress={handleOK}>
                          <Text style={renderallmemberfamily.textOk}>OK</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
              <TouchableOpacity style={renderallmemberfamily.tou} onPress={handleCreateMember}>
                <Image source={require('../../../../../image/Vector.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      horizontal={false}
    />
  );
};
export default renderAllMemberFamily;
