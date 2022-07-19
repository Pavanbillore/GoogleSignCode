// /* eslint-disable react-native/no-inline-styles */
// import React, {useState} from 'react';
// import {
//     View,
//     KeyboardAvoidingView,
//     Platform,
//     ScrollView,
//     Text,
//     TouchableOpacity,
//     Image,
//     FlatList,
//     TextInput
// } from 'react-native';
// import Modal from 'react-native-modal';
// import Plus from 'react-native-vector-icons/AntDesign';
// import News from 'react-native-vector-icons/FontAwesome';
// import Search from 'react-native-vector-icons/FontAwesome';
// import Map from './Map';


// // import SummaryFinal from './SummaryFinal';



// const SelectTimeOne = ({ visible, closeCallback, shareOptionCallback, navigation }) => {
//     // const msg = 'Free cancellation till 2hr before the booked\nslot,post that ₹50 chargeable'
//     const booking = 'Booking Delayed\nby 20 mins'
//     const [Popup, setPopup] = useState(true);
//     return (
//         <Modal
//             isVisible={visible}
//             statusBarTranslucent
//             transparent
//             onBackdropPress={closeCallback}
//             onBackButtonPress={closeCallback}
//             style={{ margin: 0, justifyContent: 'flex-end' }}>
//             <KeyboardAvoidingView
//                 enabled
//                 behavior={Platform.OS === 'android' ? undefined : 'position'}
//                 keyboardShouldPersistTaps="handled">
//                 <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="handled">
//                     <View
//                         style={{
//                             height: 'auto',
//                             borderTopLeftRadius: 20,
//                             borderTopRightRadius: 20,
//                             backgroundColor: "#fff"
//                         }}>

//                         <View
//                             style={{
//                                 height: 650, borderTopLeftRadius: 20,
//                                 borderTopRightRadius: 20
//                             }}>
//                             <View style={{ marginHorizontal: 20 }}>
//                                 <Text style={{ fontSize: 16, color: 'black', fontWeight: '500', marginTop: 60 }}>Select a location</Text>


//                             <View>
//                                 <Search name='search1' size={20} />
//                             </View>
//                             <View>
//                                 <TextInput 
//                                 placeholder='Search for area, street name. . .'
//                                 />
//                             </View>


//                                 <View style={{ flexDirection: 'row', borderRadius: 10, justifyContent: 'center', padding: 10, backgroundColor: 'rgba(235, 235, 235, 1)', marginTop: 50 }}>
//                                     <News name='newspaper-o' size={15} style={{ right: 10, top: 10 }} />
//                                 </View>
                                
//                                 <View style={{ flexDirection: 'row', marginTop: 20 }}>
//                                 <TouchableOpacity>
//                                     <View style={{ borderColor: 'rgba(227, 227, 227, 1)', borderWidth: 1, borderRadius: 12, padding: 15 }}>
//                                         <Text>02:30 PM</Text>
//                                     </View>
//                                     </TouchableOpacity>
//                                     <TouchableOpacity>
//                                     <View style={{ borderColor: 'rgba(94, 23, 235, 1)', borderWidth: 1, borderRadius: 12, padding: 15, marginLeft: 20 }}>
//                                         <Text>03:30 PM</Text>
//                                     </View>
//                                     </TouchableOpacity>
//                                     <TouchableOpacity>
//                                     <View style={{ borderColor: 'rgba(227, 227, 227, 1)', borderWidth: 1, borderRadius: 12, padding: 15, marginLeft: 20 }}>
//                                         <Text>04:30 PM</Text>
//                                     </View>
//                                     </TouchableOpacity>
//                                     <TouchableOpacity>
//                                     <View style={{ borderColor: 'rgba(227, 227, 227, 1)', borderWidth: 1, borderRadius: 12, padding: 15, marginLeft: 20 }}>
//                                         <Text>05:30 PM</Text>
//                                     </View>
//                                     </TouchableOpacity>
//                                 <TouchableOpacity>
//                                     <View style={{ borderColor: 'rgba(227, 227, 227, 1)', borderWidth: 1, borderRadius: 12, padding: 15 }}>
//                                         <Text>06:30 PM</Text>
//                                     </View>
//                                     </TouchableOpacity>
//                                     <TouchableOpacity>
//                                     <View style={{ borderColor: 'rgba(94, 23, 235, 1)', borderWidth: 1, borderRadius: 12, padding: 15, marginLeft: 20 }}>
//                                         <Text>07:30 PM</Text>
//                                     </View>
//                                     </TouchableOpacity>
//                                     <TouchableOpacity>
//                                     <View style={{ borderColor: 'rgba(227, 227, 227, 1)', borderWidth: 1, borderRadius: 12, padding: 15, marginLeft: 20 }}>
//                                         <Text>07:30 PM</Text>
//                                     </View>
//                                     </TouchableOpacity>

//                                 </View>



//                                 <TouchableOpacity >
//                                     <View style={{ borderRadius: 10, padding: 15, alignItems: 'center', backgroundColor: 'rgba(94, 23, 235, 1)', marginTop: 150 }}>
//                                         <Text style={{ color: 'white', fontWeight: '700' }}>Proceed to checkout</Text>
//                                     </View>
//                                 </TouchableOpacity>

//                             </View>



//                         </View>
//                     </View>
//                 </ScrollView>
//             </KeyboardAvoidingView>
//         </Modal>
//     );
// };
// export default SelectTimeOne;


