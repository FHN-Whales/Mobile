import {StyleSheet} from 'react-native';
const register = StyleSheet.create({
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
    gap: 10,
  },
  textWe: {
    fontSize: 14,
    color: '#6B7280',
  },
  view:{
    paddingLeft:25,
    paddingRight:25,
  },
  viewForm: {
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
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
  showPassword:{
    position: 'absolute',
    left:300
    ,
    top:14,
  },
  iconShowPassword:{
    height: 20,
    width: 20,
  },
  textError:{
    color:'red',
  },
  viewbutton: {
    paddingTop: 8,
  },
  buttonCreate: {
    backgroundColor: '#87CEFA',
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 66,
  },
  textCreate: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 48,
    padding: 35,
    alignItems: 'center',
  },
  textCon:{
    fontSize:20,
    color:'#1C2A3A',
    paddingTop:30,
    fontWeight:'600',
  },
  textYour:{
    color:'#6B7280',
    fontSize:14,
    textAlign:'center',
    lineHeight:21,
    paddingTop:20,
  },
  viewloadding:{
    paddingTop:40,
    paddingBottom:20,
  },
  viewor: {
    flexDirection: 'row',
    gap: 20,
  },
  viewborder: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 139,
    marginVertical: 10,
    borderColor: '#E5E7EB',
  },
  textor: {
    color: '#6B7280',
    fontWeight: '500',
    fontSize: 16,
  },
  viewContinue:{
    flexDirection:'row',
    gap:15,
  },
  Google:{
    borderWidth:1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
    paddingTop: 14,
    paddingBottom: 14,
    width: '48%',
  },
  viewGoogle:{
    flexDirection:'row',
    gap:6,
    paddingLeft:30,
    paddingRight:30,
  },
  textGoogle:{
    color:'#1C2A3A',
    fontSize:14,
    fontWeight:'500',
  },
  viewNavigationSignIn:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
    gap:5,
  },
  textviewNavigationSignIn:{
    color:'#6B7280',
    fontSize:14,
  },
  textSignIn:{
    color:'#1C64F2',
    fontWeight:'600',
  },
});
export default register;
