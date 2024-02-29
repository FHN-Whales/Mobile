import React, { useState, useRef, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../../type/type';
import renderviewgoback from '../../../../../styles/HomePage/Home/ManagementFamily/AddMember/RenderViewGoBack';
import DatePicker from 'react-native-datepicker';

const CreateTreatmentRemindScreen = () => {
  const [medicineName, setMedicineName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [time, setTime] = useState(new Date().toLocaleTimeString()); // Đặt giá trị mặc định là thời gian hiện tại
  const [reminder, setReminder] = useState('');
  const [date, setDate] = useState(new Date());
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const inputRef = useRef<TextInput>(null);
  const [showAdditionalInputs, setShowAdditionalInputs] = useState(false);
  const [secondMedicineName, setSecondMedicineName] = useState('');
  const [thirdMedicineName, setThirdMedicineName] = useState('');

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const useGoBack = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    console.log('Nút Lưu đã được nhấn');
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewGoBack}>
        <TouchableOpacity onPress={useGoBack}>
          <Image source={require('../../../../../image/back-icon.png')} />
        </TouchableOpacity>
        <Text style={styles.textFill}>Add-Your-Medicines</Text>
      </View>
      <View style={styles.viewForm}>
        <View style={styles.viewIteminput}>
          <Text style={styles.textLabel}>Ngày bắt đầu</Text>
          <DatePicker
            style={{width: 200}}
            date={date}
            mode="date"
            placeholder="Chọn ngày"
            format="YYYY-MM-DD"
            minDate="2020-01-01"
            maxDate="2025-12-31"
            confirmBtnText="Xác nhận"
            cancelBtnText="Hủy"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
              dateText: {
                fontSize: 16,
                color: '#000',
              }
            }}
            onDateChange={(selectedDate) => setDate(selectedDate)}
          />
        </View>
      

        {showAdditionalInputs && (
          <>
            <View style={styles.viewIteminput}>
              <Text style={styles.textLabel}>Second Medicine name</Text>
              <View style={styles.viewInput}>
                <TextInput
                  placeholderTextColor="#9CA3AF"
                  placeholder=""
                  style={styles.textInput}
                  value={secondMedicineName}
                  onChangeText={setSecondMedicineName}
                />
              </View>
            </View>
            <View style={styles.viewIteminput}>
              <Text style={styles.textLabel}>Third Medicine name</Text>
              <View style={styles.viewInput}>
                <TextInput
                  placeholderTextColor="#9CA3AF"
                  placeholder=""
                  style={styles.textInput}
                  value={thirdMedicineName}
                  onChangeText={setThirdMedicineName}
                />
              </View>
            </View>
          </>
        )}

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
              value={time} // Truyền giá trị thời gian hiện tại vào ô input
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
    backgroundColor: '#ffffff',
  },
  viewGoBack: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  textFill: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  viewForm: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  viewIteminput: {
    marginBottom: 15,
  },
  textLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  viewInput: {
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 5,
  },
  textInput: {
    paddingHorizontal: 10,
    color: '#000000',
  },
  viewButton: {
    alignItems: 'center',
    marginTop: 20,
  },
  buttonSave: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textCreate: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateTreatmentRemindScreen;
