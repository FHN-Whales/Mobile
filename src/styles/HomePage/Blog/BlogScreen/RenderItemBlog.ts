import { StyleSheet } from 'react-native';

const renderitemblog = StyleSheet.create({
    viewItem:{
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#F3F4F6',
        borderRadius:20,
        padding:10,
    },
    viewnameUser:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    viewUser:{
        flexDirection:'row',
        gap:10,
    },
    imageUser:{
        height:50,
        width: 50,
        borderRadius:50,
    },
    textnameUser:{
        fontSize:15,
        color:'#4B5563',
        fontWeight:'bold',
        marginTop:12,
    },
    viewIcon:{
        flexDirection:'row',
        gap:10,
    },
    centeredView: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
      },
      modalView: {
        backgroundColor: 'white',
        borderRadius: 25,
      },
      viewtitle:{
        paddingTop:40,
        paddingLeft:70,
        paddingRight:70,
      },
      textCon:{
        fontSize:20,
        color:'#1C2A3A',
        fontWeight:'600',
        textAlign:'center',
      },
      textYour:{
        color:'#6B7280',
        fontSize:14,
        textAlign:'center',
        lineHeight:21,
        paddingTop:10,
      },
      viewloadding:{
        paddingTop:60,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:25,
        flexDirection:'row',
        gap:10,
      },
      buttonCancle:{
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#87CEFA',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        borderRadius:55,
        width: '50%',
      },
      textCancle:{
        fontSize:16,
        fontWeight:'bold',
        color:'#000000',
        textAlign:'center',
      },
      buttonOk:{
        backgroundColor:'#87CEFA',
        borderWidth:1,
        borderColor:'#87CEFA',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        width: '50%',
        borderRadius:55,
      },
      textOk:{
        fontSize:16,
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',
      },
    viewContent:{
        paddingTop:10,
    },
    textnameBlog:{
        fontSize:16,
        color:'#1F2A37',
        fontWeight:'600',
    },
    textdescription:{
        color:'#4B5563',
        fontSize:14,
        lineHeight:20,
        paddingTop:10,
        paddingBottom:10,
    },
    imageBlog:{
        width: '100%',
    },
});
export default  renderitemblog;
