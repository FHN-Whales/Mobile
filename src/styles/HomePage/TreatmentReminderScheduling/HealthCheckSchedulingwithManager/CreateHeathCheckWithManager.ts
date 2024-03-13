import {  StyleSheet } from 'react-native';
const healthcheck = StyleSheet.create({
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
    },
    textFill:{
      fontSize:20,
      fontWeight:'500',
      color:'#374151',
    },
    viewForm: {
      paddingTop: 25,
      paddingLeft: 25,
      paddingRight: 25,
      flexDirection:'column',
      gap:20,
    },
    viewIteminput:{
      flexDirection:'column',
      gap:4,
    },
    textTitle: {
      color: '#000',
      fontSize: 20,
      marginBottom: 5,
    },
    textLabel: {
      color: '#000',
      fontSize: 15,
      fontWeight:'bold',
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
      paddingTop: 35,
    },
    buttonSave: {
      backgroundColor: '#87CEFA',
      paddingTop: 14,paddingBottom: 14,
      borderRadius: 66,
      alignItems: 'center',
    },
    InputReminder :{

    },
    textCreate: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });


  export default healthcheck;
