import Auth from '@react-native-firebase/auth';
// import React, { useState, useCallback, useEffect } from 'react'
import {Alert, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

// import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '495183821248-d0h5bnjetlk8v29m33d71ceb3n5mu0c1.apps.googleusercontent.com',
});

async function onGoogleButtonPress(){
  // Get the users ID token
try { const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = Auth.GoogleAuthProvider.credential(idToken);
Auth().signInWithCredential(googleCredential)
  .then(
    resp =>{
      console.log(resp);
    }
  ).catch()
} 
catch(error){
  console.log('error',error.code);
}
}


const logInWithEmailAndPassword = (
  email,
  password,
  successCallback,
  failureCallback,
) => {
  Auth()
    .signInWithEmailAndPassword(email, password)
    .then(loginUser => {
      successCallback(loginUser);
    })
    .catch(loginError => {
      console.log('LoginError', loginError.code);
      authErrorHandling(loginError.code);
      failureCallback(loginError);
    });
};

const signUpWithEmailAndPassword = (
  email,
  password,
  successCallback,
  failureCallback,
) => {
  Auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userData => {
      successCallback(loginUser);
    })
    .catch(error => {
      //console.log('Login Error: ',error.code)
      authErrorHandling(error);
      failureCallback(loginError);
    });
};

const logoutWithFirebase = (successCallback, failureCallback) => {
  Auth()
    .signOut()
    .then(successCallback)
    .catch(eror => {
      authErrorHandling(eror);
      failureCallback(eror);
    });
};


async function onFacebookButtonPress() {

  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }


  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken); 
  
  return Auth().signInWithCredential(facebookCredential);
}


const authErrorHandling = errorMsg => {
  switch (errorMsg) {
    case 'auth/wrong-password':
      // console.log("Please Enter correct Password");
      Alert.alert('wrong Password..');
      break;
    case 'auth/user-not-found':
      Alert.alert('Please Enter correct Email..');
      break;
    case 'auth/email-already-in-use':
      Alert.alert('Email Already Exists');
      break;
    case 'auth/too-many-requests':
      alert(errorMsg);
      break;
      case 'auth/network-request-failed':
        alert(errorMsg);
        break;
    default:
      console.log('Check it Please');
      alert('asdfghjk');
      break;
  }
};








export default {
  logInWithEmailAndPassword,
  signUpWithEmailAndPassword,
  logoutWithFirebase,
  onGoogleButtonPress,
  onFacebookButtonPress

};
