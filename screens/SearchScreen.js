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
              image: 'https://www.igbioscience.co.uk/wp-content/uploads/2019/01/Colostrum-and-Pets-03-800x600.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'http://barkingdogs.it/wp-content/uploads/2017/01/comunicazione_canina_03_barking_dogs_roma-60x60.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://cheapisthenewclassy.com/wp-content/uploads/2019/06/help-your-dog-relax.png',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://snoozerpetproducts.com/wp-content/uploads/2019/06/resized-injuries.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://cdn.xl.thumbs.canstockphoto.es/fresco-perro-marr%C3%B3n-llevar-lentes-de-sol-look-down-a-lado-almacen-de-fotografias_csp56593104.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://agauche.org/wp-content/uploads/2020/03/alvan-nee-T-0EW-SEbsE-unsplash-scaled.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://fsmedia.imgix.net/93/eb/4e/ce/675b/404e/89a5/8952baabb731/lucrezia-carnelos-1344974-unsplashjpg.jpeg?crop=edges&fit=crop&auto=format%2Ccompress&h=600&w=1200',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://dogbreedadvice.com/wp-content/uploads/2019/09/gsd.png',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://thecontemporarypet.com/wp-content/uploads/2019/09/San-Jose-Pets-440x550.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://forum44.djicdn.com/uc_server/data/avatar/000/16/42/59_avatar_aa782720e79b0bc47ff456b47c3ac17c_middle.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://thecontemporarypet.com/wp-content/uploads/2019/09/San-Jose-Pets-440x550.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://i.ytimg.com/vi/toy6xhBXFGY/maxresdefault.jpg',
              discount: '70%',
              price: '$ 999.9'
            }
          ]}
          itemDimension={wp('25%')}
          styleItem={{
            height: wp('32%'),
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
