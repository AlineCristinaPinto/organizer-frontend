import React, { Component } from "react";
import { StyleSheet,  Platform, StatusBar, Animated, TextInput, Alert, View } from "react-native";
import { Header, Left, Icon, Container, Right, Button, Body} from 'native-base'

class CustomHeader extends Component {
    constructor(props){
        super(props);
		
		this.state = {
			fadeValue: new Animated.Value(0),
			showIcon: true,
			textEditable: false,
		}
    }
	
	changeIcon = () => {
		//toggles the icon
		this.setState({
		  showIcon: !this.state.showIcon
		});
		
		//fades the search bar in or out
		if(this.state.showIcon){
			Animated.timing(this.state.fadeValue,{
				toValue: 1,
				duration: 250,
			}).start();
		}else{
			Animated.timing(this.state.fadeValue,{
				toValue: 0,
				duration: 250,
			}).start();
		}
		
		//toggles the editability of the search bar
		this.setState({
			textEditable: !this.state.textEditable
		});
	}
	
	returnButtonIcon(){
		//decides which icon to show
		if(this.state.showIcon){
			return (<Icon name="search" />);
		}else{
			return (<Icon name="remove" />);
		}
	}
	
    render() {
        return (
            <Header style={styles.headerMenu}>
                <Left>
                    <Button
                    transparent
                    onPress={() => this.props.onPress()}>
                    <Icon name="menu" />
                    </Button>
                </Left>
				<Body>
					<Animated.View style={{opacity: this.state.fadeValue}}>
						<TextInput style={styles.searchBar} 
							underlineColorAndroid = "rgba(0,0,0,0)" 
							placeholder = "Pesquisar" 
							editable = {this.state.textEditable} 
							onChangeText={(textSearch) => this.props.changeTextSearch(textSearch)} 
						/>
					</Animated.View>
				</Body>
                <Right>
					<View>
						<Button transparent onPress={this.changeIcon}>
							{this.returnButtonIcon()}
						</Button>
					</View>
                </Right>
            </Header>
        );
    }
}
export default CustomHeader;

const styles = StyleSheet.create({
    headerMenu:{
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        height: 70,
        backgroundColor: 'black',
    },
	searchBar:{
		height: 40,
		paddingHorizontal: 10,
		backgroundColor: "white",
		width: 180,
	}
})