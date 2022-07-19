/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState} from 'react';
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
 import Header from  '../Screens/Components/Header'
 import Head from '../Screens/Components/Head';
 import Summarylist from '../Screens/Components/Summarylist';
 import Check from 'react-native-vector-icons/AntDesign';
 import Wallet from 'react-native-vector-icons/AntDesign';

 import Edit from 'react-native-vector-icons/Feather';
 import Bank from 'react-native-vector-icons/MaterialCommunityIcons';
 import { RadioButton } from 'react-native-paper';
 
 
 
 
 
 
 
 
 const Payment = ( { navigation }) => {
    




   
     return (<>

     {/* <View style={{width:75,height:75,borderWidth:1,borderRadius:50}}>

     </View> */}

     <ScrollView>
     
     <View style={{alignItems:'center',top:40}}>
         <Check name='checkcircle' size={70}  color={'rgba(94, 23, 235, 1)'}/>
     </View>
     <View style={{borderRadius:12,marginTop:20,marginHorizontal:20,elevation:5,backgroundColor:'white'}}>
         
       <Text style={{textAlign:'center',fontSize:16,color:'rgba(94, 23, 235, 1)',fontWeight:'400',marginTop:120}}>Great</Text>
       <Text style={{textAlign:'center',fontSize:20,color:'black',fontWeight:'700',marginTop:30}}>Payment Success</Text>

       <View style={{flexDirection:'row',marginTop:40}}>
           <Text style={{color:'rgba(117, 117, 117, 1)',fontWeight:'500',left:60}}>Payment Mode</Text>
           <Text style={{color:'black',fontWeight:'500',left:130}}>UPI</Text>

       </View>

       <View style={{flexDirection:'row',marginTop:20}}>
           <Text style={{color:'rgba(117, 117, 117, 1)',fontWeight:'500',left:60}}>Total amount</Text>
           <Text style={{color:'black',fontWeight:'500',left:140}}>₹749</Text>

       </View>

       <View style={{flexDirection:'row',marginTop:20}}>
           <Text style={{color:'rgba(117, 117, 117, 1)',fontWeight:'500',left:60}}>Pay Date</Text>
           <Text style={{color:'black',fontWeight:'500',left:170}}>Apr 10, 2022</Text>

       </View>

       <View style={{flexDirection:'row',marginTop:20}}>
           <Text style={{color:'rgba(117, 117, 117, 1)',fontWeight:'500',left:60}}>Pay Time</Text>
           <Text style={{color:'black',fontWeight:'500',left:170}}>10:45 am</Text>

       </View>

       <Text style={{textAlign:'center',fontSize:16,color:'rgba(117, 117, 117, 1)',fontWeight:'400',marginTop:120}}>Total Pay</Text>
       <Text style={{textAlign:'center',fontSize:20,color:'rgba(94, 23, 235, 1)',fontWeight:'700',marginBottom:30}}>₹749</Text>

      
      
 
   </View>  
   <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
        <View style={{borderRadius:10,padding:15,alignItems:'center',backgroundColor:'rgba(94, 23, 235, 1)',marginHorizontal:20,marginTop:30}}>
    <Text style={{color:'white',fontWeight:'700'}}>Done</Text>
</View>
</TouchableOpacity>
<View style={{height:200}}></View>
</ScrollView>
     </>
     )
 }
 export default Payment;