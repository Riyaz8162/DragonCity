
import React, { useEffect, useState } from 'react';
import { SafeAreaView, LayoutAnimation, Modal, View, Text, ScrollView, StatusBar, TouchableOpacity, Platform, Image, I18nManager, ImageBackground } from 'react-native';
import Styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils'
import AppBg from '../../templates/AppBG'
import { TextInput } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import {useTranslation} from 'react-i18next';


function Profile({ navigation }) {
    const {t, i18n} = useTranslation();
    const [isPhoneNum, setPhoneNum] = useState(0);
    const [isSavedShop, setSavedShop] = useState(0);
    const [phonenumber, setPhonenUm] = useState('+923  |  87789998  |')
    const [isEmailValid, setEmailValid] = useState(0);
    const [isEmail, setEmail] = useState('abc@gmail.com');
    const [isLanguage, setLanguage] = useState(0)
    const [modalVisible, setModalVisible] = useState(false);
    const [pickPhotoUri, setPhotoUri] = useState(null)
    const [pickPhotoPath, setPhotoPath] = useState('')
    const [pickPhotoType, setPhotoType] = useState('')
    const [pickPhotoFile, setPhotoFileName] = useState('')

    const updateShops = () => { isSavedShop == 0 ? setSavedShop(1) : setSavedShop(0) };

    const updatePhnNUm = () => { isPhoneNum == 0 ? setPhoneNum(1) : setPhoneNum(0) };

    const updateEmail = () => { isEmailValid == 0 ? setEmailValid(1) : setEmailValid(0) };

    const updateLanguage = () => { isLanguage == 0 ? setLanguage(1) : setLanguage(0) };

    const modalNull = () => { setModalVisible(false) }

    const handleChoosePhoto = () => {
        setModalVisible(false);
        let options = { noData: true }
        ImagePicker.launchCamera(options, response => {
            if (response.uri) {
                setPhotoUri(response.uri),
                    setPhotoPath(response.path),
                    setPhotoType(response.type),
                    setPhotoFileName(response.fileName)
            }
        })
    }

    const handleChoosePhoto1 = () => {
        setModalVisible(false);
        let options = { noData: true }
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                setPhotoUri(response.uri),
                    setPhotoPath(response.path),
                    setPhotoType(response.type),
                    setPhotoFileName(response.fileName)
            }
        })
    }



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', }}>
            <ScrollView>
                <View style={{ width: SCREEN_WIDTH * 1, height: SCREEN_HEIGHT * .35, backgroundColor: '#fff', overflow: 'hidden', borderRadius: 24 }}>
                    <AppBg>
                        <StatusBar translucent backgroundColor={'transparent'} />
                        
                        {pickPhotoUri == null ?
                        <View style={{ width: 134, height: 134, borderRadius: 134 / 2, marginTop: 50, backgroundColor: '#E4E4E4', marginBottom: 10, justifyContent: 'center', alignSelf: 'center', alignContent: 'center' }}>
                             <Image style={{ width: 67, height: 67, alignItems: 'center', alignSelf: 'center', }} tintColor={'#000'} source={require('../../assets/images/Dashboard/user.png')} /> 
                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                                <View style={{ width: 24, height: 24, alignSelf: 'flex-end', alignContent: 'center', alignItems: 'center' }}>
                                    <Image source={{ width: 24, height: 24, }} source={require('../../assets/images/Dashboard/plus.png')} />
                                </View>
                            </TouchableOpacity>

                        </View> :
                        
                        <View style={Styles.profileImagView}> 
                        <ImageBackground source={{ uri: pickPhotoUri }} imageStyle={{ borderRadius: 134/2 }} style={{height: 134, width: 134}}>
                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                                <View style={{ width: 24, height: 24,backgroundColor: '#D6BA59',borderRadius:24/2, position:'absolute',alignSelf:'flex-end',top:85,justifyContent:'center',alignContent:'center'}}>
                                <MaterialIcons onPress={() => setModalVisible(true)} name="edit" color={'#000'} size={16} style={{alignSelf:'center'}} />
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                        </View>
                          }
                        <Text style={Styles.profileUserName}>Riyas</Text>


                    </AppBg>
                </View>

                <Modal
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={modalNull}
                    onBackdropPress={modalNull}
                >
                    <View style={{ height: SCREEN_HEIGHT * .2, marginTop: '55%', width: SCREEN_WIDTH * .7, alignSelf: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: '#d4d4d4' }}>
                        <Text onPress={handleChoosePhoto} style={Styles.modalTextView}>Take New Photo</Text>
                        <Text onPress={handleChoosePhoto1} style={Styles.modalTextView}>Choose Profile Photo</Text>
                    </View>
                </Modal>


                <View style={{ width: SCREEN_WIDTH * .94, }}>

                    <View style={[Styles.profileMainView, { marginTop: 20 }]}>
                        <Image style={Styles.profileImage}
                            source={require('../../assets/images/Dashboard/bookmark.png')} />
                        <Text style={[Styles.profileBoldText]}>
                            {t('Saved Shops')}
                        </Text>
                        <Entypo onPress={updateShops} name={isSavedShop === 1 ? "chevron-small-up" : "chevron-small-down"} color={'#000'} size={28} />
                    </View>

                    {isSavedShop === 0 ? null :
                        <View>
                            <View style={Styles.subCatView}>

                                <View style={{ backgroundColor: '#E0E0E0', width: 65, height: 45, borderRadius: 5 }} />
                                <View style={{ width: SCREEN_WIDTH * .46 }}>
                                    <Text style={Styles.profileMediumText}>52 | Toys
                                </Text>
                                    <Text style={[Styles.profileMediumText,]}>
                                        Asna Home Decorations
                                </Text>
                                </View>
                                <Image source={require('../../assets/images/Dashboard/directions.png')} style={{ width: 32, height: 32, marginTop: 5 }} />
                            </View>

                            <View style={Styles.subCatView}>

                                <View style={{ backgroundColor: '#E0E0E0', width: 65, height: 45, borderRadius: 5 }} />
                                <View style={{ width: SCREEN_WIDTH * .46 }}>
                                    <Text style={Styles.profileMediumText}>52 | Toys
                                    </Text>
                                    <Text style={[Styles.profileMediumText,]}>
                                        Asna Home Decorations
                                   </Text>
                                </View>
                                <Image source={require('../../assets/images/Dashboard/directions.png')} style={{ width: 32, height: 32, marginTop: 5 }} />
                            </View>
                        </View>
                    }


                    <View style={Styles.profileMainView}>
                        <Entypo name="login" color={'#EB1C22'} size={28} />
                        <Text style={[Styles.profileBoldText]}>
                            {t('Personal Details')}
                            <MaterialIcons name="info-outline" color={'#EB1C22'} size={18} />
                        </Text>
                        <Entypo name="chevron-small-down" color={'#000'} size={28} />
                    </View>


                    <View style={Styles.profileMainView}>
                        <Image style={{ width: 20, height: 20 }}
                            source={require('../../assets/images/Dashboard/call.png')} />
                        <Text style={[Styles.profileBoldText]}>
                            {t('Manage Phone Number')}
                        </Text>
                        <Entypo onPress={updatePhnNUm} name={isPhoneNum === 1 ? "chevron-small-up" : "chevron-small-down"} color={'#000'} size={28} />
                    </View>

                    {isPhoneNum === 0 ? null :
                        <View style={[Styles.profileMainView, { flexDirection: 'column' }]}>
                            <View style={{ width: SCREEN_WIDTH * .62, height: SCREEN_HEIGHT * .12, }}>
                                <Text style={[Styles.profileMediumText, { marginTop: 3, marginBottom: 8, marginLeft: 4, fontSize: 12 }]}>Enter Previous Number</Text>
                                <TextInput editable={false} placeholder={phonenumber} placeholderTextColor="#202020" style={[Styles.profilePlaceholder, { textAlign: I18nManager.isRTL ? 'right' : 'left' }]} />
                            </View>

                            <View style={{ width: SCREEN_WIDTH * .62, height: SCREEN_HEIGHT * .12, }}>
                                <Text style={[Styles.profileMediumText, { marginTop: 3, marginBottom: 8, marginLeft: 4, fontSize: 12 }]}>Enter New Number</Text>
                                <TextInput placeholder={phonenumber} placeholderTextColor="#202020" style={[Styles.profilePlaceholder, { textAlign: I18nManager.isRTL ? 'right' : 'left' }]} />
                            </View>

                        </View>
                    }


                    <View style={Styles.profileMainView}>
                        <Fontisto name="email" color={'#EB1C22'} size={20} />
                        <Text style={[Styles.profileBoldText]}>
                            {t('Email Id')}
                        </Text>
                        <Entypo onPress={updateEmail} name={isEmailValid === 1 ? "chevron-small-up" : "chevron-small-down"} color={'#000'} size={28} />
                    </View>

                    {isEmailValid === 0 ? null :
                        <View style={[Styles.profileMainView, { flexDirection: 'column' }]}>
                            <View style={{ width: SCREEN_WIDTH * .62, height: SCREEN_HEIGHT * .12, }}>
                                <Text style={[Styles.profileMediumText, { marginTop: 3, marginBottom: 8, marginLeft: 4, fontSize: 12 }]}>Enter Previous Email ID</Text>
                                <TextInput editable={false} placeholder={isEmail} placeholderTextColor="#202020" style={[Styles.profilePlaceholder, { textAlign: I18nManager.isRTL ? 'right' : 'left' }]} />
                            </View>

                            <View style={{ width: SCREEN_WIDTH * .62, height: SCREEN_HEIGHT * .12, }}>
                                <Text style={[Styles.profileMediumText, { marginTop: 3, marginBottom: 8, marginLeft: 4, fontSize: 12 }]}>Enter New Email ID</Text>
                                <TextInput placeholder={isEmail} placeholderTextColor="#202020" style={[Styles.profilePlaceholder, { textAlign: I18nManager.isRTL ? 'right' : 'left' }]} />
                            </View>

                        </View>
                    }

                    <View style={Styles.profileMainView}>
                        <FontAwesome name="language" color={'#EB1C22'} size={20} />
                        <Text style={[Styles.profileBoldText]}>
                            {t('Change Language')}
                        </Text>
                        <Entypo onPress={updateLanguage} name={isLanguage === 1 ? "chevron-small-up" : "chevron-small-down"} color={'#000'} size={28} />
                    </View>

                    {isLanguage === 0 ? null :
                        <View style={[Styles.profileMainView, { flexDirection: 'column' }]}>
                            <View style={{ width: SCREEN_WIDTH * .62, height: SCREEN_HEIGHT * .15, }}>
                                <Text style={[Styles.profileMediumText, { marginTop: 3, marginBottom: 8, marginLeft: 4, fontSize: 12 }]}>Select Language</Text>
                                <View style={{ width: SCREEN_WIDTH * .74, alignSelf: 'center', height: 46, borderColor: '#D8D8D8', borderWidth: .7, flexDirection: 'row', borderTopRightRadius: 10, borderTopLeftRadius: 10, backgroundColor: '#E5E5E5', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={[Styles.profileMediumText, { width: SCREEN_WIDTH * .6 }]}>English</Text>
                                    <Entypo name="chevron-small-down" color={'#000'} size={28} />
                                </View>
                                <TextInput editable={false} placeholder="  Arabic" placeholderTextColor="#202020" style={{ textAlign: I18nManager.isRTL ? 'right' : 'left', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderColor: '#D8D8D8', backgroundColor: '#D8D8D8', width: SCREEN_WIDTH * .74, alignSelf: 'center', height: 46, padding: 15 }} />
                            </View>

                        </View>
                    }


                    <View style={[Styles.profileMainView, { marginLeft: '3%' }]}>
                        <AntDesign name="filetext1" color={'#EB1C22'} size={20} />
                        <Text onPress={() => navigation.navigate('Feedback')} style={[Styles.profileBoldText]}>
                            {t('Feedback  & Complaints')}
                        </Text>
                    </View>

                    <View style={[Styles.profileMainView, { marginLeft: 12 }]}>
                        <FontAwesome5 name="headphones-alt" color={'#EB1C22'} size={20} />
                        <Text style={[Styles.profileBoldText]}>
                            {t('Support')}
                        </Text>
                    </View>

                    <View style={[Styles.profileMainView, { marginLeft: 12 }]}>
                        <AntDesign name="lock" color={'#EB1C22'} size={24} />
                        <Text style={[Styles.profileBoldText]}>
                            {t('Privacy & Policy')}
                        </Text>
                    </View>

                    <View style={[Styles.profileMainView, { marginLeft: 12,marginBottom:30
                     }]}>
                        <MaterialIcons name="info-outline" color={'#EB1C22'} size={24} />
                        <Text style={[Styles.profileBoldText]}>
                            {t('Terms & Conditions')}
                        </Text>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;

