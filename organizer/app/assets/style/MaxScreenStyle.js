import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    page:{
      backgroundColor: 'black',
    },
  
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    description: {
      color: "#5bc0de",
      fontFamily: 'patrickH',
      fontSize: 17,
    },
  
    imgMax: {
      flex: 1,
      width: 350,
      height: 350,
      resizeMode: 'contain'
    },
  
    icon: {
      width: 24,
      height: 24,
    },
  
    maxTitle: {
      fontFamily: 'gloria',
      fontSize: 35,
      alignItems: 'center',
      color: '#fff',
    },
  
    textButtonI: {
      padding: 10,
      color: "#5bc0de",
      fontFamily: 'gloria',
    },
  
    textButtonII: {
      padding: 10,
      fontFamily: 'gloria',
    },
  
    buttons: {
      flexDirection: "row",
      justifyContent: "center"
    },
  });