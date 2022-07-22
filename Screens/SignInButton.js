import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Home from './Home';
import { NavigationHelpersContext } from '@react-navigation/native';
GoogleSignin.configure({
  webClientId:'51352717804-sgickn35esneha112815fqjes8cdg69b.apps.googleusercontent.com',
  offlineAccess: true,
  forceCodeForRefreshToken: true,
});


const SignInButton = (props,{navigation}) => {
 
  useEffect(() => {
    // isSignedIn();
    // getCurrentUser();  
  }, []);
  const [isLoggedIn, setIsLoggedIn] = useState(false)  
  const [user, setUser] = useState({});
  const signIn = async () => {
    
    try {
      
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // alert(JSON.stringify(userInfo));
      console.log('due_____', userInfo);
      setIsLoggedIn(true);  
      setUser(userInfo);
     
      this.props.navigation.navigate("Home");
    } catch (error) {
      // navigation.navigate("Home")
      console.log('Message_____', error.message);
      
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
        
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Siging In');
        
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services is Not Available');
      } else {
      
        console.log('Some Other Error Happened');
        console.log(error)
        
      }
   
    }
    


  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (!!isSignedIn) {
      getCurrentUserInfo();
    } else {
      console.log('Please Login');
 
    }
 
  };

  const getCurrentUser = async () => {
    try {
      const currentUser = await GoogleSignin.signInSilently();
      console.log('edit______', user);
      setIsLoggedIn(false);
      setUser(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        alert('User has not signed in yest');
        console.log('User has not signed in yest');
      } else {
        alert('Something went wrong');
        console.log('Something went wrong');

      }
     
    }
  };
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setIsLoggedIn(false);
      setUser({});
    } catch (error) {
      console.error(error);
    }
  };
  }
  return (
    
    <View>
      <View style={{top: 160, right: 8}}>
        <GoogleSigninButton
          style={{width: 355, height: 70}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
            // disabled={isSigninIn}
          // onPress={()=>navigation.navigate(Home)}
        />
      </View>
    </View>
  );
  };

  export default SignInButton;