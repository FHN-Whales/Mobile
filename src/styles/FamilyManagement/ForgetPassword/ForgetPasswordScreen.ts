import {StyleSheet} from 'react-native';
const forgetpassword = StyleSheet.create({
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 105,
    gap: 10,
  },
  textWe: {
    fontSize: 14,
    color: '#6B7280',
    paddingLeft:24,
    paddingRight:24,
    textAlign:'center',
    lineHeight:20,
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
  viewbutton: {
    paddingTop: 8,
    paddingLeft:20,
    paddingRight:20,
  },
  buttonCreate: {
    backgroundColor: '#87CEFA',
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 66,
    paddingLeft:50,
    paddingRight:50,
    width: '100%',
  },
  textCreate: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
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
    flexDirection:'column',
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
  },
  viewGoogle:{
    flexDirection:'row',
    gap:6,
  },
  textGoogle:{
    color:'#1C2A3A',
    fontSize:14,
    fontWeight:'500',
  },
  textForgetPassword:{
    textAlign:'center',
    color:'#1C64F2',
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
export default forgetpassword;