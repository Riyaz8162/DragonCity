import React from 'react';
import { Button, View, Image, Text, I18nManager, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Styles from '../../screens/Dashboard/styles'
import { SCREEN_HEIGHT, SCREEN_WIDTH,IS_RTL } from '../../utils';
import {useTranslation} from 'react-i18next';

const Services = ({ navigation }) => {
    const {t, i18n} = useTranslation();
    return (
    
            <ScrollView
                style={{flexDirection: IS_RTL() ? 'row-reverse' : 'row' , marginLeft:20, marginTop:16 }}
                horizontal={true}
                
                showsHorizontalScrollIndicator={false}
            >

                <View style={{ justifyContent: 'center', marginTop: 6 }}>
                    <ImageBackground style={Styles.redImage} source={require('../../assets/images/redCircle.png')}>
                        <Image style={{ width: 25, height: 19, resizeMode: 'cover' }} source={require('../../assets/images/Bank.png')} />
                    </ImageBackground>
                    <Text style={[Styles.tinyText]}>{t('Bank')}</Text>
                </View>

                <View style={Styles.parentRedView}>
                    <ImageBackground style={Styles.redImage} source={require('../../assets/images/redCircle.png')}>
                        <Image style={{ width: 25, height: 19, resizeMode: 'cover' }} source={require('../../assets/images/ATM.png')} />
                    </ImageBackground>
                    <Text style={[Styles.tinyText]}>{t('ATM')}</Text>
                </View>

                <View style={Styles.parentRedView}>
                    <ImageBackground style={Styles.redImage} source={require('../../assets/images/redCircle.png')}>
                        <Image style={{ width: 25, height: 19, resizeMode: 'cover' }} source={require('../../assets/images/information.png')} />
                    </ImageBackground>
                    <Text style={[Styles.tinyText]}>{t('Informa..')}</Text>
                </View>

                <View style={Styles.parentRedView}>
                    <ImageBackground style={Styles.redImage} source={require('../../assets/images/redCircle.png')}>
                        <Image style={{ width: 25, height: 19, resizeMode: 'cover' }} source={require('../../assets/images/masque.png')} />
                    </ImageBackground>
                    <Text style={[Styles.tinyText]}>{t('Mosque')}</Text>
                </View>

                <View style={Styles.parentRedView}>
                    <ImageBackground style={Styles.redImage} source={require('../../assets/images/redCircle.png')}>
                        <Image style={{ width: 25, height: 19, resizeMode: 'cover' }} source={require('../../assets/images/male.png')} />
                    </ImageBackground>
                    <Text style={[Styles.tinyText]}>{t('Male Rest')}</Text>
                </View>

                <View style={{...Styles.parentRedView,}}>
                    <ImageBackground style={Styles.redImage} source={require('../../assets/images/redCircle.png')}>
                    </ImageBackground>
                    <Text style={[Styles.tinyText]}>{t('Female')}</Text>
                </View>


            </ScrollView>
     
    );
}




export default Services