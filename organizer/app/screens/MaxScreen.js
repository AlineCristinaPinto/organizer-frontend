import React from 'react';
import { StyleSheet, Image, Text, Title } from 'react-native';
import  CustumHeader from "../components/Navigation/CustomHeader";
import { Container, Content, Button, Body, View } from 'native-base';

import styles from '../assets/style/MaxScreenStyle';

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
