import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
} from 'react-native';
import commonStyle from '../../assets/Styles';
import {useTranslation} from 'react-i18next';
import Button from '../../templates/ButtonLarge';
import AppBg from '../../templates/AppBG';
import OTPInput from 'react-native-otp';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils';

const otp = ({navigation})=> {
  const {t, i18n} = useTranslation();
  const [isClick, setClick] = useState(0);
  return (
    <AppBg>
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={{flex: 1, marginTop: StatusBar.currentHeight + 10}}>
            <View
              style={{
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 150, height: 150, marginTop: 50}}
                source={require('../../assets/images/otpImage.png')}
              />
            </View>
            <View style={{marginTop: 100}}>
              <Text
                style={[
                  commonStyle.normalText,
                  {
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                  },
                ]}>
                Enter the code, you received on
              </Text>
              <Text
                style={[
                  commonStyle.normalText,
                  {
                    marginTop: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                  },
                ]}>
                {' '}
                registered number
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                alignSelf: 'center',
                marginTop: 21,
              }}>
              <OTPInput
                // value={this.state.otp}
                // onChange={this.handleOTPChange}
                tintColor="transparent"
                offTintColor="transparent"
                otpLength={4}
                cellStyle={{
                  backgroundColor: '#fff',
                  borderRadius: 60 / 2,
                  height: 60,
                  width: 60,
                  margin: 20,
                  color: '#960004',
                  fontSize: 22,
                }}
                // cellStyle={{ backgroundColor: '#fff', borderRadius: 70 / 2, height: 70, width: 70,justifyContent:'center',textAlign:'center',alignSelf:'center',margin:10,color:'#960004',}}
              />
              <View style={{marginTop: 5}}>
                <Button text="Verify" type="outlined" bordered size="small" 
                onPress={()=>navigation.navigate('Dashboard')}/>
              </View>
              <View
                style={{
                  marginTop: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                <Text
                  style={[
                    commonStyle.loginSmallText,
                    {textAlign: 'center', marginTop: 12},
                  ]}>
                  Didn't receive a verification code?{' '}
                </Text>
                {/* <Text style={[commonStyle.normalText, { textAlign: 'center', marginBottom: 34, }]}>Resend code <View style={{borderWidth: 1, borderColor: '#fff',height:20,marginTop:30,}}></View> <Text style={{}}>Change number</Text></Text> */}
                <View
                  style={{flexDirection: 'row', marginTop: 5, marginRight: 40}}>
                  <Text
                    style={[
                      commonStyle.normalText,
                      {textAlign: 'center', marginBottom: 34, marginLeft: 50},
                    ]}>
                    Resend code
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: '#fff',
                      height: 13,
                      marginLeft: 5,
                      marginTop: 5,
                    }}></View>
                  <Text style={[commonStyle.normalText, {marginLeft: 5}]}>
                    Change number
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </AppBg>
  );
}
export default otp;
