import React, { useState, useRef } from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  StyleSheet,
  I18nManager,
} from 'react-native';
import Entypo from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AppBG from '../../templates/AppBG';
import { SCREEN_HEIGHT, SCREEN_WIDTH, IS_INVALID_STRING } from '../../utils';
import Explore from './Explore';
import Shops from './Shops';
import Services from './Services';
import { ScrollView } from 'react-native-gesture-handler';
import Styles from '../../screens/Dashboard/styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import {useTranslation} from 'react-i18next';

const sliderDatas = [
  {
    id: 1,
    image: require('../../assets/images/preview.png'),
    desc: 'Welcome to the vast varity of Shops.',
  },
  {
    id: 2,
    image: require('../../assets/images/shopping.jpg'),
    desc: 'Get it offers',
  },
  {
    id: 3,
    image: require('../../assets/images/preview.png'),
  },
  { id: 4, image: require('../../assets/images/shopping.jpg') },

];

function HomeScreen ({navigation})  {
  console.log("Home navigation",navigation)
  const {t, i18n} = useTranslation();
  const [entries, setEntry] = useState(sliderDatas);
  const [slideIndex, setSlideIndex] = useState(0);
  const carouselRef = useRef();

  const _renderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={item.image}
          style={{ width: '100%', height: '100%' }}
          resizeMode={'cover'}
        />
        {/* <ImageBackground source={require('../../assets/images/headerLogo.png')} style={{ width: 250, height: '100%', borderBottomRightRadius: 8,marginBottom:'2%' }} /> */}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <ScrollView showsVerticalScrollIndicator={false}

      >
        <View style={{ flex: 1, }}>
          <AppBG>
            <StatusBar translucent backgroundColor={'transparent'} />

            <View
              style={{
                flexDirection: 'row',
                marginTop: StatusBar.currentHeight + 10,
                marginBottom: 5,
              }}>
              <Entypo
                onPress={() => navigation.openDrawer()}
                name="menu"
                color={'#fff'}
                size={28}
                style={{ marginTop: 8, marginRight: 10 }}
              />
              <Image
                source={require('../../assets/images/headerLogo.png')}
                style={{
                  width: SCREEN_WIDTH * 0.66,
                  height: SCREEN_HEIGHT * 0.07,
                }}
              />
              <Entypo
                name="search"
                color={'#fff'}
                size={28}
                style={{ marginTop: 8, marginLeft: 12 }}
              />
              <Fontisto
              onPress={()=>navigation.navigate('Notification')}
                name="bell"
                color={'#fff'}
                size={22}
                style={{ marginTop: 8, marginLeft: 12 }}
              />
            </View>

            <View
              style={{
                width: SCREEN_WIDTH * 0.99,
                height: SCREEN_HEIGHT * 0.35,
                backgroundColor: 'transparent',
                borderBottomRightRadius: 25,
                borderTopRightRadius: 25,
                marginRight: '5%',
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              {/* <ImageBackground source={require('../../assets/images/headerLogo.png')} style={{ width: 250, height: '100%', borderBottomRightRadius: 8,marginBottom:'2%' }} /> */}

              <Carousel
                layout={'default'}
                ref={carouselRef}
                data={entries}
                renderItem={_renderItem}
                sliderWidth={SCREEN_WIDTH}
                itemWidth={SCREEN_WIDTH}
                width={SCREEN_WIDTH}
                // autoplay={true}
                // autoplayInterval={1000}
                onSnapToItem={(slideIndex) => setSlideIndex(slideIndex)}
              />

              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  width: SCREEN_WIDTH,
                  height: 50,
                  bottom: 0,
                  position: 'absolute',

                }}>
                <LinearGradient
                  colors={['#00000000', '#00000025', '#00000050', '#00000090']}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                  }}
                />
                <View style={{
                  flexDirection: 'column', ...StyleSheet.absoluteFill,
                  justifyContent: 'center', marginBottom: 15
                }}>
                  <Text style={{
                    color: '#fff', textAlign: 'center', fontWeight: '700',
                    fontSize: 16
                  }}>{IS_INVALID_STRING(entries[slideIndex].desc) ? null : entries[slideIndex].desc}</Text>
                </View>
                <View
                  style={{
                    width: SCREEN_WIDTH,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    bottom: 7,
                    position: 'absolute',
                  }}>

                  <PaginationIndicators
                    data={entries}
                    activeIndex={slideIndex}
                  />

                </View>
              </View>
            </View>
          </AppBG>
        </View>

        <View style={{marginTop: 36, }}>
          <View style={Styles.homeParentView}>
            <Text style={Styles.boldText}>{t('Explore')}</Text>
            <Text style={Styles.mediumText}>{t('View All')}</Text>
          </View>
          <View style={{marginTop:16,height:85}}>
            <Explore />
          </View>
        </View>

        <View style={{ width: SCREEN_WIDTH, marginTop: 36, }}>
          <View style={Styles.homeParentView}>
            <Text style={Styles.boldText}>{t('FEATURED SHOPS')}</Text>
            <Text style={Styles.mediumText}>{t('View All')}</Text>
          </View>
          <Shops {...navigation} />
        </View>

        <View style={{ width: SCREEN_WIDTH,marginTop:36 }}>
          <View style={Styles.homeParentView}>
            <Text style={Styles.boldText}>{t('Services')}</Text>
            <Text style={Styles.mediumText}>{t('View All')}</Text>
          </View>
          <Services />
        </View>

        <View style={{width: SCREEN_WIDTH, marginBottom: 100,marginTop:36 }}>
          <View style={Styles.homeParentView}>
            <Text style={Styles.boldText}>{t('MOST VIEWED SHOPS')}</Text>
            <Text style={Styles.mediumText}>{t('View All')}</Text>
          </View>

          <Shops {...navigation}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const PaginationIndicators = ({ data, activeIndex }) =>
  data.length > 0 &&
  data.map((d, i) => (
    <View
      key={`id${i}`}
      style={{
        width: 25,
        height: 3,
        backgroundColor: activeIndex == i ? '#bb1201' : '#fff',
        borderRadius: 5,
        marginLeft: 15,
      }}
    />
  ));

export default HomeScreen;
