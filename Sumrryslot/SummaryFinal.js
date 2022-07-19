/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
import Noti from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
import CardRelated from '../Screens/Components/CardRelated'
import Header from  '../Screens/Components/Header'
import Head from '../Screens/Components/Head';
import Summarylist from '../Screens/Components/Summarylist';
import Home from 'react-native-vector-icons/AntDesign';
import Edit from 'react-native-vector-icons/Feather';
import Time from 'react-native-vector-icons/Ionicons';








const SummaryFinal = ( { navigation }) => {

   

    const address = '89,Bhel Nagar,piplani,Ayodhya Bypass,Bhopal\nMadhya Pradesh 462022,India'
    const time = 'Sat,Apr 09 - 07:30PM '
    return (<>
    <View style={{marginHorizontal:10,backgroundColor:'white'}}>
        <ScrollView>
      
       <Head title="Summary" />
       <View style={{borderRadius:12,borderColor:'rgba(243, 243, 243, 1)',borderWidth:1,padding:20,marginTop:20}}>
       <View style={{flexDirection:'row'}}>
       <Home name='home' size={20} style={{left:10}} />
       <Text  style={{left:20}}>Home</Text>
       <Edit name='edit-2' size={15} style={{left:240}} />
       </View>
       <Text style={{fontSize:12,lineHeight:18,left:40}}>{address}</Text>
       <View style={{flexDirection:'row'}}>
       <Time name='time-outline' size={20} style={{left:10,top:5}} />
       <Text style={{left:20,fontSize:12,top:10}}>{time}</Text>
       <Edit name='edit-2' size={15} style={{left:160,top:5}} />
       </View>
       </View>
       


    
    <CardRelated />
    <Summarylist />

    
<View style={{marginTop:260,padding:10,borderRadius:12,elevation:10,backgroundColor:'white'}}>
<TouchableOpacity onPress={()=>navigation.navigate("AddMoney")}>

    <Text style={{fontSize:16,color:'#161616'}}>Payment Sumary</Text>
    </TouchableOpacity>

  <View style={{borderWidth:1,borderColor:'#161616',width:125}}></View>
  <Text style={{top:15,fontWeight:'400'}}>Item Total</Text>
  <Text style={{left:305}}>₹699</Text>
  <Text style={{top:15,fontWeight:'400'}}>Item Discount</Text>
  <Text style={{left:300,fontSize:14,color:'#52B46B'}}>- ₹50</Text>
  <Text style={{top:10,fontWeight:'400'}}>Convinience Fee</Text>
  <Text style={{left:310,fontSize:14}}>₹50</Text>
  <Text style={{top:10,fontWeight:'700'}}>Grand Total</Text>
  <Text style={{left:310,fontSize:14,fontWeight:'700'}}>₹749</Text>
  <View style={{flexDirection:'row',marginTop:10}}>
  {/* <View style={{borderRadius:10,padding:20,width:'50%',backgroundColor:'black'}}>
      <Text style={{textAlign:'center',color:'white'}}>Secedule for later</Text>
  </View>
  <View style={{borderRadius:10,padding:20,left:10,width:'50%',backgroundColor:'#5E17EB'}}>
      <Text style={{textAlign:'center',color:'white'}}>Request Now</Text>
  </View> */}
<TouchableOpacity onPress={()=>navigation.navigate("AddMoney")}>
    <View style={{borderRadius:10,padding:15,backgroundColor:'rgba(94, 23, 235, 1)',width:'390%',right:2}}>
        <Text style={{textAlign:'center',color:'white'}}>Pay ₹749</Text>
    </View>
    </TouchableOpacity>
  </View>
  <View style={{borderRadius:6,backgroundColor:'rgba(82, 180, 107, 0.2)',padding:5,marginTop:20}}>
      <Text style={{textAlign:'center',color:'#52B46B',fontSize:12}}>Hurray ! you have saved ₹50 on final bill</Text>
  </View>

  </View>
  </ScrollView>
  </View>   
    </>
    )
}
export default SummaryFinal;