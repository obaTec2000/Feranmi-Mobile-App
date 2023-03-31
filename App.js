import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {View, Text} from "react-native";
import Artist from './componenets/screens/Artist'
import MyCart from './componenets/screens/MyCart'
import ProductInfo from "./componenets/screens/ProductInfo";
import { ProfileOption1 } from "./componenets/screens/Profile";

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
      <Stack.Screen name="ProfileOption1" component={ProfileOption1} />
      

    </Stack.Navigator>
   </NavigationContainer> 

  );
};

export default App;