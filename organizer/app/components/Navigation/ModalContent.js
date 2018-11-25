import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, CardItem, CheckBox, ListItem, Text, Item } from 'native-base'

class ModalContent extends React.Component {
 
    render() {
        return (
            <View style={styles.bodyContainer}>         
                <Text style={ styles.textContent }>Selecionadas:</Text>
                <Card>
                    <CardItem header bordered>
                        <Text></Text>
                    </CardItem>
                </Card>
                <Item last></Item>
                <Text style={ styles.textContent }>Lista de Tags:</Text>
                <ListItem>
                    <CheckBox style={ styles.checkBoxFeatures } checked={false} />
                    <Text style={ styles.textColor }>Exemplo</Text>
                </ListItem>
            </View>
            
        );
    }
}

export default ModalContent; 

const styles = StyleSheet.create({

    textContent:{
        fontFamily: 'patrickH',
    },

    bodyContainer:{
        padding: 22,
    },

    textColor: {
        color: "black",
        marginLeft: 8,    
        fontFamily: 'patrickH',
        fontSize: 12,
    },
    
    checkBoxFeatures: {
        marginLeft: 4,
    },

});