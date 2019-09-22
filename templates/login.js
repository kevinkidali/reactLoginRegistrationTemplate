import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { loginStyles } from '../styles/styles';

export default class LoginComponent extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }
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
                            <TextInput placeholder="username@somewhere.com" placeholderTextColor="#e3e3e3" style={loginStyles.inputStyle} />
                        </View>
                        <View style={loginStyles.inputInnerStyle}>
                            <Text style={loginStyles.textLabels}>Password</Text>
                            <TextInput placeholder="***********" placeholderTextColor="#e3e3e3" style={loginStyles.inputStyle} />
                        </View>
                        <View style={loginStyles.inputInnerStyle}>
                            <TouchableOpacity style={loginStyles.loginBtn}>
                                <Text style={loginStyles.loginBtnText}>LOGIN</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ ...loginStyles.inputInnerStyle, flex: 1, flexDirection: "row", marginTop: 50 }}>
                            <View style={loginStyles.createAccountContainer}>
                                <Text style={loginStyles.createAccount}>
                                    Create account?
                            </Text>
                            </View>
                            <View style={loginStyles.forgotPassContainer}>
                                <Text style={loginStyles.forgoPssText}>
                                    Forgot password?
                            </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </React.Fragment>
        )
    }
}