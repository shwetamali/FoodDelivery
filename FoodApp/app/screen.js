/*import React from 'react'
import { createStackNavigator } from "react-navigation";
import "react-native-gesture-handler";*/
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import FormScreen from "../Login/Form";
import LoginScreen from "../Login/Login";
import SignUp from "../Login/Signup";
import RestaurantsScreen from "./components/Restaurants";
import DishesScreen from "./components/Dishes";
import CartScreen from "./components/Cart";
import CartButton from "./components/common/CartButton";
import Main from "../Login/main";

const Stack = createStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerLeft: null }}
        />
        <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
        <Stack.Screen name="Dishes" component={DishesScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/*<Stack.Screen name="CartButton" component={CartButton}/>*/

export default RootStack;
