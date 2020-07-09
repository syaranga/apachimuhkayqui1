import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'

import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import FavoriteScreen from './screens/FavoriteScreen'
import CartScreen from './screens/CartScreen'
import AccountScreen from './screens/AccountScreen'

const Tab = createBottomTabNavigator()

function MyTabs () {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: '#e91e63'
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='home' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='search1' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name='Favorite'
        component={FavoriteScreen}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='favorite-border' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name='Cart'
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='shoppingcart' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name='Account'
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='user' color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default function App () {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}
