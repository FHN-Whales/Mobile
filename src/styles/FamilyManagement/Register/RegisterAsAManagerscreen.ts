import {StyleSheet} from 'react-native';
const registerasmanager = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    justifyContent: 'space-around',
  },
  viewLogo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  textLogo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111928',
    lineHeight: 21,
  },
  viewCreate: {
    flexDirection: 'column',
    paddingTop: 25,
    gap: 10,
  },
  textWe: {
    fontSize: 14,
    color: '#6B7280',
    textAlign:'center',
    paddingLeft:20,
    paddingRight:20,
    lineHeight:20,
  },
  viewRadio:{
    paddingTop:20,
    flexDirection:'column',
  },
  textSelect:{
    fontSize:13,
    fontWeight:'bold',
    paddingLeft: 25,
    paddingRight: 25,
    color:'#4B5563'
  },
  viewitemSelect:{
    flexDirection:'row',
    justifyContent:'space-between',
   paddingLeft: 20,
    paddingRight: 20, 
    paddingTop:10,
  },
  viewitemSelectRadio:{
    flexDirection:'row',
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap:40,

  },
  radio: {
    backgroundColor: 'white', // Set background color of the radio button
    borderColor: '#87CEFA',     // Set border color of the radio button
    borderWidth: 1,           // Set border width of the radio button
    borderRadius: 10,         // Set border radius of the radio button
    padding: 10,              // Set padding of the radio button
    marginRight: 10,          // Add margin to each individual radio button
    alignItems: 'center',     // Align content horizontally in the center
    justifyContent: 'center', // Align content vertically in the center
  },
  view:{
    paddingLeft:25,
    paddingRight:25,
  },
  viewForm: {
    paddingTop: 20,
    gap: 20,
  },
  viewInput: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    gap: 5,
    backgroundColor: '#F9FAFB',
  },
  image: {
    paddingTop: 13,
    paddingLeft: 15,
    paddingBottom: 10,
  },
  textinput: {
    fontWeight: 'bold',
    width: '100%',
    color: '#9CA3AF',
  },
  viewbutton: {
    paddingTop: 50,
  },
  buttonNext: {
    backgroundColor: '#87CEFA',
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 66,
  },
  textNext: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default registerasmanager;