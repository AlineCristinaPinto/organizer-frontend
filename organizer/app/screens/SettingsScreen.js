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
import { handleUpdate } from "../actions/settingsActions";
import md5 from "react-native-md5";

//import { Actions } from "react-native-router-flux";
//import { handleLogin } from '../actions/loginActions';

const PLACEHOLD_NAME ="Digite seu nome";

export default class SettingsScreen extends React.Component {
  constructor(props){
    super(props)
    this.state= { 
      name:"",
      oldPassword:"",
      password:"",
      confirmPassword:"",
      nameInput: "",
      modalVisible: false,
      modalVisibleII: false,
      user: null,
    }
  }

  componentDidMount(){
    (async () => {
      try {
        const value = await AsyncStorage.getItem("user");
        console.log(value)
        this.setState({ user: JSON.parse(value) });
        this.setState({nameInput: this.state.user.userName})
       } catch (error) {
         console.error(error)
       }
    })().then()
  };

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="settings" style={{ fontSize:24, color:tintColor }}/>
    ),
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setModalVisibleII(visible) {
    this.setState({modalVisibleII: visible});
  }
  
  handleChangeName = () => {
      if(this.state.user.userName === this.state.name){
          console.log(this.state.user.userName);
          console.log(this.state.name);
          return;
      }else{
        const responseFunction = async (responseJSON) => {
            const result = responseJSON;

            if(result){
                let {navigate} = this.props.navigation;
                Alert.alert(
                    'Sucesso',
                    'Seu usuário foi alterado!',
                    [
                        {text: 'OK', onPress: () => navigate('Home')},
                    ],
                    { cancelable: false }
                    )
            }else{
                Alert.alert(
                    'Erro',
                    'Não foi possível completar a alteração!',
                    [
                        {text: 'OK', onPress: () => navigate('Settings')},
                    ],
                    { cancelable: false }
                    )
            }
          }
          handleUpdate(this.state.name, this.state.user.userPassword, true, this.state.user.codEmail, responseFunction) 
      }
  }

  handleChangePassword = () => {
    this.setModalVisible(false);
    if(md5.hex_md5(this.state.oldPassword) === this.state.user.userPassword){
        if(this.state.password === this.state.confirmPassword){
            const responseFunction = async (responseJSON) => {
                const result = responseJSON;
    
                if(result){
                    let {navigate} = this.props.navigation;
                    Alert.alert(
                        'Sucesso',
                        'Seu usuário foi alterado!',
                        [
                            {text: 'OK', onPress: () => navigate('Home')},
                        ],
                        { cancelable: false }
                        )
                }else{
                    Alert.alert(
                        'Erro',
                        'Não foi possível completar a alteração!',
                        [
                            {text: 'OK', onPress: () => navigate('Settings')},
                        ],
                        { cancelable: false }
                        )
                }
            }
            handleUpdate(this.state.user.userName, this.state.password, false, this.state.user.codEmail, responseFunction)
        }else{
            Alert.alert(
                'Erro',
                'Não foi possível completar a alteração! As senhas não conferem!',
                [
                    {text: 'OK'},
                ],
                { cancelable: false }
                )
        }
    }else{
        Alert.alert(
            'Erro',
            'Não foi possível completar a alteração! Senha antiga incorreta',
            [
                {text: 'OK'},
            ],
            { cancelable: false }
            )
    } 
}

handleDeleteUser = () =>{
    this.setModalVisibleII(false);
    if(md5.hex_md5(this.state.oldPassword) === this.state.user.userPassword){
    }else{
        Alert.alert(
            'Erro',
            'Não foi possível completar a alteração! Senha incorreta',
            [
                {text: 'OK'},
            ],
            { cancelable: false }
            )
    } 
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
                <Input style={styles.inputStyle} placeholder={PLACEHOLD_NAME} 
                onChangeText={(name) => this.setState({name})} value={this.state.nameInput}/>
                <Text></Text>
                <Text></Text>
                <View style={styles.buttonContainer}>
                    <Button style={styles.add} onPress={this.handleChangeName}>
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
                  <TouchableOpacity onPress={() => this.setModalVisibleII(true)}>
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
                            
                    <View style={styles.bodyContainer}>
                      <Text></Text>
                      <Text style={styles.textColor}>Senha antiga</Text>      
                        <Input style={styles.inputStyle} 
                            onChangeText={(oldPassword) => this.setState({oldPassword})} secureTextEntry={true}/>
                      <Text style={styles.textColor}>Nova Senha</Text>
                        <Input style={styles.inputStyle} 
                            onChangeText={(password) => this.setState({password})} secureTextEntry={true}/>
                      <Text style={styles.textColor}>Confirmar nova senha:</Text>
                        <Input style={styles.inputStyle} 
                            onChangeText={(confirmPassword) => this.setState({confirmPassword})} secureTextEntry={true}/>
                      <Text></Text>
                    </View>
                    
                    <View style={styles.footerContainer}>        
                        <Button style={styles.cancel} 
                        onPress={ ()=> this.setModalVisible(false)}>
                            <Text style={ styles.fontContainer }> Cancelar </Text>
                        </Button>
                        <Right>
                            <Button style={styles.add}  onPress={this.handleChangePassword}>
                                <Text style={ styles.fontContainer }> Salvar </Text>
                            </Button>
                        </Right>
                    </View>
                </View>
            </Modal>

            <Modal isVisible={this.state.modalVisibleII}
                onBackdropPress={ ()=> this.setModalVisibleII(false)}
                onBackButtonPress={ ()=> this.setModalVisibleII(false)}>
                <View style={ styles.modalContent }>
                    <View style={ styles.headerContainer }>
                        <Text style={ styles.title }>Excluir Conta</Text>
                        <Right>
                            <Button
                            onPress={ ()=> this.setModalVisibleII(false)}
                            transparent>
                                <Icon name="close" />
                            </Button>
                        </Right>
                    </View>    
                            
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
                    
                    <View style={styles.footerContainer}>        
                        <Button style={styles.cancel} 
                        onPress={ ()=> this.setModalVisibleII(false)}>
                            <Text style={ styles.fontContainer }> Cancelar </Text>
                        </Button>
                        <Right>
                            <Button style={styles.add}>
                                <Text style={ styles.fontContainer }> Excluir </Text>
                            </Button>
                        </Right>
                    </View>
                </View>
            </Modal>
       </Container>
    );
  }
}

