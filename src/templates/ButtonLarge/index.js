import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
import {useTranslation} from 'react-i18next';
const width = Dimensions.get('window').width


const Button = ({text,  onPress, type = 'filled', bordered = false, size = 'large' }) => {
  const large = width / 1
  const small = width / 2
  const btnSize = size === 'large' ? large : small
  const btnBgColor = type === 'filled' ? '#3f51b5' : 'transparent'
  const btnTextColor = type === 'filled' ? '#ffffff' : '#6371c2'
  const btnBorderRadius = bordered ? 30 : 5
  const {t, i18n} = useTranslation();

  const containerCommonStyle = {
    width:258,
    height:45,
    borderRadius:100,
    margin:22,
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
        <ImageBackground style={containerCommonStyle} source={require('./../../assets/images/btnLarge.png')}>
        <Text style={[textCommonStyle]}>  {t(text)} </Text>
        </ImageBackground>
    </TouchableOpacity>
  )
}

export default Button