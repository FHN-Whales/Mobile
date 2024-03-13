import {StyleSheet } from 'react-native';
const rendertitlenotification = StyleSheet.create({
    container:{
        paddingTop:30,
        paddingLeft:20,
        paddingRight:20,
    },
    view:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    textNotification:{
        color:'#374151',
        fontWeight:'500',
        fontSize:20,
    },
    viewNewNotification:{
        backgroundColor:'#87CEFA',
        padding:5,
        borderRadius:5,
    },
    textNewNotification:{
        fontSize:14,
        fontWeight:'600',
        color:'#fff',
    },
});
export default rendertitlenotification;
