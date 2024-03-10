import React from 'react';
import {FlatList, Text, View} from 'react-native';
import useRenderTreatmentRemindScheduling from '../../../../hook/HomePage/Calendar/ManagementWithFamily/useRenderTreatmentRemindScheduling';
import rendertreatmentremindscheduling from '../../../../styles/HomePage/Calender/CalendarWithManagement/RenderTreatmentRemindScheduling';
const RenderTreatmentRemindScheduling = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data,isLoading,isError] = useRenderTreatmentRemindScheduling();
  const renderItem = ({item}: {item: TreatmentReminder}) => (
    <View style={rendertreatmentremindscheduling.renderViewItem}>
    <View style={rendertreatmentremindscheduling.viewItem}>
      <Text style={rendertreatmentremindscheduling.textDate}>Username:</Text>
      <Text style={rendertreatmentremindscheduling.text}> {item.user.username}</Text>
    </View>
    <View style= {rendertreatmentremindscheduling.viewTitle}>
      <Text style={rendertreatmentremindscheduling.textDate}>Treatment Info:</Text>
    </View>
    {item.treatmentInfo.map((info: { timeOfDay: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; treatmentTime: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; medications: { medicationName: string | number | boolean | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; dosage: string | number | boolean | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }[]; }, index: React.Key | null | undefined) => (
      <View style={rendertreatmentremindscheduling.viewTimeOfDay} key={index}>
        <View style={rendertreatmentremindscheduling.viewItem}>
          <Text style={rendertreatmentremindscheduling.textDate}>Time of Day:</Text>
          <Text style={rendertreatmentremindscheduling.text}> {info.timeOfDay}</Text>
        </View>
        <View style={rendertreatmentremindscheduling.viewItem}>
          <Text style={rendertreatmentremindscheduling.textDate}>Treatment Time:</Text>
          <Text style={rendertreatmentremindscheduling.text}>{info.treatmentTime}</Text>
        </View>
        {info.medications.map((medication: { medicationName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; dosage: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
          <View key={index}>
            <View style={rendertreatmentremindscheduling.viewItem}>
              <Text style={rendertreatmentremindscheduling.textDate}>Medication Name:</Text>
              <Text style={rendertreatmentremindscheduling.text}>{medication.medicationName}</Text>
            </View>
            <View style={rendertreatmentremindscheduling.viewItem}>
              <Text style={rendertreatmentremindscheduling.textDate}>Dosage:</Text>
              <Text style={rendertreatmentremindscheduling.text}>{medication.dosage}</Text>
            </View>
          </View>
        ))}
      </View>
    ))}
  </View>
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
export default RenderTreatmentRemindScheduling;
