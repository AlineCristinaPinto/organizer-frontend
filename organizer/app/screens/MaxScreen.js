import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { CustomHeader } from "../components/Navigation/CustomHeader";

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
      <View style={styles.container}>
    
        <Text>A interface do Max ficará nesta página</Text>
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

  icon: {
    width: 24,
    height: 24,
  },
});