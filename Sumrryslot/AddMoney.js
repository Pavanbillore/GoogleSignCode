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
 import Card from 'react-native-vector-icons/AntDesign';
 import Wallet from 'react-native-vector-icons/AntDesign';

 import Edit from 'react-native-vector-icons/Feather';
 import Bank from 'react-native-vector-icons/MaterialCommunityIcons';
 import { RadioButton } from 'react-native-paper';
 
 
 
 
 
 
 
 
 const AddMoney = ( { navigation }) => {
     const add = 'No extra amount will be charged when you pay\nusing your SeekMe wallet'
 
    
    const [checked, setChecked] = React.useState('first');
    const [sec, setSetsec] = React.useState('second');
    const [third, setThird] = React.useState('third');
    const [four, setFour] = React.useState('fourth');
    const [five, setFive] = React.useState('fiveth');





   
     return (<>
     <View>
         
       
        <Head title="Payment Options" />
        <View style={{flexDirection:'row',left:20,marginTop:40}}>
        <RadioButton
        color='blue'
        value="first"
        uncheckedColor="green"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <Text style={{fontSize:16,color:'black',fontWeight:'600',left:20}}>Debit % Credit Cards</Text>
      <Card name='creditcard' size={20} style={{left:120}} />

        </View>

        <View style={{flexDirection:'row',left:20,marginTop:20}}>
        <RadioButton
        value="first"
        color='blue'

        uncheckedColor="green"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      <Text style={{fontSize:16,color:'black',fontWeight:'600',left:20}}>UPI</Text>
      <Image
                               style={{left:240}} 
                                    source={require('../assets/upi.png')}
                                />

        </View>

        <View style={{flexDirection:'row',left:20,marginTop:20}}>
        <RadioButton
        value="first"
        uncheckedColor="green"
        color='blue'

        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
      />
      <Text style={{fontSize:16,color:'black',fontWeight:'600',left:20}}>Net Banking</Text>
      <Bank name='bank-outline' size={20} style={{left:180}} />

        </View>

        <View style={{flexDirection:'row',left:20,marginTop:20}}>
        <RadioButton
        value="first"
        uncheckedColor="green"
        color='blue'

        status={ checked === 'fourth' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('fourth')}
      />
      <Text style={{fontSize:16,color:'black',fontWeight:'600',left:20}}>Cash</Text>
      <Cash name='cash-outline' size={20} style={{left:230}} />

        </View>
       
        <View style={{flexDirection:'row',left:20,top:20}}>
        <RadioButton
        value="first"
        uncheckedColor="green"
        
        color='blue'
        status={ checked === 'fifth' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('fifth')}
      />
      <Text style={{fontSize:16,color:'black',fontWeight:'600',left:20}}>SeekMe wallet</Text>
      <Wallet name='wallet' size={20} style={{left:160}}/>

        </View>

        <View style={{borderRadius:10,padding:10,alignItems:'center',backgroundColor:'rgba(245, 196, 67, 1)',marginTop:50,marginHorizontal:20}}>
            <Text style={{fontSize:12}} >{add}</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Sucessfullbokkking")}>
        <View style={{borderRadius:10,padding:20,alignItems:'center',backgroundColor:'rgba(94, 23, 235, 1)',marginTop:250,marginHorizontal:20}}>
            <Text style={{color:'white',fontWeight:'600'}} >Proceed</Text>
        </View>
        </TouchableOpacity>



 
 
     
    
    
 
   </View>   
     </>
     )
 }
 export default AddMoney;