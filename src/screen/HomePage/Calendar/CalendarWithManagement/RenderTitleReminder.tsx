/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Text, View, TouchableOpacity  } from 'react-native';
import renderTreatmentRemindScheduling from './RenderTreatmentRemindScheduling';
import renderHealthScheduling from './RenderHealthCheckScheduling';
import rendertiltereminder from '../../../../styles/HomePage/Calender/CalendarWithManagement/RenderTitleReminder';
const renderTitleReminder = ()  =>{
  const [showTreatmentRemind, setShowTreatmentRemind] = useState(true);
  const [showHealthScheduling, setShowHealthScheduling] = useState(false);
  const handleTreatmentRemindPress = () => {
    setShowTreatmentRemind(true);
    setShowHealthScheduling(false);
  };
  const handleHealthSchedulingPress = () => {
    setShowTreatmentRemind(false);
    setShowHealthScheduling(true);
  };
    return (
      <View style={rendertiltereminder.container}>
        <View style={rendertiltereminder.view}>
        <TouchableOpacity
          style={[
            rendertiltereminder.viewTitle,
            showTreatmentRemind ? rendertiltereminder.activeTitle : null,
          ]}
          onPress={handleTreatmentRemindPress}
        >
          <Text style={rendertiltereminder.text}>Treatment Remind</Text>
          {showTreatmentRemind && <View style={rendertiltereminder.textBorder} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            rendertiltereminder.viewTitle,
            showHealthScheduling ? rendertiltereminder.activeTitle : null,
          ]}
          onPress={handleHealthSchedulingPress}
        >
          <Text style={rendertiltereminder.text}>Health check</Text>
          {showHealthScheduling && <View style={rendertiltereminder.textBorder} />}
        </TouchableOpacity>
      </View>
      <View style={rendertiltereminder.viewrender}>
        {showTreatmentRemind && renderTreatmentRemindScheduling()}
        {showHealthScheduling && renderHealthScheduling()}
      </View>
      </View>
    );
};
export default renderTitleReminder;
