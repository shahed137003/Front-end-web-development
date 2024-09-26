import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favourite from '../screens/Favourite';
import Home from '../screens/Home';
export default function DrawNavigation() {
    const Drawer = createDrawerNavigator();
  return (
<Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'red', // Header background color
        },
        headerTintColor: '#fff', // Header text color
        headerTitleStyle: {
          fontWeight: 'bold', // Header title font weight
        },
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Home Screen' }} // Optionally set the title
      />
      <Drawer.Screen 
        name="Favourite" 
        component={Favourite} 
        options={{ title: 'Favorites' }} // Optionally set the title
      />
    </Drawer.Navigator>
  )
}