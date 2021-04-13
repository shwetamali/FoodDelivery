import React,{Component} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";


import EmptyCart from "./common/EmptyCart";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  
    return 
    (
      <View style={styles.container}>
      <TouchableOpacity style={styles.orderbtn}>
          <Text style={styles.loginText}>Place Order</Text>
        </TouchableOpacity>
        </View>
    );
    }
  }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
    });
    /*return  <ImageBackground source={require('./mala_background.jpg')} style={{width:'100%', height:'100%'}} resizeMode='cover'>
    <View>
    <PaystackWebView
          buttonText='Pay Now'
          paystackKey=''
          amount={120000}
          billingEmail=''
          billingMobile=''
          billingName=''
          ActivityIndicatorColor='green'
          onSuccess={(tranRef)=>{console.log(tranRef)}}
          onCancel={()=>{console.log('something went wrong')}}
         />
      
    </View>
   }
  }*/

