
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
import Noti from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
import CardRelated from '../Screens/Components/CardRelated'
import Header from  '../Screens/Components/Header'
import Head from '../Screens/Components/Head';
import Summarylist from '../Screens/Components/Summarylist';
import SelectDate from './SelectDate';
import SelectTimeOne from './SelectTimeOne';
import Map from '../Screens/Map';




const Sumary = ( { navigation }) => {

   

  const [Popup, setPopup] = useState(true);
  
//   const [Popup, setPopup] = useState(false);
    
    return (<>
    <View style={{marginHorizontal:10,backgroundColor:'white'}}>
        <ScrollView>
      
       <Head title="Summary" />

      
    <CardRelated />
    <Summarylist />
<View style={{marginTop:260,padding:10,borderRadius:12,elevation:10,backgroundColor:'white'}}>
    <TouchableOpacity>
    <Text style={{fontSize:16,color:'#161616'}}>Payment Sumary</Text>
    </TouchableOpacity>
  <View style={{borderWidth:1,borderColor:'#161616',width:125}}></View>
  <Text style={{top:15,fontWeight:'400'}}>Item Total</Text>
  <Text style={{left:300}}>₹699</Text>
  <Text style={{top:15,fontWeight:'400'}}>Item Discount</Text>
  <Text style={{left:300,fontSize:14,color:'#52B46B'}}>- ₹50</Text>
  <View style={{flexDirection:'row',marginTop:10}}>
  <TouchableOpacity onPress={()=>setPopup(true)}>
  <View style={{borderRadius:10,padding:20,width:'112%',right:5,backgroundColor:'black'}}>
      <Text style={{textAlign:'center',color:'white'}}>Secedule for later</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>setPopup(true)}>
  <View style={{borderRadius:10,padding:20,width:'127%',left:15,backgroundColor:'rgba(94, 23, 235, 1)',marginLeft:10}}>
      <Text style={{textAlign:'center',color:'white'}}>Request Now</Text>
  </View>
  </TouchableOpacity>
  
  
  {/* <TouchableOpacity onPress={()=>setPopup(true)}>
  <View style={{borderRadius:10,padding:20,left:10,width:'50%',backgroundColor:'#5E17EB'}}>
      <Text style={{textAlign:'center',color:'white'}}>Request Now</Text>
  </View>
  </TouchableOpacity> */}

  </View>
  <View style={{borderRadius:6,backgroundColor:'rgba(82, 180, 107, 0.2)',padding:5,marginTop:20}}>
      <Text style={{textAlign:'center',color:'#52B46B',fontSize:12}}>Hurray ! you have saved ₹50 on final bill</Text>
  </View>
   
<SelectDate visible={Popup} closeCallback={()=>setPopup(false)} navigation={navigation} />
  </View>
  </ScrollView>
  </View>   



  
    </>
    )
}
export default Sumary;