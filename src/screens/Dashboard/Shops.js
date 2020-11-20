import React from 'react';
import { Pressable, View, Image, Text, StatusBar, ImageBackground, ScrollView, I18nManager } from 'react-native';
import commonStyle from '../../assets/Styles'
import { SCREEN_HEIGHT, SCREEN_WIDTH, IS_RTL } from '../../utils';
import {useTranslation} from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Shops({navigation}) {
  const {t, i18n} = useTranslation();
  return (
    <ScrollView
      style={{ flexDirection: IS_RTL() ? 'row-reverse' : 'row', marginTop: 16, marginLeft: 5 }}

      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >

      <View style={{ widht: 160, height: 140, flexDirection: 'column', justifyContent: 'center' }}>
        <Pressable >
          <ImageBackground borderRadius={10} source={require('../../assets/images/preview.png')} style={{
            width: 128, height: 128, marginLeft: 15,
            marginRight: 0, justifyContent: 'flex-end', overflow: 'hidden',
          }}>
            <LinearGradient
              colors={['#00000000', '#00000010', '#00000090']}
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                borderRadius: 10
              }}
            >
              <Text style={[commonStyle.normalText, { color: '#fff', marginBottom: 10 }]}>{t('Toys | 112')}</Text>
            </LinearGradient>
          </ImageBackground>
        </Pressable>

      </View>


      <View style={{ widht: 160, height: 140, flexDirection: 'column', justifyContent: 'center' }}>
        <TouchableOpacity >
          <ImageBackground borderRadius={10} source={require('../../assets/images/preview.png')} style={{
            width: 128, height: 128, marginLeft: 15,
            marginRight: 0, justifyContent: 'flex-end', overflow: 'hidden',
          }}>
            <LinearGradient
              colors={['#00000000', '#00000010', '#00000090']}
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                borderRadius: 10
              }}
            >
              <Text style={[commonStyle.normalText, { color: '#fff', marginBottom: 10 }]}>{t('Toys | 112')}</Text>
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>

      </View>


      <View style={{ widht: 160, height: 140, flexDirection: 'column', justifyContent: 'center' }}>
        <TouchableOpacity >
          <ImageBackground borderRadius={10} source={require('../../assets/images/preview.png')} style={{
            width: 128, height: 128, marginLeft: 15,
            marginRight: 0, justifyContent: 'flex-end', overflow: 'hidden',
          }}>
            <LinearGradient
              colors={['#00000000', '#00000010', '#00000090']}
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                borderRadius: 10
              }}
            >
              <Text style={[commonStyle.normalText, { color: '#fff', marginBottom: 10 }]}>{t('Toys | 112')}</Text>
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>

      </View>


      {/* <CommonBackground  {...props} />
      <CommonBackground {...props}/>
      <CommonBackground {...props}/> */}

    </ScrollView>

  );
}

// const CommonBackground = React.forwardRef((props, ref) => {
//   console.log("Nested Navigation in child", props)
//   return (
//     <View style={{ widht: 160, height: 140, flexDirection: 'column', justifyContent: 'center' }}>
//       <TouchableOpacity onPress={() => props.navigate('Search')}>
//         <ImageBackground borderRadius={10} source={require('../../assets/images/preview.png')} style={{
//           width: 128, height: 128, marginLeft: 15,
//           marginRight: 0, justifyContent: 'flex-end', overflow: 'hidden',
//         }}>
//           <LinearGradient
//             colors={['#00000000', '#00000010', '#00000090']}
//             style={{
//               flex: 1,
//               justifyContent: 'flex-end',
//               borderRadius: 10
//             }}
//           >
//             <Text style={[commonStyle.normalText, { color: '#fff', marginBottom: 10 }]}>Toys | 112</Text>
//           </LinearGradient>
//         </ImageBackground>
//       </TouchableOpacity>

//     </View>)
// })

export default Shops