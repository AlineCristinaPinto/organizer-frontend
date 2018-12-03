import React from 'react';
import { View, AsyncStorage} from 'react-native';
import { Container, Textarea, Content, DatePicker,
    Text, Form, Item, Input, Right, Button, Card, CardItem } from 'native-base';
import CustomHeaderBack from "../components/Navigation/CustomHeaderBack";
import Modal from "react-native-modal";
import ModalContent from "../components/Navigation/ModalContent";
import Icon from 'react-native-vector-icons/FontAwesome';
import {handleItemUpdation} from '../actions/updateItemAction';

import styles from '../assets/style/ItemScreensStyle';

export default class UpdateLembreteScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date(),
            modalVisible: false,
            nomeInput : '',
            idItem: null,
            data: {}, };
        this.setDate = this.setDate.bind(this);
    }
    
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }
    
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    componentWillMount(){
        (async () => {
          try {
            const value = await AsyncStorage.getItem("item");
            console.log(value)
            this.setState({ data: JSON.parse(value) });
            this.setState({ nomeInput: this.state.data.nameItem });
            this.setState({ idItem: this.state.data.seqItem });
            
           } catch (error) {
            console.error(error)
        }
        })().then(this.setDate(this.state.data.dateItem),
        console.log(this.state.chosenDate))
 
    }
    
    goHome = () => {
        let {navigate} = this.props.navigation;
        navigate('Home');
    }

    handleUpdateItem = () => {
        datas = {
          typeItem: 'LEM',
          seqItem: this.state.data.idItem,
          nameItem: this.state.nomeInput,
          descriptionItem: this.state.descriptionInput,
          dateItem: this.state.chosenDate,
        }

        const responseFunction = async (responseJSON) => {
            const result = responseJSON;

            if(result){
                // Works on both iOS and Android
                Alert.alert(
                    'Sucesso',
                    'Seu item foi editado!',
                    [
                        {text: 'OK', onPress:() => this.goHome()},
                    ],
                    { cancelable: false }
                    )
            }else{
                Alert.alert(
                    'Erro',
                    'Não foi possível completar a edição do item.',
                    [
                        {text: 'OK', onPress: console.log("ok")},
                    ],
                    { cancelable: false }
                    )
            }
        }

        result = handleItemUpdation(datas, responseFunction);

    };
    
    render() {
        let {navigate} = this.props.navigation;
        return (
            <Container>
                <CustomHeaderBack navigation={this.props.navigation} />
                <Content style={styles.formContainerLembrete}>
                    <Form>
                        <Text style={styles.welcomeTitleLembrete}>Editar Lembrete</Text>
                        
                        <Input style={ styles.fontContainer } placeholder="Nome" 
                        value={this.state.data.nameItem}
                        onChangeText={(nomeInput) => this.setState({nomeInput})} />
                        <Item last></Item>

                        <Text></Text>
                        <Textarea style={ styles.fontContainer } placeholder="Descrição" rowSpan={5} cowSpan={5} 
                        value={this.state.data.descriptionItem} onChangeText={(text) => this.value = text} on bordered />
                       
                        <Item last>
                            <DatePicker style={ styles.fontContainer } placeHolderText="Data" onDateChange={this.setDate} />
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
                                <Button style={styles.add}
                                onPress={ this.handleUpdateItem }>
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

