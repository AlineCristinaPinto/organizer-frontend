import React, { Component } from "react";
import { View, StyleSheet} from "react-native";
import { Header, Left, Icon } from 'native-base'

class CustomHeader extends Component {
    render() {
        return (
            <View>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={() => this.props.drawerOpen()}/>
                    </Left>
                </Header>
            </View>
        );
    }
}
export default CustomHeader;

const styles = StyleSheet.create({
    container: {
        flex: 1,        
    },
})