import React from 'react'
import { createStackNavigator } from "react-navigation";
import RestaurantsScreen from "./components/Restaurants";
import DishesScreen from "./components/Dishes";
import CartScreen from "./components/Cart";

Stack = createStackNavigator();

function RootStack()
{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.screen name = "RestaurantsScreen" navigationOption = {title = "Food Shop"}/>
                <Stack.screen name = "DishesScreen" Option = {title = "Dishes"}/>
                <Stack.screen name = "CartScreen" Option = {title = "Cart"}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}



export default RootStack;
