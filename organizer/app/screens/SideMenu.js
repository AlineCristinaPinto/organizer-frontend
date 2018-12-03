import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {SafeAreaView, Image, ScrollView, Text, View, AsyncStorage, ListView, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../assets/style/SideMenuStyle';
import Modal from 'react-native-modalbox';
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";
import { Form, Input, Item , Button, Right} from 'native-base';
import { handleListTag } from '../actions/listTagAction';
import { handleTagCreation } from '../actions/createTagAction';
import { CheckBox } from 'react-native-elements'

class SideMenu extends Component {
    
    constructor(props){
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            isOpen: false,
            isDisabled: false, 
            swipeToClose: true,
            collapsed:false, 
            nomeInput: '',
            user:null,
            datas: [],
			tagOptions: [],
			typeOptions: [],
        };
    } 

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    handleCreateTag = () => {
        data = {
          nameTag: this.state.nomeInput,
          email: this.state.user.codEmail
        }

        const responseFunction = async (responseJSON) => {
            const result = responseJSON;
            console.log(result)
            if(result){
                Alert.alert(
                    'Sucesso',
                    'Sua tag foi criada!',
                    [
                        {text: 'OK', onPress: this.okAlertAction()},
                    ],
                    { cancelable: false }
                    )
            }else{
                Alert.alert(
                    'Erro',
                    'Não foi possível completar a criação da tag.',
                    [
                        {text: 'OK', onPress: console.log("ok")},
                    ],
                    { cancelable: false }
                    )
            }
        }

        result = handleTagCreation(data, responseFunction);

    };

    okAlertAction(){
        this.listTags(),
        this.refs.modalTag.close()
    }
	
	
	sendToHome(){
		this.props.navigation.navigate("Home", {"types": this.state.typeOptions, "tags": this.state.tagOptions});
	}
	
	addTagOption = (value) => {
		this.setState({
			tagOptions: this.addToArray(value, this.state.tagOptions)
		}, () => this.sendToHome());
	}
	
	addTypeOption = (value) => {
		this.setState({
			typeOptions: this.addToArray(value, this.state.typeOptions)
		}, () => this.sendToHome());
	}
     
	addToArray = (value, arr) => {
		var index = arr.indexOf(value);
		
		//if element is already in arr, removes it
		//otherwise, adds at the end
		if(index > -1){
			arr.splice(index, 1);
		}else{
			arr.push(value);
		}
		
		return arr;
	};
	
    displayTag(){

        var list = [];

        list = this.state.datas.map(textInfo =>
            <View style={styles.menuSectionStyle}  key={textInfo.seqTag}>
                <CheckBox
                    title={textInfo.tagName}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    textStyle={{color: '#FFF4F8'}}
                    checkedColor= '#78E7F3'
                    fontFamily='patrickH'
                    containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent', marginLeft: 20}}
                    checked = {this.state.tagOptions.includes(textInfo.tagName)}
                    onPress = {() => this.addTagOption(textInfo.tagName)}
                    key={textInfo.seqTag}
                />
                <View style={{flexDirection:"row", paddingTop:20}}>
                    <Icon name="edit" style={styles.iconItemTag} onPress={() => this.refs.modalTagEdit.open()}/>
                    <Icon name="file-text-o"style={{color: 'transparent'}}/>
                    <Icon name="file-text-o"style={{color: 'transparent'}}/>
                    <Icon name="trash" style={styles.iconItemTag}/>
                </View>
            </View> 
        );
    
        return list;
    }

    listTags = async () =>{
        const responseFunction = async (responseJSON) => {
          const result = responseJSON;
          this.setState({datas: result})
        }
        result = handleListTag(this.state.user.codEmail, responseFunction);
    }

    componentDidMount(){
        (async () => {
          try {
            const value = await AsyncStorage.getItem("user");
            this.setState({ user: JSON.parse(value) });
           } catch (error) {
             // Error retrieving data
           }
        })().then(_ => this.listTags())
    };
     
    render () {
        return (
            <SafeAreaView style={styles.safeAreaStyle}>
                <View style={styles.imageViewMenuStyle}>
                    <Image source={require('../assets/images/user.png')} style={styles.imageMenuStyle} />
                    <Text style={styles.userNameMenuStyle}>Pedro Lucas</Text>
                </View>
                <ScrollView style={{flex: 1}}>
                    <View style={styles.menuSectionStyle}>
                        <Text style={styles.menuItemSectionStyle} onPress={this.navigateToScreen('Home')}>
                            <Icon name="home" style={styles.icons}/>
                            <Icon name="file-text-o"style={{color: 'transparent'}}/>
                            Página Inicial
                        </Text>
                    </View>
                    <View style={styles.menuSectionStyle}>
                        <Text style={styles.menuItemSectionStyle} onPress={this.navigateToScreen('Max')}>
                            <Image source={require('../assets/images/max.png')} style={styles.icon}/>
                            <Icon name="file-text-o"style={{color: 'transparent'}}/>
                            Max
                        </Text>
                    </View>
                    <Collapse>
                            <CollapseHeader style={styles.menuSectionStyle}>
                                <Text style={styles.menuItemSectionStyle}>
                                    <Icon name="adjust" style={styles.icons}/>
                                    <Icon name="file-text-o"style={{color: 'transparent'}}/>
                                    Temas
                                </Text>
                                <Icon name="angle-down" style={styles.iconsAngle}/>
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBodyStyle}>
                                <View style={{paddingLeft: 10}}>
                                    
                                </View>
                            </CollapseBody>
                    </Collapse>
                    <Collapse>
                            <CollapseHeader style={styles.menuSectionStyle}>
                                <Text style={styles.menuItemSectionStyle}>
                                    <Icon name="file-text-o" style={styles.icons}/>
                                    <Icon name="file-text-o" style={{color: 'transparent'}}/>
                                    Tipos
                                </Text>
                                <Icon name="angle-down" style={styles.iconsAngle}/>
                            </CollapseHeader>
                            <CollapseBody style={styles.collapseBodyStyle}>
                                <View style={[styles.alightItemCenter, styles.menuSectionStyle]}>
                                    <CheckBox
                                        center
                                        title='Lembrete'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        textStyle={{color: '#FFF4F8'}}
                                        fontFamily='patrickH'
                                        checkedColor= '#78E7F3'
                                        containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent', marginLeft: 20}}
                                        checked={this.state.typeOptions.includes("LEM")}
                                        onPress = {() => this.addTypeOption("LEM")}
                                    />
                                </View>
                                <View style={[styles.alightItemCenter, styles.menuSectionStyle]}>
                                    <CheckBox
                                        center
                                        title='Tarefa'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        textStyle={{color: '#FFF4F8'}}
                                        fontFamily='patrickH'
                                        checkedColor= '#78E7F3'
                                        containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent', marginLeft: 20}}
                                        checked={this.state.typeOptions.includes("TAR")}
                                        onPress = {() => this.addTypeOption("TAR")}
                                    />
                                </View>
                                <View style={[styles.alightItemCenter, styles.menuSectionStyle]}>
                                    <CheckBox
                                        center
                                        title='Simples'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        textStyle={{color: '#FFF4F8'}}
                                        fontFamily='patrickH'
                                        checkedColor= '#78E7F3'
                                        containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent', marginLeft: 20}}
                                        checked={this.state.typeOptions.includes("SIM")}
                                        onPress = {() => this.addTypeOption("SIM")}
                                    />
                                </View>
                            </CollapseBody>
                    </Collapse>
                    <Collapse 
                        isCollapsed={this.state.collapsed} 
                        onToggle={(isCollapsed)=>this.setState({collapsed:isCollapsed})}
                        >
                            <CollapseHeader style={styles.menuSectionStyle}>
                                <Text style={styles.menuItemSectionStyle}>
                                    <Icon name="tags" style={styles.icons}/> 
                                    <Icon name="file-text-o" style={{color: 'transparent'}}/> 
                                    Tags
                                </Text>
                                <Icon name="angle-down" style={styles.iconsAngle}/>
                            </CollapseHeader>
                            <CollapseBody style={[styles.collapseBodyStyle]}>
                                <Text style={[styles.menuItemSectionStyle, styles.alightCont]} onPress={() => this.refs.modalTag.open()}>
                                    <Icon name="plus-square-o" style={styles.icons}/> 
                                    <Icon name="file-text-o" style={{color: 'transparent'}}/> 
                                    Nova Tag
                                </Text>
                                <View>
                                    {this.displayTag()}
                                </View>
                            </CollapseBody>
                    </Collapse>
                    <View style={styles.menuSectionStyle}>
                        <Text style={styles.menuItemSectionStyle} onPress={this.navigateToScreen('Settings')}>
                            <Icon name="cogs"style={styles.icons}/>
                            <Icon name="file-text-o"style={{color: 'transparent'}}/>
                            Configurações
                        </Text>
                    </View> 
                    <View style={styles.navSectionLastStyle}>
                        <Text style={styles.menuItemSectionStyle} onPress={this.navigateToScreen('')}>
                            <Icon name="sign-out"style={styles.icons}/>
                            <Icon name="file-text-o"style={{color: 'transparent'}}/>
                            Sair
                        </Text>
                    </View>                                    
                </ScrollView>

                <Modal style={styles.createTagModalStyle} ref={"modalTag"}>
                    <ScrollView style={{flex:1}}>
                        <View style={{ paddingLeft: 10, paddingRight:10}}>
                            <View style={{flex:1, flexDirection:"row"}}>
                                <Icon name="angle-left" style={styles.iconsAngle}/>  
                                <Text style={[styles.menuItemSectionStyle]} onPress={() => this.refs.modalTag.close()}>
                                    <Text style={[styles.menuItemSectionStyle]}> Voltar</Text>
                                </Text>
                            </View>
                            <Text style={styles.welcomeTitle}>Criar Tag</Text>
                            <View >
                                <Form>
                                    <Input style={styles.menuItemSectionStyle} placeholder="Nome" 
                                    onChangeText={(nomeInput) => this.setState({nomeInput})} />
                                    <Item last></Item>

                                    <View style={styles.footer}>        
                                        <Button style={styles.cancel} 
                                        onPress={() => this.refs.modalTag.close()}>
                                            <Text style={ styles.menuItemSectionStyle }> Cancelar </Text>
                                        </Button>
                                        <Right>
                                            <Button style={styles.add}
                                            onPress={ this.handleCreateTag }>
                                                <Text style={ styles.menuItemSectionStyle }> Salvar </Text>
                                            </Button>
                                        </Right>
                                    </View>
                                </Form>
                            </View>
                        </View>
                    </ScrollView>
                </Modal>
                <Modal style={styles.createTagModalStyle} ref={"modalTagEdit"}>
                    <ScrollView style={{flex:1}}>
                        <View style={{ paddingLeft: 10, paddingRight:10}}>
                            <View style={{flex:1, flexDirection:"row"}}>
                                <Icon name="angle-left" style={styles.iconsAngle}/>  
                                <Text style={[styles.menuItemSectionStyle]} onPress={() => this.refs.modalTagEdit.close()}>
                                    <Text style={[styles.menuItemSectionStyle]}> Voltar</Text>
                                </Text>
                            </View>
                            <Text style={styles.welcomeTitle}>Editar Tag</Text>
                            <View >
                                <Form>
                                    <Input style={styles.menuItemSectionStyle} placeholder="Nome" 
                                    onChangeText={(nomeInput) => this.setState({nomeInput})} />
                                    <Item last></Item>

                                    <View style={styles.footer}>        
                                        <Button style={styles.cancel} 
                                        onPress={() => this.refs.modalTagEdit.close()}>
                                            <Text style={ styles.menuItemSectionStyle }> Cancelar </Text>
                                        </Button>
                                        <Right>
                                            <Button style={styles.add}
                                            onPress={ this.handleCreateTag }>
                                                <Text style={ styles.menuItemSectionStyle }> Salvar </Text>
                                            </Button>
                                        </Right>
                                    </View>
                                </Form>
                            </View>
                        </View>
                    </ScrollView>
                </Modal>     
            </SafeAreaView>
        );
    }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;