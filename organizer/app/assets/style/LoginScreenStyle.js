import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    page:{
      backgroundColor: "black",
    },
  
    container: {
      flex: 1, 
      backgroundColor: "black",
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
      fontSize: 35,
      alignItems: "center",
      color: "#fff",
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
        borderColor:"white",
        margin:20,
    },

    inputStyle:{
        borderBottomColor: "white",
        borderBottomWidth: 1,
        fontFamily: "patrickH",
        width: "90%",
        color: "white",
    },

    linkTextStyle:{
        color:"white",
        fontFamily: "patrickH",
        fontSize: 17
    }
  });