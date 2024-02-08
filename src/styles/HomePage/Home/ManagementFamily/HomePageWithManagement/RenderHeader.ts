import { StyleSheet } from 'react-native';
const renderheader = StyleSheet.create({
    viewrenderHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:30,
        paddingRight:30,
        paddingTop:20,
        paddingBottom:20,
    },
    viewText:{
        flexDirection:'column',
        gap:5,
    },
    textHi:{
        fontSize:14,
        color:'#6B7280',
    },
    textUser:{
        color:'#374151',
        fontSize:14,
        fontWeight:'600',
    },
    viewiconnotification:{
        marginTop:13,
    }
});
export default renderheader;