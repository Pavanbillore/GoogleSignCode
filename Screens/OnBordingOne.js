/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
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
   TouchableOpacity
   
 } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
// import { useState } from 'react/cjs/react.production.min';
 
 const HelloWorldApp = () => {
   const [showHomePage, setShowHomePage] = useState(false);
   const slider = [
     {
        id:1,
        title:'Easy service \n booking & scheduling',
        image:require('./assets/girl.png')
     },
     {
      id:2,
      title:'Get best in quality \n services and hire \n individuals',
      image:require('./assets/girla.png')
   },
   {
    id:3,
    title:'Get installation and \n Uninstallation on your\n door step',
    image:require('./assets/boy.png')
 }
   ]
   if(!showHomePage){
     return(
       <AppIntroSlider 
       data={slider}
       renderItem={({item}) => {
        return(
          <View>

            <Image
            source={item.image}
            style={{alignItems:'center',alignContent:'center',backgroundColor:'blue',width:'100%'}} 
            />
            <View style={{borderColor:'red',borderTopRightRadius:200,borderTopLeftRadius:200,borderTopEndRadius:200,borderTopStartRadius:200}}>

            
            <Text style={{fontSize:26,color:'#5E17EB',fontWeight:'700',textAlign:'center',top:10}}>{item.title}</Text>
            
            </View>

          </View>
        ) 
       } 
      }
      activeDotStyle={{
        backgroundColor:'#5E17EB',
        width:30,
        height:10
      }}
       />
     )
   }
   return ( <>
     <View >
      

       <Text></Text>
         
     </View>
    
     

    
       
       </>
   )
 }
 export default HelloWorldApp;
 const styles = StyleSheet.create({
  
})