import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    viewPager: {
      flex: 1
    },

    page: {
      backgroundColor: 'black',
    },

    manualPage: {
      color: "#5bc0de",
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

    backButton: {   
      alignItems: 'center',  
      backgroundColor: 'black',
      borderRadius: 15,
      padding: 10,
    },

    backButtonText: {
      color: "#5bc0de",
    }
  });