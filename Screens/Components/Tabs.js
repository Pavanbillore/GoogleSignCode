import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../Home'
import Register from '../Register';
import Salonforwomen from '../Salonforwomen';
import Facialforglow from '../Facialforglow'
import { exp } from 'react-native/Libraries/Animated/Easing';
// import Home from 'react-native-vector-icons/AntDesign';
// import Wallet from 'react-native-vector-icons/Entypo';
// import USer from 'react-native-vector-icons/FontAwesome5';
// import Booking from 'react-native-vector-icons/AntDesign';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'










const Tab = createBottomTabNavigator();





const TabNavigator = () => {
    return(
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
    }}>
        <Tab.Screen name='Home' component={Home} options={{
            tabBarIcon: ({color,size}) =>(
                <AntDesign name="home" color={color} size={size} />

            )
        }} />
        <Tab.Screen name='Register' component={Register} options={{
            tabBarIcon: ({color,size}) =>(
                <AntDesign name="book" color={color} size={size} />

            )
        }}/>
        <Tab.Screen name='Salonforwomen' component={Salonforwomen}options={{
            tabBarIcon: ({color,size}) =>(
                <Entypo name="wallet" color={color} size={size} />

            )
        }} />
        <Tab.Screen name='Facialforglow' component={Facialforglow}options={{
            tabBarIcon: ({color,size}) =>(
                <FontAwesome5 name="user-alt" color={color} size={size} />

            )
        }} />



    </Tab.Navigator>
    );
       
    
}
export default TabNavigator;