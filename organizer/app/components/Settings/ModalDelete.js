import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input} from "native-base";

class ModalDelete extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            password:"",
        };
    }
    render() {
        return (
            <View style={styles.bodyContainer}>
                <Text></Text>
                <Text style={styles.textColor}>
                    Você tem certeza que deseja excluir sua conta?
                </Text>
                <Text></Text>
                <Text style={styles.textColor}>Senha: </Text>      
                    <Input style={styles.inputStyle} 
                    onChangeText={(password) => this.setState({password})}/>
                <Text></Text>
            </View>
            
        );
    }
}

export default ModalDelete; 

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