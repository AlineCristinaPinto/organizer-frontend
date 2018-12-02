import { StyleSheet } from 'react-native';
import {Dimensions} from 'react-native';

var screen = Dimensions.get('window');

export default StyleSheet.create({

  safeAreaStyle: {
    flex: 1, 
    backgroundColor: '#0C1125'
  },

  imageViewMenuStyle: {
    marginTop: 40, 
    marginBottom: 20, 
    height:160, 
    backgroundColor: '#0C1125', 
    alignItems: 'center', 
    justifyContent: 'center'
  },

  imageMenuStyle: {
    height: 120, 
    width: 120, 
    borderRadius: 60 
  },

  userNameMenuStyle: {
    color:'white', 
    fontSize:20, 
    fontFamily: 'patrickH', 
    paddingTop:5
  },

  menuSectionStyle: {
    borderTopWidth:1,
    borderColor:'#293043',
    flex:1,
    flexDirection:"row",
    justifyContent:'space-between',
    paddingRight:20
  },

  collapseBodyStyle: {
    borderTopWidth:1,
    borderColor:'#293043',
    flex:1,
    backgroundColor: '#42598A'
  },

  menuItemSectionStyle: {
    padding: 10,
    color: '#FFF4F8',
    fontFamily: 'patrickH',
    fontSize: 17
  },

  createTagModalStyle: {
    maxHeight: (screen.height - 145), 
    position: 'absolute', 
    bottom: 0, 
    backgroundColor: '#0C1125'
  },

  iconItemTag: {
    fontSize:20, 
    color:'#78E7F3'
  },







  welcomeTitle: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'gloria',
    color: '#FFF4F8'
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
      marginLeft: 20
    },
    add:{
      backgroundColor: '#0fa400',
      padding:20
  },

  cancel:{
      backgroundColor: '#e25a00',
      padding: 15
  },
  footer:{
    flexDirection: 'row',
    paddingTop: 20
}
});