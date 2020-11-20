/* Login Inside of a component*/
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  I18nManager,
  touch,
  TouchableOpacity,
} from 'react-native';
import commonStyle from '../../assets/Styles';
import {useTranslation} from 'react-i18next';
import Button from '../../templates/ButtonLarge';
import {SCREEN_HEIGHT, SCREEN_WIDTH,IS_RTL} from '../../utils';
import CommonStyle from '../../assets/Styles';
import Entypo from 'react-native-vector-icons/MaterialIcons'

const Login = React.forwardRef((props, ref) => {
  const {t, i18n} = useTranslation();
  let [isClick, setClick] = useState(0);
  let [isValidatephnInput, setisValidatephnInput] = useState(1);
  const [text, setText] = useState('');
  const [email, setEmail] = useState('')
  let [isValidaEmailInput, setisValidateemailInput] = useState(1);
  
  const mobile = (text) => {
   setText(text)
    if (text == undefined || text =="") {
    setisValidatephnInput(0);
    }
    else{
    setisValidatephnInput(1);
    }
  };

  const login = () => {
    // if (text == undefined || text =="") {
    //   setisValidatephnInput(0);
    // }
    // else {
    //   // setisValidatephnInput(1);
    //   props.navigate('otp')
    // }
    props.navigate('otp')
  }


  const emailLogin = () => {
    // if (email == undefined || email =="") {
    //   setisValidateemailInput(0);
    // }
    // else{
    //   setisValidateemailInput(1);
    // }
    props.navigate('BottomNavigation')
  }


  return (
    <View style={{flex: 1}}>
      <View style={{marginTop: 22, padding: 50, marginLeft: '5%'}}>
        <Text style={commonStyle.welcomeText}>{t('Welcome')}</Text>
      </View>

      {isClick === 0 ? (
        <View style={commonStyle.loginParentView}>
          <View
            style={{
              backgroundColor: '#fff',
              width: 72,
              borderRadius: 10,
              marginRight: '2%',
              justifyContent: 'center',
            }}>
            <Text
              style={[
                commonStyle.loginSmallText,
                {color: '#000', textAlign: 'center'},
              ]}>
              Phone no
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'transparent',
              width: 72,
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <Text
              onPress={() => setClick(1)}
              style={[commonStyle.loginSmallText, {textAlign: 'center'}]}>
              Email ID
            </Text>
          </View>
        </View>
      ) : (
        <View style={commonStyle.loginParentView}>
          <View
            style={{
              backgroundColor: 'transparent',
              width: 72,
              borderRadius: 10,
              marginRight: '2%',
              justifyContent: 'center',
            }}>
            <Text
              onPress={() => setClick(0)}
              style={[
                commonStyle.loginSmallText,
                {color: '#fff', textAlign: 'center'},
              ]}>
              Phone no
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              width: 72,
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <Text
              style={[
                commonStyle.loginSmallText,
                {textAlign: 'center', color: '#000'},
              ]}>
              Email ID
            </Text>
          </View>
        </View>
      )}

      {isClick === 0 ? (
        <View>
          <View style={[commonStyle.sectionStyle, {marginBottom: '6%'}]}>
            <TextInput
              style={{ flex: 1, color: '#fff',textAlign:IS_RTL()?'right':'left' }}
              value={setText}
               onChangeText={mobile}
               maxLength={10} 
               keyboardType={'phone-pad'} 
              placeholder={t('Phone')}
              placeholderTextColor="#fff"
              underlineColorAndroid="transparent"
            />
             <Image source={require('../../assets/images/phone.png')}
              style={{ ...commonStyle.imageStyle, width: 10.46, height: 7.1, }}
              resizeMode={'contain'}
            />
          </View>
          <View style={{ marginLeft: 45, width: "80%", alignItems: "flex-start" }}>
            {isValidatephnInput === 0 ?
              <Text style={[commonStyle.tinyText,{color:'#000'}]}>*Shouldn't be blank</Text>
              :null}
          </View>
          <Button
            onPress={login}
            text='GET CODE'
            type='outlined'
            bordered
            size="small"
          />
        </View>
      ) : (
        <View>
          <View style={[commonStyle.sectionStyle, {marginBottom: '6%'}]}>
            <TextInput
              style={{ flex: 1, color: '#fff',textAlign:IS_RTL() ?'right':'left' }}
              placeholder={t('Email')}
              value={setEmail}
              //onChangeText={}
              placeholderTextColor="#fff"
              underlineColorAndroid="transparent"
            />
            <Image
              source={require('../../assets/images/mail.png')}
              style={{...commonStyle.imageStyle, width: 10.46, height: 7.1}}
              resizeMode={'contain'}
            />
          </View>
          <View style={{ marginLeft: 45, width: "80%", alignItems: "flex-start" }}>
            {isValidaEmailInput === 0 ?
              <Text style={[commonStyle.tinyText,{color:'#000'}]}>*Shouldn't be blank</Text>
              :null}
          </View>

          {/* <Text style={commonStyle.placeHolderName}>Password</Text> */}
          <View style={[commonStyle.sectionStyle, { marginBottom: '6%', margin: 0 }]}>
            <TextInput
              style={{ flex: 1, color: '#fff',textAlign:IS_RTL()?'right':'left' }}
              placeholder={t('Password')}
              placeholderTextColor="#fff"
              underlineColorAndroid="transparent"
            />
            <Image source={require('../../assets/images/eye-close.png')}
              style={{ ...commonStyle.imageStyle, width: 10.46, height: 7.1, }}
              resizeMode={'contain'}
            />
          </View>

          <Button
          onPress={emailLogin}
            text='LOGIN'
            type='outlined'
            bordered
            size="small"
          />
        </View>
      )}

      <Text
        style={{...commonStyle.normalText, padding: 8}}
        onPress={() => props.navigate('BottomNavigation')}>
        SKIP
      </Text>

      <View
        style={{
          width: SCREEN_WIDTH * 0.6,
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: '10%',
        }}>
        <View
          style={{
            borderBottomWidth: 0.7,
            borderColor: '#fff',
            width: SCREEN_WIDTH * 0.6,
          }}
        />

        <Text style={[CommonStyle.normalText, { marginTop: '6%' }]}>{t('Or Login using social media')}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: SCREEN_WIDTH * .6, marginTop: '10%' }}>
         
          {/* <Image style={{ width: 16, height: 16 }} source={require('../../assets/images/mail.png')} /> */}
          <Image style={{ width: 16, height: 16 }} source={require('../../assets/images/insta.png')} />
          <Image style={{ width: 16, height: 16 }} source={require('../../assets/images/mail.png')} />
        </View>
      </View>
    </View>
  );
});

export default Login;
