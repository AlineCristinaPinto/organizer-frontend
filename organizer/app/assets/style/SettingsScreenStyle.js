import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    page:{
      backgroundColor: "white",
    },
  
    container: {
      flex: 1, 
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
  
    imgLogo: {
      flex: 1,
      width: 200,
      height: 200,
      resizeMode: "contain"
    },
  
    icon: {
      width: 24,
      height: 24,
    },
  
    title: {
        textAlign: "center",
      fontFamily: "gloria",
      fontSize: 25,
      alignItems: "center",
      color: "#000",
    },

    welcomeTitle: {
        fontSize: 25,
        textAlign: "center",
        fontFamily: "gloria",
        color: "#fff"
    },

    add:{
        backgroundColor: "#0fa400",
        width: 150,
        justifyContent: "center",
    },

    buttonContainer:{
        justifyContent: "center",
        alignItems: "center",
    },

    lineStyle:{
        width: "100%",
        borderBottomWidth: 1,
        borderColor:"black",
        margin:20,
    },

    inputStyle:{
        borderBottomColor: "black",
        borderBottomWidth: 1,
        fontFamily: "patrickH",
        width: "90%",
        color: "black",
        height: 5,
    },

    linkTextStyle:{
        color:"red",
        fontFamily: "patrickH",
        fontSize: 17
    },

    footer:{
        flexDirection: "row",
    },

    modalContent: {
        backgroundColor: 'white',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
  });