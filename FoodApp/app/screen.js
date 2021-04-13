/*import React from 'react'
import { createStackNavigator } from "react-navigation";
import "react-native-gesture-handler";*/
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import FormScreen from "../Login/Form";
import  LoginScreen from "../Login/Login"
 import RestaurantsScreen from "./components/Restaurants";
import DishesScreen from "./components/Dishes";
import CartScreen from "./components/Cart";
import CartButton from "./components/common/CartButton";

const Stack = createStackNavigator();

function RootStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Form" ccomponent={FormScreen} /> 
          <Stack.Screen name="Login" ccomponent={LoginScreen} />      
          <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
          <Stack.Screen name="Dishes" component={DishesScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
    }
    /*<Stack.Screen name="CartButton" component={CartButton}/>*/
  



export default RootStack;
