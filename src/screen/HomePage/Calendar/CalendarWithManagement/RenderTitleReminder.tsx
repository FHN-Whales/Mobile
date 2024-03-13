import React from 'react';
import { Text, View } from 'react-native';
import rendertiltereminder from '../../../../styles/HomePage/Calender/CalendarWithManagement/RenderTitleReminder';
import RenderTreatmentRemindScheduling from './RenderTreatmentRemindScheduling';

const renderTitleReminder = () => {
  return (
    <View style={rendertiltereminder.container}>
      <View style={rendertiltereminder.view}>
        <View style={rendertiltereminder.viewTitle}>
          <Text style={rendertiltereminder.text}>Treatment Remind</Text>
        </View>
          {RenderTreatmentRemindScheduling()}
        <View style={rendertiltereminder.viewTitle}>
          <Text style={rendertiltereminder.text}>Health check</Text>
        </View>
      </View>
    </View>
  );
};

export default renderTitleReminder;
