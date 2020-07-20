import React, { Component } from 'react'
import { Text, ScrollView, StatusBar } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import HeaderComponent from '../components/HeaderComponent'
import SwiperComponent from '../components/SwiperComponent'

export class HomeScreen extends Component {
  render () {
    return (
      <ScrollView>
        <StatusBar hidden />
        <HeaderComponent
          title='apachimuhkayqui'
          style={{ textTransform: 'capitalize' }}
          styleContainer={{
            borderBottomWidth: 2,
            borderBottomColor: 'rgba(0,0,0,2)'
          }}
        />
        <SwiperComponent
          data={[
            { text: '', image: 'https://d13xymm0hzzbsd.cloudfront.net/1/20200710/15944262560050.png' },
            { text: '', image: 'https://d13xymm0hzzbsd.cloudfront.net/1/20200710/15944262560866.png' },
            { text: '', image: 'https://d13xymm0hzzbsd.cloudfront.net/1/20200714/15947777912309.png' }
          ]}
          styleContainer={{
            heigth: hp('30%'),
            backgroundColor: 'cyan'
          }}
        />
        <Text>HomeScreen</Text>
      </ScrollView>

    )
  }
}

export default HomeScreen
