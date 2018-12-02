import React from 'react';
import { ViewPagerAndroid, ScrollView,  TouchableOpacity, StyleSheet, Image, Text, Title } from 'react-native';
import  CustumHeader from "../components/Navigation/CustomHeader";
import { Container, Content, Button, Body, View } from 'native-base';
import HTML from 'react-native-render-html';
  {/*import { isSpeechRecognitionSupported, SpeechRecognition} from 'react-native-web-speech-api';*/}

import styles from '../assets/style/MaxScreenStyle';

export default class MaxScreen extends React.Component {
  state = {
      interactText: "Interagir",
      interactFont: "#5bc0de",
      interactBorderColor: "#5bc0de"
   }
  
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
        <Image
            source={require('../assets/images/max.png')}
            style={styles.icon}
        />
    ),
  }

  render() {
  {/*if (isSpeechRecognitionSupported()) {
    const recognition = new SpeechRecognition();
    recognition.onerror = event =>
      console.log("Error:", event.error);
    recognition.onresult = function( event ) {
        var transcription = '';
        for ( var i = event.resultIndex; i < event.results.length; i++ ) {
            if ( event.results[i].isFinal ) {
                transcription = event.results[i][0].transcript;
            } else {
                transcription += event.results[i][0].transcript;
            }
        }
    };
    recognition.onaudioend = function( event ){
      this.setState({ interactText: 'Interagir', interactFont: '#5bc0de', interactBorderColor: '#5bc0de' })
    }  
  }*/}
    const htmlContent = `
<div style="background-color:#5bc0de; padding-right: 10px;">
<h2 style="text-align: center;">Manual de interações do MAX</h2>
<ul>
  <li><span style="font-size:18px;"><b>Informações iniciais</b></span>
        <ul>
            <li> Sobre a natureza do documento:
                <ul type="circle">
                    <li> Esse documento descreve os comandos com os quais o MAX interage</li>
                </ul>
            </li>
            <li> Sobre as características do documento:
                <ol>
                    <li> As partes fixas dos comandos estão escritas em preto</li>
                    <li> As partes variáveis, isto é, aquelas que variam conforme as características dos itens, estão escritas em azul</li>
                    <li> As respostas do MAX aos comandos estão escritas em branco</li>
                    <li> As setinhas delimitam os momentos da interação em que você deve falar e os momentos em que o MAX reage</li>
                </ol>
            </li>
            <li> Sobre as formas de interagir com o MAX:
                <ul type="circle">
                    <li> Existem 2 maneiras de interagir com o MAX:</li>
                        <ol>
                            <li> Clicar no botão "Interagir" e dizer algum dos comandos nos formatos descritos neste documento</li>
                            <li> Escrever um comando nos mesmos formatos dentro da caixa "Você diz:" e clicar no botão "Interagir"</li>
                        </ol>
                </ul>
            </li>
            <li> Sobre as ações e os tipos de interações do MAX
                <ul type="circle">
                    <li> Ações são como o próprio nome sugere ações, neste caso realizadas pelo MAX de acordo com os comandos informados</li>
                    <li> Os tipos de interações são conjuntos de ações que compartilham características semelhantes</li>
                    <li> O MAX possui 20 ações e 10 tipos de interações</li>
                </ul>
            </li>
            <li> Sobre os padrões utilizados nas partes variáveis de um comando
                <ul type="circle">
                    <li> As partes variáveis que são nomes de itens, nomes de tags, descrições ou palavras-chave de pesquisa aceitam qualquer tipo de expressão</li>
                    <li> As partes variáveis que são datas devem estar no padrão "dia-mês-ano" sendo separadas pela preposição "de". Ex: 28 de julho de 2018</li>
                    <li> Para a data também é aceito o formato dia-mês, sendo que o ano será considerado o atual. Ex: 28 de julho (será interpretado como 28 de julho do ano atual)</li>
                    <li> A resposta para a pergunta do MAX "Há itens que utilizam essa tag. Ainda sim deseja excluí-la?" na interação "Excluir tarefa" só pode ser "sim" ou "não". Outras respostas são inválidas</li>
                </ul> 
            </li>
        </ul>
  </li>
  <li><span style="font-size:18px;"><b>Tipos de interações</b></span>
        <ol type="I">
            <li><b>Interações básicas</b>
                <ul>
                    <li> Olá?</li>
                    <li> Quem é você?</li>
                    <li> Como você pode me ajudar?</li>
                    <li> Obrigado!</li>
                </ul>
            </li>
            <li><b>Criar item</b>
                <ul>
                    <li> Criar item simples <i style="color:#471dab;">"nome do item simples"</i> > <span style="color:#E0FFFF;">Descrição</span> > <i style="color:#471dab;">"descrição do item simples"</i></li>
                    <li> Criar tarefa <i style="color:#471dab;">"nome da tarefa"</i> > <span style="color:#E0FFFF;">Descrição</span> > <i style="color:#471dab;">"descrição da tarefa"</i> > <span style="color:#bbcadc;">Data</span> > <i style="color:#471dab;">"data da tarefa"</i></li>
                    <li> Criar lembrete <i style="color:#471dab;">"nome do lembrete"</i> > <span style="color:#E0FFFF;">Descrição</span> > <i style="color:#471dab;">"descrição do lembrete"</i> > <span cstyle="color:#bbcadc;">Data</span> > <i style="color:#471dab;">"data do lembrete"</i></li>
                </ul>
            </li>
            <li><b>Alterar item</b>
                <ul>
                    <li> Alterar o nome do item <i style="color:#471dab;">"nome do item"</i> > <span style="color:#E0FFFF;">Qual o novo nome?</span> > <i style="color:#471dab;">"novo nome"</i></li>
                    <li> Alterar a descrição do item <i style="color:#471dab;">"nome do item"</i> > <span style="color:#E0FFFF;">Qual a nova descrição?</span> > <i style="color:#471dab;">"nova descrição"</i></li>
                    <li> Alterar a data do item <i style="color:#471dab;">"nome do item"</i> > <span style="color:#E0FFFF;">Qual a nova data?</span> > <i style="color:#471dab;">"nova data"</i></li>
                </ul>
            </li>
            <li><b>Excluir item</b>
                <ul>
                    <li> Excluir item <i style="color:#471dab;">"nome do item"</i></li>
                    <li> Excluir itens com a tag <i style="color:#471dab;">"nome da tag"</i></li>
                </ul>
            </li>
            <li><b>Pesquisar item</b>
                <ul>
                    <li> Pesquisar itens</li>
                    <li> Pesquisar item usando <i style="color:#471dab;">"palavra-chave"</i></li>
                    <li> Pesquisar item pelo tipo usando <i style="color:#471dab;">"tipo-chave"</i></li>
                    <li> Pesquisar item pelo nome usando <i style="color:#471dab;" style="color:#471dab;">"palavra-chave"</i></li>
                    <li> Pesquisar item pela descrição usando <i style="color:#471dab;">"palavra-chave"</i></li>
                    <li> pesquisar item pela data usando <i style="color:#471dab;">"data-chave"</i></li>
                    <li> Pesquisar item pela tag usando <i style="color:#471dab;">"tag-chave"</i></li>
                </ul>
            </li>
            <li><b>Criar tag</b>
                <ul>
                    <li> Criar tag <i style="color:#471dab;">"nome da tag"</i></li>
                </ul>
            </li>
            <li><b>Alterar tag</b>
                <ul>
                    <li> Alterar o nome da tag <i style="color:#471dab;">"nome da tag"</i> > <span style="color:#E0FFFF;">Qual o novo nome?</span> > <i style="color:#471dab;">"novo nome"</i></li>
                </ul>
            </li>
            <li><b>Excluir tag</b>
                <ul>
                    <li> Excluir tag <i style="color:#471dab;">"nome da tag"</i> > <span style="color:#E0FFFF;">Há itens que utilizam essa tag. Ainda sim deseja excluí-la?</span> > <i style="color:#471dab;">"sim"</i> ou <i style="color:#471dab;">"não"</i></li>
                </ul>
            </li>
            <li><b>Adicionar uma tag a um item</b>
                <ul>
                    <li> Adicionar tag ao item <i style="color:#471dab;">"nome do item"</i> > <span style="color:#E0FFFF;">Qual o nome da tag?</span> > <i style="color:#471dab;">"nome da tag"</i></li>
                </ul>
            </li>
            <li><b>Remover uma tag de um item</b>
                <ul>
                    <li> Remover tag do item <i style="color:#471dab;">"nome do item"</i> > <span style="color:#E0FFFF;">Qual o nome da tag?</span> > <i style="color:#471dab;">"nome da tag"</i></li>
                </ul>
            </li>
        </ol>
  </li>
</ul>
</div>
    `;

    return (
      <ViewPagerAndroid
      style={styles.viewPager}
      ref={(viewpager) => {this.viewpager = viewpager}}
      scrollEnabled = {false}
      initialPage={0}>
        <View key="0">
          <Container style={ styles.page }>
        
            <CustumHeader/>

            <Content>
              <Text></Text>
              <View style={ styles.container }>

                <Text style={ styles.maxTitle }>MAX</Text>
                <Text style={ styles.description }>Módulo Assistente X</Text>

                <Text></Text>
                <Text></Text>
                <Image source={require('../assets/images/crystal.png')} />           
                <Text></Text>
                <Text></Text>

              </View>

              <Body style={ styles.buttons }>
                {/*<Button rounded bordered info>
                  <Text style={ styles.textButtonI }>Interagir</Text>
                </Button>*/}
                <TouchableOpacity
                  style={{ color: this.state.interactFont, borderColor: this.state.interactBorderColor, borderRadius: 20,
                           borderWidth: 1, padding: 10}}
                  onPress={() => {
                    this.setState({ interactText: 'Gravando', interactFont: 'red', interactBorderColor: 'red' })
                    {/*recognition.start();*/}
                  }}>
                  <Text style={{ color: this.state.interactFont }}>{this.state.interactText}</Text>
                </TouchableOpacity>
              </Body>
              <Text></Text>
              <Body style={ styles.buttons }>
                <Button rounded info
                onPress={() => {
                  this.viewpager.setPage(2);
                }}>
                  <Text style={ styles.textButtonII }>Manual de Interações</Text>
                </Button>
              </Body>

              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
            </Content>
          </Container>
        </View>
        <View key="1" style={{backgroundColor: '#5bc0de'}}>
          <ScrollView>
            <Text></Text>
            <Text></Text>
            <Body style={ styles.buttons }>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                  this.viewpager.setPage(0);
                }}>
                <Text style={styles.backButtonText}>Voltar</Text>
              </TouchableOpacity>
            </Body>
            <HTML
              html={htmlContent} 
            />
          </ScrollView>
        </View>
      </ViewPagerAndroid>
    );
  }
}
