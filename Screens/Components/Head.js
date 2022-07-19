import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

// import { useContext } from 'react';
// import NoteContext from '../../Context/NoteContext';

const Head = (props) => {

    // const {globalfont} = useContext(NoteContext);
    // const [Ifont, setIfont] = globalfont;

    const Ifont = 'Poplin';
    
    return (
        <View>
             <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16, marginBottom: 13 }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()} style={{position:'absolute', top:8,  left:22,  }}>
                        <View style={{borderRadius:8,padding:5,backgroundColor:'rgba(243, 243, 243, 1)'}}>
                    <Icon name="left" size={20} color="#000000" />
                    </View>
                    </TouchableOpacity>                        
                    <Text style={[{fontFamily: `${ Ifont }`}, styles.head]}>{props.title}</Text>
                </View>
                {/* <View style={{borderWidth:0.5,borderColor:'#EBEBEB'}}>

                </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    head: {
        color: 'black',
        fontStyle: 'normal',
        
        // fontFamily:"RammettoOne-Regular",
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 36,

    },
})

export default Head;
