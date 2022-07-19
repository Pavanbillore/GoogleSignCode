/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    View,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import Modal from 'react-native-modal';
import Plus from 'react-native-vector-icons/AntDesign';
import Star from 'react-native-vector-icons/AntDesign';
import SelectedServices from './SelectedServices';
import { Component } from 'react';



const Diamond = ({ visible, closeCallback, shareOptionCallback , navigation, data, _addToCard }) => {
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
    return (
        <Modal
            isVisible={visible} 
            statusBarTranslucent
            transparent
            onBackdropPress={closeCallback}
            onBackButtonPress={closeCallback}
            style={{ margin: 0, justifyContent: 'flex-end' }}>
            <KeyboardAvoidingView
                enabled
                behavior={Platform.OS === 'android' ? undefined : 'position'}
                keyboardShouldPersistTaps="handled">
                <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="handled">
                    <View
                        style={{
                            height: 'auto',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            backgroundColor: "#fff"
                        }}>

                        <View
                            style={{
                                height: 450, borderTopLeftRadius: 20,
                                borderTopRightRadius: 20
                            }}>
                            <View
                          >
                                <Image
                                    style={{ width: "100%",borderTopRightRadius:20,borderTopLeftRadius:20 }}
                                    source={require('../assets/fgone.png')}
                                />
                            </View>
                          
                            <View style={{marginHorizontal:20}}>
                              <Text style={{fontSize:16,color:'#161616',fontWeight:'700',top:25}}>{data.name}</Text>
                            </View>
                            
      {/* <TouchableOpacity onPress={()=>navigation.navigate('SelectedServices')}> */}
                            <View style={{borderRadius:8,alignItems:'center',marginHorizontal:160,left:100,width:75,backgroundColor:'#E5E5E5'}} onPress={_addToCard(item.id)}>
                              <Plus name='plus' color={'#5E17EB'} style={{top:10,right:15}} />
                              <Text style={{fontSize:14,color:'#5E17EB',fontWeight:'500',left:5,top:-6,}}>Add</Text>
                            </View>
{/* </TouchableOpacity> */}
<View style={{marginTop:5, marginHorizontal: 20}}>
<Star name='star' color={'#F5C443'} />
<Text style={{left:20,top:-15,fontSize:12,color:'#161616',fontWeight:'500'}}>4.8 (23k)</Text>
</View>
<TouchableOpacity onPress={()=>navigation.navigate("Otp")}>
<Text style={{fontSize:14,color:'#5E17EB',fontWeight:'700',top:-5, marginHorizontal: 20}}>₹ {data.price}</Text>
</TouchableOpacity>
<Text style={{fontSize:14,color:'#757575',fontWeight:'400',left:40,top:-25,textDecorationLine:'line-through', marginHorizontal: 20}}>₹1299</Text>


<FlatList
          //  style={{ height:800 }}
           data={categories}
           //  horizontal={true}
          //  numColumns={2}
           renderItem={({ item }) => {
             return (
               <View style={{marginHorizontal: 20}}>
                   <Text style={{ fontSize: 14,  color: '#757575', fontWeight: '400'}}>{'\u2B24' + ' '}{item.Key}</Text>
               </View>
             )
           }}
         />
                           </View>
                          

                        </View>
                    
                </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    );
};
export default Diamond;


