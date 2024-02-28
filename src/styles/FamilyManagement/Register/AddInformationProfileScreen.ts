import {StyleSheet} from 'react-native';
const AddInformationProfile = StyleSheet.create({
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
  viewImageProfile:{
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center',
    paddingTop:70,
  },
  viewEdit:{
    position:'absolute',
    bottom:20,
    right:120,
    zIndex:1,
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
    // paddingLeft:30,
    // paddingRight:30,
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
  dropdown: {
    width: '100%',
    borderWidth: 1,
    backgroundColor: '#F9FAFB',
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight:15,
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
});
export default AddInformationProfile;
