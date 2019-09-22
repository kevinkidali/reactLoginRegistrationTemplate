import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles as welcomeStyles } from "../styles/styles";

export default class WelcomeComponent extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  _login = () => {

        this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <React.Fragment>
        <View style={welcomeStyles.welcomeViewContainer}>
          <View style={welcomeStyles.welcomeHeader}>
            <Text style={welcomeStyles.welcomeHeaderSubText}>Login & Register</Text>
            <Text style={welcomeStyles.welcomeHeaderText}>REACT - NATIVE</Text>
            <View style={welcomeStyles.welcomeDivider}></View>
          </View>
          <View style={welcomeStyles.inputCoverStyle}>
          <Image source={require('../assets/reactfirebase.png')} style={welcomeStyles.logo} />
            <View style={welcomeStyles.inputInnerStyle}>
              <TouchableOpacity
                style={welcomeStyles.loginBtnWelcome}
                onPress={this._login}
              >
                <Text style={welcomeStyles.loginBtnTextWelcome}>LOGIN</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </React.Fragment>
    );
  }
}
