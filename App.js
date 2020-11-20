import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import './src/i18n';
import Language from './src/screens/language';
import RegistrationHome from './src/screens/registration';
import BottomNavigation from './src/screens';
import otp from './src/screens/registration/otp';
import Dashboard from './src/screens/Dashboard';
import Notification from './src/screens/Dashboard/Notification';
import Profile from './src/screens/Dashboard/Profile';
import Feedback from './src/screens/Dashboard/Feedback';
import SimilarShops from './src/screens/Dashboard/SimilarShops';
import Search from './src/screens/Dashboard/Search';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={'Language'}>
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="RegistrationHome" component={RegistrationHome} />
        <Stack.Screen name="otp" component={otp} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="SimilarShops" component={SimilarShops} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Feedback" component={Feedback} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
