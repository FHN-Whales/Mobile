/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import renderviewformcreate from '../../../../../styles/HomePage/Home/ManagementFamily/AddMember/RenderViewForrmCreate';
import ImagePicker from 'react-native-image-crop-picker';
interface DataItem {
  label: string ;
  value: number ;
  id:number;
}
const renderViewFormCreate = () => {
  const data: DataItem[] = [
    { label: 'Male', value: 1 ,id:1},
    { label: 'Female', value: 2, id:2 },
  ];
  const [value, setValue] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleDropdownChange = (item: DataItem) => {
    setValue(item.value);
  };
  const openImagePicker = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
    }).then((image) => {
      // Xử lý ảnh đã chọn ở đây
      console.log('Selected image: ', image.path);
      // Cập nhật trạng thái selectedImage với đường dẫn của ảnh đã chọn
      setSelectedImage(image.path);
      // Gửi ảnh đã chọn lên máy chủ hoặc xử lý theo nhu cầu của bạn
      const formData = new FormData();
      formData.append('image', {
        uri: image.path,
        type: image.mime,
        name: image.filename || 'image.jpg',
      });
    }).catch((error) => {
      console.log('ImagePicker Error: ', error);
    });
  };
  return (
    <View>
      <TouchableOpacity
        style={renderviewformcreate.viewImageProfile}
        onPress={openImagePicker}>
        {selectedImage ? (
          <Image style={renderviewformcreate.imageAvater} source={{uri: selectedImage}} />
        ) : (
          <Image source={require('../../../../../image/profile-circle.png')} />
        )}
        <View style={renderviewformcreate.viewEdit}>
          <Image source={require('../../../../../image/edit-icon.png')} />
        </View>
      </TouchableOpacity>
      <View style={renderviewformcreate.viewForm}>
        <View style={renderviewformcreate.viewInput}>
          <View style={renderviewformcreate.image}>
            <Image source={require('../../../../../image/user.png')} />
          </View>
          <TextInput
            placeholderTextColor="#9CA3AF"
            placeholder="Nick Name"
            style={renderviewformcreate.textinput}
          />
        </View>
        <View style={renderviewformcreate.viewInput}>
          <View style={renderviewformcreate.image}>
            <Image source={require('../../../../../image/sms.png')} />
          </View>
          <TextInput
            placeholderTextColor="#9CA3AF"
            placeholder="Gmail"
            style={renderviewformcreate.textinput}
          />
        </View>
        <View style={renderviewformcreate.viewInput}>
          <View style={renderviewformcreate.image}>
            <Image source={require('../../../../../image/calendar-2.png')} />
          </View>
          <TextInput
            placeholderTextColor="#9CA3AF"
            placeholder="Date of Birth"
            style={renderviewformcreate.textinput}
          />
        </View>
        <View>
          <Dropdown
            style={renderviewformcreate.dropdown}
            placeholderStyle={renderviewformcreate.placeholderStyle}
            selectedTextStyle={renderviewformcreate.selectedTextStyle}
            itemTextStyle={renderviewformcreate.itemTextStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            value={value.toString()} // Convert the number to a string
            placeholder="Gender"
            onChange={handleDropdownChange}
          />
        </View>
      </View>
    </View>
  );
};
export default renderViewFormCreate;
