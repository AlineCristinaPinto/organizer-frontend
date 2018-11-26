import React, {Component} from "react";
import { Router, Scene } from "react-native-router-flux";
import {AsyncStorage} from 'react-native';
import Register from "./Register.js";
import Login from "./Login.js";
import { AppLoading, Font } from "expo";
import App from "./Main.js";

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {isReady: false , hasToken: false, isLoaded: false};
    }


    componentWillMount() {
        (async () => {
            await Font.loadAsync({
                "patrickH": require("../assets/fonts/Patrick_Hand/PatrickHand-Regular.ttf"),
                "gloria" : require("../assets/fonts/Gloria_Hallelujah/GloriaHallelujah.ttf"),
                "Roboto_medium" : require("../assets/fonts/Roboto-Medium.ttf"),
            });

            this.setState({
                isReady: true
            });

        })();

        
    }

    componentDidMount() {
        AsyncStorage.getItem("user").then((token) => {
          this.setState({ hasToken: token !== null, isLoaded: true })
        });
    }
    
    render() {
        if (!this.state.isReady || !this.state.isLoaded) {
            return <AppLoading /> ;
        } else {
            return (
                <Router>
                  <Scene key = "root" hideNavBar={true}>
                    <Scene key = "register" component = {Register} hideNavBar={true}  />
                    <Scene key = "login" component = {Login} hideNavBar={true} initial = {!this.state.hasToken}/>
                    <Scene key= "main" component={App} hideNavBar={true} initial = {this.state.hasToken}/>
                  </Scene>
                </Router>
            );
        }
    }
}

export default Routes;
