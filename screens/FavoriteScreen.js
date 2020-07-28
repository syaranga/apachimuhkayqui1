import React, { Component } from 'react'
import { ScrollView, StatusBar } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TitleComponent from '../components/TitleComponent'
import MasonryComponent from '../components/MasonryComponent'

export class FavoriteScreen extends Component {
  render () {
    return (
      <ScrollView>
        <StatusBar hidden />
        <TitleComponent
          title='Favorite'
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%'),
            textShadowColor: 'gray',
            textShadowOffset: {
              width: hp('.3%'),
              height: hp('.3%')
            }
          }}
          style={{
            fontSize: hp('8%')
          }}
        />
        <MasonryComponent />
      </ScrollView>
    )
  }
}

export default FavoriteScreen
