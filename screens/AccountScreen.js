import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TitleComponent from '../components/TitleComponent'
import AccountComponent from '../components/AccountComponent'

export class SearchScreen extends Component {
  render () {
    return (
      <ScrollView>
        <TitleComponent
          title='Account'
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
        <AccountComponent
          data={[
            {
              image: 'https://www.barkyn.com/blog/img/uploads/2019/09/jonatan-burneo-NTyH57Qqiu8-unsplash-1.jpg',
              avatar: 'https://www.barkyn.com/blog/img/uploads/2019/09/jonatan-burneo-NTyH57Qqiu8-unsplash-1.jpg',
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
            }
          ]}
          styleContainer={{
            height: hp('80%'),
            width: wp('100%')
          }}
          itemDimension={wp('25%')}
          styleItem={{
            height: wp('30%'),
            backgroundColor: 'gray'
          }}
          styleAvatar={{
            height: hp('12%'),
            width: hp('12%'),
            borderRadius: hp('7%'),
            marginLeft: hp('2%')
          }}
          styleNickname={{
            fontSize: hp('5.5%'),
            marginLeft: hp('2%'),
            fontWeight: 'bold'
          }}
          styleAlias={{
            fontSize: hp('3%'),
            marginLeft: hp('2%')
          }}
        />
      </ScrollView>
    )
  }
}

export default SearchScreen
