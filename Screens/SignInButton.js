import React, {useEffect,useState} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const SignInButton = () => {

    const [user, setUser] = useState({})

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '51352717804-sgickn35esneha112815fqjes8cdg69b.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });isSignedIn()
  }
  ,[])
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('due_____', userInfo);
      setUser(userInfo)
    } catch(error){
      console.log('Message_____',error.message);
     if (error.code === statusCodes.SIGN_IN_CANCELLED){
      console.log('User Cancelled the Login Flow');
     } else if (error.code === statusCodes.IN_PROGRESS){
        console.log('Siging In');
     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services is Not Available');
      }
      else {
        console.log('Some Other Error Happened');
      }
     } 
    }

  
  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (!!isSignedIn){
      getCurrentUserInfo()
    } else{
  console.log('Please Login')
    }
  };
  
  const getCurrentUser = async () => {
    try{
    const currentUser = await GoogleSignin.signInSilently();
    console.log('edit______', user);
    setUser(userInfo);
  }catch(error){
    if(error.code === statusCodes.SIGN_IN_REQUIRED){
      alert("User has not signed in yest")
      console.log('User has not signed in yest')
    }else{
      alert('Something went wrong');
      console.log("Something went wrong")
    }
  }
  };
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser({});
    } catch (error) {
      console.error(error);
    }
  }
    return (
      <View>
        <View style={{top:160,right:8}}>
      <GoogleSigninButton
  style={{ width: 355, height: 70,   }}
  size={GoogleSigninButton.Size.Wide}
  color={GoogleSigninButton.Color.Dark}
  onPress={signIn}
//   disabled={this.state.isSigninInProgress}
/>
</View>
      </View>
    )
  }

export default SignInButton