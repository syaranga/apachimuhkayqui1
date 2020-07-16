import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import SwiperComponent from '../components/SwiperComponent'

export class HomeScreen extends Component {
  render () {
    return (
      <ScrollView>
        <HeaderComponent
          title='apachimuhkayqui'
          style={{ textTransform: 'capitalize' }}
          styleContainer={{
            borderBottomWidth: 2,
            borderBottomColor: 'rgba(0,0,0,.2)'
          }}
        />
        <SwiperComponent data={['a', 'b']} />
        <Text>HomeScreen</Text>
      </ScrollView>
    )
  }
}

export default HomeScreen
