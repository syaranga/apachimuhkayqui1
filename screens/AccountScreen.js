import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import TitleComponent from '../components/TitleComponent'
import AccountComponent from '../components/AccountComponent'
import TitleSectionComponent from '../components/TitleSectionComponent'
import TextInputComponent from '../components/TextInputComponent'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default class AccountScreen extends Component {
  componentDidMount () {
    var query = `
    mutation CreateMessage($input: MessageInput) {
      createMessage(input: $input) {
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
        fullname: 'Jhony Felix Lopez',
        alias: 'un alias',
        email: 'email',
        phone: 65857,
        document: 111111
      }
    }

    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        query,
        variables
      })
    })
      .then(r => r.json())
      .then(data => console.log('data returned:', data))
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
            marginTop: ('2%')
          }}
        >
          <View style={{ flex: 0.65 }}>
            <TextInputComponent placeholder='Full name' />
          </View>
          <View style={{ flex: 0.30 }}>
            <TextInputComponent placeholder='Nick name' />
          </View>
        </View>
        <View style={{ marginTop: ('2%') }}>
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
      </ScrollView>
    )
  }
}
