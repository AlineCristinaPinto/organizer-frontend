import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    navItemStyle: {
      padding: 10,
      color: '#FFF4F8',
      fontFamily: 'patrickH',
      fontSize: 17
    },
    navSectionStyle: {
      borderTopWidth:1,
      borderColor:'#293043',
      flex:1,
      flexDirection:"row",
      justifyContent:'space-between',
      paddingRight:20
    },
    navSectionStyleP: {
      borderTopWidth:1,
      borderColor:'#293043',
      flex:1,
      backgroundColor: '#42598A' ,
      paddingLeft: 20
    },
    navSectionLastStyle: {
      borderTopWidth:1,
      borderBottomWidth:1,
      borderColor:'#293043',
      flex:1,
      flexDirection:"row",
      justifyContent:'space-between',
      paddingRight:20
    },
    icon: {
      width: 80,
      height: 70
    },
    icons: {
      fontSize:24, 
      color:'#78E7F3'
    },
    iconsAngle: {
      fontSize: 20, 
      color:'#78E7F3',
      paddingTop: 15
    },
    iconsClose: {
      fontSize:24, 
      color:'#78E7F3'
    },
    modal: {
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    text: {
      color: "red",
      fontSize: 18
    },
    alightCont: {
      alignItems: 'center'
    }
});