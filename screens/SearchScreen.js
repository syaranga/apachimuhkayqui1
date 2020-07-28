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
            textShadowColor: 'gay',
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
              image: 'https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613_960_720.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://cdn.pixabay.com/photo/2016/08/19/23/53/dog-1606600_960_720.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://cdn.pixabay.com/photo/2020/06/25/21/03/dog-5340892_960_720.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://cdn.pixabay.com/photo/2016/11/21/14/47/adorable-1845789_960_720.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077_960_720.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://cdn.pixabay.com/photo/2018/03/18/18/06/australian-shepherd-3237735_960_720.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://cdn.pixabay.com/photo/2016/12/18/18/42/kittens-1916542_960_720.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://cdn.pixabay.com/photo/2012/10/12/17/12/cat-61079_960_720.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://cdn.pixabay.com/photo/2017/12/11/15/34/lion-3012515_960_720.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://cdn.pixabay.com/photo/2017/08/07/18/57/dog-2606759_960_720.jpg',
              discount: '70%',
              price: '$ 999.9'
            },
            {
              image: 'https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_960_720.jpg',
              discount: '70%',
              price: '$ 999.9'
            }
          ]}
          itemDimension={wp('25%')}
          styleItem={{
            height: wp('31%'),
            justifyContent: 'flex-end',
            borderRadius: wp('2%'),
            padding: wp('.5%')
          }}
          styleText={{
            flexDirection: 'row',
            justifyContent: 'space-Between',
            backgroundColor: '#d6c7c7',
            opacity: 0.6
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
