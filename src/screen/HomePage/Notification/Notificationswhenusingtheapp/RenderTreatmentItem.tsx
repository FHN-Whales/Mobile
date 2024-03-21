import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import rendernewnotification from '../../../../styles/HomePage/Notification/Notificationswhenusingtheapp/RenderNewNotification';
const RenderTreatmentNotifications: React.FC<{ data }> = ({ data }) => {
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
                            <Text style={rendernewnotification.textNoti}>Treatment Notification:</Text>
                            <View style={rendernewnotification.viewRemider}>
                                <Text style={rendernewnotification.textRemider}>Treatment Time:</Text>
                                <Text style={rendernewnotification.textTimeRemider}>{item.treatmentTime}</Text>
                            </View>
                            <Text style={rendernewnotification.textRemider}>Medications:</Text>
                            <View style={rendernewnotification.viewMedication}>
                                {item.medications.map((medication) => (
                                    <View key={medication._id}>
                                        <View style={rendernewnotification.viewRemider}>
                                            <Text style={rendernewnotification.textRemider}>Medication Name: </Text>
                                            <Text style={rendernewnotification.textTimeRemider}>{medication.medicationName}</Text>
                                        </View>
                                        <View style={rendernewnotification.viewRemider}>
                                            <Text style={rendernewnotification.textRemider}>Dosage: </Text>
                                            <Text style={rendernewnotification.textTimeRemider}>{medication.dosage}</Text>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>
                </View>
            )}
        />
    );
};

export default RenderTreatmentNotifications;
