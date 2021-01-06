import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import TitleComponent from '../components/TitleComponent'
import AccountComponent from '../components/AccountComponent'
import TitleSectionComponent from '../components/TitleSectionComponent'
import TextInputComponent from '../components/TextInputComponent'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { getItem } from '../helpers/AsyncStorageHelper'

export default class AccountScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fullname: null,
      alias: null,
      email: null,
      document: null,
      phone: null
    }
  }

  componentDidMount () {
    getItem('user')
      .then((user) => this.setState({ ...user }))
      .catch((err) => console.error(err))
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
            <TextInputComponent
              value={this.state.fullname}
              placeholder='Full name'
            />
          </View>
          <View style={{ flex: 0.30 }}>
            <TextInputComponent placeholder='Nick name' />
          </View>
        </View>
        <View style={{ marginTop: wp('2%') }}>
          <TextInputComponent
            value={this.state.email}
            placeholder='Email'
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
          <View style={{ flex: 0.55 }}>
            <TextInputComponent
              value={this.state.phone}
              placeholder='Phone'
            />
          </View>
          <View style={{ flex: 0.40 }}>
            <TextInputComponent
              value={this.state.document}
              placeholder='Document'
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}
