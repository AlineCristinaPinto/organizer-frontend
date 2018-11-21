import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Container, Header, Textarea, Content, DatePicker,
    Text, Form, Item, Picker, Input, Label } from 'native-base'
import CustomModal from "../components/Navigation/CustomModal";

export default class CreateItemScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
    }
    
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    render() {
        return (
            <Container>
                <Header />

                <Content style={styles.formContainer}>
                    <Form>
                        <Text style={styles.welcomeTitle}>Criar Item</Text>
                        
                        <Item picker>
                            <Picker>
                                <Picker.Item label="Simples" value="simples" />
                                <Picker.Item label="Lembrete" value="lembrete" />
                                <Picker.Item label="Tarefa" value="tarefa" />                                
                            </Picker>
                        </Item>

                        <Item last>
                            <Label>Nome</Label>
                            <Input />
                        </Item>

                        <Text></Text>
                        <Label>Descrição</Label>
                        <Textarea rowSpan={5} cowSpan={5} bordered />
                       
                        <Item last>
                            <DatePicker placeHolderText="Data" onDateChange={this.setDate}/>
                        </Item>
                    </Form>
                </Content>
                
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    welcomeTitle: {
        fontSize: 25,
        textAlign: 'center',
    },
    
    formContainer: {
        position: 'relative',
        bottom: 0,
        paddingLeft : 20,
        paddingRight : 20,
        paddingTop : 20,
    },
});