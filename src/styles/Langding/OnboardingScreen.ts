import { StyleSheet } from 'react-native';
const onboarding = StyleSheet.create({
    container:{
        flex:1,
    },
    dot: {
        backgroundColor: '#9B9B9B',
        width: 8,
        height: 8,
        borderRadius: 6,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
      },
      activeDot: {
        backgroundColor: '#26232F',
        width: 30,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
      },
    image:{
        height:480,
    },
    viewtext:{
        paddingTop:25,
        paddingLeft:39.5,
        paddingRight:39.5,
        textAlign:'center',
        alignItems: 'center',
    },
    textDaily:{
        fontSize:18,
        lineHeight:27,
        fontWeight:'700',
        color: '#374151',
        fontStyle:'normal',
    },
    textProvides:{
        paddingTop:24,
        textAlign:'center',
        fontSize:14,
        fontStyle:'normal',
        paddingBottom:24,
        fontWeight:'400',
        lineHeight:21,
        color:'#6B7280',
    },
    viewbutton:{
        paddingLeft:39.5,
        paddingRight:39.5,
    },
    button:{
        backgroundColor:'#87CEFA',
        width:'100%',
        paddingTop:12,
        paddingBottom:12,
        borderWidth:1,
        borderColor:'#E5E7EB',
        borderRadius:61,
    },
    textbutton:{
        textAlign:'center',
        color:'#fff',
        fontSize:16,
        fontWeight:'700',
        lineHeight:24,
        fontStyle:'normal',
    },
    textSkip:{
        paddingTop:10,
        fontSize:14,
        fontStyle:'normal',
        fontWeight:'400',
        lineHeight:21,
        color:'#6B7280',
        textAlign:'center'
    },
});
export  default onboarding;
