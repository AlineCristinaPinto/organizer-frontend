import React , {PropTypes, Component} from "react";
import {View, Text, TouchableHighlight, TextInput} from "react-native";
import styles from "./styles";

class InputText extends Component {
    constructor(props) {
        super(props);
        this.state = {text:""};
    }
    render() {
        return (
        <TextInput
          placeholder= {this.props.placeholder}
          onChangeText={(text) => this.setState({text})}
          style={styles.inputLogin}
          secureTextEntry={this.props.secureTextEntry}
         />
        );
    }
}

export default InputText;