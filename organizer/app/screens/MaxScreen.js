import React from 'react';
import { StyleSheet, Image, Text, Title } from 'react-native';
import  CustumHeader from "../components/Navigation/CustomHeader";
import { Container, Content, Button, Body, View } from 'native-base';

export default class MaxScreen extends React.Component {
  
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
        <Image
            source={require('../assets/images/max.png')}
            style={styles.icon}
        />
    ),
  }

  render() {
    return (
      <Container style={ styles.page }>
        
        <CustumHeader/>

        <Content>
          <Text></Text>
          <View style={ styles.container }>
            <Text style={ styles.maxTitle }>MAX</Text>
            <Text style={ styles.description }>Módulo Assistente X</Text>
            <Image style={ styles.imgMax } source={require('../assets/images/crystal.png')} />
          </View>
          <Body style={ styles.buttons }>
            <Button rounded bordered info>
              <Text style={ styles.textButtonI }>Interagir</Text>
            </Button>
          </Body>
            <Text></Text>
          <Body style={ styles.buttons }>
            <Button rounded info>
              <Text style={ styles.textButtonII }>Manual de Interações</Text>
            </Button>
            </Body>
        </Content>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  page:{
    backgroundColor: 'black',
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  description: {
    color: "#5bc0de",
    fontFamily: 'patrickH',
    fontSize: 17,
  },

  imgMax: {
    flex: 1,
    width: 350,
    height: 350,
    resizeMode: 'contain'
  },

  icon: {
    width: 24,
    height: 24,
  },

  maxTitle: {
    fontFamily: 'gloria',
    fontSize: 35,
    alignItems: 'center',
    color: '#fff',
  },

  textButtonI: {
    padding: 10,
    color: "#5bc0de",
    fontFamily: 'gloria',
  },

  textButtonII: {
    padding: 10,
    fontFamily: 'gloria',
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "center"
  },
});