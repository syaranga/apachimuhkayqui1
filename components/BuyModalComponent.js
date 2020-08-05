import React, { Component } from 'react'
import { Text, View } from 'react-native'
import TitleComponent from './TotleComponent'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export class BuyModalComponent extends Component {
  render () {
    return (
      <View>
        <TitleComponent
          title='Buy'
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
      </View>
    )
  }
}

export default BuyModalComponent
