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

 
 
 
 
 
 const Summarylist = () => {
 
    const categories = [
        {
          id: 1,
          title: 'Manicure',
          onemore: '₹499 ',
          image: require('../../assets/stwo.png')
        },
        {
          id: 2,
          title: 'Pedicure',
          onemore: '₹499 onwords',
    
          image: require('../../assets/ftwo.png')
        },
        {
          id: 3,
          title: 'Manicure',
          onemore: '₹499 onwords',
    
          image: require('../../assets/fthree.png')
        },
        {
          id: 4,
          title: 'Pedicure',
          onemore: '₹499 onwords',
    
          // title1:'ajdlfjdjfj',
          image: require('../../assets/sfour.png')
        },
    
      ]
 
   return (<>
     <View style={{ marginTop:20 }}>
 
 <FlatList
   style={{ height:250,position:'absolute',marginHorizontal:5}}
   data={categories}
    horizontal={true}
   renderItem={({ item }) => {
     return (
       <View style={{ alignContent: 'center', alignItems: 'center'}}>
         <View style={{ borderRadius: 12, padding: 20, margin: -10, backgroundColor: '#FFFFFF',height:300 }}>
           <Image
             style={{ borderRadius: 12, borderWidth: 0.5,width:140,height:120 }}
             source={item.image}
           />


           <Text style={{ fontSize: 16,  color: '#161616', fontWeight: '500',top:10 }}>{item.title}</Text>
           <Text style={{ fontSize: 14,  color: '#5E17EB', fontWeight: '400',top:10 }}>{item.onemore}</Text>
           <TouchableOpacity>
           <View style={{flexDirection:'row',borderRadius:20,top:20,justifyContent:'center',backgroundColor:'#5E17EB',padding:5}}>
             <Plus name='plus' size={20} color={'white'}  style={{textAlign:'center'}} />

               <Text style={{textAlign:'center',color:'white'}}>Add</Text>
           </View>
           </TouchableOpacity>
         </View>

         
        


       </View>

       
     )

   }}



 />


</View>

   </>
   )
  
 }
 export default Summarylist;