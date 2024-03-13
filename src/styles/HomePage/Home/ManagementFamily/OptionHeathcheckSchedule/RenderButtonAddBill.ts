import { StyleSheet} from 'react-native';
const renderButtonAddBills = StyleSheet.create({
    container:{
        paddingLeft:30,
        paddingRight:30,
    },
    buttonCreateBill:{
        flexDirection:'column',
        gap:10,
        backgroundColor:'#fff',
        borderWidth:1,
        borderRadius:5,
        borderColor:'#87CEFA',
        paddingTop:30,
        paddingBottom:30,
        paddingLeft:120,
        paddingRight:120,
    },
    textCreateBill:{
        fontWeight:'600',
        fontSize:14,
        color:'#4B5563',
    },
    viewImage:{
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
    },
});
export default renderButtonAddBills;
