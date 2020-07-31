import React, { Component } from 'react'
import { ScrollView, StatusBar, View, Text } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TitleComponent from '../components/TitleComponent'
import CartComponent from '../components/CartComponent'

export class CartScreen extends Component {
  renderFooterMansonry (data) {
    return (
      (
        <View style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
        >
          <View style={{
            backgroundColor: 'white',
            padding: '3%',
            margin: '3%',
            borderRadius: '4%',
            width: '55%'
          }}
          />
          <View style={{
            backgroundColor: 'white',
            padding: '2%',
            margin: '3%',
            borderRadius: '2%'
          }}
          >
            <FontAwesome5 name='trash-alt' size={15} color='black' />
          </View>
        </View>
      )
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
              avatar: 'https://i.pinimg.com/originals/cb/78/2b/cb782bd9da27e7b6dcd7974d2bb3a42e.jpg',
              renderFooter: this.renderFooterMansonry
            },
            {
              uri: 'https://blog.nhvnaturalpetproducts.com/wp-content/uploads/2019/05/Zinc-deficiency-in-husky-dogs-768x527.png ',

              renderFooter: this.renderFooterMansonry
            },
            {
              uri: 'https://www.petscoop.com/wp-content/uploads/2019/07/dog-dogs-sunglasses.jpg',

              renderFooter: this.renderFooterMansonry
            },
            {
              uri: 'https://images.unsplash.com/photo-1504826260979-242151ee45b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
              renderFooter: this.renderFooterMansonry
            },
            {
              uri: 'https://dogperday.com/wp-content/uploads/2019/10/article3-1.jpg',

              renderFooter: this.renderFooterMansonry
            },
            {
              uri: 'https://www.hondenschooldegabber.nl/wp-content/uploads/2019/07/maggielovesorbit-on-insta-v4P0vvk0wGE-unsplash-819x1024.jpg',

              renderFooter: this.renderFooterMansonry
            }
          ]}
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <TitleComponent
          title='98765.34'
          styleContainer={{
            width: wp('50%'),
            height: hp('10%')
          }}
          style={{
            fontSize: hp('6%'),
            fontWeight: 'bold',
            flexDirection: 'center',
            marginStart: 30
          }}
        />
      </ScrollView>
    )
  }
}

export default CartScreen
