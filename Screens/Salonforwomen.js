/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect, useState } from 'react';
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
 import Location from 'react-native-vector-icons/Ionicons';
 import Noti from 'react-native-vector-icons/Ionicons';
 import Icon from 'react-native-vector-icons/EvilIcons';
 import LinearGradient from 'react-native-linear-gradient';
 import Head from '../Screens/Components/Header'
 
 
 
 
 
 const Salonforwomen = ( props ) => {
 
  const [salonforwomen, setcategories] = useState([]);
  console.log('1111',salonforwomen)

  useEffect(() => {

    const requestOptions = {     
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://3.109.48.115:5500/admin/salonForWomenList", requestOptions).then((result) => {
      result.json().then((resp) => {
        setcategories(resp)
      })
    })
  }, []);
 
  const handleCardItem = (key) => {
    console.log('key', key);
    const saloneForWomenId =  key
    console.log('getIds',saloneForWomenId);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "id": saloneForWomenId
    });
    console.log('2222222', raw);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://3.109.48.115:5500/admin/subSalonforWomenPost", requestOptions)
    .then(response => response.json())
    .then(success => {
      const tokan = success.token; 
      const requestOptions = {
        method: 'GET',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + `${tokan}`,
      },
        redirect: 'follow'
    };

    fetch("http://3.109.48.115:5500/admin/subSalonforWomenData", requestOptions).then((result) => {
        result.json().then((resp) => {          
        const data = resp.response.subSalonforWomen;
        console.log('data',data);
        if(data){
          props.navigation.navigate("Facialforglow",{
            userId : data
          })
        }
        })
    })
    console.log('success',tokan)
    })
    .catch(error => console.log('error', error));
}
   return (<>
   <ScrollView>
     <View style={{ marginHorizontal: 20 }}>
       <Head title="Salon for women" />
       <View style={{ marginTop: 20 }}>
 
       <FlatList
            style={{}}
            data={salonforwomen.allsalonForWomenList} 
            //  horizontal={true}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <View style={{ alignContent: 'center', alignItems: 'center', width : 160, height : 235, marginBottom: 5}}>
                  <View style={{ borderRadius: 8, backgroundColor: '#FFFFFF', width : 150, height : 230}}>
                  <TouchableOpacity onPress={()=> handleCardItem (item._id)}>
                    <Image
                     style={{ borderRadius: 12, width : 135, height : 170, margin: 8}}
                     source={require('../assets/swoman.png')}
                   />
                    </TouchableOpacity>
                    
                      <Text style={{ fontSize: 16, textAlign: 'center', color: '#161616', fontWeight: '500' }}>{item.salonForWomenName}</Text>
                    
                    <Text style={{ fontSize: 14, textAlign: 'center', color: '#5E17EB', fontWeight: '400' }}>Rs. {item.price} /-</Text>
                  </View>
                </View>
              )

            }}
          />
       </View>
     </View>
     </ScrollView>
   </>
   )
 }
 export default Salonforwomen;