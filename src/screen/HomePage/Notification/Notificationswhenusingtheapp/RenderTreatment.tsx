/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'; // Import TouchableOpacity
import rendernewnotification from '../../../../styles/HomePage/Notification/Notificationswhenusingtheapp/RenderNewNotification';
import RenderTreatmentNotifications from './RenderTreatmentItem';
import RenderHealthNotifications from './RenderHealthCheckItem';
import useShowNotification from '../../../../hook/HomePage/Notification/useShowNotification';
const renderNewNotification = () => {
    const {shouldRefetch,selectedCategory, setSelectedCategory, isLoading, setIsLoading, data,isError,refetch} = useShowNotification();
    const renderTreatmentNotifications = () => (
        <RenderTreatmentNotifications data={data?.treatmentNotifications || []} />
    );
    const renderHealthNotifications = () => (
        <RenderHealthNotifications data={data?.healthNotifications || []} />
    );
    return (
      <View style={rendernewnotification.container1}>
        <View style={rendernewnotification.tabContainer}>
          <TouchableOpacity style={[  rendernewnotification.tabButton,selectedCategory === 'treatment' &&  rendernewnotification.activeTabButton,]}onPress={() => setSelectedCategory('treatment')}>
            <Text style={[  rendernewnotification.tabText, selectedCategory === 'treatment' && rendernewnotification.tabText1]}>Treatment</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={[ rendernewnotification.tabButton,  selectedCategory === 'health' &&  rendernewnotification.activeTabButton]}onPress={() => setSelectedCategory('health')}>
            <Text style={[ rendernewnotification.tabText, selectedCategory === 'health' && rendernewnotification.tabText1]}> HealthCheck</Text>
          </TouchableOpacity>
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" color="#87CEFA" />
        ) : (
          <>
            {selectedCategory === 'treatment' ? renderTreatmentNotifications() : renderHealthNotifications()}
          </>
        )}
      </View>
    );
};
export default renderNewNotification;
