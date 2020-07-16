import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import HeaderComponent from '../components/HeaderComponent'

export class HomeScreen extends Component {
  render () {
    return (
      <ScrollView>
        <View>
          <HeaderComponent
            title='apachimuhkayqui'
            style={{ textTransform: 'capitalize' }}
            styleContainer={{
              borderBottomWidth: 2,
              borderBottomColor: 'rgba(0,0,0,.2)'
            }}
          />
          <Text>HomeScreen</Text>
        </View>
      </ScrollView>
    )
  }
}

export default HomeScreen
