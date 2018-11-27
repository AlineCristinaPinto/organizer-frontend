import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, CardItem, CheckBox, ListItem, Text, Item , Input} from "native-base";

class ModalPassword extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            oldPassword:"",
            newPassword:"",
            confirmNewPassword:"",
        };
    }
    render() {
        return (
            <View style={styles.bodyContainer}>         
                <Input style={styles.inputStyle} 
                placeholder={"Digite a senha antiga:"} 
                onChangeText={(oldPassword) => this.setState({oldPassword})}/>
                <Input style={styles.inputStyle} 
                placeholder={"Digite a nova senha:"} 
                onChangeText={(newPassword) => this.setState({newPassword})}/>
                <Input style={styles.inputStyle} 
                placeholder={"Confirme a nova senha:"} 
                onChangeText={(newPassword) => this.setState({newPassword})}/>
            </View>
            
        );
    }
}

export default ModalPassword; 

const styles = StyleSheet.create({

    textContent:{
        fontFamily: "patrickH",
    },

    bodyContainer:{
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"white"
    },

    textColor: {
        color: "black",
        marginLeft: 8,    
        fontFamily: "patrickH",
        fontSize: 12,
    },
    
    checkBoxFeatures: {
        marginLeft: 4,
    },

    inputStyle:{
        borderBottomColor: "black",
        borderBottomWidth: 1,
        fontFamily: "patrickH",
        width: "90%",
        color: "white",
    },

});