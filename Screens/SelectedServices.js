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
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
import Star from 'react-native-vector-icons/AntDesign';
import Related from './Components/Related'
import CardRelated from './Components/CardRelated'
import CardRelatedOne from './Components/CardRelatedOne'
import SummaryFinal from '../Sumrryslot/SummaryFinal';

 
 
 
 
 
 const HelloWorldApp = ({navigation}) => {
 
  
 
   return (<>
   <ScrollView>
     <View style={{ marginHorizontal: 20,marginTop:20 }}>


      <Text style={{fontSize:24,color:'#161616',fontWeight:'700'}}>Salon for women</Text>
      <Star name='star' color={'#757575'} style={{top:10}}/>
<Text style={{left:20,top:-5,fontSize:12,color:'#757575',fontWeight:'500'}}>4.8 (23k)</Text>
<Text style={{left:20,top:-5,fontSize:12,color:'#757575',fontWeight:'500'}}>354 jobs completed</Text>



<CardRelated />
{/* onPress={()=>navigation.navigate("Home")} */}





<View style={{top:25}}>
<Text style={{fontSize:24,color:'#161616',fontWeight:'700'}}>Related Services</Text>
<Related />
<CardRelatedOne />


</View>


     </View>
     <View style={{marginBottom:110}}></View>
     <TouchableOpacity onPress={()=>navigation.navigate("Sumary")}>
<View style={{marginHorizontal:10,bottom:10}}>
    <View style={{ alignItems: 'center', borderRadius: 12,  padding: 15, backgroundColor: '#5E17EB', borderColor: '#1589FF', width: '100%' }}>
        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins-Regular', fontWeight: '500' }}>View Summary</Text>
      </View>
      </View>
      </TouchableOpacity>
     </ScrollView>
   </>
   )
  
 }
 export default HelloWorldApp;