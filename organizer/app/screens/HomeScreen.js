import React from 'react';
import { Alert, Text, View, ListView } from 'react-native';
import { Container, Content, List, ListItem, Button, CheckBox } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustumHeader from '../components/Navigation/CustomHeader';
import CustomFab from '../components/Navigation/CustumFab';

import styles from '../assets/style/HomeScreenStyle';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={{ fontSize:24, color:tintColor }}/>
    ),
  }

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const datas = [
      { nome: 'Sorvete aumentou 1 golpinho', tipo: 'SIM'},
      { nome: 'Fazer lista de química', tipo: 'TAR'},
      { nome: 'Finalizar teste do projeto', tipo: 'TAR'},
      { nome: 'Entregar livros no Campus I', tipo: 'LEM'},
      { nome: 'Agendar visita técnica', tipo: 'LEM'},
      { nome: 'Limpar meu quarto', tipo: 'TAR'},
      { nome: 'Sair com os amigos', tipo: 'LEM'}      
    ];
    this.state = {
      basic: true,
      listViewData: datas,
      modalVisible: false,
	    textSearch: "",
    };
  }

  setAlert(data){
    Alert.alert(
      data.nome,
      "Descrição: " + data.tipo + "\nTipo: " + data.tipo 
      + "\nData: " + data.tipo + "\nTags: " + data.tipo,
      [],
      { cancelable: true }
    )
  }
  
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  changeCSS(data) {
    if (data.tipo == 'SIM') {
      return  <ListItem style={ styles.SIM } onPress={() => this.setAlert(data) }>
                <Text style={ styles.textColor }> {data.nome} </Text>
              </ListItem>
    } else 
    if (data.tipo == 'LEM') {
      return  <ListItem style={ styles.LEM } onPress={() => this.setAlert(data) }>
                <Text style={ styles.textColor }> {data.nome}</Text>
              </ListItem>;
    } else {
      return  <ListItem style={ styles.TAR } onPress={() => this.setAlert(data) }>
                <CheckBox style={ styles.checkBoxFeatures } checked={false} />
                <Text style={ styles.textColor }>{data.nome}</Text>
              </ListItem>;
    }
  }
  
	//changes the search text
	//this method is called inside the CustomHeader component
	changeTextSearch = (strValue) => {
		this.setState({
			textSearch: strValue
		});
	}
	
	displayItem(data){
		//filter items by name
		if(data.nome.toLowerCase().indexOf(this.state.textSearch.toLowerCase()) > -1){
			return this.changeCSS(data);
		}else{
			return null;
		}
	}

  render() {
  
    return (
      <Container style={styles.page}>
        
        <CustumHeader onPress={() =>this.props.navigation.openDrawer()} changeTextSearch = {this.changeTextSearch} />

        <Content>

          <Text></Text>

          <List
            leftOpenValue={75}
            rightOpenValue={-75}
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            
            renderRow={data =>
              <View>
                {this.displayItem(data)}
              </View> 
            }

            renderLeftHiddenRow={data =>
              <Button full onPress={() => alert(data)}>
                <Icon active name="edit" />
              </Button>}

            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
          />
          </Content>
        <CustomFab navigation={this.props.navigation}/>

      </Container>
    );
  }
}
