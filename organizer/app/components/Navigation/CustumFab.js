import React, { Component } from "react";
import { StyleSheet, View, Image} from "react-native";
import { Fab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator, DrawerItems, createAppContainer } from 'react-navigation';

class CustomFab extends Component {

    state = {
        active: false,
    }; 

    constructor(props){
        super(props);
    }

    render() {
        let {navigate} = this.props.navigation;
        return (
            <View>
                <Fab
                    active={this.state.active}
                    direction="up"
                    style={styles.plus}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>

                    <Icon name="plus" />

                    <Button style={styles.pencil}
                        onPress={() => navigate('CreateItem')}>
                    <Icon name="pencil" />
                    </Button>

                    <Button style={styles.imgMax}
                        onPress={() => navigate('Max')}>
                    <Image
                        source={require('../../assets/images/max.png')}
                        style={styles.icon}
                    />
                    </Button>
                </Fab>
            </View>
        );
    }
}

export default CustomFab;

const styles = StyleSheet.create({
        icon: {
        width: 24,
        height: 24,
    },  

    plus: { backgroundColor: '#5067FF' },

    pencil: { backgroundColor: '#34A34F' },

    imgMax: { backgroundColor: '#3B5998' },

})