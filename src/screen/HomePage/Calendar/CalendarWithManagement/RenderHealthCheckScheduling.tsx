/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import renderhealthscheduling from '../../../../styles/HomePage/Calender/CalendarWithManagement/RenderHealthCheckScheduling';
import useRenderHealthCheck from '../../../../hook/HomePage/Calendar/ManagementWithFamily/useRenderHealthCheck';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../type/type';
const renderHealthScheduling = () => {
  const {shouldRefetch,data,isLoading,isError,refetch,formatDate,showLoader,setShowLoader} = useRenderHealthCheck();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const useNavigationEditHealthCheck = () => {
    navigation.navigate('EditHeathCheckWithManagerScreen');
  };
  const renderItem = ({item}: {item: HealthCheck}) => (
    <View style={renderhealthscheduling.renderViewItem}>
      <View style={renderhealthscheduling.viewItem}>
        <Text style={renderhealthscheduling.textDate}>Username:</Text>
        <Text style={renderhealthscheduling.text}> {item.user.username}</Text>
      </View>
      <View style={renderhealthscheduling.viewTitle}>
        <Text style={renderhealthscheduling.textDate}>Health Check Info:</Text>
      </View>
      {item.reminders &&
        item.reminders.map((info: any, index: number) => (
          <View style={renderhealthscheduling.viewTimeOfDay} key={index}>
            <View style={renderhealthscheduling.viewSession}>
              <TouchableOpacity>
                <Image source={require('../../../../image/Vector.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={useNavigationEditHealthCheck}>
                <Image source={require('../../../../image/icon_pencil.png')} />
              </TouchableOpacity>
            </View>
            <View style={renderhealthscheduling.viewItem}>
              <Text style={renderhealthscheduling.textDate}>Re examination Time:</Text>
              <Text style={renderhealthscheduling.text}>{' '}{info.reExaminationTime}</Text>
            </View>
            <View style={renderhealthscheduling.viewItem}>
              <Text style={renderhealthscheduling.textDate}>Re Examination Date:</Text>
              <Text style={renderhealthscheduling.text}>{formatDate(info.reExaminationDate)}</Text>
            </View>
            <View style={renderhealthscheduling.viewItem}>
              <Text style={renderhealthscheduling.textDate}> Re Examination Location:</Text>
              <Text style={renderhealthscheduling.text}>{info.reExaminationLocation}</Text>
            </View>
            <View style={renderhealthscheduling.viewItem}>
              <Text style={renderhealthscheduling.textDate}>Name Hospital:</Text>
              <Text style={renderhealthscheduling.text}>{info.nameHospital}</Text>
            </View>
            <View style={renderhealthscheduling.viewItem}>
              <Text style={renderhealthscheduling.textDate}>User Note:</Text>
              <Text style={renderhealthscheduling.text}>{info.userNote}</Text>
            </View>
          </View>
        ))}
    </View>
  );
  return (
    <View>
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
export default renderHealthScheduling;
