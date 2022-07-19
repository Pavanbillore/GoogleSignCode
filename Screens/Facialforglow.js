// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Location from 'react-native-vector-icons/Ionicons';
import Noti from 'react-native-vector-icons/Ionicons';
import Plus from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import Head from '../Screens/Components/Header'
import Facialglow from '../Screens/Components/Facialglow'
import Diamond from './Diamond'


export default function Facialforglow(props) {

 const data =  props.route.params.userId
   console.log('getIds',data);


const [Popup, setPopup] = useState(false);

  const [addToCart, setAddToCart] = useState([]);
  const [val, setVal] = useState({
    name: "",
    price: "",
    id: ""
  });

  const _addToCard = id => {
    Alert.alert(  
      'Alert',  
      id,  
      [
          {text: 'OK', onPress: () => console.log('OK Pressed')},  
      ]  
    );
  }

 useEffect(() => {
   
 //   var myHeaders = new Headers();
 //   myHeaders.append("Content-Type", "application/json");

 //   var raw = JSON.stringify({
 //     "code": saloneForWomenId
 //   });
 //   console.log('2222222', raw);

 //   var requestOptions = {
 //     method: 'POST',
 //     headers: myHeaders,
 //     body: raw,
 //     redirect: 'follow'
 //   };

 //   fetch("http://3.109.48.115:5500/admin/subSalonforWomenPost", requestOptions)
 //   .then(response => response.json())
 //   .then(success => console.log(success))
 //   .catch(error => console.log('error', error));
 }, []) 

 return (
     <>
     <ScrollView>
     <View >
         <Head title="Facial for glow" />
         {/* <Facialglow /> */}
         <View style={{ marginTop: 20 }}>

          <FlatList
            style={{ height: 800, position: 'absolute', marginHorizontal: 20 }}
            data={data}
            //  horizontal={true}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <View style={{ alignContent: 'center', alignItems: 'center', height:250, width: 150 }}>
                  <View style={{ borderRadius: 12, padding: 20, margin: -10, backgroundColor: '#FFFFFF', height: 240, width: 130 }}>
                    {/* <Image
                      style={{ borderRadius: 12, borderWidth: 0.5, width: 100, height: 200}}
                      source={{uri : item.images}}
                    /> */}
                    <Image
                          style={{ borderRadius: 12, borderWidth: 0.5, width : 90, height : 120}}
                          source={require('../assets/swoman.png')}
                        />
                    <View style={{}}>
                        <Text style={{ fontSize: 16, textAlign: 'center', color: '#161616', fontWeight: '500', top: 10, height : 20, width : 105}}>{item.subSalonforWomenName}</Text>
                        <Text style={{ fontSize: 14, textAlign: 'center', color: '#5E17EB', fontWeight: '400', top: 10 }}>{item.price}</Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                      setVal({name: item.subSalonforWomenName, price: item.price, id: item._id})
                      setPopup(true);
                    }}>
                      <View style={{ borderRadius: 12, width: 30, height: 30, alignContent: 'center', justifyContent: 'center', backgroundColor: '#5E17EB', left: 60, top: 20 }}>
                        <Plus name='plus' size={20} color={'white'} style={{ textAlign: 'center' }} />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>


              )

            }}



          />
     <Diamond data={val} _addToCard={_addToCard} visible={Popup} closeCallback={() => setPopup(false)} navigation={props.navigation} />


   </View>
         
          {/* <Diamond visible={Popup} closeCallback={()=>setPopup(false)} navigation={props.navigation}/> */}
     </View>
     <View style={{marginHorizontal:20,right:20}}> 
         <TouchableOpacity onPress={()=>navigation.navigate("SelectedServices")}>
 {/* {/ onPress={()=>setPopup(true)} /} */}
       <View style={{ alignItems: 'center',  borderRadius: 12, borderWidth: 1, padding: 20, backgroundColor: '#D8D8D8', borderColor: '#D8D8D8', width: '100%',top:622,justifyContent:'center',marginHorizontal:20}}>
     
                 <Text style={{ color: '#858585', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '500' }}>Proceed</Text>
             
             </View>

             </TouchableOpacity>
         </View>
     <View style={{height:600}}></View>
     </ScrollView>
     </>
 );
};


//  const HelloWorldApp = ( {navigation} ) => {

 


//    return (<>
//    

//    </>
//    )
 
//  }
//  export default HelloWorldApp;