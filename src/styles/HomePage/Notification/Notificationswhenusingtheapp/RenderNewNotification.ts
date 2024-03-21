import {StyleSheet} from 'react-native';
const rendernewnotification = StyleSheet.create({
    container1: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    tabContainer: {
        flexDirection: 'row',
        paddingTop:20,
        paddingBottom:20,
        gap:20,
    },
    tabButton: {
        paddingVertical: 12,
        paddingHorizontal: 17,
        borderRadius: 8,
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:'#87CEFA',
        width:'47%',
    },
    activeTabButton: {
        backgroundColor: '#87CEFA',
        padding:20, // Màu nền cho tab khi được chọn
        width:'47%',
    },
    tabText: {
        fontSize: 14,
        color:'#87CEFA',
        fontWeight:'600',
        textAlign:'center',
    },
    tabText1:{
        fontSize: 14,
        color:'#fff',
        fontWeight:'600',
        textAlign:'center',
    },
    container:{
        paddingTop:40,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:20,
    },
    viewRenderNotification:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    textToday:{
        fontSize:16,
        color:'#6B7280',
    },
    renderTextMarkAll:{
        color:'#1C2A3A',
        fontWeight:'600',
        fontSize:14,
    },
    viewListNewNotification:{
        paddingTop:20,
        flexDirection:'column',
        marginBottom:20,
        borderWidth:1,
        borderColor:'#87CEFA',
        borderRadius:15,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:20,
    },
    itemNotification:{
        flexDirection:'row',
        gap:20,
        // backgroundColor:'#F9FAFB',
    },
    viewImageNoti:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    viewContent:{
        width:'100%',
        paddingRight:20,
        flexDirection:'column',
        gap:4,
    },
    viewContentNoti:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:10,
        paddingRight:75,
    },
    textNoti:{
        color:'#1C2A3A',
        fontSize:14,
        fontWeight:'600',
    },
    textTime:{
        color:'#6B7280',
        fontSize:14,
    },
    viewRemider: {
        paddingRight:70,
        flexDirection:'row',
        gap:10,

    },
    textRemider:{
        color:'#6B7280',
        fontSize:14,
        lineHeight:21.34,
    },
    textTimeRemider:{
        color:'#87CEFA',
        fontSize:14,
        fontWeight:'600',
        marginTop:1,
        flexWrap:'wrap-reverse',
    },
    viewMedication:{
        flexDirection:'column',
       gap:5,
    }
});
export default  rendernewnotification;
