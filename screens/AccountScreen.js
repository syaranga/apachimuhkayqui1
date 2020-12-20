import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import TitleComponent from '../components/TitleComponent'
import AccountComponent from '../components/AccountComponent'
import TitleSectionComponent from '../components/TitleSectionComponent'
import TextInputComponent from '../components/TextInputComponent'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TitleSectionComponent2 from '../components/TitleSectionComponent2'
import ProfileComponent from '../components/ProfileComponent'
import CoinsComponent from '../components/CoinsComponent'
import OrdersComponent from '../components/OrdersComponent'

export default class AccountScreen extends Component {
  componentDidMount () {
    var query = `
    mutation createUser($user: inputUser) {
      createUser(data: $user) {
        id
        fullname
        alias
        email
        phone
        document
      }
    }
    `

    const variables = {
      user: {
        fullname: 'Joseph Antony Cordova Aguilar',
        alias: 'JosephCA',
        email: 'josephtex1066@gmail.com',
        phone: 995009817,
        document: 74611496
      }
    }

    this.handleOnFetch(
      'http://localhost:4000/graphql',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          query,
          variables
        })
      },
      'updateUser'
    )
  }

  handleOnFetch (input, init, control, object) {
    fetch(input, init)
      .then(r => r.json())
      .then(result => {
        if (control === 'updateUser') {
          console.log('user:', result.data)
          this.setState({ user: result.data })
        }
      })

      .catch((err) => console.error(err))
  }

  render () {
    return (
      <ScrollView>
        <TitleComponent title='Account' />
        <AccountComponent />
        <TitleSectionComponent title='Profile' />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'space-between',
            marginTop: wp('2%')
          }}
        >
          <View style={{ flex: 0.65 }}>
            <TextInputComponent placeholder='Full name' />
          </View>
          <View style={{ flex: 0.30 }}>
            <TextInputComponent placeholder='Nick name' />
          </View>
        </View>
        <View style={{ marginTop: wp('2%') }}>
          <TextInputComponent placeholder='Email' />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'space-between',
            marginTop: wp('2%')
          }}
        >
          <View style={{ flex: 0.55 }}>
            <TextInputComponent placeholder='Phone' />
          </View>
          <View style={{ flex: 0.40 }}>
            <TextInputComponent placeholder='Document' />
          </View>
        </View>
        <TitleSectionComponent2
          title='PROFILE'
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <ProfileComponent />
        <TitleSectionComponent2
          title='COINS'
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <CoinsComponent
          data={[
            { money: 'https://img2.freepng.es/20180421/xte/kisspng-united-states-dollar-money-computer-icons-coin-5adc03180dcc25.5687517515243681520565.jpg' },
            { image: 'https://periodicovirtual.com/content/images/2020/07/visa-clasica.png.img.960.1559857091691.png' }
          ]}
          styleSlide={{
            paddingHorizontal: wp('2.5%')
          }}
          styleCategoryImage={{
            height: hp('33%'),
            width: hp('53%')
          }}
          styleCategoryImage2={{
            height: hp('30%'),
            width: hp('50%')
          }}
        />
        <TitleSectionComponent2
          title='ORDERS'
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <OrdersComponent />
      </ScrollView>
    )
  }
}
