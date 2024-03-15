import { StyleSheet } from 'react-native';
const renderhealthscheduling = StyleSheet.create({
  renderViewItem: {
    borderWidth: 1,
    borderColor: '#87CEFA',
    borderRadius: 10,
    padding: 20,
    flexDirection:'column',
    gap:10,
    marginBottom: 20,
  },
  viewTimeOfDay: {
    flexDirection: 'column',
    marginBottom: 20,
    padding:10,
    borderRadius: 10,
    backgroundColor: '#F9FAFB',
   paddingTop:10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.62,
    elevation: 2,
  },
  viewItem: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Added flexWrap to allow wrapping of content
    gap: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 40,
  },
  textDate: {
    color: '#1F2A37',
    fontWeight: '600',
  },
  viewSession:{
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  textSession:{
    color:'#1F2A37',
    fontWeight:'600',
  },
  text: {
    color: '#1F2A37',
    flexShrink: 1, // Added flexShrink to allow text to shrink if necessary
    flexWrap: 'wrap', // Added flexWrap to allow wrapping of text
  },
  viewTitle: {
    paddingBottom: 10,
  },
});

export default renderhealthscheduling;
