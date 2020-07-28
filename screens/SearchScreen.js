import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TitleComponent from '../components/TitleComponent'
import GridComponent from '../components/GridComponent'

export class SearchScreen extends Component {
  render () {
    return (
      <ScrollView>
        <TitleComponent
          title='Search'

          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%'),
            textShadowColor: 'gray',
            textShadowOffset: {
              width: hp('.3%'),
              height: hp('.2%')
            }
          }}
          style={{
            fontSize: hp('8%')
          }}
        />

        <Text style={{
          marginHorizontal: wp('2.5%'),
          fontSize: hp('3.5%')
        }}
        >ALL RESULTS
        </Text>
        <Text
          style={{
            justifyContent: 'center',
            marginHorizontal: wp('40%'),
            textShadowColor: 'gray'
          }}
        >
          1 de 100
        </Text>
        <GridComponent

          data={[
            {
              image: 'https://wowpooch.com/wp-content/uploads/2019/05/Best-Dog-Food-For-Giant-Breeds-1024x536.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://wowpooch.com/wp-content/uploads/2019/05/Best-Dog-Food-For-Giant-Breeds-1024x536.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.sosodours.com/wp-content/uploads//2019/07/Chien-plancher-odeur-urine.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://wowpooch.com/wp-content/uploads/2019/05/Best-Dog-Food-For-Giant-Breeds-1024x536.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://wowpooch.com/wp-content/uploads/2019/05/Best-Dog-Food-For-Giant-Breeds-1024x536.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: ' https://agauche.org/wp-content/uploads/2020/03/alvan-nee-T-0EW-SEbsE-unsplash-scaled.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: ' https://agauche.org/wp-content/uploads/2020/03/alvan-nee-T-0EW-SEbsE-unsplash-scaled.jpg',
              discount: '70%',
              price: '$999.9'
            }
            ,
            {
              image: ' https://agauche.org/wp-content/uploads/2020/03/alvan-nee-T-0EW-SEbsE-unsplash-scaled.jpg',
              discount: '70%',
              price: '$999.9'
            }
            ,
            {
              image: ' https://agauche.org/wp-content/uploads/2020/03/alvan-nee-T-0EW-SEbsE-unsplash-scaled.jpg',
              discount: '70%',
              price: '$999.9'
            }
          ]}
          itemDimension={wp('25%')}
          styleItem={{
            height: wp('35%'),
            justifyContent: 'flex-end',
            padding: wp('.5%'),
            backgroundColor: 'white'
          }}
        />
      </ScrollView>
    )
  }
}

export default SearchScreen