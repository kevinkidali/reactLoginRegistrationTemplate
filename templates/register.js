import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import { styles as registerStyles } from "../styles/styles";

export default class RegisterComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      emailAddress: "",
      password: ""
    };
  }

  _register = () => {
    const { emailAddress, password } = this.state;

    if (emailAddress === "" || password === "") {
      ToastAndroid.show("All fields should be filled!", ToastAndroid.LONG);
    } else {
      // proceed
    }
  };

  render() {
    return (
      <React.Fragment>
        <View style={registerStyles.viewContainer}>
          <View style={registerStyles.header}>
            <Text style={registerStyles.headerSubText}>Create account</Text>
            <Text style={registerStyles.headerText}>REGISTER</Text>
            <View style={registerStyles.divider}></View>
          </View>
          <View style={registerStyles.inputCoverStyle}>
            <View style={registerStyles.inputInnerStyle}>
              <Text style={registerStyles.textLabels}>Email Address</Text>
              <TextInput
                returnKeyLabel={"next"}
                onChangeText={text => this.setState({ emailAddress: text })}
                placeholder="username@somewhere.com"
                placeholderTextColor="#e3e3e3"
                style={registerStyles.inputStyle}
              />
            </View>
            <View style={registerStyles.inputInnerStyle}>
              <Text style={registerStyles.textLabels}>Password</Text>
              <TextInput
                returnKeyLabel={"next"}
                onChangeText={text => this.setState({ password: text })}
                placeholder="***********"
                placeholderTextColor="#e3e3e3"
                style={registerStyles.inputStyle}
              />
            </View>
            <View style={registerStyles.inputInnerStyle}>
              <TouchableOpacity
                style={registerStyles.loginBtn}
                onPress={this._register}
              >
                <Text style={registerStyles.loginBtnText}>REGISTER</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 50
              }}
            >
              <View style={registerStyles.createAccountContainer}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Login")}
                >
                  <Text style={registerStyles.createAccount}>Access your account?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </React.Fragment>
    );
  }
}
