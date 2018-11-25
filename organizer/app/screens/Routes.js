import React, {Component} from "react";
import { Router, Scene } from "react-native-router-flux";
import Register from "./Register.js";
import Login from "./Login.js";
import { AppLoading, Font } from "expo";
import App from "./Main.js";

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {isReady: false  };
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

    render() {
        if (!this.state.isReady) {
            return <AppLoading /> ;
        } else {
            return (
                <Router>
                  <Scene key = "root" hideNavBar={true}>
                    <Scene key = "register" component = {Register} hideNavBar={true} initial = {true} />
                    <Scene key = "login" component = {Login} hideNavBar={true}/>
                    <Scene key= "main" component={App} hideNavBar={true}/>
                  </Scene>
                </Router>
            );
        }
    }
}

export default Routes;
