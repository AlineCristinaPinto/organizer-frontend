import React, { Component } from "react";
import { StyleSheet,  Platform, StatusBar} from "react-native";
import { Header, Left, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class CustomHeaderBack extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {goBack} = this.props.navigation;
        return (
            <Header style={styles.header}>
                <Left>
                    <Button
                    transparent
                    onPress={() => goBack()}>
                    <Icon name="arrow-left"  style={ styles.icon }/>
                    </Button>
                </Left>
                <Right/>
            </Header>
        );
    }
}
export default CustomHeaderBack;

const styles = StyleSheet.create({
    header:{
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        height: 70,
        backgroundColor: 'black',
    },
    icon: {
        color:'white',
        fontSize: 20,
    },
})