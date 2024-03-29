
import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyTabBar } from './TabComponents';

import Connections from '../../Screens/App/BottomTab/Connections';
import Bag from '../../Screens/App/BottomTab/Bag';
import Calendar from '../../Screens/App/BottomTab/Calendar';
import CameraScreen from '../../Screens/App/BottomTab/Camera';
import { TabParamsList } from '../types';
import Home from 'src/Screens/App/BottomTab/Home';
const Tabs = createBottomTabNavigator<TabParamsList>();



const TabBar = () => {
  return (
    <Tabs.Navigator
    tabBar={(props) => <MyTabBar {...props} />}
    screenOptions={{
      headerShown: false,
      lazy: true,
      unmountOnBlur: false,
    }}
  >
    <Tabs.Screen name="Home" component={Home} />
    <Tabs.Screen name="Connections" component={Connections} />
    <Tabs.Screen name="Camera" component={CameraScreen} />
    <Tabs.Screen name="Bag" component={Bag} />
    <Tabs.Screen name="Calendar" component={Calendar} />

  </Tabs.Navigator>
  )
}

export default TabBar