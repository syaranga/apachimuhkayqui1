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
              image: 'https://s-media-cache-ak0.pinimg.com/736x/a1/0a/9d/a10a9d2bc5d1841e4de7c07cf0cc7212.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://cdn.pixabay.com/photo/2016/08/19/23/53/dog-1606600_960_720.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://cdn.pixabay.com/photo/2020/06/25/21/03/dog-5340892_960_720.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://cdn.pixabay.com/photo/2016/11/21/14/47/adorable-1845789_960_720.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077_960_720.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://cdn.pixabay.com/photo/2018/03/18/18/06/australian-shepherd-3237735_960_720.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://cdn.pixabay.com/photo/2016/12/18/18/42/kittens-1916542_960_720.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://cdn.pixabay.com/photo/2012/10/12/17/12/cat-61079_960_720.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://cdn.pixabay.com/photo/2017/12/11/15/34/lion-3012515_960_720.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://cdn.pixabay.com/photo/2017/08/07/18/57/dog-2606759_960_720.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_960_720.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://orgullogualeyo.com/wp-content/uploads/2020/06/gatitos-siameses-colocados-Nueva-Jersey_EDIIMA20190827_0570_4.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://t4.kn3.net/taringa/4/3/9/0/0/4/perromalo16/126.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://myanimals.com/es/wp-content/uploads/2017/05/gato-Munchkin.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://www.francetvinfo.fr/image/75n7nket3-838f/1500/843/16861967.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://s-media-cache-ak0.pinimg.com/originals/0b/89/53/0b89537d97a4d57621e05e540eb86f98.gif',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://i.ytimg.com/vi/CoVAprP9DB8/maxresdefault.jpg',
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
    )
  }
}

export default SearchScreen
