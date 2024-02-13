import { StyleSheet} from 'react-native';
const rendertreatmentremindscheduling = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#F9FAFB',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.62,
    elevation: 2,
    padding:10,
  },
  viewSession:{
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  textSession:{
    color:'#1F2A37',
    fontWeight:'600',
  },
  viewMedicine:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:15,
    width:'100%'
  },
  textMedicine:{
    fontSize:13,
    color:'#4B5563',
  },
  textMedicineName:{
    fontWeight:'600',
    fontSize:13,
    color:'#4B5563',
  }
});

export default rendertreatmentremindscheduling;
