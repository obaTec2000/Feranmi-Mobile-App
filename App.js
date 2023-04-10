import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./src/navigation";
import * as Font from 'expo-font';
import {
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {View, Text} from "react-native";
import Artist from './componenets/screens/Artist'
import MyCart from './componenets/screens/MyCart'
import ProductInfo from "./componenets/screens/ProductInfo";
import { ProfileOption1 } from "./componenets/screens/Profile";
import OnBoardScreen from "./componenets/screens/OnBoardScreen";
import Login from "./componenets/screens/Login";
import Signup from "./componenets/screens/Signup";
import Tabs from './navigation/Tabs';
import { Featured, EventDetail } from './screens';
import { customFonts } from './constants';
import Tabs from './navigation/Tabs';
import { customFonts } from './constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();



const App = () => {
  const Stack = createNativeStackNavigator();
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  })

  return (
   <NavigationContainer>
 <StatusBar barStyle="light-content"></StatusBar>
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} >
       <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Featured" component={Tabs} />
        <Stack.Screen name="EventDetail" component={EventDetail} />
      <Stack.Screen name="Artist" component={Artist} />
      <Stack.Screen name="MyCart" component={MyCart} />
      <Stack.Screen name="ProductInfo" component={ProductInfo} />
      <Stack.Screen name="HomeStackNavigation" component={HomeStackNavigator} />
      <Stack.Screen name="ProfileOption1" component={ProfileOption1} />

      

    </Stack.Navigator>
   </NavigationContainer> 

  ); (
    <ActivityIndicator size="small"></ActivityIndicator>
  )
 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;