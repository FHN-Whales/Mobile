import { StyleSheet} from 'react-native';
const renderinfomationprofile = StyleSheet.create({
    container:{
        padding:20,
    },
    viewInformation:{
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
    },
    image:{
        height:177,
        width: 170,
        borderRadius:150,
    },
    textName:{
        color:'#1F2A37',
        fontSize:16,
        fontWeight:'600',
        paddingTop:5,
    },
    textPhone:{
        color:'#6B7280',
        paddingTop:7,
    },
});
export default renderinfomationprofile;
