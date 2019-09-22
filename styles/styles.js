
import { StyleSheet, Dimensions } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

// Login styles
const loginStyles = StyleSheet.create({
    header: {
        marginHorizontal: 40,
        padding: 10,
        marginTop: 50,
        width: WIDTH - 200,
        marginBottom: 50
    },
    headerText: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "bold"
    },
    headerSubText: {
        color: "#999"
    },
    inputStyle: {
        borderBottomColor: "rgba(255, 255, 255, 0.2)",
        borderBottomWidth: 1,
        height: 40,
        fontSize: 12
    },
    textLabels: {
        color: "#999"
    },
    inputCoverStyle: {
        marginHorizontal: 50,
        width: WIDTH - 90
    },
    inputInnerStyle: {
        marginTop: 16
    },
    loginBtn: {
        height: 45,
        backgroundColor: "#e3e3e3",
        marginTop: 20,
        borderRadius: 30
    },
    loginBtnText: {
        textAlign: "center",
        marginTop: 12,
        color: "#666"
    },
    viewContainer: {
        backgroundColor: "#404452",
        height: HEIGHT
    },
    forgoPssText: {
        textAlign: "right",
        color: "#999"
    },
    divider: {
        borderBottomColor: "rgba(255, 255, 255, 0.3)",
        borderBottomWidth: 1,
        marginTop: 10,
        width: WIDTH - 297
    },
    createAccount: {
        color: "#999"
    },
    createAccountContainer: {
        width: "50%",
    },
    forgotPassContainer: {
        width: "50%",
    }
});

module.exports = { loginStyles };