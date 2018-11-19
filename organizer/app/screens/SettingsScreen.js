import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base'

export default class SettingsScreen extends React.Component {

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="settings" style={{ fontSize:24, color:tintColor }}/>
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>As configurações serão feitas nesta página</Text>
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