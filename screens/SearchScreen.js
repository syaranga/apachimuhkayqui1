import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TitleComponent from '../components/TitleComponent'
import GridComponent from '../components/GridComponent'
import BuyModalComponent from '../components/BuyModalComponent'

export class SearchScreen extends Component {
  render () {
    return (
      <View>
        <ScrollView>
          <BuyModalComponent visible />
          <TitleComponent
            title='Search'
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
          <GridComponent
            handleOnPress={(item) => {
              console.log('pressed!')
              console.log(item)
            }}
            data={[
              {
                image: 'https://www.barkyn.com/blog/img/uploads/2019/09/jonatan-burneo-NTyH57Qqiu8-unsplash-1.jpg',
                discount: '70%',
                price: '$9999'
              }

            ]}
            itemDimension={wp('25%')}
            styleItem={{
              height: wp('30%'),
              backgroundColor: 'gray'
            }}
          />
        </ScrollView>
      </View>
    )
  }
}

export default SearchScreen
