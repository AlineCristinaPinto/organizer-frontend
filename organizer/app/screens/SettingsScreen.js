import React, {Component} from "react";
import {View, StatusBar, Alert, Image, TouchableWithoutFeedback, TouchableOpacity, Keyboard,   
  AsyncStorage  } from "react-native";
  import { Container, Textarea, Content, DatePicker,
    Text, Form, Item, Input, Right, Button, Card, CardItem } from 'native-base';
import CustomHeaderBack from "../components/Navigation/CustomHeaderBack";
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from "react-native-modal";

import ModalPassword from '../components/Settings/ModalPassword';
import ModalDelete from '../components/Settings/ModalDelete';

import styles from "../assets/style/SettingsScreenStyle.js";

//import { Actions } from "react-native-router-flux";
//import { handleLogin } from '../actions/loginActions';

const PLACEHOLD_PASSWORD = "Digite sua senha";
const PLACEHOLD_NAME ="Digite seu nome";

export default class SettingsScreen extends React.Component {
  constructor(props){
    super(props)
    this.state= { 
      name:"",
      password:"",
      confirmPassword:"",
      modalVisible: false,
    }
  }

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="settings" style={{ fontSize:24, color:tintColor }}/>
    ),
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  
  render() {
    return (
      <Container>
            <CustomHeaderBack navigation={this.props.navigation} />
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>      
              <Container style={styles.container}>
                <StatusBar translucent={false} barStyle="light-content"/>
                <Text style={styles.title}>Configuração da Conta</Text>
                <Image style={ styles.imgLogo } source={require("../assets/images/user.png")} />
                <Text></Text>
                <Input style={styles.inputStyle} placeholder={PLACEHOLD_NAME} onChangeText={(name) => this.setState({name})}/>
                <Text></Text>
                <Text></Text>
                <View style={styles.buttonContainer}>
                    <Button style={styles.add} >
                        <Text style={ styles.fontContainer }> Salvar nome </Text>
                    </Button>
                </View>
                <Text></Text>
                <View style={styles.buttonContainer} >
                    <Button style={styles.add} onPress={() => this.setModalVisible(true)}>
                        <Text style={ styles.fontContainer }> Trocar senha </Text>
                    </Button>
                </View>
                <Text></Text>
                <Text></Text>
                <View style={styles.lineStyle}></View>
                <View style={styles.footer}>
                  <TouchableOpacity>
                    <Text style={styles.linkTextStyle}>
                        Excluir conta
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text></Text>
              </Container>
            </TouchableWithoutFeedback>

            <Modal isVisible={this.state.modalVisible}
                            onBackdropPress={ ()=> this.setModalVisible(false)}
                            onBackButtonPress={ ()=> this.setModalVisible(false)}>
                            <View style={ styles.modalContent }>
                                <View style={ styles.headerContainer }>
                                    <Text style={ styles.title }>Alterar Senha</Text>
                                    <Right>
                                        <Button
                                        onPress={ ()=> this.setModalVisible(false)}
                                        transparent>
                                            <Icon name="close" />
                                        </Button>
                                    </Right>
                                </View>    
                                      
                                <ModalPassword />
                                
                                <View style={styles.footerContainer}>        
                                    <Button style={styles.cancel} 
                                    onPress={ ()=> this.setModalVisible(false)}>
                                        <Text style={ styles.fontContainer }> Cancelar </Text>
                                    </Button>
                                    <Right>
                                        <Button style={styles.add}>
                                            <Text style={ styles.fontContainer }> Salvar </Text>
                                        </Button>
                                    </Right>
                                </View>
                            </View>
            </Modal>
       </Container>
    );
  }
}

