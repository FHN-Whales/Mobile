import React from 'react';
import { Calendar } from 'react-native-calendars';
import { Image, Modal, Text, TouchableOpacity, View, FlatList } from 'react-native';
import rendercalendar from '../../../../../styles/HomePage/Home/ManagementFamily/HomePageWithManagement/RenderCalendar';
import useRenderCalendar from '../../../../../hook/HomePage/Home/ManagementWithFamily/HomePageWithFamily/useRenderCalendar';
const RenderCalendar = () => {
  const {selected,handleDayPress,showModal,handleCloseModal,handleRefetchWithDelay,SearchReminder,isError,refetch} = useRenderCalendar();
  const renderReminderItem = ({ item }: { item: SearchReminder }): React.ReactNode => (
    <View style={rendercalendar.renderViewItem}>
      <View style={rendercalendar.viewItem}>
        <Text style={rendercalendar.textDate}>Username:</Text>
        <Text style={rendercalendar.text}> {item.user.username}</Text>
      </View>
      <Text style={rendercalendar.textDate}>Treatment Info:</Text>
      {item.treatmentInfo.map((info: { timeOfDay: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; treatmentTime: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; medications: { medicationName: string | number | boolean | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; dosage: string | number | boolean | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }[]; }, index: React.Key | null | undefined) => (
        <View style={rendercalendar.viewTimeOfDay} key={index}>
          <View style={rendercalendar.viewItem}>
            <Text style={rendercalendar.textDate}>Time of Day:</Text>
            <Text style={rendercalendar.text}> {info.timeOfDay}</Text>
          </View>
          <View style={rendercalendar.viewItem}>
            <Text style={rendercalendar.textDate}>Treatment Time:</Text>
            <Text style={rendercalendar.text}>{info.treatmentTime}</Text>
          </View>
          {info.medications.map((medication: { medicationName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; dosage: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
            <View key={index}>
              <View style={rendercalendar.viewItem}>
                <Text style={rendercalendar.textDate}>Medication Name:</Text>
                <Text style={rendercalendar.text}>{medication.medicationName}</Text>
              </View>
              <View style={rendercalendar.viewItem}>
                <Text style={rendercalendar.textDate}>Dosage:</Text>
                <Text style={rendercalendar.text}>{medication.dosage}</Text>
              </View>
            </View>
          ))}
        </View>
      ))}
    </View>
  );

  return (
    <View style={rendercalendar.view}>
      <Calendar
        style={rendercalendar.calendar}
        onDayPress={handleDayPress}
        markedDates={{ [selected]: { selected: true } }}
        theme={{
          backgroundColor: '#F9FAFB',
          calendarBackground: '#F9FAFB',
          textSectionTitleColor: '#111928',
          selectedDayBackgroundColor: '#87CEFA',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#87CEFA',
          dayTextColor: '#6B7280',
        }}
      />
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}>
        <View style={rendercalendar.modal}>
          <View style={rendercalendar.modalView}>
            <View style={rendercalendar.viewIconFuntion}>
              <TouchableOpacity>
                <Image source={require('../../../../../image/icomoon-free_notification.png')} />
              </TouchableOpacity>
              <View style={rendercalendar.viewFunction}>
                <TouchableOpacity>
                  <Image source={require('../../../../../image/tdesign_edit-2.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('../../../../../image/streamline_recycle-bin-2.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ paddingTop: 10, paddingBottom: 10 }}>
              <View style={rendercalendar.viewBorder} />
            </View>
            {isError ? (
              <Text>Error fetching data</Text>
            ) : SearchReminder && SearchReminder.length > 0 ? (
              <FlatList
                data={SearchReminder}
                renderItem={renderReminderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            ) : (
              <Text style={rendercalendar.text}>No reminders for this day.</Text>
            )}
            <TouchableOpacity
              style={rendercalendar.viewClose}
              onPress={() => {
                handleCloseModal();
                handleRefetchWithDelay();
              }}>
              <Image source={require('../../../../../image/x.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default RenderCalendar;
