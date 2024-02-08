/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Image, TextInput, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import renderviewformcreate from '../../../../../styles/HomePage/Home/ManagementFamily/AddMember/RenderViewForrmCreate';
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
  const handleDropdownChange = (item: DataItem) => {
    setValue(item.value);
  };
  return (
    <View>
      <View style={renderviewformcreate.viewImageProfile}>
        <Image source={require('../../../../../image/profile-circle.png')} />
        <View style={renderviewformcreate.viewEdit}>
          <Image source={require('../../../../../image/edit-icon.png')} />
        </View>
      </View>
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
