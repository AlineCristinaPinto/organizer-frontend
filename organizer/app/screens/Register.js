import React, {Component} from "react";
import {View, StatusBar, Text, Alert} from "react-native";

import Container from "../components/Container/Container";
import InputText from "../components/TextInput/InputText";
import Button from "../components/Button/Button";
import { handleRegistration } from '../actions/registerAction';
const PLACEHOLD_EMAIL ="Digite seu email";
const PLACEHOLD_PASSWORD ="Digite sua senha";
const PLACEHOLD_NAME = "Digite seu nome";
const PLACEHOLD_CONFIRM = "Digite sua senha novamente";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleRegistry = () => {
        data = {
          email:this.refs.emailInput.state.text,
          name:this.refs.nameInput.state.text,
          password:this.refs.passwordInput.state.text,
          confirmPassword:this.refs.confirmPasswordInput.state.text,
        }
        let result = handleRegistration(data);
        console.log(result);
        /*
        if(result){
            // Works on both iOS and Android
            Alert.alert(
                'Sucesso',
                'Seu cadastro foi efetuado!',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
            )
        }else{

        }
        */
    };

    render() {
        return (
         <Container>
           <StatusBar translucent={false} barStyle="light-content"/>
           <Text style={{color:"white", fontSize:40, bottom:30, fontWeight:"300"}}>Organizer</Text>
           <InputText placeholder={PLACEHOLD_EMAIL} ref="emailInput"/>
           <InputText placeholder={PLACEHOLD_NAME} ref="nameInput" />
           <InputText placeholder={PLACEHOLD_PASSWORD} ref="passwordInput" secureTextEntry={true}/>
           <InputText placeholder={PLACEHOLD_CONFIRM} ref="confirmPasswordInput" secureTextEntry={true}/>
           <Button onPress={this.handleRegistry} text="Cadastrar"></Button>
         </Container>
        );
    }
}

export default Register;