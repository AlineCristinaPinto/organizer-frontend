import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input} from "native-base";

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
                <Text></Text>
                <Text style={styles.textColor}>Senha antiga</Text>      
                    <Input style={styles.inputStyle} 
                    onChangeText={(oldPassword) => this.setState({oldPassword})}/>
                <Text style={styles.textColor}>Nova Senha</Text>
                    <Input style={styles.inputStyle} 
                    onChangeText={(newPassword) => this.setState({newPassword})}/>
                <Text style={styles.textColor}>Confirmar nova senha:</Text>
                    <Input style={styles.inputStyle} 
                    onChangeText={(newPassword) => this.setState({newPassword})}/>
                <Text></Text>
            </View>
            
        );
    }
}

export default ModalPassword; 

const styles = StyleSheet.create({

    bodyContainer:{
        justifyContent: "center",
        alignItems: "center",
    },

    textColor: {
        color: "black",
        marginLeft: 8,    
        fontFamily: "patrickH",
        fontSize: 15,
    },

    inputStyle:{
        borderBottomColor: "black",
        borderBottomWidth: 1,
        fontFamily: "patrickH",
        fontSize: 20,
        width: '60%',
        color: "black",
        padding: 20,
    },

});