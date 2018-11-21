import React, { Component } from "react";
import { StyleSheet, View, Image} from "react-native";
import { Fab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class CustomFab extends Component {

    state = {
        active: false,
    }; 

    render() {
        return (
            <View style={ styles.container }>
                <Fab
                    active={this.state.active}
                    direction="up"
                    style={styles.plus}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>

                    <Icon name="plus" />

                    <Button style={styles.pencil}>
                    <Icon name="pencil" />
                    </Button>

                    <Button style={styles.imgMax}>
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
    container: {
        flex: 1,        
    },
    
    icon: {
        width: 24,
        height: 24,
    },  

    plus: { backgroundColor: '#5067FF' },

    pencil: { backgroundColor: '#34A34F' },

    imgMax: { backgroundColor: '#3B5998' },

})