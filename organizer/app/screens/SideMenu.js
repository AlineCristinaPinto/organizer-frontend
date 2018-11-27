import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {SafeAreaView, Image, ScrollView, Text, View, Dimensions, StyleSheet, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../assets/style/SideMenuStyle';
import Modal from 'react-native-modalbox';
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";


var screen = Dimensions.get('window');

class SideMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            collapsed:false
        };
    } 

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
        routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }
 
    render () {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#0C1125' }}>
                <View style={{ marginTop: 40, marginBottom: 20, height:160, backgroundColor: '#0C1125', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../assets/images/user.png')} style={{ height: 120, width: 120, borderRadius: 60 }} />
                    <Text style={{color:'white', fontSize:20, fontFamily: 'patrickH', paddingTop:5}}>Pedro Lucas</Text>
                </View>
                <ScrollView style={{flex: 1}}>
                    <View style={styles.navSectionStyle}>
                        <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Home')}>
                            <Icon name="home" style={styles.icons}/>
                            <Icon name="file-text-o"style={{color: 'transparent'}}/>
                            Página Inicial
                        </Text>
                    </View>
                    <View style={styles.navSectionStyle}>
                        <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Max')}>
                            <Image source={require('../assets/images/max.png')} style={styles.icon}/>
                            <Icon name="file-text-o"style={{color: 'transparent'}}/>
                            Max
                        </Text>
                    </View>
                    <Collapse>
                            <CollapseHeader style={styles.navSectionStyle}>
                                <Text style={styles.navItemStyle}>
                                    <Icon name="adjust" style={styles.icons}/>
                                    <Icon name="file-text-o"style={{color: 'transparent'}}/>
                                    Temas
                                </Text>
                                <Icon name="angle-down" style={styles.iconsAngle}/>
                            </CollapseHeader>
                            <CollapseBody style={styles.navSectionStyleP}>
                                <View style={{width: screen.width, paddingLeft: 10}}>
                                    
                                </View>
                            </CollapseBody>
                    </Collapse>
                    <Collapse>
                            <CollapseHeader style={styles.navSectionStyle}>
                                <Text style={styles.navItemStyle}>
                                    <Icon name="file-text-o" style={styles.icons}/>
                                    <Icon name="file-text-o" style={{color: 'transparent'}}/>
                                    Tipos
                                </Text>
                                <Icon name="angle-down" style={styles.iconsAngle}/>
                            </CollapseHeader>
                            <CollapseBody style={styles.navSectionStyleP}>
                                <View style={{width: screen.width, paddingLeft: 10}}>
                                    
                                </View>
                            </CollapseBody>
                    </Collapse>
                    <Collapse 
                        isCollapsed={this.state.collapsed} 
                        onToggle={(isCollapsed)=>this.setState({collapsed:isCollapsed})}
                        >
                            <CollapseHeader style={styles.navSectionStyle}>
                                <Text style={styles.navItemStyle}>
                                    <Icon name="tags" style={styles.icons}/> 
                                    <Icon name="file-text-o" style={{color: 'transparent'}}/> 
                                    Tags
                                </Text>
                                <Icon name="angle-down" style={styles.iconsAngle}/>
                            </CollapseHeader>
                            <CollapseBody style={[styles.navSectionStyleP]}>
                                <Text style={[styles.navItemStyle, styles.alightCont]} onPress={() => this.refs.modalTag.open()}>
                                    <Icon name="plus-square-o" style={styles.icons}/> 
                                    <Icon name="file-text-o" style={{color: 'transparent'}}/> 
                                    Nova Tag
                                </Text>
                            </CollapseBody>
                    </Collapse>
                    <View style={styles.navSectionStyle}>
                        <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Settings')}>
                            <Icon name="cogs"style={styles.icons}/>
                            <Icon name="file-text-o"style={{color: 'transparent'}}/>
                            Configurações
                        </Text>
                    </View> 
                    <View style={styles.navSectionLastStyle}>
                        <Text style={styles.navItemStyle} onPress={this.navigateToScreen('')}>
                            <Icon name="sign-out"style={styles.icons}/>
                            <Icon name="file-text-o"style={{color: 'transparent'}}/>
                            Sair
                        </Text>
                    </View>                                    
                </ScrollView>

                <Modal style={{maxHeight: (screen.height - 145), position: 'absolute', bottom: 0, backgroundColor: '#0C1125'}} 
                    ref={"modalTag"}
                     >
                        <ScrollView style={{flex:1}}>
                            <View style={{width: screen.width, paddingLeft: 10}}>
                                <View style={{flex:1,flexDirection:"row"}}>
                                    <Icon name="angle-left" style={styles.iconsAngle}/>  
                                    <Text style={[styles.navItemStyle]} onPress={() => this.refs.modalTag.close()}>
                                        <Text style={[styles.navItemStyle]}> Voltar</Text>
                                    </Text>
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