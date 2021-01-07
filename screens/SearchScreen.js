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
          <TitleComponent title='Search' />
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
              },
              {
                image: 'https://www.insidehook.com/wp-content/uploads/2020/03/dog_adoptions_coronavirus.jpg?fit=1795%2C1200',
                discount: '70%',
                price: '$9999'
              },
              {
                image: 'https://th.bing.com/th/id/OIP.roXztmu92HGfZmh-T6x4awHaHa?pid=Api&w=203&h=203&c=7',
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
