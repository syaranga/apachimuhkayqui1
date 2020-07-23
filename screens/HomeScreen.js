import React, { Component } from 'react'
import { StatusBar, Text, ScrollView, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import SwiperComponent from '../components/SwiperComponent'

export class HomeScreen extends Component {
  render () {
    return (
      <ScrollView>
        <StatusBar hidden />
      
        <SwiperComponent
          data={[
            {
              text: 'a',
              image: 'https://agauche.org/wp-content/uploads/2020/03/alvan-nee-T-0EW-SEbsE-unsplash-scaled.jpg'
            },
            {
              text: 'b',
              image: 'https://www.sosodours.com/wp-content/uploads//2019/07/Chien-plancher-odeur-urine.jpg'
            },
            {
              text: 'c',
              image: 'https://www.igbioscience.co.uk/wp-content/uploads/2019/01/Colostrum-and-Pets-03-800x600.jpg'
            }
          ]}
          styleContainer={{
            height: hp('50%'),
            width: wp(95%),
            backgroundColor: 'cyan'
          }}
        />
        <Text>HomeScreen</Text>
      </ScrollView>
    )
  }
}
export default HomeScreen
