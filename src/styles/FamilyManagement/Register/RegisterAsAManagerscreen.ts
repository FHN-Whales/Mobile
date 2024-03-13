import {StyleSheet} from 'react-native';
const registerasmanager = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    justifyContent: 'space-around',
  },
  viewGoBack:{
    flexDirection:'row',
    gap:20,
    paddingTop:20,
    paddingLeft:20,
    position:'absolute',
    top:5,
    zIndex:1,
  },
  textFill:{
    fontSize:20,
    fontWeight:'500',
    color:'#374151',
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
  dropdown: {
    width: '100%',
    borderWidth: 1,
    backgroundColor: '#F9FAFB',
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingLeft: 30,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight:30,
  },
  placeholderStyle: {
    color: '#9CA3AF',
    fontWeight: 'bold',
  },
  selectedTextStyle: {
    color: '#9CA3AF',
    fontWeight: 'bold',
  },
  itemTextStyle: {
    color: '#9CA3AF',
    fontWeight: 'bold',
  },
  containerKindOf: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  nameKindOf: {
    color: 'lightblue',
    fontWeight: 'bold',
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