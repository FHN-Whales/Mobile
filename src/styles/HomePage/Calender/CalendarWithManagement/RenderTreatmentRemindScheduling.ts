import { StyleSheet} from 'react-native';
const rendertreatmentremindscheduling = StyleSheet.create({
  renderViewItem:{
    borderWidth:1,
    borderColor:'#87CEFA',
    borderRadius:10,
    padding:20,
    flexDirection:'column',
    gap:10,
    marginBottom:20,
  },
  viewTimeOfDay: {
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
  viewItem:{
    flexDirection:'row',
    gap:10,
    paddingTop:5,
    paddingBottom:5,
    paddingRight:40,
  },
  textDate:{
    color:'#1F2A37',
    fontWeight:'600',
  },
  text:{
    color:'#1F2A37',
  },
  viewTitle:{
    paddingBottom:10,
  },
});

export default rendertreatmentremindscheduling;
