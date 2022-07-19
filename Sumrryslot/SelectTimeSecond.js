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
import News from 'react-native-vector-icons/FontAwesome';
import SummaryFinal from './SummaryFinal';



const SelectTime = ({ visible, closeCallback, shareOptionCallback, navigation }) => {
    const msg = 'Free cancellation till 2hr before the booked\nslot,post that ₹50 chargeable'
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
                                height: 650, borderTopLeftRadius: 20,
                                borderTopRightRadius: 20
                            }}>
                            <View style={{ marginHorizontal: 20 }}>
                                <Text style={{ fontSize: 16, color: 'black', fontWeight: '500', marginTop: 60 }}>Select date and time</Text>
                                <Text style={{ color: 'rgba(117, 117, 117, 1)', lineHeight: 21 }}>Your service will take approx.45 mins</Text>
                                <View style={{ flexDirection: 'row', marginTop: 50 }}>
                                    <View style={{ borderRadius: 12, borderColor: 'rgba(94, 23, 235, 1)', borderWidth: 1, padding: 15, backgroundColor: 'rgba(242, 236, 253, 1)' }}>
                                        <Text style={{ textAlign: 'center' }}>Sat</Text>
                                        <Text style={{ color: 'black', fontWeight: '700', textAlign: 'center' }}>10</Text>
                                    </View>

                                    <View style={{ borderRadius: 12, borderColor: 'rgba(227, 227, 227, 1)', borderWidth: 1, padding: 15, marginLeft: 20 }}>
                                        <Text style={{ textAlign: 'center' }} >Sun</Text>
                                        <Text style={{ color: 'black', fontWeight: '700', textAlign: 'center' }}>11</Text>
                                    </View>

                                    <View style={{ borderRadius: 12, borderColor: 'rgba(227, 227, 227, 1)', borderWidth: 1, padding: 15, marginLeft: 20 }}>
                                        <Text style={{ textAlign: 'center' }}>Mon</Text>
                                        <Text style={{ color: 'black', fontWeight: '700', textAlign: 'center' }}>12</Text>
                                    </View>
                                </View>



                                <View style={{ flexDirection: 'row', borderRadius: 10, justifyContent: 'center', padding: 10, backgroundColor: 'rgba(235, 235, 235, 1)', marginTop: 50 }}>
                                    <News name='newspaper-o' size={15} style={{ right: 10, top: 10 }} />
                                    <Text>{msg}</Text>
                                </View>
                                
                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                <TouchableOpacity>
                                    <View style={{ borderColor: 'rgba(227, 227, 227, 1)', borderWidth: 1, borderRadius: 12, padding: 15 }}>
                                        <Text>06:30 PM</Text>
                                    </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                    <View style={{ borderColor: 'rgba(94, 23, 235, 1)', borderWidth: 1, borderRadius: 12, padding: 15, marginLeft: 20 }}>
                                        <Text>07:30 PM</Text>
                                    </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                    <View style={{ borderColor: 'rgba(227, 227, 227, 1)', borderWidth: 1, borderRadius: 12, padding: 15, marginLeft: 20 }}>
                                        <Text>07:30 PM</Text>
                                    </View>
                                    </TouchableOpacity>

                                </View>



                                <TouchableOpacity onPress={()=>navigation.navigate("SummaryFinal")}>
                                    <View style={{ borderRadius: 10, padding: 15, alignItems: 'center', backgroundColor: 'rgba(94, 23, 235, 1)', marginTop: 150 }}>
                                        <Text style={{ color: 'white', fontWeight: '700' }}>Proceed to checkout</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>



                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    );
};
export default SelectTime;


