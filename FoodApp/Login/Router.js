import React, { Component } from "react";
import { Actions, Router, Stack, Scene } from "react-native-router-flux";
import Login from "./Login";
import Signup from "./Signup";
export default class Routes extends Component {
  render() {
    Actions.push("login", { props: this.props });
    Actions.push("signup", { props: this.props });
    console.log("From router: ", this.props);
    return (
      <Router
        barButtonIconStyle={styles.barButtonIconStyle}
        hideNavBar={false}
        navigationBarStyle={{ backgroundColor: "#b51271" }}
        titleStyle={{ color: "#ffffff" }}
      >
        <Stack key="root">
          <Scene key="login" component={Login} title="Login Page" />
          <Scene key="signup" component={Signup} title="Register here" />
        </Stack>
      </Router>
    );
  }
}
const styles = {
  barButtonIconStyle: {
    tintColor: "#ffffff",
  },
};
