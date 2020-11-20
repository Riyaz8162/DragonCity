import React from 'react';
import { Button, View, Image, Text, StatusBar, ImageBackground, ScrollView } from 'react-native';
import Entypo from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import commonStyle from '../../assets/Styles'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils';
import Styles from '../../screens/Dashboard/styles'

// const similarshopDatas = [{
//   id: 1,
//   image: require('../../assets/images/preview.png')
// },
// {
//   id: 2,
//   image: require('../../assets/images/preview.jpg')
// },
// {
//   id: 3,
//   image: require('../../assets/images/preview.png')
// },
// {
//   id: 4,
//   image: require('../../assets/images/preview.jpg')
// },
// {
//   id: 5,
//   image: require('../../assets/images/preview.png')
// },
// {
//   id: 6,
//   image: require('../../assets/images/preview.png')
// },
// ];
function Similarshopslist({ navigation }) {
  // const [issimilarshop, setsimilarshop] = useState(similarshopDatas);
  return (
    <ScrollView
      style={{ marginLeft: 15, marginTop:10, }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <CommonBackground />
      <CommonBackground />
      <CommonBackground />
      <CommonBackground />
    </ScrollView>

  );
}


function CommonBackground() {
  return (
    <View style={{ widht: 160, height: 160, flexDirection: 'column' }}>
      <ImageBackground borderRadius={20} source={require('../../assets/images/preview.png')} style={{ width: 100, height: 100, marginLeft: 15 }}>
        <Text style={[commonStyle.normalText, { top: 75, }]}>002</Text>
      </ImageBackground>

    </View>)
}

export default Similarshopslist