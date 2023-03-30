import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {View, Text} from "react-native";
import Artist from './componenets/screens/Artist'
import MyCart from './componenets/screens/MyCart'
import ProductInfo from "./componenets/screens/ProductInfo";
import MyProfile from "./componenets/screens/MyProfile";


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} >
      <Stack.Screen name="Artist" component={Artist} />
      <Stack.Screen name="MyCart" component={MyCart} />
      <Stack.Screen name="ProductInfo" component={ProductInfo} />
      <Stack.Screen name="MyProfile" component={MyProfile} />

    </Stack.Navigator>
   </NavigationContainer> 

  );
};

export default App;