import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/loginScreen';
import SignUpScreen from './src/screens/SingUpScreen';



// Intialize Firebase



const Stack=createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator screenOptions={{
      //  headerShown:false
     }}>
       <Stack.Screen name='Login' component={Login} />
       <Stack.Screen  name='SignUp' component={SignUpScreen}/>
     </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

