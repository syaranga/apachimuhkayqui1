import React, { Component } from 'react'
import { ScrollView } from 'react-native'
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
              height: hp('.3%')
            }
          }}
          style={{
            fontSize: hp('8%')
          }}
        />
        <GridComponent
          data={[
            {
              image: 'https://agauche.org/wp-content/uploads/2020/03/alvan-nee-T-0EW-SEbsE-unsplash-scaled.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://www.sosodours.com/wp-content/uploads//2019/07/Chien-plancher-odeur-urine.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://cheapisthenewclassy.com/wp-content/uploads/2019/06/help-your-dog-relax.png',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://www.igbioscience.co.uk/wp-content/uploads/2019/01/Colostrum-and-Pets-03-800x600.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://snoozerpetproducts.com/wp-content/uploads/2019/06/resized-injuries.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://www.petscoop.com/wp-content/uploads/2019/07/dog-dogs-sunglasses.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://cheapisthenewclassy.com/wp-content/uploads/2019/06/help-your-dog-relax.png',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://www.sosodours.com/wp-content/uploads//2019/07/Chien-plancher-odeur-urine.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://cheapisthenewclassy.com/wp-content/uploads/2019/06/help-your-dog-relax.png',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://www.igbioscience.co.uk/wp-content/uploads/2019/01/Colostrum-and-Pets-03-800x600.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://snoozerpetproducts.com/wp-content/uploads/2019/06/resized-injuries.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://www.petscoop.com/wp-content/uploads/2019/07/dog-dogs-sunglasses.jpg',
              discount: '70%',
              price: '$ 999.9'
            }
          ]}
          itemDimension={wp('25%')}
          styleItem={{
            height: wp('30%'),
            justifyContent: 'flex-end',
            borderRadius: wp('2%'),
            padding: wp('.5%')
          }}
          styleText={{
            flexDirection: 'row',
            justifyContent: 'space-Between',
            backgroundColor: '#d3d3d3'
          }}
          styleDiscont={{
            color: 'red',
            fontSize: hp('3%')
          }}

        />
      </ScrollView>
    )
  }
}

export default SearchScreen
