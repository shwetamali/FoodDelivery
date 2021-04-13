import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Form from "./Form";

export default class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Form type="Register" props={this.props} />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Do have an account?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={styles.signupButton}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  signupTextCont: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: 15,
    flexDirection: "row",
  },
  signupText: { color: "#c7226c", fontSize: 15 },
  signupButton: { color: "red", fontSize: 15, fontWeight: "500" },
});
