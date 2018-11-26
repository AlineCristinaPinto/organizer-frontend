import React, {Component} from "react";
import {View, StatusBar, Alert, Image, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from "react-native";
import { Container, Textarea, Content, DatePicker,
    Text, Form, Item, Input, Right, Button, Card, CardItem } from 'native-base';

import { handleRegistration } from '../actions/registerAction';
import styles from '../assets/style/RegisterScreenStyle';
import { Actions } from "react-native-router-flux";

const PLACEHOLD_EMAIL ="Digite seu email";
const PLACEHOLD_PASSWORD ="Digite sua senha";
const PLACEHOLD_NAME = "Digite seu nome";
const PLACEHOLD_CONFIRM = "Digite sua senha novamente";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {email:"", name:"", password:"", confirmPassword:"",};
    }

    handleRegistry = () => {
        data = {
          email:this.state.email,
          name:this.state.name,
          password:this.state.password,
          confirmPassword:this.state.confirmPassword,
        }

        const responseFunction = async (responseJSON) => {
            const result = responseJSON;

            if(result){
                // Works on both iOS and Android
                Alert.alert(
                    'Sucesso',
                    'Seu cadastro foi efetuado!',
                    [
                        {text: 'OK', onPress: () => Actions.login()},
                    ],
                    { cancelable: false }
                    )
            }else{
                Alert.alert(
                    'Erro',
                    'Não foi possível completar o cadastro! Verifique se já não está cadastrado.',
                    [
                        {text: 'OK', onPress: () => Actions.register()},
                    ],
                    { cancelable: false }
                    )
            }
        
        }

        result = handleRegistration(data,responseFunction)

        if(result === false){
            Alert.alert(
                'Erro',
                'Verifique os campos foram preenchidos ou se as senhas conferem!',
                [
                    {text: 'OK'},
                ],
                { cancelable: false }
                )
        }

    };

    render() {
        return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Container style={styles.container}>
            <StatusBar translucent={false} barStyle="light-content"/>
            <Text></Text>
            <Text></Text>
            <Text style={styles.title}>Organizer</Text>
            <Image style={ styles.imgLogo } source={require('../assets/images/max.png')} />
            <View style={styles.lineStyle}></View>
            <Text style={styles.welcomeTitle}>Criar Conta</Text>
            <Text></Text>
            <Input style={styles.inputStyle} placeholder={PLACEHOLD_EMAIL} onChangeText={(email) => this.setState({email})}/>
            <Input style={styles.inputStyle} placeholder={PLACEHOLD_NAME} onChangeText={(name) => this.setState({name})} />
            <Input style={styles.inputStyle} placeholder={PLACEHOLD_PASSWORD} 
            onChangeText={(password) => this.setState({password})} secureTextEntry={true}/>
            <Input style={styles.inputStyle} placeholder={PLACEHOLD_CONFIRM} 
            onChangeText={(confirmPassword) => this.setState({confirmPassword})} secureTextEntry={true}/>
            <Text></Text>
            <Text></Text>
            <View style={styles.buttonContainer}>
                <Button style={styles.add} onPress={this.handleRegistry}>
                    <Text style={ styles.fontContainer }> Criar </Text>
                </Button>
            </View>
            <Text></Text>
            <View style={styles.lineStyle}></View>
            <TouchableOpacity onPress={() => Actions.login()}>
                <Text style={styles.linkTextStyle}>
                    Voltar para a página de Login
                </Text>
            </TouchableOpacity>
            <Text></Text>
          </Container>
         </TouchableWithoutFeedback>
        );
    }
}

export default Register;