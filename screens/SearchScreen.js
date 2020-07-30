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
<<<<<<< HEAD
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
=======
              image: 'https://www.barkyn.com/blog/img/uploads/2019/09/jonatan-burneo-NTyH57Qqiu8-unsplash-1.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://www.insidehook.com/wp-content/uploads/2020/03/dog_adoptions_coronavirus.jpg?fit=1795%2C1200',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.NlxrAImhJZuBjrE5_LyqYAAAAA?pid=Api&w=141&h=212&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://www.bing.com/images/blob?bcid=TtybFVvDHJsBsw',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.Trws725tqh9vm5LNukOOrwHaE5?pid=Api&w=84&h=84&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.dDMUv2x_HRcYmfXRjHusGQAAAA?pid=Api&w=120&h=86&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.02jiiV5WLMpG5BfavUvXUQAAAA?pid=Api&w=100&h=70&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.K778MHeRxj6tkhi7bVZHtwHaE7?pid=Api&w=84&h=84&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.zFngqtjyu0nHsZooU_MmZwAAAA?pid=Api&w=100&h=100&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.Rh1abxgSzyV-U32eBTr4HgAAAA?pid=Api&w=84&h=84&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.fN8lBBz-56V3jOMap2hZrAAAAA?pid=Api&w=90&h=90&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.m_QjqiyuLb9aAKeachidUAHaHa?pid=Api&w=84&h=84&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.02jiiV5WLMpG5BfavUvXUQAAAA?pid=Api&w=100&h=70&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.K778MHeRxj6tkhi7bVZHtwHaE7?pid=Api&w=84&h=84&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.zFngqtjyu0nHsZooU_MmZwAAAA?pid=Api&w=100&h=100&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.Rh1abxgSzyV-U32eBTr4HgAAAA?pid=Api&w=84&h=84&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.fN8lBBz-56V3jOMap2hZrAAAAA?pid=Api&w=90&h=90&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.m_QjqiyuLb9aAKeachidUAHaHa?pid=Api&w=84&h=84&c=7',
              discount: '70%',
              price: '$9999'
>>>>>>> 7c136f14f6ec382e05deff7285eb509c34154086
            }
          ]}
          itemDimension={wp('25%')}
          styleItem={{
<<<<<<< HEAD
            height: wp('35%'),
            justifyContent: 'flex-end',
            padding: wp('.5%'),
            backgroundColor: 'white'
=======
            height: wp('30%'),
            backgroundColor: 'gray'
>>>>>>> 7c136f14f6ec382e05deff7285eb509c34154086
          }}
        />
      </ScrollView>
    )
  }
}

export default SearchScreen