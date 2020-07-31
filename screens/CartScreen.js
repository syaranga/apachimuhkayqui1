import React, { Component } from 'react'
import { View, Text, ScrollView, StatusBar } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { CartComponent } from '../components/CartComponent'
import TitleComponent from '../components/TitleComponent'
import { FontAwesome5 } from '@expo/vector-icons'

export class CartScreen extends Component {
  renderFooterMasonry (data) {
    return (
      <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      >
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(100,100,100,.5)'
        }}
        >
          <Text>Metal Earrings</Text>
          <View style={{
            flexDirection: 'column'
          }}
          >
            <Text style={{
              flex: 0.5,
              color: 'red',
              fontWeight: 'bold',
              marginLeft: '3%'
            }}
            >70%
            </Text>
            <Text>$9999</Text>
          </View>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
        >
          <View style={{
            backgroundColor: 'white',
            padding: '3%',
            margin: '3%',
            borderRadius: '5%'
          }}
          >
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: hp('10%')
            }}
            >
              <Text>-</Text>
              <Text>1</Text>
              <Text>+</Text>
            </View>
          </View>
          <View style={{
            backgroundColor: 'white',
            padding: '3%',
            margin: '3%',
            borderRadius: '5%'
          }}
          >
            <FontAwesome5 name='trash-alt' size={15} color='black' />
          </View>
        </View>
      </View>
    )
  }

  render () {
    return (
      <ScrollView>
        <StatusBar hidden />
        <TitleComponent
          title='Cart'
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
        <CartComponent
          data={[
            {
              uri: 'https://www.barkyn.com/blog/img/uploads/2019/09/jonatan-burneo-NTyH57Qqiu8-unsplash-1.jpg',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://th.bing.com/th/id/OIP.K778MHeRxj6tkhi7bVZHtwHaE7?pid=Api&w=84&h=84&c=7',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://th.bing.com/th/id/OIP.zFngqtjyu0nHsZooU_MmZwAAAA?pid=Api&w=100&h=100&c=7',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://th.bing.com/th/id/OIP.Rh1abxgSzyV-U32eBTr4HgAAAA?pid=Api&w=84&h=84&c=7',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://th.bing.com/th/id/OIP.fN8lBBz-56V3jOMap2hZrAAAAA?pid=Api&w=90&h=90&c=7',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://th.bing.com/th/id/OIP.m_QjqiyuLb9aAKeachidUAHaHa?pid=Api&w=84&h=84&c=7',
              renderFooter: this.renderFooterMasonry
            }
          ]}
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
          styleItem={{
            height: wp('30%'),
            backgroundColor: 'gray'
          }}
        />
      </ScrollView>
    )
  }
}

export default CartScreen
