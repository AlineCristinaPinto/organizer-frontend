import React from 'react';
import { StyleSheet, Image, View, SafeAreaView, ScrollView, Platform, StatusBar } from 'react-native';
import { createDrawerNavigator, DrawerItems, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import MaxScreen from './MaxScreen';

export default class App extends React.Component {
    render() {
        return (
        <AppContainer />
        );
    }
}

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height:150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../assets/images/user.png')} style={{ height: 120, width: 120, borderRadius: 60 }} />
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
    Home: HomeScreen,
    Max: MaxScreen,
    Settings: SettingsScreen    
}, {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
        activeTintColor: '#78E7F3'
    }
})

const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});