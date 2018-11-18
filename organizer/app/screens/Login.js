import React, {Component} from "react";
import {View, StatusBar, Text} from "react-native";

import Container from "../components/Container/Container";
import InputText from "../components/TextInput/InputText";

const PLACEHOLD_EMAIL ="Digite seu email";
const PLACEHOLD_PASSWORD ="Digite sua senha";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
         <Container>
           <StatusBar translucent={false} barStyle="light-content"/>
           <Text style={{color:"white", fontSize:40, bottom:50, fontWeight:200}}>Organizer</Text>
           <InputText placeholder={PLACEHOLD_EMAIL}/>
           <InputText placeholder={PLACEHOLD_PASSWORD}/>
         </Container>
        );
    }
}

export default Login;