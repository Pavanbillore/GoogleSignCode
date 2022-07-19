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
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 
 import Plus from 'react-native-vector-icons/Entypo';
 import LinearGradient from 'react-native-linear-gradient';

import Star from 'react-native-vector-icons/AntDesign';
import Diamond from '../Diamond';

 
 
 
 
 
 const HelloWorldApp = ({navigation}) => {
  const [Popup, setPopup] = useState(false);

 
    const categories = [
        {
          id: 1,
          title: 'Pearl Facial',
          onemore: '₹599 onwords',
          image: require('../../assets/fone.png')
        },
        {
          id: 2,
          title: 'Gold facial',
          onemore: '₹699 onwords',
    
          image: require('../../assets/ftwo.png')
        },
        {
          id: 3,
          title: 'Diamond facial',
          onemore: '₹799 onwords',
    
          image: require('../../assets/fthree.png')
        },
        {
          id: 4,
          title: 'Threading',
          onemore: '₹59 onwords',
    
          // title1:'ajdlfjdjfj',
          image: require('../../assets/sfour.png')
        },
    
      ]
 
   return (<>
     <View style={{ marginTop: 20 }}>
 
 <FlatList
   style={{ height:800,position:'absolute',marginHorizontal:20}}
   data={categories}
   //  horizontal={true}
   numColumns={2}
   renderItem={({ item }) => {
     return (
       <View style={{ alignContent: 'center', alignItems: 'center'}}>
         <View style={{ borderRadius: 12, padding: 20, margin: -10, backgroundColor: '#FFFFFF',height:300 }}>
           <TouchableOpacity  onPress={()=>setPopup(true)}>
           <View>
           <Image
             style={{ borderRadius: 12, borderWidth: 0.5 }}
             source={item.image}
           />
          </View>
          </TouchableOpacity>

           <Text style={{ fontSize: 16, textAlign: 'center', color: '#161616', fontWeight: '500',top:10 }}>{item.title}</Text>
           <Text style={{ fontSize: 14, textAlign: 'center', color: '#5E17EB', fontWeight: '400',top:10 }}>{item.onemore}</Text>
           <TouchableOpacity >
           {/* onPress={()=>setPopup(true)} */}
           <View style={{borderRadius:12,width:40,height:40,alignContent:'center',justifyContent:'center',backgroundColor:'#5E17EB',left:100,top:30}}>
             <Plus name='plus' size={20} color={'white'} style={{textAlign:'center'}} />
             </View>
             </TouchableOpacity>

         </View>

         
        


       </View>

       
     )

   }}



 />
             <Diamond visible={Popup} closeCallback={()=>setPopup(false)} navigation={navigation}/>


</View>

   </>
   )
  
 }
 export default HelloWorldApp;