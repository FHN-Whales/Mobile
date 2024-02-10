/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {Modal, TouchableOpacity} from 'react-native';
import {Image, Text} from 'react-native';
import {FlatList, View} from 'react-native';
import renderitemblog from '../../../../styles/HomePage/Blog/BlogScreen/RenderItemBlog';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../../type/type';
interface Blog {
  id: string;
  nameUser: string;
  imageBlog: any;
  nameBlog: string;
  description: string;
  image: any;
}
const renderItemBlog = () => {
  const blog: Blog[] = [
    {
      id: '1',
      nameUser: 'Võ Thị Trúc Ly',
      imageBlog: require('../../../../image/Imag.png'),
      nameBlog: 'Bênh di truyên',
      description:
        'Stroke, also known as a cerebral infarction, occurs when the blood supply to the brain is blocked. This is considered one of the most dangerous diseases, with a high risk of mortality if symptoms of a stroke are not promptly recognized and intervention is not carried out in a timely manner.',
      image: require('../../../../image/ha.jpg'),
    },
    {
      id: '2',
      nameUser: 'Võ Thị Trúc ',
      imageBlog: require('../../../../image/Imag.png'),
      nameBlog: 'Bênh hen suỹn',
      description:
        'Stroke, also known as a cerebral infarction, occurs when the blood supply to the brain is blocked. This is considered one of the most dangerous diseases, with a high risk of mortality if symptoms of a stroke are not promptly recognized and intervention is not carried out in a timely manner.',
      image: require('../../../../image/luan.jpg'),
    },
    {
      id: '3',
      nameUser: 'Võ Thị Trúc Ly',
      imageBlog: require('../../../../image/Imag.png'),
      nameBlog: 'Bênh ho gà',
      description:
        'Stroke, also known as a cerebral infarction, occurs when the blood supply to the brain is blocked. This is considered one of the most dangerous diseases, with a high risk of mortality if symptoms of a stroke are not promptly recognized and intervention is not carried out in a timely manner.',
      image: require('../../../../image/ha.jpg'),
    },
    {
      id: '4',
      nameUser: 'Võ Thị ',
      imageBlog: require('../../../../image/Imag.png'),
      nameBlog: 'Bênh nhồi máu cơ tim',
      description:
        'Stroke, also known as a cerebral infarction, occurs when the blood supply to the brain is blocked. This is considered one of the most dangerous diseases, with a high risk of mortality if symptoms of a stroke are not promptly recognized and intervention is not carried out in a timely manner.',
      image: require('../../../../image/ha.jpg'),
    },
  ];
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);
  const useNavigationEditBlogScreen = () => {
    navigation.navigate('EditBlogScreen');
  };
  const handleDeleteBlog = () => {
    setModalVisible(true);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };
  const handleOK = () => {
    setModalVisible(false);
    navigation.navigate('Blog');
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={blog}
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{
        gap: 18,
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
      }}
      keyExtractor={(item: Blog) => item.id}
      renderItem={({item, index}: {item: Blog; index: number}) => (
        <View style={renderitemblog.viewItem}>
          <View style={renderitemblog.viewnameUser}>
            <View style={renderitemblog.viewUser}>
              <Image style={renderitemblog.imageUser} source={item.image} />
              <Text style={renderitemblog.textnameUser}>{item.nameUser}</Text>
            </View>
            <View style={renderitemblog.viewIcon}>
              <TouchableOpacity onPress={useNavigationEditBlogScreen}>
                <Image source={require('../../../../image/icon_pencil.png')} />
              </TouchableOpacity>
              <View>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <View style={renderitemblog.centeredView}>
                    <View style={renderitemblog.modalView}>
                      <View style={renderitemblog.viewtitle}>
                        <Text style={renderitemblog.textCon}>
                          Delete Member
                        </Text>
                        <Text style={renderitemblog.textYour}>
                          Delete member successfully!
                        </Text>
                      </View>
                      <View style={renderitemblog.viewloadding}>
                        <TouchableOpacity
                          style={renderitemblog.buttonCancle}
                          onPress={handleCancel}>
                          <Text style={renderitemblog.textCancle}>
                            Cancle
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={renderitemblog.buttonOk}
                          onPress={handleOK}>
                          <Text style={renderitemblog.textOk}>OK</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
                <TouchableOpacity onPress={handleDeleteBlog}>
                  <Image source={require('../../../../image/Vector.png')} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={renderitemblog.viewContent}>
            <Text style={renderitemblog.textnameBlog}>{item.nameBlog}</Text>
            <Text style={renderitemblog.textdescription}>
              {item.description}
            </Text>
            <Image style={renderitemblog.imageBlog} source={item.imageBlog} />
          </View>
        </View>
      )}
      horizontal={false}
    />
  );
};
export default renderItemBlog;
