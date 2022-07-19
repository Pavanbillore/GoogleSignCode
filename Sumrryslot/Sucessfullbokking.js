/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
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
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Location from 'react-native-vector-icons/Ionicons';
import Cash from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
import CardRelated from '../Screens/Components/CardRelated'
import Header from '../Screens/Components/Header'
import Head from '../Screens/Components/Head';
import Summarylist from '../Screens/Components/Summarylist';
import Card from 'react-native-vector-icons/AntDesign';
import Wallet from 'react-native-vector-icons/AntDesign';

import Edit from 'react-native-vector-icons/Feather';
import Bank from 'react-native-vector-icons/MaterialCommunityIcons';
import { RadioButton } from 'react-native-paper';
import Bookingdelayed from './Bookingdelayed';








const Sucessfullbokkking = ({ navigation }) => {
  const [Popup, setPopup] = useState(false);



const Dummy = 'Dear Harry Styles you have succesfully\nsehduled booking of dash service for\nthe upcoming date 12 Dec .Our service\nprovider will contact you soon.'



    return (<>
        <View style={{ alignItems: 'center', top: 116 }}>

            <Image

                source={require('../assets/smiling.png')}
            />
            <Text style={{ fontSize: 20, color: 'rgba(245, 196, 67, 1)', fontWeight: '700',marginTop:10 }}>Booking Sucessful !</Text>
<Text style={{textAlign:'center',fontSize:16,fontWeight:'700',top:30}}>{Dummy}</Text>









        </View>
        <View style={{borderColor:'grey',borderRadius:12,borderWidth:0.5,marginTop:300,marginHorizontal:30,height:150}}>
        <Image
        style={{width:100,height:100,borderRadius:12,marginTop:30,left:10}}

source={require('../assets/fthree.png')}
/>
<Text style={{left:120,top:-90,color:'black',fontWeight:'700'}} >Diamond Facial</Text>
<Text style={{left:120,top:-90}} >{'\u2022'}</Text>
<Text style={{left:130,top:-110}} >1 hr</Text>
<Text style={{left:120,top:-110}} >{'\u2022'}</Text>

<Text style={{left:130,top:-130}}>Include dummy info</Text>




        </View>
        <TouchableOpacity onPress={()=>setPopup(true)} >
        <View style={{borderRadius:10,padding:15,alignItems:'center',backgroundColor:'rgba(94, 23, 235, 1)',marginHorizontal:20,marginTop:50}}>
    <Text style={{color:'white',fontWeight:'700'}}>View Booking</Text>
</View>

</TouchableOpacity>
<Bookingdelayed visible={Popup} closeCallback={()=>setPopup(false)} navigation={navigation}/>

    </>
    )
}
export default Sucessfullbokkking;