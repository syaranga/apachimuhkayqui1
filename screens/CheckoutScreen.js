import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TitleComponent from '../components/TitleComponent'
import TextInputComponent from '../components/TextInputComponent'
import CreditCardDisplay from 'react-native-credit-card-display'
import TitleSectionComponent3 from '../components/TitleSectionComponent3'
import AccountComponent2 from '../components/AccountComponent2'
import CheckoutComponent from '../components/CheckoutComponent'

export default class CheckoutScreen extends Component {
  render () {
    return (
      <ScrollView>
        <TitleComponent title='Checkout' />
        <View style={styles.input1}>
          <CreditCardDisplay
            number={4242424242424242}
            cvc={123}
            expiration='04/21'
            name='John J. Doe'
            since='2004'
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'space-between',
            marginTop: wp('2%')
          }}
        >
          <View style={styles.input2}>
            <View>
              <View>
                <TextInputComponent
                  placeholder='4553 4578 4122 7898'
                />
              </View>
            </View>
          </View>
          <View style={styles.input3}>
            <View style={{ flex: 0.20 }}>
              <TextInputComponent
                placeholder='14/03'
              />
            </View>
          </View>
        </View>
        <View style={styles.input4}>
          <View style={{ marginTop: wp('2%') }}>
            <TextInputComponent
              placeholder='123'
            />
          </View>
        </View>
        <TitleSectionComponent3
          title='ADDREES'
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <View style={styles.input5}>
          <View style={{ flex: 0.65 }}>
            <TextInputComponent
              placeholder='Full name'
            />
          </View>
        </View>
        <TitleSectionComponent3
          title='ORDERS'
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <AccountComponent2 />
        <AccountComponent2 />
        <AccountComponent2 />
        <AccountComponent2 />
        <AccountComponent2 />
        <AccountComponent2 />
        <CheckoutComponent />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  input1: {
    padding: 5,
    width: 80,
    bottom: 5,
    right: 98,
    left: 22
  },
  input2: {
    right: 300,
    padding: 5,
    width: 170,
    bottom: 5,
    left: 22
  },
  input3: {
    padding: 5,
    width: 62,
    bottom: 5,
    right: 98
  },
  input4: {
    bottom: 65,
    left: 270,
    padding: 5,
    width: 80
  },
  input5: {
    padding: 5,
    width: 360
  }
})
