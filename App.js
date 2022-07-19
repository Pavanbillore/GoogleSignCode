

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Register from './Screens/Register'
import Otp from './Screens/Otp'
import Home from './Screens/Home'
import HomeOneScroll from './Screens/HomeOneScroll'
import Salonforwomen from './Screens/Salonforwomen'
import Facialforglow from './Screens/Facialforglow'
// import Diamond  from './Screens/Diamond'
import Sumary  from './Sumrryslot/Sumary'
import SummaryFinal from './Sumrryslot/SummaryFinal'
import AddMoney from './Sumrryslot/AddMoney'
import Sucessfullbokkking from './Sumrryslot/Sucessfullbokking';
import Bookingdelayed from './Sumrryslot/Bookingdelayed';
import Payment from './Sumrryslot/Payment'
import SelectDate from './Sumrryslot/SelectDate';
import SelectTime from './Sumrryslot/SelectTime';
import Tabs from './Screens/Components/Tabs'
import Register from './Screens/Register';
import SelectedServices from './Screens/SelectedServices'
import Map from  './Screens/Map'
import Diamond from './Screens/Diamond';
import SelectTimeOne from './Sumrryslot/SelectTimeOne';
import ChangeLocation from './Screens/ChangeLocation';
import Example from './Screens/Example';



// function HomeScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen1</Text>
//       <TouchableOpacity onPress={() => navigation.navigate('Home2')}><Text>Next</Text></TouchableOpacity>
//     </View>
//   );
// }

// function Screen2() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen2</Text>
//       <TouchableOpacity onPress={()=>{console.log('helo')}}><Text>Next</Text></TouchableOpacity>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      {/* <Stack.Screen options={{ headerShown: false }} name="Example" component={Example} /> */}

      <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />

      <Stack.Screen options={{ headerShown: false }} name="SelectTime" component={SelectTime} />

      <Stack.Screen options={{ headerShown: false }} name="SelectDate" component={SelectDate} />

      <Stack.Screen options={{ headerShown: false }} name="Payment" component={Payment} />

      <Stack.Screen options={{ headerShown: false }} name="Bookingdelayed" component={Bookingdelayed} />

      <Stack.Screen options={{ headerShown: false }} name="Sucessfullbokkking" component={Sucessfullbokkking} />

      <Stack.Screen options={{ headerShown: false }} name="AddMoney" component={AddMoney} />

      <Stack.Screen options={{ headerShown: false }} name="SummaryFinal" component={SummaryFinal} />


      <Stack.Screen options={{ headerShown: false }} name="Otp" component={Otp} />
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Tabs} />
      <Stack.Screen options={{ headerShown: false }} name="HomeOneScroll" component={HomeOneScroll} />
      <Stack.Screen options={{ headerShown: false }} name="Salonforwomen" component={Salonforwomen} />
      <Stack.Screen options={{ headerShown: false }} name="Facialforglow" component={Facialforglow} />
      <Stack.Screen options={{ headerShown: false }} name="Diamond" component={Diamond} />
      <Stack.Screen options={{ headerShown: false }} name="Sumary" component={Sumary} />
      <Stack.Screen options={{ headerShown: false }} name="SelectedServices" component={SelectedServices} />
      <Stack.Screen options={{ headerShown: false }} name="Map" component={Map} />
      <Stack.Screen options={{ headerShown: false }} name="SelectTimeOne" component={SelectTimeOne} />
      {/* <Stack.Screen options={{ headerShown: false }} name="ChangeLocation" component={ChangeLocation} /> */}

           </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;







