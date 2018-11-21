import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import { Container, Content, List, ListItem, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustumHeader from '../components/Navigation/CustomHeader';
import CustomFab from '../components/Navigation/CustumFab';

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
      { nome: 'Simples', tipo: 'SIM'},
      { nome: 'Tarefa', tipo: 'TAR'},
      { nome: 'Lembrete', tipo: 'LEM'}
    ];
    this.state = {
      basic: true,
      listViewData: datas,
    };
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  changeCSS(data) {
    if (data.tipo == 'SIM') {
      return  <ListItem style={ styles.SIM }>
                <Text style={ styles.textColor }> {data.nome} </Text>
              </ListItem>;
    } else 
    if (data.tipo == 'LEM') {
      return  <ListItem style={ styles.LEM }>
                <Text style={ styles.textColor }>{data.nome}</Text>
              </ListItem>;
    } else {
      return  <ListItem style={ styles.TAR }>
                <Text style={ styles.textColor }>{data.nome}</Text>
              </ListItem>;
    }
  }

  render() {
  
    return (
      <Container style={styles.page}>
        
        <CustumHeader/>

        <Content>

          <ListItem itemDivider>
            <Text></Text>
          </ListItem> 

          <List
            leftOpenValue={75}
            rightOpenValue={-75}
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            
            renderRow={data =>
              <View>
                {this.changeCSS(data)}
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

        <CustomFab/>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  page:{
    backgroundColor: '#f7f7f7',
  },

  listContainer: {
    paddingRight : 10,
    paddingTop : 10,
  },

  textColor: {
    color: "#fff",
  },

  // ESCOLHER CORES MELHORES PRO BACKGROUD COLOR

  LEM: { 
    backgroundColor: '#4c7e5e',
  },

  SIM: { 
    backgroundColor: '#012a7c',
  },

  TAR: { 
    backgroundColor: '#b23601',
  },

});