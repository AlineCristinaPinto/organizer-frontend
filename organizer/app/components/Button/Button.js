import PropTypes from "prop-types";
import React, {Component} from "react";
import {TouchableOpacity, View, Text, Image} from "react-native";

import styles from "./styles";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
             <View style={styles.wrapper}>
              <Text style={styles.text}>{this.props.text}</Text>
             </View>
           </TouchableOpacity>
        );
    }
}

Button.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
  };

export default Button;
