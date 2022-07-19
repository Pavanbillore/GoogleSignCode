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
   FlatList,
   Dimensions
 
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
 import Icon from 'react-native-vector-icons/EvilIcons';
 import Noti from 'react-native-vector-icons/Ionicons';
 import Right from 'react-native-vector-icons/AntDesign';
 import Verified from 'react-native-vector-icons/MaterialIcons';
 import Star from 'react-native-vector-icons/AntDesign';
 
 
 
 
 
 
 const HomeOneScroll = ( { navigation }) => {
   const slider = [
     {
       id: 1,
       title: 'Hair service for men',
       image: require('../assets/smen.png')
     },
     {
       id: 2,
       title: 'Electrician services',
       image: require('../assets/electric.png')
     },
     {
       id: 3,
       title: 'Hair service for men',
       image: require('../assets/smen.png')
     },
     {
       id: 4,
       title: 'Hair service for men',
       // title1:'ajdlfjdjfj',
       image: require('../assets/smen.png')
     }
   ]
 
   const Freelancers = [
     {
       id: 1,
       title: 'Jack Harlow\n    Electrician\n   4.5',
       image: require('../assets/jack.png')
     },
     {
       id: 2,
       title: 'Nina Chen\n   Cleaner\n    4.8',
       image: require('../assets/free.png')
     },
     {
       id: 3,
       title: 'Jack Harlow\n     Electrician\n   4.5',
       image: require('../assets/jack.png')
     },
     {
       id: 4,
       title: 'Nina Chen\n    Cleaner\n    4.8',
       image: require('../assets/free.png')
     },
   ]
   const Item = ({ title }) => (
     <View style={styles.item}>
       <Text style={styles.title}>{title}</Text>
     </View>
   );
 
 
   const renderItem = ({ item }) => (
     <Item title={item.title} />
   );
   return (<>
   <ScrollView>
     <View >
 
{/*  
       <View style={{ flexDirection: 'row', borderRadius: 12, borderColor: '#E3E3E3', borderWidth: 1, width: '80%', marginTop: 30 }}>
         <Icon name='search' color={'#757575'} size={30} style={{ marginTop: 10 }} />
 
         <TextInput placeholder='Search for services' style={{ fontSize: 14 }} ></TextInput>
 <TouchableOpacity>
         <View style={{ borderRadius: 15, marginLeft: 150, width: '15%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F3F3F3' }}>
           <Noti name='notifications' color={'#5E17EB'} size={30} style={{ marginTop: 5 }} />
           <Image
             style={{ height: 8, width: 8, top: -35, left: 5 }}
             source={require('../assets/bindi.png')}
           />
         </View>
         </TouchableOpacity>
 
       </View> */}
       <View >
         <View style={{ marginTop: 40, flexDirection: 'row' }}>
           <Text style={{ fontSize: 20, fontStyle: 'normal', fontWeight: '700', color: 'black' }}>Top Freelancers</Text>
           <Text style={{ fontSize: 12, color: '#757575', marginLeft: 130 }}>explore</Text>
           <Right name='right' color={'#757575'} style={{ marginTop: 3 }} />
           <Right name='right' color={'#757575'} style={{ marginTop: 3 }} />
 
         </View>
 
         <FlatList
           style={{ height: 280,bottom:15}}
           data={Freelancers}
           horizontal={true}
           renderItem={({ item }) => {
             return (
             
               <View style={{ alignContent: 'center', alignItems: 'center', padding: 15, margin: 15,bottom:20,}}>
                 <View style={{zIndex: 1,top:10,}}>
                 <Image
                   style={{ padding: 35, borderRadius: 50, width: 65, aspectRatio: 2 / 4,top:20,
                   
                 }}
                   source={item.image}
                 />
                 </View>
                
                 <View style={{borderRadius: 12, position: 'absolute', top: 80, width: '170%', height: '75%', justifyContent: 'center', backgroundColor: '#E0DEDE' }}>
                   
                   <Text style={{ fontSize: 14, textAlign: 'center', color: 'black',right:8,top:15,lineHeight:27 }}>{item.title}</Text>
                   <View style={{ position: 'absolute', top: 40, left: 95 }}>
                     <Verified name='verified' size={20} color={'#2B95E9'} />
                   </View>
                   <Star name='star' color={'#F5C443'} style={{left: 32,bottom:5 }} />
                   <TouchableOpacity>
                   <View style={{ borderRadius: 20, marginHorizontal: 10, backgroundColor: '#5E17EB', padding: 5,top:15 }}>
                     <Text style={{ textAlign: 'center', fontSize: 14, color: 'white' }}>view profile</Text>
                 
                   </View>
                   </TouchableOpacity>
                 </View>
 
              
 
              </View>
             )
 
           }}
 
 
 
         />
       </View>
     
 
 
       
           <View style={{bottom:5}}>
             <TouchableOpacity >
             {/* onPress={()=>navigation.navigate("Salonforwomen")} */}
             <Text style={{ fontSize: 20, fontStyle: 'normal', fontWeight: '700', color: 'black',bottom:10 }}>Trending services</Text>
             </TouchableOpacity>
 
           <FlatList
           
             data={slider}
             horizontal={true}
             slider={true}
             renderItem={({ item }) => {
               return (
                 <View style={{ alignContent: 'center', alignItems: 'center',top:10 }}>
                   <Image
                     style={{ padding: 40, margin: 10, borderRadius: 12 }}
                     source={item.image}
                   />
 
                   <Text style={{ fontSize: 14, color: 'white', fontWeight: '500', textAlign: 'center', position: 'absolute', top: 140 }}>{item.title}</Text>
 
 
 
                 </View>
               )
 
             }}
 
 
 
 
           />
           <View>

           </View>
           </View>
       
     
 
 
 
     </View>
 
 
 </ScrollView>
 
 
 
   </>
   )
 }
 export default HomeOneScroll;
 const styles = StyleSheet.create({
 
 })