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
 
 
 import Plus from 'react-native-vector-icons/Entypo';
 import LinearGradient from 'react-native-linear-gradient';

import Star from 'react-native-vector-icons/AntDesign';

 
 
 
 
 
 const HelloWorldApp = () => {
 
  const categories = [
    {
      Key:'45 mins'
    },
    {
      Key:'For all skin types.Pinacolada mask'
     
    },
    {
      Key:'6-step process includes 10-min massage'
     
    },
  ]
 
   return (<>
     <View style={{ marginTop:10 }}>

     <View style={{top:30}}>
                                <Image
                                    style={{ width: "100%",borderRadius:20 }}
                                    source={require('../../assets/cardf.png')}
                                />

<Text style={{fontSize:16,color:'#161616',fontWeight:'700',top:25}}>Diamond Facial</Text>
                             <View style={{borderRadius:8,alignItems:'center',marginHorizontal:160,left:110,width:75,backgroundColor:'#FFFFFF'}}>
<Plus name='plus' color={'#5E17EB'} style={{top:10,right:15}} />
<Text style={{fontSize:14,color:'#5E17EB',fontWeight:'500',left:5,top:-5}}>Add</Text>
</View>
<View style={{marginTop:5}}>
<Star name='star' color={'#F5C443'} />
<Text style={{left:20,top:-15,fontSize:12,color:'#161616',fontWeight:'500'}}>4.8 (23k)</Text>
</View>
<Text style={{fontSize:14,color:'#5E17EB',fontWeight:'700',top:-5}}>₹799</Text>
<Text style={{fontSize:14,color:'#757575',fontWeight:'400',left:40,top:-25,textDecorationLine:'line-through'}}>₹1299</Text>


<FlatList
          //  style={{ height:800 }}
           data={categories}
           //  horizontal={true}
          //  numColumns={2}
           renderItem={({ item }) => {
             return (
               <View>
                   <Text style={{ fontSize: 14,  color: '#757575', fontWeight: '400'}}>{'\u2B24' + ' '}{item.Key}</Text>

                 
 
                 
                
 
 
               </View>
 
               
             )
 
           }}
 
 
 
         />
       

                            </View>

     
     </View>

   </>
   )
  
 }
 export default HelloWorldApp;