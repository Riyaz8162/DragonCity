import React, { useLayoutEffect } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
    I18nManager,StatusBar,
    ImageBackground,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import RNRestart from 'react-native-restart';
import commonStyle from '../../assets/Styles'
import AppBg from '../../templates/AppBG'
import Button from '../../templates/Button'
const Language = ({ navigation }) => {
    const { t, i18n } = useTranslation();

    return (

        <AppBg>
            <StatusBar translucent backgroundColor={'transparent'}/>
            <Text style={commonStyle.textMedium}>Language</Text>
            
            <Image style={{width:312,height:164,marginTop:72}}
             source={require('../../assets/images/languagesLogo.png')}/>
            <Text style={[commonStyle.textSmall, { marginTop:81 }]}>Chosse a language to continue</Text>

            <View style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center',marginTop:21 }}>

                <Button
                    text='العربية'
                    type='outlined'
                    bordered
                    size='small'
                    onPress={() => {
                        i18n.changeLanguage('ar')
                            .then(() => {
                    
                                I18nManager.forceRTL(i18n.language === 'ar');
                               // RNRestart.Restart();
                            });
                        navigation.navigate('RegistrationHome')
                    }}
                />

                <Button
                    text='English'
                    type='outlined'
                    bordered
                    size='small'
                    onPress={() => {
                        i18n.changeLanguage('en')
                            .then(() => {
                               
                                I18nManager.forceRTL(i18n.language === 'ar');
                                //RNRestart.Restart();
                            });
                        navigation.navigate('RegistrationHome')
                    }}
                />

            </View>
        </AppBg >
    );
};


export default Language;