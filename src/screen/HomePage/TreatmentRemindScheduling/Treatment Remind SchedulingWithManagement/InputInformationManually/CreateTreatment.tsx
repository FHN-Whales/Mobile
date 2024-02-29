// import React, { useState, useRef, useEffect } from 'react';
// import { TouchableOpacity, StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';
// import { useNavigation, NavigationProp } from '@react-navigation/native';
// import { RootStackParamList } from '../../../../../type/type';
// import renderviewgoback from '../../../../../styles/HomePage/Home/ManagementFamily/AddMember/RenderViewGoBack';

// const CreateTreatment = () => {
//   const [medicineName, setMedicineName] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [time, setTime] = useState('');
//   const [reminder, setReminder] = useState('');

//   const navigation = useNavigation<NavigationProp<RootStackParamList>>();
//   const inputRef = useRef<TextInput>(null);
//   const [showAdditionalInputs, setShowAdditionalInputs] = useState(false);
//   const [secondMedicineName, setSecondMedicineName] = useState('');
//   const [thirdMedicineName, setThirdMedicineName] = useState('');

//   useEffect(() => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, []);

//   const useGoBack = () => {
//     navigation.goBack();
//   };

//   const handleSave = () => {
//     console.log('Nút Lưu đã được nhấn');
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.viewGoBack}>
//         <TouchableOpacity onPress={useGoBack}>
//           <Image source={require('../../../../../image/back-icon.png')} />
//         </TouchableOpacity>
//         <Text style={styles.textFill}>Add-Your-Medicines</Text>
//       </View>
//       <View style={styles.viewForm}>
//         {/* <View style={styles.viewIteminput}>
//           <Text style={styles.textLabel}>Medicine name</Text>
//           <View style={styles.viewInput}>
//             <TextInput
//               ref={inputRef}
//               placeholderTextColor="#9CA3AF"
//               placeholder=""
//               style={styles.textInput}
//               value={medicineName}
//               onChangeText={setMedicineName}
//             />
//           </View>
//         </View> */}
//         <View style={styles.viewIteminput}>
//           <Button style={styles.buttadd}
//             title="Add Medicines"
//             onPress={() => setShowAdditionalInputs(true)}
//           />
//           <Button
//             title="Hide Medicines"
//             onPress={() => setShowAdditionalInputs(false)}
//           />
//           <Text style={styles.textLabel}>Medicine name</Text>
//           <View style={styles.viewInput}>
//             <TextInput
//               ref={inputRef}
//               placeholderTextColor="#9CA3AF"
//               placeholder=""
//               style={styles.textInput}
//               value={medicineName}
//               onChangeText={setMedicineName}
//             />
//           </View>
//         </View>

//         {showAdditionalInputs && (
//           <>
//             <View style={styles.viewIteminput}>
//               <Text style={styles.textLabel}>Second Medicine name</Text>
//               <View style={styles.viewInput}>
//                 <TextInput
//                   placeholderTextColor="#9CA3AF"
//                   placeholder=""
//                   style={styles.textInput}
//                   value={secondMedicineName}
//                   onChangeText={setSecondMedicineName}
//                 />
//               </View>
//             </View>
//             <View style={styles.viewIteminput}>
//               <Text style={styles.textLabel}>Third Medicine name</Text>
//               <View style={styles.viewInput}>
//                 <TextInput
//                   placeholderTextColor="#9CA3AF"
//                   placeholder=""
//                   style={styles.textInput}
//                   value={thirdMedicineName}
//                   onChangeText={setThirdMedicineName}
//                 />
//               </View>
//             </View>
//           </>
//         )}
//         {/* <Button
//   title="Add Medicines"
//   onPress={() => setShowAdditionalInputs(true)}
// />
// <Button
//   title="Hide Medicines"
//   onPress={() => setShowAdditionalInputs(false)}
// /> */}


//         <View>
//           <Text style={styles.textLabel}>Quantity of medicine</Text>
//           <View style={styles.viewInput}>
//             <TextInput
//               placeholderTextColor="#9CA3AF"
//               placeholder=""
//               style={styles.textInput}
//               value={quantity}
//               onChangeText={setQuantity}
//             />
//           </View>
//         </View>
//         <View>
//           <Text style={styles.textLabel}>Time to medicine</Text>
//           <View style={styles.viewInput}>
//             <TextInput
//               placeholderTextColor="#9CA3AF"
//               placeholder=""
//               style={styles.textInput}
//               value={time}
//               onChangeText={setTime}
//             />
//           </View>
//         </View>
//         <View>
//           <Text style={styles.textLabel}>Reminder</Text>
//           <View style={styles.viewInput}>
//             <TextInput
//               placeholderTextColor="#9CA3AF"
//               placeholder=""
//               style={styles.textInput}
//               value={reminder}
//               onChangeText={setReminder}
//             />
//           </View>
//         </View>
//         <View style={styles.viewButton}>
//           <TouchableOpacity style={styles.buttonSave} onPress={handleSave}>
//             <Text style={styles.textCreate}>Save</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   buttadd: {

//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   viewGoBack: {
//     flexDirection: 'row',
//     gap: 20,
//     paddingTop: 20,
//     paddingLeft: 20,
//   },
//   textFill: {
//     fontSize: 20,
//     fontWeight: '500',
//     color: '#374151',
//   },
//   viewForm: {
//     paddingTop: 40,
//     paddingLeft: 25,
//     paddingRight: 25,
//     flexDirection: 'column',
//     gap: 20,
//   },
//   viewIteminput: {
//     flexDirection: 'column',
//     gap: 10,
//   },
//   textTitle: {
//     color: '#000',
//     fontSize: 20,
//     marginBottom: 5,
//   },
//   textLabel: {
//     color: '#000',
//     fontSize: 15,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   viewInput: {
//     flexDirection: 'row',
//     borderWidth: 1,
//     borderColor: '#D1D5DB',
//     borderRadius: 10,
//     marginBottom: 5,
//   },
//   textInput: {
//     fontWeight: 'bold',
//     flex: 1,
//     paddingHorizontal: 10,
//     color: '#000',
//   },
//   viewButton: {
//     paddingTop: 30,
//   },
//   buttonSave: {
//     backgroundColor: '#87CEFA',
//     paddingTop: 14, paddingBottom: 14,
//     borderRadius: 66,
//     alignItems: 'center',
//   },
//   textCreate: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default CreateTreatment;
