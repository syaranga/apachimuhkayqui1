import React, { Component } from 'react'
import { View, Text } from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import SwipperComponent from '../components/SwipperComponent'

export class HomeScreen extends Component {
  render () {
    return (
      <View>
        <HeaderComponent
          title='apachimuhkayqui'
          style={{ textTransform: 'capitalize' }}
          styleContainer={{
            borderBottomWidth: 2,
            borderBottomColor: 'rgba(0,0,0,.2)'
          }}
        />
        <SwipperComponent data={['a', 'b']} />
        <Text>HomeScreen</Text>
      </View>
    )
  }
}

export default HomeScreen
