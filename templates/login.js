import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import { styles as loginStyles } from "../styles/styles";

export default class LoginComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      emailAddress: "",
      password: ""
    };
  }

  _login = () => {
    const { emailAddress, password } = this.state;
    
    console.log(this.props);

    if (emailAddress === "" || password === "") {
        this.props.navigation.push("Register");

    //   ToastAndroid.show("All fields should be filled!", ToastAndroid.SHORT);
    } else {
      // proceed
    }
  };

  render() {
    return (
      <React.Fragment>
        <View style={loginStyles.viewContainer}>
          <View style={loginStyles.header}>
            <Text style={loginStyles.headerSubText}>Welcome back</Text>
            <Text style={loginStyles.headerText}>LOGIN</Text>
            <View style={loginStyles.divider}></View>
          </View>
          <View style={loginStyles.inputCoverStyle}>
            <View style={loginStyles.inputInnerStyle}>
              <Text style={loginStyles.textLabels}>Email Address</Text>
              <TextInput
                returnKeyLabel={"next"}
                onChangeText={text => this.setState({ emailAddress: text })}
                placeholder="username@somewhere.com"
                placeholderTextColor="#e3e3e3"
                style={loginStyles.inputStyle}
              />
            </View>
            <View style={loginStyles.inputInnerStyle}>
              <Text style={loginStyles.textLabels}>Password</Text>
              <TextInput
                returnKeyLabel={"next"}
                onChangeText={text => this.setState({ password: text })}
                placeholder="***********"
                placeholderTextColor="#e3e3e3"
                style={loginStyles.inputStyle}
              />
            </View>
            <View style={loginStyles.inputInnerStyle}>
              <TouchableOpacity
                style={loginStyles.loginBtn}
                onPress={this._login}
              >
                <Text style={loginStyles.loginBtnText}>LOGIN</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                height: 140,
                marginTop: 50
              }}
            >
              <View style={loginStyles.createAccountContainer}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Register")}
                >
                  <Text style={loginStyles.createAccount}>Create account?</Text>
                </TouchableOpacity>
              </View>
              <View style={loginStyles.forgotPassContainer}>
                <TouchableOpacity>
                  <Text style={loginStyles.forgoPssText}>Forgot password?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </React.Fragment>
    );
  }
}
