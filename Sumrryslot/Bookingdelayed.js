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



const Bookingdelayed = ({ visible, closeCallback, shareOptionCallback , navigation }) => {
 const msg = 'Dont worry our service boy will react\nto you by 02:30pm as he is running\nlate due to heavy trafic'
  const booking = 'Booking Delayed\nby 20 mins'
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
                <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="handled" >
                    <View
                        style={{
                            height: 'auto',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            backgroundColor: "#fff"
                        }}>

                        <View
                            style={{
                                height: 650, borderTopLeftRadius: 20,
                                borderTopRightRadius: 20
                            }}>
                            <View>
                                <View style={{justifyContent:'center',alignItems:'center',top:46}}>
                                <Image
                                    
                                    source={require('../assets/Eight.png')}/>
                                    <TouchableOpacity onPress={()=>navigation.navigate("Payment")}>
                                <Text style={{textAlign:'center',fontSize:20,color:'black',fontWeight:'700',top:10}}>{booking}</Text>
                                </TouchableOpacity>
                                <Text style={{textAlign:'center',fontSize:16,color:'black',fontWeight:'400',top:20,lineHeight:24}}>{msg}</Text>

                                </View>

                                <View style={{borderColor:'grey',borderRadius:12,borderWidth:0.5,marginTop:100,marginHorizontal:30,height:150}}>
        <Image
        style={{width:100,height:100,borderRadius:12,marginTop:30,left:10}}

source={require('../assets/fthree.png')}
/>
<Text style={{left:120,top:-90,color:'black',fontWeight:'700'}} >Diamond Facial</Text>
<Text style={{left:120,top:-90}} >{'\u2022'}</Text>
<Text style={{left:130,top:-110}} >1 hr</Text>
<Text style={{left:120,top:-110}} >{'\u2022'}</Text>

<Text style={{left:130,top:-130}}>Include dummy info</Text>




        </View>

        <View style={{borderColor:'grey',borderRadius:12,borderWidth:0.5,marginTop:20,marginHorizontal:30,height:150}}>
        <Image
        style={{width:100,height:100,borderRadius:12,marginTop:30,left:10}}

source={require('../assets/clean.png')}
/>
<Text style={{left:120,top:-90,color:'black',fontWeight:'700'}} >Cleanup</Text>
<Text style={{left:120,top:-90}} >{'\u2022'}</Text>
<Text style={{left:130,top:-110,color:'rgba(117, 117, 117, 1)'}} >30 mins</Text>
<Text style={{left:120,top:-110}} >{'\u2022'}</Text>

<Text style={{left:130,top:-130}}>Include dummy info</Text>




        </View>
                            </View>
                           
                                                    

                        </View>
                    </View>
                    <View style={{height:10}}></View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    );
};
export default Bookingdelayed;


