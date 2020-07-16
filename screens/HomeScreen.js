import React, { Component } from 'react'
import { View, Text } from 'react-native'
import HeaderComponent from '../components/HeaderComponent'

export class HomeScreen extends Component {
  render () {
    return (
      <View>
        <HeaderComponent
          title='apachimuhkayqui'
          style={{ textTransform: 'capitalize' }}
          styleContainer={{ borderBottonWidth: 2, borderBottonColor: 'rgba(0,0,0,.2)' }}
        />
        <Text>HomeScreen</Text>
      </View>
    )
  }
}

export default HomeScreen
