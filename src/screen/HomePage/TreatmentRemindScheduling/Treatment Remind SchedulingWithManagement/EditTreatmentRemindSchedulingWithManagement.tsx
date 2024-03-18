import { Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput, Image, Button, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const EditTreatmentReminderScreen = ({ navigation }) => {
    const [timeOfDay, setTimeOfDay] = useState('');
    const [treatmentTime, setTreatmentTime] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [editedMedications, setEditedMedications] = useState([
        { name: '', dosage: '' },
    ]);
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        // Assume initialData is fetched from somewhere
        const initialData = {
            "treatmentReminderId": "606d93a7f29b641b94ab49db",
            "timeOfDay": "morning",
            "treatmentTime": "08:00 AM",
            "medications": [
                {
                    "name": "Medicine A",
                    "dosage": "10mg"
                },
                {
                    "name": "Medicine B",
                    "dosage": "20mg"
                }
            ]
        };

        setInitialData(initialData);

        if (initialData) {
            setTimeOfDay(initialData.timeOfDay);
            setTreatmentTime(initialData.treatmentTime);
            setEditedMedications(initialData.medications);
        }
    }, []);

    const handleSubmit = () => {
        // Logic to handle form submission
        setModalVisible(true); // Show confirmation modal
    };

    const handleConfirm = (date) => {
        // Handle confirmed date from DateTimePickerModal
        setSelectedDate(date);
        setDatePickerVisibility(false);
    };

    const hideDatePicker = () => {
        // Hide DateTimePickerModal
        setDatePickerVisibility(false);
    };

    const handleInputChange = (index, key, value) => {
        const newMedications = [...editedMedications];
        newMedications[index][key] = value;
        setEditedMedications(newMedications);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.innerContainer}>
                <Formik
                    initialValues={{
                        timeOfDay: timeOfDay,
                        treatmentTime: treatmentTime,
                        medications: editedMedications.map(medication => ({
                            name: medication.name,
                            dosage: medication.dosage
                        }))
                    }}
                    validationSchema={CreateHealthCheckSchema} // Chắc chắn thay thế CreateHealthCheckSchema bằng schema thích hợp của bạn
                    onSubmit={values => mutationCreatHealthCheck.mutate(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <>
                            <View style={styles.header}>
                                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                                    <Image source={require('../../../../image/back-icon.png')} style={styles.backIcon} />
                                </TouchableOpacity>
                                <Text style={styles.title}>Examination Information</Text>
                            </View>
                            <TextInput
                                placeholder="Time of Day"
                                onChangeText={(text) => setTimeOfDay(text)}
                                value={timeOfDay}
                                style={styles.input}
                            />
                            <TextInput
                                placeholder="Treatment Time"
                                onChangeText={(text) => setTreatmentTime(text)}
                                value={treatmentTime}
                                style={styles.input}
                            />
                            {editedMedications.map((medication, index) => (
                                <View key={index} style={{ marginBottom: 20 }}>
                                    <Text>{`Medicine ${index + 1}`}</Text>
                                    <TextInput
                                        placeholder="Medicine Name"
                                        value={medication.name}
                                        onChangeText={(text) => handleInputChange(index, 'name', text)}
                                        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
                                    />
                                    <TextInput
                                        placeholder="Dosage"
                                        value={medication.dosage}
                                        onChangeText={(text) => handleInputChange(index, 'dosage', text)}
                                        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
                                    />
                                </View>
                            ))}
                            <Button title="Save" onPress={handleSubmit} />
                        </>
                    )}
                </Formik>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(false);
                    }}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text>Update health check schedule?</Text>
                            <Text>Are you sure you want to update health check schedule?</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
                                <Text>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setModalVisible(false);
                                // Logic to update the health check schedule
                            }} style={styles.modalButton}>
                                <Text>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        marginRight: 10,
    },

    container: {
        flexGrow: 1,
        padding: 20,
    },
    innerContainer: {
        width: '100%',
    },
    backIcon: {
        width: 20,
        height: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%',
    },
    datePickerButton: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    modalButton: {
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#ddd',
        alignItems: 'center',
    },
});

export default EditTreatmentReminderScreen;
