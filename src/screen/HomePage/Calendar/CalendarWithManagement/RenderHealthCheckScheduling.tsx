import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import renderhealthscheduling from '../../../../styles/HomePage/Calender/CalendarWithManagement/RenderHealthCheckScheduling';
interface Item {
  session: string;
  doctor: string;
  re_examination_date: string;
  name_Hopital: string;
  reminder: string;
}
const renderHealthScheduling = () => {
  const data: Item[] = [
    {
      session: 'Health check',
      doctor: 'Lê Xuân',
      re_examination_date : '20/02/2024',
      name_Hopital: 'Bệnh viên 198',
      reminder:
        'Nhớ phải đi sớm và đúng giờ ',
    },
  ];
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      renderItem={({item, index}: {item: Item; index: number}) => (
        <View style={renderhealthscheduling.container}>
          <View style={renderhealthscheduling.viewSession}>
            <TouchableOpacity>
                <Image source={require('../../../../image/Vector.png')} />
            </TouchableOpacity>
            <Text style={renderhealthscheduling.textSession}>{item.session}</Text>
            <TouchableOpacity>
                <Image source={require('../../../../image/icon_pencil.png')} />
            </TouchableOpacity>
          </View>
          <View style={renderhealthscheduling.viewMedicine}>
            <Text style={renderhealthscheduling.textMedicine}>Doctor : </Text>
            <Text style={renderhealthscheduling.textMedicineName}>{item.doctor}</Text>
          </View>
          <View style={renderhealthscheduling.viewMedicine}>
            <Text style={renderhealthscheduling.textMedicine}>Re-examination date :</Text>
            <Text style={renderhealthscheduling.textMedicineName}>{item.re_examination_date}</Text>
          </View>
          <View style={renderhealthscheduling.viewMedicine}>
            <Text style={renderhealthscheduling.textMedicine}>Name Hopital :</Text>
            <Text style={renderhealthscheduling.textMedicineName}>{item.name_Hopital}</Text>
          </View>
          <View style={renderhealthscheduling.viewMedicine}>
            <Text style={renderhealthscheduling.textMedicine}>Reminder :</Text>
            <Text style={renderhealthscheduling.textMedicineName}>{item.reminder}</Text>
          </View>
        </View>
      )}
      horizontal={false}
    />
  );
};
export default renderHealthScheduling;
