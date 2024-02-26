import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';

const CreateTreatmentRemindScreen = () => {
  const [medicineName, setMedicineName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [time, setTime] = useState('');
  const [reminder, setReminder] = useState('');

  const handleSave = () => {
    console.log('Nút Lưu đã được nhấn');
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewForm}>
        <View>
          <Text style={styles.textTitle}>Medicine name </Text>
          <View style={styles.viewInput}>
            <TextInput
              placeholderTextColor="#9CA3AF"
              placeholder=""
              style={styles.textInput}
              value={medicineName}
              onChangeText={setMedicineName}
            />
          </View>
        </View>
        <View>
          <Text style={styles.textLabel}>Quantity of medicine</Text>
          <View style={styles.viewInput}>
            <TextInput
              placeholderTextColor="#9CA3AF"
              placeholder=""
              style={styles.textInput}
              value={quantity}
              onChangeText={setQuantity}
            />
          </View>
        </View>
        <View>
          <Text style={styles.textLabel}>Time to medicine</Text>
          <View style={styles.viewInput}>
            <TextInput
              placeholderTextColor="#9CA3AF"
              placeholder=""
              style={styles.textInput}
              value={time}
              onChangeText={setTime}
            />
          </View>
        </View>
        <View>
          <Text style={styles.textLabel}>Reminder</Text>
          <View style={styles.viewInput}>
            <TextInput
              placeholderTextColor="#9CA3AF"
              placeholder=""
              style={styles.textInput}
              value={reminder}
              onChangeText={setReminder}
            />
          </View>
        </View>
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.buttonSave} onPress={handleSave}>
            <Text style={styles.textCreate}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewForm: {
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  textTitle: {
    color: '#000',
    fontSize: 16,
    marginBottom: 5, 
  },
  textLabel: {
    color: '#000',
    fontSize: 16,
    marginBottom: 5,
  },
  viewInput: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    marginBottom: 5, 
  },
  textInput: {
    fontWeight: 'bold',
    flex: 1,
    paddingHorizontal: 10, 
    color: '#000',
  },
  viewButton: {
    paddingTop: 8,
  },
  buttonSave: {
    backgroundColor: '#87CEFA',
    paddingTop: 14,paddingBottom: 14,
    borderRadius: 66,
    alignItems: 'center',
  },
  textCreate: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


export default CreateTreatmentRemindScreen