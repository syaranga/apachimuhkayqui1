import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import TitleComponent from '../components/TitleComponent'
import AccountComponent from '../components/AccountComponent'
import TitleSectionComponent from '../components/TitleSectionComponent'
import TextInputComponent from '../components/TextInputComponent'

export class AccountScreen extends Component {
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
            alignContent: 'space-between'
          }}
        >
          <View style={{ flex: 0.65 }}>
            <TextInputComponent placeholder='Full name' />
          </View>
          <View style={{ flex: 0.30 }}>
            <TextInputComponent placeholder='Nick name' />
          </View>
        </View>
        <TextInputComponent placeholder='Email' />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'space-between'
          }}
        >
          <View style={{ flex: 0.55 }}>
            <TextInputComponent placeholder='Phone' />
          </View>
          <View style={{ flex: 0.40 }}>
            <TextInputComponent placeholder='Document' />
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default AccountScreen
