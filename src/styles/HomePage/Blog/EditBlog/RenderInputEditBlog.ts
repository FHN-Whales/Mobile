import { StyleSheet } from 'react-native';

const renderinputeditblog = StyleSheet.create({
    viewrenderinputcreatblog:{
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20,
    },
    viewrendernameuser:{
        flexDirection:'row',
        gap:20,
    },
    imageuser:{
        height: 50,
        width: 50,
        borderRadius:50,
    },
    textname:{
        fontSize:14,
        fontWeight:'bold',
        color:'#4B5563',
        marginTop:14,
    },
    viewtextinput:{
        paddingTop:15,
    },
    textinput:{
        paddingBottom:70,
        paddingLeft:20,
        paddingTop:5,
        borderWidth:1,
        borderColor:'#87CEFA',
        borderRadius:5,
    },
   viewInput:{
    paddingTop:25,
    paddingLeft:10,
    flexDirection:'column',
    gap:15,
   },
   viewInputImage:{
    flexDirection:'row',
    gap:15,
   },
   textImage:{
    color:'#000',
   },
});
export default  renderinputeditblog;
