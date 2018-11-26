import React, {Component} from "react";
import {View, StatusBar, Alert, Image, TouchableWithoutFeedback, TouchableOpacity, Keyboard,   AsyncStorage  } from "react-native";
import { Container, Text, Input, Button} from "native-base";

import styles from "../assets/style/LoginScreenStyle.js";
import { Actions } from "react-native-router-flux";
import { handleLogin } from '../actions/loginActions';

const PLACEHOLD_EMAIL ="Digite seu email";
const PLACEHOLD_PASSWORD ="Digite sua senha";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {email:"", password:"",}
    }
    

    handleLogin = ()=>{
        data = {
            email: this.state.email,
            password: this.state.password,
        };

        const responseFunction = async (responseJSON) => {
            const result = responseJSON;

            if(result === null){
                Alert.alert(
                    'Erro',
                    'Usuário inexistente!',
                    [
                        {text: 'OK'},
                    ],
                    { cancelable: false }
                    )
            }else{
                saveUser(responseJSON)
                .then(() => Actions.main());
            }
        }
        saveUser = async (responseJSON) => {
            try {
              console.log(responseJSON)
              await AsyncStorage.setItem("user", JSON.stringify(responseJSON));
            } catch (error) {
              // Error saving data
            }
        }


        result = handleLogin(data,responseFunction);

        if(result === false){
            Alert.alert(
                'Erro',
                'Verifique os campos foram preenchidos!',
                [
                    {text: 'OK'},
                ],
                { cancelable: false }
                )
        }
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Container style={styles.container}>
              <StatusBar translucent={false} barStyle="light-content"/>
              <Text></Text>
              <Text></Text>
              <Text style={styles.title}>Organizer</Text>
              <Image style={ styles.imgLogo } source={require("../assets/images/max.png")} />
              <View style={styles.lineStyle}></View>
              <Text style={styles.welcomeTitle}>Entrar</Text>
              <Text></Text>
              <Input style={styles.inputStyle} placeholder={PLACEHOLD_EMAIL} onChangeText={(email) => this.setState({email})}/>
              <Input style={styles.inputStyle} placeholder={PLACEHOLD_PASSWORD} onChangeText={(password) => this.setState({password})} secureTextEntry={true}/>
              <Text></Text>
              <Text></Text>
              <View style={styles.buttonContainer}>
                  <Button style={styles.add} onPress={this.handleLogin}>
                      <Text style={ styles.fontContainer }> Entrar </Text>
                  </Button>
              </View>
              <Text></Text>
              <View style={styles.lineStyle}></View>
              <TouchableOpacity onPress={() => Actions.register()}>
                  <Text style={styles.linkTextStyle}>
                      Criar uma conta
                  </Text>
              </TouchableOpacity>
              <Text></Text>
            </Container>
           </TouchableWithoutFeedback>
        );
    }
}

export default Login;