import React from 'react';
import { FlatList,View } from 'react-native';
import renderTitleCalender from './RenderTitleCalendar';
import renderSearchReminder from './RenderSearchRemider';
import renderListMemberWithManagement from '../../Home/ManagementFamily/HomePageWithManagement/RenderMemberWithManagement';
import renderCalendar from '../../Home/ManagementFamily/HomePageWithManagement/RenderCalendar';
import styles from '../../../../styles/HomePage/Calender/CalendarWithManagement/CalendarWithManagementScreen';
import renderTitleReminder from './RenderTitleReminder';
const CalendarScreen = () => {
  const headerComponent = () => {
    return (
      <View style={styles.container}>
        {renderSearchReminder()}
        {renderListMemberWithManagement()}
        {renderCalendar()}
        {renderTitleReminder()}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {renderTitleCalender()}
      <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
        ListEmptyComponent={headerComponent}
        data={[]}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        renderItem={({ item }) => (
          <View>
            <></>
          </View>
        )}
      />
    </View>
  );
};
export default CalendarScreen;
