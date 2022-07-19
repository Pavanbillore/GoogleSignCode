import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from '../Register'
import OTP from '../Otp'
import React from 'react'
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
 import Icon from 'react-native-vector-icons/EvilIcons';
  
 
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator 
            tabBarOptions={{
                showLabel:false,
                style:{
                    height:75,
                    bottom:30,
                    backgroundColor:'white'                    
                }
            }}
        
        
        >
            
                
               
            <Tab.Screen name='Home' component={Register} options={{
                tabBarIcon:({focused}) =>{
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Icon size={60} />

                        <Text style={{color:'black',fontSize:16}}>HOME</Text>

                    </View>
                }
            }} />
            <Tab.Screen name='Booking' component={OTP} />
            <Tab.Screen name='Walet' component={Register} />
            <Tab.Screen name='Profile' component={OTP} />



        </Tab.Navigator>
    )
}

export default Tabs;