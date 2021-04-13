import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import restaurantsData from "../api/restaurants.json";
import RestaurantItem from "./RestaurantItem";
import CartButton from "./common/CartButton";

export default class Restaurants extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.navigation.setOptions({headerTitle: "Restaurants",
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0
    },
    headerRight: ()=>(
      <CartButton
        onPress={() => {
          this.props.navigation.navigate("Cart");
          /*console.log("You have clicked me")*/
        }}
      />
    )})
  }
  
  handleNaviagation = () => {
    this.props.navigation.navigate("Dishes");
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={restaurantsData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <RestaurantItem
              name={item.name}
              image={item.image}
              cuisine={item.cuisine}
              location={item.location}
              isVegetarian={item.isVegetarian}
              handleNaviagation={this.handleNaviagation}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 8,
    marginBottom: 8
  }
});
