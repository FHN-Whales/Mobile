/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Image, TextInput, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import renderviewformeditprofile from '../../../../styles/HomePage/Profile/EditProfile/RenderViewFormEditProfile.';
interface DataItem {
  label: string ;
  value: number ;
  id:number;
}
const renderViewFormEditProfile = () => {
  const data: DataItem[] = [
    { label: 'Male', value: 1 ,id:1},
    { label: 'Female', value: 2, id:2 },
  ];
  const [value, setValue] = useState<number>(0);
  const handleDropdownChange = (item: DataItem) => {
    setValue(item.value);
  };
  return (
    <View>
      <View style={renderviewformeditprofile.viewImageProfile}>
        <Image source={require('../../../../image/profile-circle.png')} />
        <View style={renderviewformeditprofile.viewEdit}>
          <Image source={require('../../../../image/edit-icon.png')} />
        </View>
      </View>
      <View style={renderviewformeditprofile.viewForm}>
      <View style={renderviewformeditprofile.viewInput}>
          <View style={renderviewformeditprofile.image}>
            <Image source={require('../../../../image/user.png')} />
          </View>
          <TextInput
            placeholderTextColor="#9CA3AF"
            placeholder="User Name"
            style={renderviewformeditprofile.textinput}
          />
        </View>
        <View style={renderviewformeditprofile.viewInput}>
          <View style={renderviewformeditprofile.image}>
            <Image source={require('../../../../image/user.png')} />
          </View>
          <TextInput
            placeholderTextColor="#9CA3AF"
            placeholder="Nick Name"
            style={renderviewformeditprofile.textinput}
          />
        </View>
        <View style={renderviewformeditprofile.viewInput}>
          <View style={renderviewformeditprofile.image}>
            <Image source={require('../../../../image/sms.png')} />
          </View>
          <TextInput
            placeholderTextColor="#9CA3AF"
            placeholder="Gmail"
            style={renderviewformeditprofile.textinput}
          />
        </View>
        <View style={renderviewformeditprofile.viewInput}>
          <View style={renderviewformeditprofile.image}>
            <Image source={require('../../../../image/calendar-2.png')} />
          </View>
          <TextInput
            placeholderTextColor="#9CA3AF"
            placeholder="Date of Birth"
            style={renderviewformeditprofile.textinput}
          />
        </View>
        <View>
          <Dropdown
            style={renderviewformeditprofile.dropdown}
            placeholderStyle={renderviewformeditprofile.placeholderStyle}
            selectedTextStyle={renderviewformeditprofile.selectedTextStyle}
            itemTextStyle={renderviewformeditprofile.itemTextStyle}
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
export default renderViewFormEditProfile;
