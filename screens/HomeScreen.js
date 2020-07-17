import React, { Component } from 'react'
import { StatusBar, Text, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import HeaderComponent from '../components/HeaderComponent'
import SwiperComponent from '../components/SwiperComponent'
export class HomeScreen extends Component {
  render () {
    return (
      <ScrollView>
        <StatusBar hidden />
        <HeaderComponent
          title='apachimuchkayqui'
          style={{ textTransform: 'capitalize' }}
          styleContainer={{
            borderBottomWidth: 2,
            borderBottomkColor: 'rgba(0,0,0,.2)'
          }}
        />
        <SwiperComponent
          data={[
            { text: 'a', image: 'https://d13xymm0hzzbsd.cloudfront.net/1/20200714/15947777912309.png' },
            { text: 'b', image: 'https://d13xymm0hzzbsd.cloudfront.net/1/20200710/15944262560050.png' },
            { text: 'c', image: 'https://d13xymm0hzzbsd.cloudfront.net/1/20200710/15944262560866.png' }

          ]}
          styleContainer={{
            height: hp('20%'),
            backgroundColor: 'cyan'
          }}
        />
        <Text>HomeScreen</Text>
      </ScrollView>
    )
  }
}
export default HomeScreen
