import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TitleComponent from '../components/TitleComponent'
import AccountComponent1 from '../components/AccountComponent1'
import TitleSectionComponent1 from '../components/TitleSectionComponent1'
import ProfileComponent from '../components/ProfileComponent'
import CoinsComponent from '../components/CoinsComponent'
import OrdersComponent from '../components/OrdersComponent'
import GridComponent2 from '../components/GridComponent2'

export class AccountScreen extends Component {
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
              width: hp('0%'),
              height: hp('0%')
            }
          }}
          style={{
            fontSize: hp('8%')
          }}
        />
        <AccountComponent1
          data={[
            {
              avatar: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg',
              nickname: 'Ridhwan nordin',
              alias: '@ridzjco'
            }
          ]}
          styleContainer={{
            height: hp('55%'),
            width: wp('100%'),
            marginBottom: wp('3.5%')
          }}
          styleItem={{
            height: hp('0%'),
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
          styleAvatar={{
            height: hp('12%'),
            width: hp('12%'),
            borderRadius: hp('6%')
          }}
          stylePrice={{
            fontSize: hp('5%')
          }}
          styleNickname={{
            fontSize: hp('6%')
          }}
          styleAlias={{
            fontSize: hp('5%')
          }}
        />
        <TitleSectionComponent1
          title='PROFILE'
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <ProfileComponent />
        <TitleSectionComponent1
          title='COINS'
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <CoinsComponent
          data={[
            { money: 'https://png.pngtree.com/png-vector/20190219/ourlarge/pngtree-coin-stack-icon-graphic-design-template-vector-png-image_566001.jpg' },
            { image: 'https://raw.githubusercontent.com/sonnylazuardi/react-native-credit-card/master/demo.gif' }
          ]}
          styleSlide={{
            paddingHorizontal: wp('2.5%')
          }}
          styleCategoryImage={{
            height: hp('39%'),
            width: hp('53%')
          }}
          styleCategoryImage2={{
            height: hp('30%'),
            width: hp('50%')
          }}
        />
        <TitleSectionComponent1
          title='ORDERS'
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <OrdersComponent />
        <GridComponent2
          handleOnPress={(item) => {
            console.log('pressed!')
            console.log(item)
          }}
          data={[
            {
              image: 'https://www.barkyn.com/blog/img/uploads/2019/09/jonatan-burneo-NTyH57Qqiu8-unsplash-1.jpg',
              discount: '$9999.5',
              price: '$9999.9'
            },
            {
              image: 'https://www.insidehook.com/wp-content/uploads/2020/03/dog_adoptions_coronavirus.jpg?fit=1795%2C1200',
              discount: '$9999.5',
              price: '$9999.9'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.roXztmu92HGfZmh-T6x4awHaHa?pid=Api&w=203&h=203&c=7',
              discount: '$9999.5',
              price: '$9999.9'
            },
            {
              image: 'https://www.bing.com/images/blob?bcid=TtybFVvDHJsBsw',
              discount: '$9999.5',
              price: '$9999.9'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.Trws725tqh9vm5LNukOOrwHaE5?pid=Api&w=84&h=84&c=7',
              discount: '$9999.5',
              price: '$9999.9'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.dDMUv2x_HRcYmfXRjHusGQAAAA?pid=Api&w=120&h=86&c=7',
              discount: '$9999.5',
              price: '$9999.9'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.02jiiV5WLMpG5BfavUvXUQAAAA?pid=Api&w=100&h=70&c=7',
              discount: '$9999.5',
              price: '$9999.9'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.K778MHeRxj6tkhi7bVZHtwHaE7?pid=Api&w=84&h=84&c=7',
              discount: '$9999.5',
              price: '$9999.9'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.zFngqtjyu0nHsZooU_MmZwAAAA?pid=Api&w=100&h=100&c=7',
              discount: '$9999.5',
              price: '$9999.9'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.Rh1abxgSzyV-U32eBTr4HgAAAA?pid=Api&w=84&h=84&c=7',
              discount: '$9999.5',
              price: '$9999.9'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.fN8lBBz-56V3jOMap2hZrAAAAA?pid=Api&w=90&h=90&c=7',
              discount: '$9999.5',
              price: '$9999.9'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.m_QjqiyuLb9aAKeachidUAHaHa?pid=Api&w=84&h=84&c=7',
              discount: '$9999.5',
              price: '$9999.9'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.02jiiV5WLMpG5BfavUvXUQAAAA?pid=Api&w=100&h=70&c=7',
              discount: '$9999.5',
              price: '$9999.9'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.K778MHeRxj6tkhi7bVZHtwHaE7?pid=Api&w=84&h=84&c=7',
              discount: '$9999.5',
              price: '$9999.9'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.zFngqtjyu0nHsZooU_MmZwAAAA?pid=Api&w=100&h=100&c=7',
              discount: '$9999.5',
              price: '$9999.9'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.Rh1abxgSzyV-U32eBTr4HgAAAA?pid=Api&w=84&h=84&c=7',
              discount: '$9999.5',
              price: '$9999.9'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.fN8lBBz-56V3jOMap2hZrAAAAA?pid=Api&w=90&h=90&c=7',
              discount: '$9999.5',
              price: '$9999.9'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.m_QjqiyuLb9aAKeachidUAHaHa?pid=Api&w=84&h=84&c=7',
              discount: '$9999.5',
              price: '$9999.9'
            }
          ]}
          itemDimension={wp('34%')}
          styleItem={{
            height: wp('30%'),
            backgroundColor: 'gray'
          }}
        />
      </ScrollView>
    )
  }
}

export default AccountScreen
