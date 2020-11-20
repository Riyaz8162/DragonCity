import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils';
import Dashboard from './Dashboard';
import HomeScreen from './Dashboard/HomeScreen'
import Profile from './Dashboard/Profile'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        shifting={true}
        barStyle={styles.navBarStyle}
        tabBarColor={'pink'}
        inactiveColor={'#FFF'}
        activeColor={'#111'}>
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, focused}) => {
              return focused ? (
                <ImageBackground
                  source={require('../assets/images/Dashboard/homecircle.png')}
                  style={styles.iconBG}>
                  <Entypo
                    name="home"
                    color={color}
                    size={26}
                    style={{alignSelf: 'center'}}
                  />
                </ImageBackground>
              ) : (
                <Entypo name="home" color={color} size={26} />
              );
            },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, focused}) =>
              focused ? (
                <ImageBackground
                  source={require('../assets/images/Dashboard/homecircle.png')}
                  style={styles.iconBG}>
                  <Entypo
                    name="location-pin"
                    color={color}
                    size={30}
                    style={{alignSelf: 'center'}}
                  />
                </ImageBackground>
              ) : (
                <Entypo
                  name="location-pin"
                  color={color}
                  size={30}
                  style={{alignSelf: 'center'}}
                />
              ),
          }}
          name="Map"
          component={Map}
        />
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color,focused}) => (
                focused ? 
                    <ImageBackground
                      source={require('../assets/images/Dashboard/homecircle.png')}
                      style={styles.iconBG}>
              <Image source={require('../assets/images/Dashboard/user.png')}  style={{alignSelf: 'center',width:20,height:20,}} tintColor={color} />
              </ImageBackground>
              :
            //   <Ionicons name="md-person" color={color} size={26} style={{alignSelf: 'center'}} />
            <Image source={require('../assets/images/Dashboard/user.png')}  style={{alignSelf: 'center',width:20,height:20,marginTop:5}} tintColor={color} />
            ),
          }}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

class Map extends React.Component {
  render() {
    return (
      <View>
      <ImageBackground style={{width:SCREEN_WIDTH,height:SCREEN_HEIGHT * 1}} source={require('../assets/images/Dashboard/mapview.png')}>
        </ImageBackground>
        </View>
    );
  }
}

const styles = {
  navBarStyle: {
    width: SCREEN_WIDTH * 0.9,
    height: 57,
    marginLeft: SCREEN_WIDTH * 0.055,
    backgroundColor: '#a20202',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderColor: 'transparent',
    overflow: 'hidden',
    elevation: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 15,
  },
  iconBG: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
};

export default MyTabs;
