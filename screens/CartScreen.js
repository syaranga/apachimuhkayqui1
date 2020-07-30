import React, { Component } from 'react'
import { View, Text } from 'react-native'
import HeaderComponent from '../components/HeaderComponent'

export class CartScreen extends Component {
  render () {
    return (
      <View>
        <HeaderComponent />
        <Text>CartScreen</Text>
        <Text> Hola Mundo</Text>
      </View>
    )
  }
}

export default CartScreen
