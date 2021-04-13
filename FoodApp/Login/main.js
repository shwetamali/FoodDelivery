import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Routes from "./Router";
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#6e052f" barStyle="light-content" />
        <Routes props={this.props} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
