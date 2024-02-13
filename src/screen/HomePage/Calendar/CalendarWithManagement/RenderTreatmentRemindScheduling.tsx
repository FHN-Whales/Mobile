import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import rendertreatmentremindscheduling from '../../../../styles/HomePage/Calender/CalendarWithManagement/RenderTreatmentRemindScheduling';
interface Item {
  session: string;
  medicineName: string;
  quantity: string;
  time: string;
  reminder: string;
}
const renderTreatmentRemindScheduling = () => {
  const data: Item[] = [
    {
      session: 'Morning',
      medicineName: 'Cetirizine, Hetamine',
      quantity: '2 viên/1 lần',
      time: '7:00 AM',
      reminder:
        'Nhớ phải ăn nó trước khi uống nhé ',
    },
    {
      session: 'Noon',
      medicineName: 'Cetirizine, Hetamine',
      quantity: '2 viên/1 lần',
      time: '12:00 PM',
      reminder:
        'Nhớ phải ăn nó trước khi uống nhé .',
    },
    {
      session: 'Evening',
      medicineName: 'Cetirizine, Hetamine',
      quantity: '2 viên/1 lần',
      time: '12:00 PM',
      reminder:
        'Nhớ phải ăn nó trước khi uống nhé. ',
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
        <View style={rendertreatmentremindscheduling.container}>
          <View style={rendertreatmentremindscheduling.viewSession}>
            <TouchableOpacity>
                <Image source={require('../../../../image/Vector.png')} />
            </TouchableOpacity>
            <Text style={rendertreatmentremindscheduling.textSession}>{item.session}</Text>
            <TouchableOpacity>
                <Image source={require('../../../../image/icon_pencil.png')} />
            </TouchableOpacity>
          </View>
          <View style={rendertreatmentremindscheduling.viewMedicine}>
            <Text style={rendertreatmentremindscheduling.textMedicine}>Medicine name :</Text>
            <Text style={rendertreatmentremindscheduling.textMedicineName}>{item.medicineName}</Text>
          </View>
          <View style={rendertreatmentremindscheduling.viewMedicine}>
            <Text style={rendertreatmentremindscheduling.textMedicine}>Quantity of medicine :</Text>
            <Text style={rendertreatmentremindscheduling.textMedicineName}>{item.quantity}</Text>
          </View>
          <View style={rendertreatmentremindscheduling.viewMedicine}>
            <Text style={rendertreatmentremindscheduling.textMedicine}>Time to medicine :</Text>
            <Text style={rendertreatmentremindscheduling.textMedicineName}>{item.time}</Text>
          </View>
          <View style={rendertreatmentremindscheduling.viewMedicine}>
            <Text style={rendertreatmentremindscheduling.textMedicine}>Reminder :</Text>
            <Text style={rendertreatmentremindscheduling.textMedicineName}>{item.reminder}</Text>
          </View>
        </View>
      )}
      horizontal={false}
    />
  );
};
export default renderTreatmentRemindScheduling;
