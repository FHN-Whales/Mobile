import { StyleSheet } from 'react-native';
const rendercalendar = StyleSheet.create({
    view:{
        paddingLeft:30,
        paddingRight:30,
        paddingTop:10,
        paddingBottom:10,
    },

    calendar:{
        borderRadius:12,
    },
    textSectionTitle:{
        color:'#111928',
        fontWeight:'600',
    },
    modal:{
        flex: 1,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:50,
        paddingBottom:50,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalView:{
        backgroundColor: '#1E2020',
        borderRadius: 25,
        paddingLeft:25,
        paddingRight:25,
    },
    viewIconFuntion:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:10,
    },
    viewFunction:{
        flexDirection:'row',
        gap:20,
    },
    viewBorder:{
        borderBottomColor:'#EA2B11',
        borderBottomWidth:2,
    },
    renderViewItem:{
        backgroundColor:'#4D4D4D',
        borderRadius:10,
        padding:15,
        flexDirection:'column',
        gap:10,
        marginBottom:10,
    },
    viewItem:{
        flexDirection:'row',
        gap:10,
        paddingRight:10,
    },
    textDate:{
        color:'#fff',
        fontWeight:'600',
        fontSize:12,
        flexWrap:'wrap',
    },
    text:{
        color:'#fff',
        fontSize:12,
    },
    viewTimeOfDay:{
        borderWidth:1,
        borderRadius:5,
        padding:10,
        borderColor:'#fff',
    },
    viewClose:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:15,
        paddingBottom:15,
    },
});
export default rendercalendar;
