import React, { Component } from 'react'
import { View, Text, ScrollView, StatusBar } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import TitleComponent from '../components/TitleComponent'
import CartComponent from '../components/CartComponent'

export class CartScreen extends Component {
  renderFooterCart (data) {
    return (
      <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1,
        flexDirection: '',
        justifyContent: 'space-between'
      }}
      >
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ flex: 1, fontWeight: 'bold', width: 100, height: 10 }}>Metal Earrin</Text>
            <Text style={{ flex: 1, color: '#D4C6C3' }}>Special Desin</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: 'red', fontWeight: 'bold' }}>70%</Text>
            <Text>$9999</Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ justifyContent: 'space-around', flex: 1, flexDirection: 'row', width: 25, backgroundColor: 'white', padding: '3%', margin: '3%', borderRadius: '1%' }}>
            <AntDesign name='minus' size={15} color='black' />
            <Text>1</Text>
            <AntDesign name='plus' size={15} color='black' />
          </View>
          <View style={{ width: 25, backgroundColor: 'white', padding: '3%', margin: '3%', borderRadius: '1%' }}>
            <MaterialIcons name='add-shopping-cart' size={15} color='black' />
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
              renderFooter: this.renderFooterCart
            },
            {
              uri: 'https://i.pinimg.com/originals/bb/27/f8/bb27f8490461fe47fd23e7231eb6fce8.jpg',
              renderFooter: this.renderFooterCart
            },
            {
              uri: 'https://i.pinimg.com/originals/cf/87/3d/cf873d9087c8596ee5599f1aaf3ed107.jpg',
              renderFooter: this.renderFooterCart
            },
            {
              uri: 'http://www.wiebelhuskyskleekai.com/scrapbook/lookatthat.JPG',
              renderFooter: this.renderFooterCart
            },
            {
              uri: 'https://previews.123rf.com/images/isselee/isselee1106/isselee110600349/9749224-perro-pastor-alem%C3%A1n-8-meses-de-edad-sentado-frente-a-fondo-blanco.jpg',
              renderFooter: this.renderFooterCart
            },
            {
              uri: 'https://i.pinimg.com/originals/bb/27/f8/bb27f8490461fe47fd23e7231eb6fce8.jpg',
              renderFooter: this.renderFooterCart
            }
          ]}
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', paddingTop: wp('5%'), marginBottom: wp('5%'), borderBottomColor: 'black', borderBottomWidth: 2 }}>$98765.34</Text>
        </View>
      </ScrollView>

    )
  }
}

export default CartScreen
