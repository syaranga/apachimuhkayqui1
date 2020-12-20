import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import TitleComponent from '../components/TitleComponent'
import AccountComponent from '../components/AccountComponent'
import TitleSectionComponent from '../components/TitleSectionComponent'
import TextInputComponent from '../components/TextInputComponent'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

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
        fullname: 'Liliana Remache Sihuincha',
        alias: 'lilia',
        email: 'remachesihuincha@gmail.com',
        phone: 961495235,
        document: 72606154
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
      </ScrollView>
    )
  }
}
