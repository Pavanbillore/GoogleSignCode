import React, { Component, useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image, TextInput, Alert } from "react-native";
// import Icon from 'react-native-vector-icons/Ionicons';
// import User from 'react-native-vector-icons/MaterialCommunityIcons';
// import Simple from 'react-native-vector-icons/SimpleLineIcons';
// import OtpInputs from 'react-native-otp-inputs';
// //import OTPInputView from '@twotalltotems/react-native-otp-input';
// import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';



export default function App({ navigation, route }) {

  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");

  const { contact } = route.params;

  useEffect(() => {
    pin1Ref.current.focus();
  }, []);

  const _onChangeTextPin1 = text => {
    if (pin1 == "") {
      setPin1(text);
      pin2Ref.current.focus();
    } else {
      setPin1(text);
    }
  }
  const _onChangeTextPin2 = text => {
    if (pin2 == "") {
      setPin2(text);
      pin3Ref.current.focus();
    } else {
      setPin2(text);
    }
  }
  const _onChangeTextPin3 = text => {
    if (pin3 == "") {
      setPin3(text);
      pin4Ref.current.focus();
    } else {
      setPin3(text)
    }
  }
  const _onChangeTextPin4 = text => {
    if (pin4 == "") {
      setPin4(text);
    } else {
      setPin4(text)
    }
  }

  const _verify = () => {
    if (pin1 != "" && pin2 != "" && pin3 != "" && pin4 != "") {
      // navigation.navigate("Home");

      const code = pin1+pin1+pin3+pin4;
      // api call for varification
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      fetch("http://3.109.48.115:5500/user/verification", {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({"code": code}),
        redirect: 'follow'
      })
        .then(response => response.json())
        .then(result => {
          if (result.error) {
            Alert.alert(  
              'Try again',  
              result.error,
              [
                  {text: 'OK', onPress: () => {
                    setPin1("");
                    setPin2("");
                    setPin3("");
                    setPin4("");
                    pin1Ref.current.focus();
                  }},  
              ]  
            );
          } else {
            navigation.navigate("Home");
          }
        })
        .catch(error => console.log('error', error));

    } else {
      Alert.alert(  
        'Alert',  
        'Enter your pin',  
        [
            {text: 'OK', onPress: () => console.log('OK Pressed')},  
        ]  
      );
    }
  }


  // const otpVerification = () => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //   var raw = JSON.stringify({
  //     "code": parseInt(pin)
  //   });
  //   console.log('2222222', raw);
  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow'
  //   };
  //   fetch("http://3.109.48.115:5500/user/verification", requestOptions)
  //     .then(response => response.json())
  //     .then(result => {
  //       if(result.success){
  //         navigation.navigate("Home")
  //       }
  //     }
  //     )
  //     .catch(error =>{
  //       navigation.navigate("Otp")
  //     });
  // }
  

  return (<>

    <View style={{ marginHorizontal: 25 }}>

      {/* <Image
        style={styles.tinyLogo}
        source={require('./assets/man.jpg')}
      /> */}
    </View>

    <View>

      <Text style={{ fontSize: 24, fontFamily: 'Poppins-Regular', fontWeight: '700', color: 'black',textAlign:'center',top:150 }}>Enter Verification code</Text>

      <View style={{ marginTop: 180 }}>

        <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular',textAlign:'center',fontWeight:'400' }}>we have sent you a 4 digit Verification code on </Text>
        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', marginTop: 5,textAlign:'center',fontWeight:'500' }}>+91 {contact}</Text>

      </View>

      <View style={styles.TopView}>
        <View style={styles.TextInputView}>

          <TextInput
            ref={pin1Ref}
            keyboardType={'number-pad'}
            maxLength={1}
            onChangeText={(text) => _onChangeTextPin1(text)}
            style={styles.TextInputText}
          />

        </View>

        <View style={styles.TextInputView}>
          <TextInput
            ref={pin2Ref}
            keyboardType={'number-pad'}
            maxLength={1}
            onChangeText={(text) => _onChangeTextPin2(text)}
            style={styles.TextInputText}
          />

        </View>

        <View style={styles.TextInputView}>
          <TextInput
            ref={pin3Ref}

            keyboardType={'number-pad'}
            maxLength={1}
            onChangeText={(text) => _onChangeTextPin3(text)}
            style={styles.TextInputText}
          />

        </View>

        <View style={styles.TextInputView}>
          <TextInput
            ref={pin4Ref}
            keyboardType={'number-pad'}
            maxLength={1}
            onChangeText={(text) => _onChangeTextPin4(text)}
            style={styles.TextInputText}
          />

        </View>

      </View>

      {/* <OTPInputView
    style={{width: '80%', height: 200}}
    pinCount={4}
    code=""
    autoFocusOnLoad={true}
    // codeInputFieldStyle={styles.borderStyleBase}
    // codeInputHighlightStyle={styles.borderStyleHighLighted}
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code => {
        console.log(`Code is ${code}, you are good to go!`)
    })}
/> */}

    </View>
    <View>
<View style={{marginHorizontal:20,marginTop:60}}>
    <TouchableOpacity onPress={_verify} style={{ alignItems: 'center', marginTop: 80, borderRadius: 12,  padding: 15, backgroundColor: '#5E17EB', borderColor: '#1589FF', width: '100%' }}>
        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins-Regular', fontWeight: '500' }}>Continue</Text>
      </TouchableOpacity>
      </View>
      </View>

  </>);


}

const styles = StyleSheet.create({
  // borderStyleBase: {
  //   width: 30,
  //   height: 45
  // },

  // borderStyleHighLighted: {
  //   borderColor: "#03DAC6",
  // },

  // underlineStyleBase: {
  //   width: 30,
  //   height: 45,
  //   borderWidth: 0,
  //   borderBottomWidth: 1,
  // },

  // underlineStyleHighLighted: {
  //   borderColor: "#03DAC6",
  // },

  TextInputView: {
    borderRadius:7,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height:50,
    //backgroundColor:'#F1F6F7'
    backgroundColor:'white',
    borderColor:'#5E17EB',
    margin:10,
    borderWidth:1


  },
  TextInputText: {
    fontSize: 18,
    color:'#A9A9A9'
  },
  TopView:{
    flexDirection:'row',
    marginTop:30,
    justifyContent:'center'
  }

});