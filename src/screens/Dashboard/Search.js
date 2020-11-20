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
import { ScrollView, TextInput } from 'react-native-gesture-handler';
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

function Search({ navigation }) {
    const [entries, setEntry] = useState(sliderDatas);
    const [slideIndex, setSlideIndex] = useState(0);
    const carouselRef = useRef();
    console.log(I18nManager.lan)
    const _renderItem = ({ item, index }) => {
        return (
            <View style={{ flex: 1, }}>
                <StatusBar hidden />


                {/* <ImageBackground source={require('../../assets/images/headerLogo.png')} style={{ width: 250, height: '100%', borderBottomRightRadius: 8,marginBottom:'2%' }} /> */}
            </View>
        );
    }

    return (
        <View style={{ flex: 1, }}>
            <View style={{ width: "90%", flexDirection: "row",marginTop:20 }}>
                <TextInput
                    style={{ color: '#000', }}
                    placeholder="Search"
                    placeholderTextColor="#fff"
                    underlineColorAndroid="transparent"
                    style={[commonStyle.sectionStyle, {
                        left: 0, marginBottom: '6%', color: '#fff', paddingLeft: 30,
                        margin: 15,
                        height: 45,
                        borderColor: '#a7130c', backgroundColor: '#a7130c',
                        borderBottomWidth: 2,
                        borderWidth: 2, fontFamily: 'CALIBRI', fontSize: 16, borderRadius: 8, top: 15
                    }]}
                />
                <Text style={{ top: 40,  fontFamily: 'Calibri Bold', fontSize: 16, }}>Cancel</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', bottom: 20 }}>
                <ImageBackground style={{ width: "48%", height: 20, bottom: 0, top: 30, left: 60, }} source={require('../../assets/images/RectangleYellow.png')} >
                    <Text style={[commonStyle.normalText, { marginRight: "25%", fontSize: 14, bottom: 8.5, justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: 'black', top: 0, right: 28 }]}>Shop Name</Text>
                </ImageBackground>
                <ImageBackground style={{ width: "48%", height: 20, bottom: 0, top: 30, left: 20 }} source={require('../../assets/images/RectangleYellow.png')} >
                    <Text style={[commonStyle.normalText, { marginRight: "25%", fontSize: 14, bottom: 8.5, justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: 'black', top: 0, right: 28 }]}>Shop No.</Text>
                </ImageBackground>
                <ImageBackground style={{ width: "48%", height: 20, bottom: 0, top: 30, right: 20 }} source={require('../../assets/images/RectangleYellow.png')} >
                    <Text style={[commonStyle.normalText, { marginRight: "25%", fontSize: 14, bottom: 8.5, justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: 'black', top: 0, right: 28 }]}>Products</Text>
                </ImageBackground>
            </View>

            <View style={{ top: 30,width:"100%" }}>
                <ScrollView
                    style={{ marginLeft: 15, marginTop: 10, }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={{ flexDirection: 'row',width:300 }}>
                        <ImageBackground borderRadius={20} source={require('../../assets/images/preview.png')} style={{ width: 80, height: 80, marginLeft: 5 }}>
                        </ImageBackground>
                        <View style={{ flexDirection: 'column', bottom: 60, left: 10,width:'60%' }}>
                            <Text style={[commonStyle.normalText, { top: 75,fontSize:14.5,color:"#7a7a7a" }]}>Asna Home Decorations....</Text>
                            <View style={{ flexDirection: 'row', top: 10 , left: 10}}>
                                <Text style={[commonStyle.normalText, { top: 75,fontSize:13, fontFamily: 'Calibri Bold',color:'black' }]}>Toys</Text>
                                <Image source={require('../../assets/images/directionswalkred.png')}
                                style={{
                                    padding: 9,
                                    marginLeft: 5, top: 78,
                                    width: 10.46, height: 7.1, width: 10.46, height: 7.1,
                                }}
                                resizeMode={'contain'}
                            />
                                <Text style={[commonStyle.normalText, { top: 75,right:3,fontSize:13,color:'black'  }]}>137 Steps</Text>
                                <Image source={require('../../assets/images/clock.png')}
                                style={{
                                    padding: 8,
                                    marginLeft: 5, top: 78,
                                    width: 10.46, height: 7.1, width: 10.46, height: 5,
                                }}
                                
                                resizeMode={'contain'}
                            />
                                <Text style={[commonStyle.normalText, { top: 75, left: 3,fontSize:13,color:'black'  }]}>15 min</Text>

                            </View>

                        </View>
                      

                    </View>
                    <View style={{ right:30,width: 100, }}>
                      
                      <ImageBackground style={{ width: 120, height: 39, top:20, position:'absolute', }} borderRadius={20} source={require('../../assets/images/Rectangle.png')} >
                          <Image source={require('../../assets/images/directionswalk.png')}
                              style={{
                                  padding: 10,
                                  marginLeft: 20, top: 8,
                                  width: 10.46, height: 7.1, width: 10.46, height: 7.1,
                              }}
                              resizeMode={'contain'}
                          />
                          <Text style={[commonStyle.normalText, {  fontSize: 15, bottom: 12, justifyContent: 'center', alignItems: 'center', textAlign: 'center',paddingLeft:18 }]}>Navigate</Text>
                      </ImageBackground>
                      </View>


                </ScrollView>
            </View>





        </View>
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

export default Search