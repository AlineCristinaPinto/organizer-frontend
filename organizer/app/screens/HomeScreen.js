import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { CustomHeader } from "../components/Navigation/CustomHeader";
import { Icon } from 'native-base'

export default class HomeScreen extends React.Component {
  
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={{ fontSize:24, color:tintColor }}/>
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        < CustomHeader />
        <Text>A listagem dos itens será feita nesta página</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});