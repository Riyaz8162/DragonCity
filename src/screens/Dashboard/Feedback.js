import React from 'react';
import { Button, View, Image, Text, StatusBar, I18nManager, } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Ionicons'
import Styles from '../../screens/Dashboard/styles'
import commonStyle from '../../assets/Styles'

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils';


function Feedback({ navigation }) {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ height: SCREEN_HEIGHT * .16, width: SCREEN_WIDTH * 8, marginBottom: 20, }}>
                <StatusBar translucent backgroundColor={'transparent'} />
                <View style={{ flexDirection: 'row', width: SCREEN_WIDTH * .9, position: 'absolute', bottom: 12 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}><Image style={{ width: 10, height: 12, marginLeft: 25, marginTop: 2,transform:I18nManager.isRTL ? [{ rotate: '180deg' }] :  [{ rotate: '0deg' }]}} source={require('../../assets/images/Dashboard/BackArrow.png')} /></TouchableOpacity>
                    <Text style={[Styles.boldText, { letterSpacing: 0.5,marginLeft:5 }]}>FEEDBACK & COMPLAINTS</Text>
                </View>
            </View>

            <View style={{ width: SCREEN_WIDTH * 1, backgroundColor: '#EBF0FF', borderBottomWidth: .3, marginTop: 8 }} />

            <View style={{ width: SCREEN_WIDTH * .90, alignSelf: 'center', height: 40,marginBottom:16 }}>
                <Text style={Styles.profileTinyText}>
                    Please write Overall level of satisfaction with your shipping / Delivery Service</Text>
            </View>
           
            <View style={{ width: SCREEN_WIDTH * .90, alignSelf: 'center', height: 40,marginTop:16 }}>
            <Text style={{fontFamily:'Shojumaru-Regular',fontSize:14,textAlign:I18nManager.isRTL?'right':'left'}}>WRITE FEEDBACK & COMPLAINTS</Text>
            </View>

            <View style={{ width: SCREEN_WIDTH * .90, alignSelf: 'center', height: SCREEN_HEIGHT * .24,borderColor:'red',borderWidth:.5,borderRadius:5 }}>
              {/* <TextInput /> */}
            </View>

        </View>
    );
}

export default Feedback