import React, { useState, useCallback, useEffect } from 'react'
import {View, TouchableOpacity,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CommonFunction from '../utilities/CommonFunction';

export default function SignUpScreen() {
  const [messages, setMessages] = useState([]);

  const   navigation = useNavigation();


  return (
    <View>
      <TouchableOpacity onPress={() => {
       CommonFunction.logoutWithFirebase((logoutSucess) => {
         console.log('logoutSucess',logoutSucess)
        navigation.navigate('Login')
       },(logOut) => {
        console.log('logoutSucess error',logOut)
       })
        }} style = {{width : 200, height : 100,backgroundColor : '#9E9E9E'}}>
        <Text>{'Logut'}</Text>
      </TouchableOpacity>
    </View>
 
  )
}