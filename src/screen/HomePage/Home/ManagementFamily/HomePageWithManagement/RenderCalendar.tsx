/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { Image, Modal, Text, TouchableOpacity, View, FlatList, ActivityIndicator } from 'react-native';
import rendercalendar from '../../../../../styles/HomePage/Home/ManagementFamily/HomePageWithManagement/RenderCalendar';
import useRenderCalendar from '../../../../../hook/HomePage/Home/ManagementWithFamily/HomePageWithFamily/useRenderCalendar';
const RenderCalendar = () => {
  const {selected, setSelected, handleDayPress,showModal,handleCloseModal,handleRefetchWithDelay,SearchReminder,isError,refetch ,formatDate} = useRenderCalendar();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
}, []);
const renderReminderItem = ({ item }) => {
  console.log('item', item);
  return (
    <View style={rendercalendar.renderViewItem}>
      {item.treatmentInfo && item.healthCheckInfo && (
        <View style={rendercalendar.viewItem}>
          <Text style={rendercalendar.textDate}>Username:</Text>
          <Text style={rendercalendar.text}> {item.user.username}</Text>
        </View>
      )}
      {item.treatmentInfo && (
        <>
        <View style={rendercalendar.viewItem}>
          <Text style={rendercalendar.textDate}>Username:</Text>
          <Text style={rendercalendar.text}> {item.user.username}</Text>
        </View>
          <Text style={rendercalendar.textDate}>Treatment Info:</Text>
          {item.treatmentInfo.map((info, index) => (
            <View style={rendercalendar.viewTimeOfDay} key={index}>
              <View style={rendercalendar.viewItem}>
                <Text style={rendercalendar.textDate}>Time of Day:</Text>
                <Text style={rendercalendar.text}> {info.timeOfDay}</Text>
              </View>
              <View style={rendercalendar.viewItem}>
                <Text style={rendercalendar.textDate}>Treatment Time:</Text>
                <Text style={rendercalendar.text}>{info.treatmentTime}</Text>
              </View>
              {info.medications.map((medication, medicationIndex) => (
                <View key={medicationIndex}>
                  <View style={rendercalendar.viewItem}>
                    <Text style={rendercalendar.textDate}>Medication Name:</Text>
                    <Text style={rendercalendar.text}> {medication.medicationName}</Text>
                  </View>
                  <View style={rendercalendar.viewItem}>
                    <Text style={rendercalendar.textDate}>Dosage:</Text>
                    <Text style={rendercalendar.text}>{medication.dosage}</Text>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </>
      )}
      {item.healthCheckInfo && (
        <>
        <View style={rendercalendar.viewItem}>
          <Text style={rendercalendar.textDate}>Username:</Text>
          <Text style={rendercalendar.text}> {item.user.username}</Text>
        </View>
          <Text style={rendercalendar.textDate}>Healthcheck Info:</Text>
          <View style={rendercalendar.viewTimeOfDay}>
            <View style={rendercalendar.viewItem}>
              <Text style={rendercalendar.textDate}>Re-examination Time:</Text>
              <Text style={rendercalendar.text}> {item.healthCheckInfo.reExaminationTime}</Text>
            </View>
            <View style={rendercalendar.viewItem}>
              <Text style={rendercalendar.textDate}>Re-examination Date:</Text>
              <Text style={rendercalendar.text}> {formatDate(item.healthCheckInfo.reExaminationDate)} </Text>
            </View>
            <View style={rendercalendar.viewItem}>
              <Text style={rendercalendar.textDate}> Re-examination Location: </Text>
              <Text style={rendercalendar.text}>  {item.healthCheckInfo.reExaminationLocation} </Text>
            </View>
            <View style={rendercalendar.viewItem}>
              <Text style={rendercalendar.textDate}>Name Hospital:</Text>
              <Text style={rendercalendar.text}>{item.healthCheckInfo.nameHospital}</Text>
            </View>
            <View style={rendercalendar.viewItem}>
              <Text style={rendercalendar.textDate}>User Note:</Text>
              <Text style={rendercalendar.text}>{item.healthCheckInfo.userNote}</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};
  return (
    <View style={rendercalendar.view}>
      <Calendar
        style={rendercalendar.calendar}
        onDayPress={handleDayPress}
        markedDates={{[selected]: {selected: true}}}
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
                <Image
                  source={require('../../../../../image/icomoon-free_notification.png')}
                />
              </TouchableOpacity>
              <View style={rendercalendar.viewFunction}>
                <TouchableOpacity>
                  <Image
                    source={require('../../../../../image/tdesign_edit-2.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require('../../../../../image/streamline_recycle-bin-2.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{paddingTop: 10, paddingBottom: 10}}>
              <View style={rendercalendar.viewBorder} />
            </View>
            {SearchReminder && SearchReminder.length > 0 ? (
              <FlatList
                data={SearchReminder}
                renderItem={renderReminderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            ) : isLoading ? (
              <ActivityIndicator size="large" color="#87CEFA" />
            ) : null}

            <TouchableOpacity
              style={rendercalendar.viewClose}
              onPress={() => {
                handleCloseModal();
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
