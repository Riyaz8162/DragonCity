import React from 'react';
import { View, Text, Image, StatusBar, I18nManager, SafeAreaView } from 'react-native';
import AppBG from '../../templates/AppBG';
import { Tab, Tabs } from 'native-base';
import Login from './login';
import Signup from './signup';
import { useTranslation } from 'react-i18next';
import CommonStyle from '../../assets/Styles';
import { SCREEN_WIDTH } from '../../utils';
import { ScrollView } from 'react-native-gesture-handler';

const Registration = ({ navigation }) => {

  const { t, i18n } = useTranslation();
  return (
    <AppBG>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View style={{ marginTop: StatusBar.currentHeight + 10, }}>
        <Image
          source={require('../../assets/images/appLogo.png')}
          style={{ width: 125, height: 83.95 }}
        />
      </View>
      <ScrollView>
      <Tabs
        tabContainerStyle={{
          backgroundColor: 'transparent',
          elevation: 0,
          borderBottomWidth: 0.5,
          borderBottomColor: '#fff',
        }}>
        <Tab
          heading={t('Login')}
          tabStyle={{backgroundColor: 'transparent' }}
          activeTabStyle={{backgroundColor: 'transparent' }}
          activeTextStyle={{ color: '#fff' }}
          inactiveTextStyle={{ color: '#fff' }}
          style={{ backgroundColor: 'transparent', color: '#fff' }}>
          <Login {...navigation} />
        </Tab>
        <Tab
          heading={t('Signup')}
          tabStyle={{ backgroundColor: 'transparent' }}
          activeTabStyle={{ backgroundColor: 'transparent' }}
          activeTextStyle={{ color: '#fff' }}
          inactiveTextStyle={{ color: '#fff' }}
          style={{ backgroundColor: 'transparent' }}>
          <Signup {...navigation} />
        </Tab>
      </Tabs>
      </ScrollView>

     
    </AppBG>
  );
}

export default Registration;
