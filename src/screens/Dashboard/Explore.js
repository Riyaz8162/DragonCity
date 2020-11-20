import React from 'react';
import { Button, View, Image, Text, StatusBar, I18nManager } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useTranslation} from 'react-i18next';
import commonStyle from '../../assets/Styles'
import { SCREEN_HEIGHT, SCREEN_WIDTH,IS_RTL } from '../../utils';


function Explore({ navigation }) {
    const {t, i18n} = useTranslation();
    return (
            <ScrollView
                style={{ marginLeft: 15,flexDirection: IS_RTL() ? 'row-reverse' : 'row' , }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >   
                
               <View style={commonStyle.circleParentView}>
                <View style={commonStyle.yellowCircle}>
                    <View style={commonStyle.redcircle}>
                        <Image style={{ width: 19, height: 25, alignSelf: 'center' }} source={require('../../assets/images/switch.png')} /></View>
                </View>
                <Text style={[commonStyle.tinyText,{color:'#000'}]}>{t('Electronics')}</Text>
                </View>
                
                <View style={commonStyle.circleParentView}>
                <View style={commonStyle.yellowCircle}>
                    <View style={commonStyle.redcircle}>
                        <Image style={{ width: 19, height: 25, alignSelf: 'center' }} source={require('../../assets/images/furnisher.png')} /></View>
                </View>
                <Text style={[commonStyle.tinyText,{color:'#000'}]}>{t('Home Fur')}</Text></View>

                <View style={commonStyle.circleParentView}>
                <View style={commonStyle.yellowCircle}>
                    <View style={commonStyle.redcircle}>
                        <Image style={{ width: 19, height: 25, alignSelf: 'center' }} source={require('../../assets/images/light.png')} /></View>
                </View>
                <Text style={[commonStyle.tinyText,{color:'#000'}]}>{t('Lighting')}</Text></View>

                <View style={commonStyle.circleParentView}>
                <View style={commonStyle.yellowCircle}>
                    <View style={commonStyle.redcircle}>
                        <Image style={{ width:13, height:11, alignSelf: 'center',marginTop:2 }} source={require('../../assets/images/chair1.png')} />
                        <Image style={{ width:18, height:10, alignSelf: 'center' }} source={require('../../assets/images/chair2.png')} /></View>
                </View>
                <Text style={[commonStyle.tinyText,{color:'#000'}]}>{t('Furniture')}</Text></View>

                <View style={commonStyle.circleParentView}>
                <View style={commonStyle.yellowCircle}>
               
                    <View style={commonStyle.redcircle}>
                    <Image style={{ width:13, height:11, alignSelf: 'center',marginTop:2 }} source={require('../../assets/images/bear.png')} />
                        <Image style={{ width:19, height:4, alignSelf: 'center' }} source={require('../../assets/images/bear2.png')} />
                        <Image style={{ width:7, height:7, alignSelf: 'center', }} source={require('../../assets/images/bear3.png')} />
                        {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Image style={{ width:5, height:4, alignSelf: 'center', }} source={require('../../assets/images/bearLeg.png')} />
                        <Image style={{ width:5, height:9, alignSelf: 'center', }} source={require('../../assets/images/bear3.png')} />
                        <Image style={{ width:5, height:4, alignSelf: 'center', }} source={require('../../assets/images/bearLeg1.png')} />
                        </View> */}
                </View>
                </View>
                <Text style={[commonStyle.tinyText,{color:'#000'}]}>{t('Toys')}</Text></View>



            </ScrollView>
       
    );
}

export default Explore