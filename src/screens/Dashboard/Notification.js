import React from 'react';
import { Button, View, Image, Text, StatusBar, I18nManager,} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Ionicons'
import Styles from '../../screens/Dashboard/styles'
import commonStyle from '../../assets/Styles'

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils';


function Notification({ navigation }) {
    return (
        <View style={{flex:1}}>
        <View style={{ height: SCREEN_HEIGHT * .16, width: SCREEN_WIDTH *8,marginBottom:20,}}>
             <StatusBar translucent backgroundColor={'transparent'} />
            <View style={{ flexDirection:I18nManager.isRTL ? 'row' :'row-reverse',width: SCREEN_WIDTH * .9,position:'absolute',bottom:12 }}>
               <TouchableOpacity onPress={()=>navigation.goBack()}><Image  style={{width:10,height:12,marginLeft:15,marginRight:15,transform:I18nManager.isRTL ? [{ rotate: '180deg' }] :  [{ rotate: '0deg' }]}} source={require('../../assets/images/Dashboard/BackArrow.png')}/></TouchableOpacity>
                <Text style={Styles.boldText}>Notification</Text>
               <Image source={require('../../assets/images/Dashboard/search.png')}
                 style={{width:20,height:20}}/>
            </View>
        </View>
        
        <View style={{ height: SCREEN_HEIGHT * .20, width: SCREEN_WIDTH *8,flexDirection:'row'}}>
           <View style={{width:SCREEN_WIDTH * .05,height: SCREEN_HEIGHT * .20,marginTop:19,marginLeft:19}}>
           <Image source={require('../../assets/images/Dashboard/tag.png')}
                 style={{width:20,height:20}}/>
           </View>

           <View style={{width:SCREEN_WIDTH,marginLeft:15,marginTop:19,marginRight:16}}>
              <Text style={[Styles.normalText,{marginLeft:0}]}>THE BEST TITLE</Text>
              <Text style={Styles.notificationNormalText}>Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo</Text>
              <Text style={Styles.notificatonTinyText}>Oct 12,2020 5.10AM</Text>
           </View>
        </View>


        <View style={{ height: SCREEN_HEIGHT * .20, width: SCREEN_WIDTH *8,flexDirection:'row'}}>
           <View style={{width:SCREEN_WIDTH * .05,height: SCREEN_HEIGHT * .20,marginTop:19,marginLeft:19}}>
           <Image source={require('../../assets/images/Dashboard/tag.png')}
                 style={{width:20,height:20}}/>
           </View>

           <View style={{width:SCREEN_WIDTH,marginLeft:15,marginTop:19,marginRight:16}}>
              <Text style={[Styles.normalText,{marginLeft:0}]}>SPECIAL OFFER 25% OFF</Text>
              <Text style={Styles.notificationNormalText}>Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo</Text>
              <Text style={Styles.notificatonTinyText}>May 25,2020 7.10AM</Text>
           </View>
        </View>

        </View>
    );
}

export default Notification