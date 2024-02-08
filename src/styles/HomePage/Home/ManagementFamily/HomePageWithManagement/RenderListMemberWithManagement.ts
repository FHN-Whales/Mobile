import {StyleSheet} from 'react-native';
const renderlistmembermanagement = StyleSheet.create({
  viewlistMember: {
    padding:30,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewmember:{
    flexDirection:'row',
    gap:8,
  },
  textMember:{
    color:'#111928',
    fontSize:14,
    fontWeight:'600',
  },
  touchableOpacity:{
    marginTop:5,
  },
  viewItemMember:{
    flexDirection:'column',
    gap:10,
  },
  image:{
    height:50,
    width:50,
    borderRadius:50,
  },
  textmate:{
    fontSize:14,
    fontWeight:'500',
    color:'#111928',
    textAlign:'center',
  }
});
export default renderlistmembermanagement;
