import React, { Component } from "react";
import { StyleSheet,  Platform, StatusBar} from "react-native";
import { Header, Left, Icon, Container, Right, Button } from 'native-base'

class CustomHeader extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Header style={styles.headerMenu}>
                <Left>
                    <Button
                    transparent
                    onPress={() => this.props.onPress()}>
                    <Icon name="menu" />
                    </Button>
                </Left>
                <Right>
                    <Button
                    transparent>
                    <Icon name="search" />
                    </Button>
                </Right>
            </Header>
        );
    }
}
export default CustomHeader;

const styles = StyleSheet.create({
    headerMenu:{
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        height: 70,
        backgroundColor: 'black',
    },
})