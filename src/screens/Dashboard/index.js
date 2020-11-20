import React from 'react';
import { Button, I18nManager, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen'
import Profile from './Profile'

const Drawer = createDrawerNavigator();

export default function App() {
  console.log()
  return (
      <Drawer.Navigator drawerPosition={I18nManager.isRTL ? 'right': 'left'} initialRouteName="HomeScreen">
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={Profile} />

      </Drawer.Navigator>
   
  );
}