import React, {Component} from "react";
import {View, StatusBar, Alert, Image, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from "react-native";
import { Container, Textarea, Content, DatePicker,
    Text, Form, Item, Input, Right, Button, Card, CardItem } from "native-base";

import styles from "../assets/style/LoginScreenStyle.js";
import { Actions } from "react-native-router-flux";

const PLACEHOLD_EMAIL ="Digite seu email";
const PLACEHOLD_PASSWORD ="Digite sua senha";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    handleLogin = ()=>{
        Actions.main();
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
              <Input style={styles.inputStyle} placeholder={PLACEHOLD_EMAIL} ref="emailInput"/>
              <Input style={styles.inputStyle} placeholder={PLACEHOLD_PASSWORD} ref="passwordInput" secureTextEntry={true}/>
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