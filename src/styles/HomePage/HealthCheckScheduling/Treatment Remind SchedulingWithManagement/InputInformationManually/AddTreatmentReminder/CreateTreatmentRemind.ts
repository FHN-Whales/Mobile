import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
  },
  inner: {
    justifyContent: 'space-around',
  },
  viewGoBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textFill: {
    marginLeft: 20,
    fontSize: 20,
    color: '#374151',
    fontWeight: 'bold',
  },
  viewForm: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'column',
    gap: 20,
  },
  viewIteminput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textLabel: {
    fontSize: 16,
    color: '#4B5563',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  viewRenderItem: {
    flexDirection: 'column',
    gap: 10,
  },
  textHour: {
    fontSize: 14,
    color: '#4B5563',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  viewInput: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  viewRenderEnter: {
    flexDirection: 'column',
    gap: 10,
  },
  viewInputEnter: {
    width: '15%',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  viewTimeOptions: {
    flexDirection: 'row',
  },
  timeOptionChoose: {
    backgroundColor: '#87CEFA',
    borderColor: '#87CEFA',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  timeOptionTextChoose: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  timeOption: {
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  timeOptionText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9CA3AF',
  },
  viewButton: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonSave: {
    backgroundColor: '#87CEFA',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 55,
  },
  textSave: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  errorText:{
    fontSize:14,
    color:'red',
  },
  viewError:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  }
});
export default styles;
