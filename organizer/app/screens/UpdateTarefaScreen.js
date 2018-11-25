import React from 'react';
import { View} from 'react-native';
import { Container, Textarea, Content, DatePicker,
    Text, Form, Item, Input, Right, Button, Card, CardItem } from 'native-base';
import CustomHeaderBack from "../components/Navigation/CustomHeaderBack";
import Modal from "react-native-modal";
import ModalContent from "../components/Navigation/ModalContent";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../assets/style/ItemScreensStyle';

export default class UpdateTarefaScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date(), modalVisible: false };
        this.setDate = this.setDate.bind(this);
    }
    
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }
    
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    
    render() {
        let {navigate} = this.props.navigation;
        return (
            <Container>
                <CustomHeaderBack navigation={this.props.navigation} />
                <Content style={styles.formContainerTarefa}>
                    <Form>
                        <Text style={styles.welcomeTitleTarefa}>Editar Tarefa</Text>
                        
                        <Input style={ styles.fontContainer } placeholder="Nome" />
                        <Item last></Item>

                        <Text></Text>
                        <Textarea style={ styles.fontContainer } placeholder="Descrição" rowSpan={5} cowSpan={5} bordered />
                       
                        <Item last>
                            <DatePicker style={ styles.fontContainer } placeHolderText="Data" onDateChange={this.setDate}/>
                        </Item>

                        <Button style={ styles.tags }
                        full onPress={() =>  this.setModalVisible(true) }>
                            <Text style={ styles.fontTags } >#Tags</Text>
                        </Button>

                        <Card>
                            <CardItem header bordered>
                                <Text></Text>
                            </CardItem>
                        </Card>
                        
                        <Modal isVisible={this.state.modalVisible}
                            onBackdropPress={ ()=> this.setModalVisible(false)}
                            onBackButtonPress={ ()=> this.setModalVisible(false)}>
                            <View style={ styles.modalContent }>
                                <View style={ styles.headerContainer }>
                                    <Text style={ styles.title }>Adicionar Tags</Text>
                                    <Right>
                                        <Button
                                        onPress={ ()=> this.setModalVisible(false)}
                                        transparent>
                                            <Icon name="close" />
                                        </Button>
                                    </Right>
                                </View>    
                                      
                                <ModalContent />
                                
                                <View style={styles.footerContainer}>        
                                    <Button style={styles.cancel} 
                                    onPress={ ()=> this.setModalVisible(false)}>
                                        <Text style={ styles.fontContainer }> Cancelar </Text>
                                    </Button>
                                    <Right>
                                        <Button style={styles.add}>
                                            <Text style={ styles.fontContainer }> Salvar </Text>
                                        </Button>
                                    </Right>
                                </View>
                            </View>
                        </Modal>

                        <Text></Text>

                        <View style={styles.footer}>        
                            <Button style={styles.cancel} 
                             onPress={() => navigate('Home')}>
                                <Text style={ styles.fontContainer }> Cancelar </Text>
                            </Button>
                            <Right>
                                <Button style={styles.add}>
                                    <Text style={ styles.fontContainer }> Salvar </Text>
                                </Button>
                            </Right>
                        </View>

                    </Form>
                </Content>
                
            </Container>

        );
    }
}

