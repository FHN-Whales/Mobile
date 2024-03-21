import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import rendernewnotification from '../../../../styles/HomePage/Notification/Notificationswhenusingtheapp/RenderNewNotification';
const RenderHealthNotifications: React.FC<{ data }> = ({ data }) => {
    const formatDate = (dateString: string | number | Date) => {
        const date = new Date(dateString);
        const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
                <View style={rendernewnotification.viewListNewNotification}>
                    <View style={rendernewnotification.itemNotification}>
                        <View style={rendernewnotification.viewImageNoti}>
                            <Image source={require('../../../../image/noti.png')} />
                        </View>
                        <View style={rendernewnotification.viewContent}>
                            <Text style={rendernewnotification.textNoti}>Health Notification:</Text>
                            <View style={rendernewnotification.viewRemider}>
                                <Text style={rendernewnotification.textRemider}>Re-Examination Date: </Text>
                                <Text style={rendernewnotification.textTimeRemider}>{' '}{formatDate(item.reExaminationDate)}</Text>
                            </View>
                            <View style={rendernewnotification.viewRemider}>
                                <Text style={rendernewnotification.textRemider}>Re-Examination Time:</Text>
                                <Text style={rendernewnotification.textTimeRemider}>{item.reExaminationTime}</Text>
                            </View>
                            <View style={rendernewnotification.viewRemider}>
                                <Text style={rendernewnotification.textRemider}>Re-Examination Location: </Text>
                                <Text style={rendernewnotification.textTimeRemider}>{item.reExaminationLocation}</Text>
                            </View>
                            <View style={rendernewnotification.viewRemider}>
                                <Text style={rendernewnotification.textRemider}>Name Hospital: </Text>
                                <Text style={rendernewnotification.textTimeRemider}> {item.nameHospital}</Text>
                            </View>
                            <View style={rendernewnotification.viewRemider}>
                                <Text style={rendernewnotification.textRemider}>UserNote:</Text>
                                <Text style={rendernewnotification.textTimeRemider}> {item.userNote}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            )}
        />
    );
};

export default RenderHealthNotifications;
