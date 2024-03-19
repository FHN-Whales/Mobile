/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import useRenderTreatmentRemindScheduling from '../../../../hook/HomePage/Calendar/ManagementWithFamily/useRenderTreatmentRemindScheduling';
import rendertreatmentremindscheduling from '../../../../styles/HomePage/Calender/CalendarWithManagement/RenderTreatmentRemindScheduling';
import renderhealthscheduling from '../../../../styles/HomePage/Calender/CalendarWithManagement/RenderHealthCheckScheduling';
const RenderTreatmentRemindScheduling = () => {
  const {data, isLoading, isError, useNavigationEditTreament} = useRenderTreatmentRemindScheduling();
  const [showLoader, setShowLoader] = useState(true); // State để điều khiển hiển thị hoạt động đang tải
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const renderItem = ({ item }: { item: TreatmentReminder }) => (
    <View style={rendertreatmentremindscheduling.renderViewItem}>
      <View style={rendertreatmentremindscheduling.viewItem}>
        <Text style={rendertreatmentremindscheduling.textDate}>Username:</Text>
        <Text style={rendertreatmentremindscheduling.text}> {item.user.username}</Text>
      </View>
      <View style={rendertreatmentremindscheduling.viewTitle}>
        <Text style={rendertreatmentremindscheduling.textDate}>Treatment Info:</Text>
      </View>
      {item.treatmentInfo.map((info: { timeOfDay: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; treatmentTime: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; medications: any[]; }, index: React.Key | null | undefined) => (
        <View style={rendertreatmentremindscheduling.viewTimeOfDay} key={index}>
          <View style={renderhealthscheduling.viewSession}>
            <TouchableOpacity>
              <Image source={require('../../../../image/Vector.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => useNavigationEditTreament(info._id)}>
              <Image source={require('../../../../image/icon_pencil.png')} />
            </TouchableOpacity>
          </View>
          <View style={rendertreatmentremindscheduling.viewItem}>
            <Text style={rendertreatmentremindscheduling.textDate}>Time of Day:</Text>
            <Text style={rendertreatmentremindscheduling.text}>{''} {info.timeOfDay}</Text>
          </View>
          <View style={rendertreatmentremindscheduling.viewItem}>
            <Text style={rendertreatmentremindscheduling.textDate}>{''}Treatment Times:</Text>
            <Text style={rendertreatmentremindscheduling.text}>{info.treatmentTime}</Text>
          </View>
          {info.medications.map((medication, medicationIndex) => (
            <View key={medicationIndex}>
              <View style={rendertreatmentremindscheduling.viewItem}>
                <Text style={rendertreatmentremindscheduling.textDate}>{''}Medication Name:</Text>
                <Text style={rendertreatmentremindscheduling.text}>{medication.medicationName}</Text>
              </View>
              <View style={rendertreatmentremindscheduling.viewItem}>
                <Text style={rendertreatmentremindscheduling.textDate}>{''}Dosage:</Text>
                <Text style={rendertreatmentremindscheduling.text}>{medication.dosage}</Text>
              </View>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
  return (
    <View >
      {showLoader ? (
        <ActivityIndicator size="large" color="#87CEFA" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};
export default RenderTreatmentRemindScheduling;
