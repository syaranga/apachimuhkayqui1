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
              uri: 'https://im0-tub-com.yandex.net/i?id=09c0c6ba7ce63529824085f93f3c95dc&n=13',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://im0-tub-com.yandex.net/i?id=f63d7e5cb11a20a448736890eeda4640&n=13',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://im0-tub-com.yandex.net/i?id=85c300d6eeab8d99ee4c42e78a8751af&n=13',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://im0-tub-com.yandex.net/i?id=b14c7ee1809bf7d81b1bf378f0b5e4ed&n=13',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://images-cdn.9gag.com/photo/anYGmVn_700b.jpg',
              renderFooter: this.renderFooterMasonry
            }
          ]}
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
          styleItem={{
            height: wp('5%'),
            backgroundColor: 'gray'
          }}
        />
      </ScrollView>
    )
  }
}

export default CartScreen
