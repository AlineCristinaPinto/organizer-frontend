import React,{ Fragment} from 'react';
import { StyleSheet, View, Button, Dimensions } from 'react-native';
import { Content, CheckBox, ListItem, Body, Text, Item, Input } from 'native-base'
import Modal from "react-native-modal";

class CustomModal extends React.Component {

    state = {
        visible: false
    };
    
    openModal = () => this.setState({ visible: true });
    closeModal = () => this.setState({ visible: false });
  
    render() {
        return (
            <Fragment>
                <Modal
                isVisible={this.state.visible}
                onSwipe={this.closeModal}
                onBackdropPress={this.closeModal}
                >
                <View style={styles.modalContainer}>
                    <Text>Tags Selecionadas</Text>
                    <Item larounded>                                    
                        <Input />
                    </Item>
                    <Text></Text>
                    <Text>Lista de Tags</Text>
                    <Content>
                        <ListItem>
                            <CheckBox checked={true} />
                            <Body>
                                <Text>Daily Stand Up</Text>
                            </Body>
                        </ListItem>
                    </Content>
                </View>
                </Modal>

                <Button
                color="#00D774"
                label="Scrollable Modal"
                onPress={this.openModal}
                title="Abrir modal" 
                />
            </Fragment>
        );
    }
}

export default CustomModal; 

const { heightScreen } = Dimensions.get('window');

const styles = StyleSheet.create({

    modalContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: "black",
        borderWidth: 1,
        width: heightScreen*0.8,
        height: 20,
      },

});