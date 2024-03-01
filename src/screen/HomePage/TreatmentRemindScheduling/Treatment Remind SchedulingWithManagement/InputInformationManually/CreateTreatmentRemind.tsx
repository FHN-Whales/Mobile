import React, { useState, useRef, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../../type/type';
import renderviewgoback from '../../../../../styles/HomePage/Home/ManagementFamily/AddMember/RenderViewGoBack';
import DatePicker from 'react-native-datepicker';

const CreateTreatmentRemindScreen = () => {
  const [medicineName, setMedicineName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [reminder, setReminder] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null); // Thay đổi giá trị mặc định của endDate thành null
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const inputRef = useRef<TextInput>(null);

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
          <View>
            <Text style={styles.textLabel}>Ngày bắt đầu</Text>
            <DatePicker
              style={{ width: 150 }}
              date={startDate}
              mode="date"
              placeholder="Chọn ngày"
              format="DD-MM-YYYY" // Đổi định dạng ngày tháng năm hiể
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
              onDateChange={(selectedDate) => setStartDate(selectedDate)}
            />
          </View>
          <View>
            <Text style={styles.textLabel}>Ngày kết thúc</Text>
            <TextInput
              ref={inputRef}
              style={styles.dateInput}
              placeholder="DD-MM-YYYY"
              value={endDate ? endDate.toLocaleDateString() : ''}
              onChangeText={(text) => setEndDate(new Date(text))}
            />
          </View>
        </View>
        {/* <View>
          <Text style={styles.textLabel}>NotReminder</Text>
          <View style={styles.viewInput}>
            <TextInput
              placeholderTextColor="#9CA3AF"
              placeholder=""
              style={styles.textInput}
              value={reminder}
              onChangeText={setReminder}
            />
          </View>
        </View> */}
        <View>
          <Text style={styles.textLabel}>Số lần trong ngày</Text>
          <View style={styles.viewInput}>
            <TextInput
              placeholderTextColor="#9CA3AF"
              placeholder="Nhập số lần"
              style={styles.textInput}
              value={reminder}
              onChangeText={setReminder}
              keyboardType="numeric" // Đặt kiểu bàn phím thành numeric để chỉ cho phép nhập số
            />
          </View>
        </View>
        <View>
          <Text style={styles.textLabel}>Chọn thời gian</Text>
          <View style={styles.viewTimeOptions}>
            <TouchableOpacity
              style={styles.timeOption}
              onPress={() => setReminder('Sáng')}
            >
              <Text style={styles.timeOptionText}>Sáng</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.timeOption}
              onPress={() => setReminder('Trưa')}
            >
              <Text style={styles.timeOptionText}>Trưa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.timeOption}
              onPress={() => setReminder('Chiều')}
            >
              <Text style={styles.timeOptionText}>Chiều</Text>
            </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewButton: {
    paddingTop: 30,
  },
  buttonSave: {
    backgroundColor: '#87CEFA',
    paddingTop: 14, paddingBottom: 14,
    borderRadius: 66,
    alignItems: 'center',
  },
  textLabel: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  viewInput: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    marginBottom: 5,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
  },
  viewTimeOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeOption: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  timeOptionText: {
    color: '#ffffff',
    fontSize: 16,
  },
  textCreate: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateTreatmentRemindScreen;
