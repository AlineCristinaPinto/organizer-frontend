import React from 'react';
import { Image, View, SafeAreaView, ScrollView, Platform, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator, DrawerItems, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import MaxScreen from './MaxScreen';
import CreateItemScreen from './CreateItemScreen';
import UpdateTarefaScreen from './UpdateTarefaScreen';
import UpdateLembreteScreen from "./UpdateLembreteScreen";
import UpdateSimplesScreen from "./UpdateSimplesScreen";
import { AppLoading, Font } from 'expo';

export default class App extends React.Component {

    state = {
        isReady: false,
    }

    componentWillMount() {
        (async () => {
            await Font.loadAsync({
                'patrickH': require('../assets/fonts/Patrick_Hand/PatrickHand-Regular.ttf'),
                'gloria' : require('../assets/fonts/Gloria_Hallelujah/GloriaHallelujah.ttf'),
                'Roboto_medium' : require('../assets/fonts/Roboto-Medium.ttf'),
            });

            this.setState({
                isReady: true
            });

        })();
    }

    render() {

        if (!this.state.isReady) {
            return <AppLoading /> ;
        } else {
            return (
                <AppContainer />
            );
        }
    }
}

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <View style={{ marginTop: 15, height:150, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
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
    Settings: SettingsScreen,
    CreateItem: {screen: CreateItemScreen,
        navigationOptions: {
            drawerLabel: ()=>null,
        }
    },
    UpdateLembrete: {screen: UpdateLembreteScreen,
        navigationOptions: {
            drawerLabel: ()=>null,
        }
    },
    UpdateSimples: {screen: UpdateSimplesScreen,
        navigationOptions: {
            drawerLabel: ()=>null,
        }
    },
    UpdateTarefa: {screen: UpdateTarefaScreen,
        navigationOptions: {
            drawerLabel: ()=>null,
        }
    }
}, {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
        activeTintColor: '#78E7F3',
        inactiveTintColor: 'white',
    }
})

const AppContainer = createAppContainer(AppDrawerNavigator);
