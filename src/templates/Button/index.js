import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
import {useTranslation} from 'react-i18next';
import {SCREEN_WIDTH,SCREEN_HEIGHT} from '../../utils';

const Button = ({text,  onPress, type = 'filled', bordered = false, size = 'large' }) => {
  const large = SCREEN_WIDTH / 1
  const small = SCREEN_WIDTH / 2
  const btnSize = size === 'large' ? large : small
  const btnBgColor = type === 'filled' ? '#3f51b5' : 'transparent'
  const btnTextColor = type === 'filled' ? '#ffffff' : '#6371c2'
  const btnBorderRadius = bordered ? 30 : 5
  const {t, i18n} = useTranslation();

  const containerCommonStyle = {
    width:200,
    height:48,
    borderRadius:100,
    margin:12,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    textAlign:'center'
  }

  const textCommonStyle = {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    lineHeight:20
  }

  return (
    <TouchableOpacity onPress={onPress} >
        <ImageBackground style={containerCommonStyle} source={require('./../../assets/images/btnSmall.png')}>
        <Text style={[textCommonStyle]}>  {t(text)} </Text>
        </ImageBackground>
    </TouchableOpacity>
  )
}

export default Button