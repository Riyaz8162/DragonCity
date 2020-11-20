import React, { useState, useRef } from 'react';
import { Text, View, Image, SafeAreaView, StatusBar, ImageBackground, StyleSheet, I18nManager } from 'react-native';
import Entypo from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AppBG from '../../templates/AppBG';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils';
import commonStyle from '../../assets/Styles'
import Explore from './Explore'
import Similarshopslist from './Similarshopslist'
import Services from './Services'
import { ScrollView } from 'react-native-gesture-handler';
import Styles from '../../screens/Dashboard/styles'
import Carousel, { Pagination } from "react-native-snap-carousel";
import LinearGradient from 'react-native-linear-gradient';

const sliderDatas = [{
    id: 1,
    image: require('../../assets/images/preview.png')
},
{
    id: 2,
    image: require('../../assets/images/shopping.jpg')
},
{
    id: 3,
    image: require('../../assets/images/preview.png')
},
{
    id: 4,
    image: require('../../assets/images/shopping.jpg')
},
{
    id: 5,
    image: require('../../assets/images/preview.png')
},
{
    id: 6,
    image: require('../../assets/images/preview.png')
},
];

function SimilarShops({ navigation }) {
    const [entries, setEntry] = useState(sliderDatas);
    const [slideIndex, setSlideIndex] = useState(0);
    const carouselRef = useRef();
    console.log(I18nManager.lan)
    const _renderItem = ({ item, index }) => {
        return (
            <View style={{ flex: 1, }}>
<StatusBar hidden/>
                <ImageBackground source={item.image} style={{ width: '100%', height: '100%', }}
                    resizeMode={'cover'} >
                    <View style={{ flexDirection:"row",top:20 }}>
                        <Image source={require('../../assets/images/back.png')}
                            style={{
                                padding: 10,
                                left: 20,
                                width:25, height:25, 
                            }}
                            resizeMode={'contain'}
      
      />
                        <Text style={Styles.boldText}></Text>
                        <Image source={require('../../assets/images/bookmark.png')}
                            // style={{
                            //     padding: 10,
                            //    right:30, marginTop: 0,
                            //    width:"10%", height: "10%",
                            // }}
                            style={{
                                right:10,width:25,height:25,
                            }}
                            resizeMode={'contain'}
                        />
                        
                    </View>
                </ImageBackground>

                {/* <ImageBackground source={require('../../assets/images/headerLogo.png')} style={{ width: 250, height: '100%', borderBottomRightRadius: 8,marginBottom:'2%' }} /> */}
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1 }}>

                    <View style={{
                        width: SCREEN_WIDTH, height: SCREEN_HEIGHT * .50, backgroundColor: 'transparent', borderBottomRightRadius: 0, borderTopRightRadius: 25, borderBottomLeftRadius: 50, marginRight: '5%',
                        overflow: 'hidden', justifyContent: 'center', alignItems: 'center'
                    }}>

                        <Carousel
                            layout={"default"}
                            ref={carouselRef}
                            data={entries}
                            renderItem={_renderItem}
                            sliderWidth={SCREEN_WIDTH}
                            itemWidth={SCREEN_WIDTH}
                            width={SCREEN_WIDTH}
                            onSnapToItem={(slideIndex) => setSlideIndex(slideIndex)}
                        />

                        <View style={{ flex: 1, justifyContent: 'center', width: SCREEN_WIDTH, height: 50, bottom: 0, position: 'absolute', }}>
                            <View style={{ flexDirection: 'row', margin: 30 }}>
                                <ImageBackground style={{ width: "60%", height: 45, bottom: 20 }} borderRadius={20} source={require('../../assets/images/smallRectangle.png')} >
                                    <Image source={require('../../assets/images/call.png')}
                                        style={{
                                            padding: 10,
                                            marginLeft: 30, top: 10,
                                            width: 10.46, height: 7.1, width: 10.46,
                                        }}
                                        resizeMode={'contain'}
                                    />
                                    <Text style={[commonStyle.normalText, { marginRight: "25%", fontSize: 18, bottom: 8.5, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }]}>Call</Text>
                                </ImageBackground>
                                <ImageBackground style={{ width: "80%", height: 45, bottom: 20, right: 65 }} borderRadius={20} source={require('../../assets/images/Rectangle.png')} >
                                    <Image source={require('../../assets/images/directionswalk.png')}
                                        style={{
                                            padding: 10,
                                            marginLeft: 60, top: 10,
                                            width: 10.46, height: 7.1, width: 10.46, height: 7.1,
                                        }}
                                        resizeMode={'contain'}
                                    />
                                    <Text style={[commonStyle.normalText, { marginRight: "10.5%", fontSize: 18, bottom: 8.5, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }]}>Navigate</Text>
                                </ImageBackground>
                            </View>
                            <LinearGradient
                                colors={['#00000000', '#00000025', '#00000050', '#00000090']}
                                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}
                            />
                            <View style={{
                                width: SCREEN_WIDTH, alignItems: 'center', flexDirection: 'row', justifyContent: 'center',
                                bottom: 10, position: 'absolute', marginLeft: 50,
                            }}>
                                <PaginationIndicators data={entries} activeIndex={slideIndex} />
                            </View>
                        </View>
                    </View>

                </View>

                <View style={{ height: 150 }}>
                    <View style={{ flexDirection: 'row', marginTop: 35 }}>
                        <View style={{ flexDirection: 'column', }}>
                            <Text style={[Styles.boldText, { fontSize: 13 }]}>ASNA HOME DECORATIONS</Text>
                            <Text style={[Styles.boldText, { fontSize: 13 }]}>BAHRAIN CO. W.L.L</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginRight: 20 }}>
                            <Image style={{ width: 16, height: 30, right: 45 }} source={require('../../assets/images/fbred.png')} />
                            <Image style={{ width: 30, height: 30, right: 33 }} source={require('../../assets/images/instared.png')} />
                            <Image style={{ width: 32, height: 28, right: 20 }} source={require('../../assets/images/emailred.png')} />
                        </View>
                    </View>
                    <View style={{ marginLeft: 17, top: 10, flexDirection: 'column' }}>
                        <Text style={[commonStyle.normalText, { color: 'black', textAlign: 'left', fontFamily: 'Calibri Bold', }]}>Home Furnishing | 52</Text>
                        <Text style={[commonStyle.normalText, { color: '#7a7a7a', textAlign: 'left', }]}>Your inspiration for gorgeous decor design is found </Text>
                        <Text style={[commonStyle.normalText, { color: '#7a7a7a', textAlign: 'left', fontFamily: 'Calibri Regular', }]}>here.</Text>
                    </View>
                </View>



                <View style={{ height: SCREEN_HEIGHT * .29, width: SCREEN_WIDTH * 1, marginBottom: 20, }}>
                    <View style={{ flexDirection: 'row', marginTop: 36, marginBottom: 10 }}>
                        <Text style={Styles.boldText}>SIMILAR SHOPS</Text>
                        <Text style={Styles.mediumText}>View All</Text>
                    </View>

                    <Similarshopslist />
                </View>


            </ScrollView>

        </SafeAreaView>

    );
}

const PaginationIndicators = ({ data, activeIndex }) => (
    data.length > 0 && data.map((d, i) => (
        <View key={`id${i}`} style={{
            width: 15, height: 3, backgroundColor: activeIndex == i ? '#bb1201' : '#fff', borderRadius: 5,
            marginLeft: 15
        }} />
    ))
)

export default SimilarShops