import React, { Component } from 'react'
import { Text, View } from 'react-native'
import TextInputComponent from '../components/TextInputComponent'
import ButtonComponent from '../components/ButtonComponent'

export default class LoginScreen extends Component {
  handleOnFetch (input, init, control, object) {
    fetch(input, init)
      .then(r => r.json())
      .then(result => {
        if (control === 'createUser') {
          console.log('createUser:', result.data)
          this.setState({ user: result.data })
        }
        if (control === 'readUser') {
          console.log('readUser:', result.data)
          this.setState({ user: result.data })
        }
      })
      .catch((err) => console.error(err))
  }

  render () {
    console.log(this.state)
    return (
      <View>
        <View>
          <Text>Login</Text>
          <TextInputComponent
            placeholder='@email'
            handleOnChangeText={(text) => this.setState({ email: text })}
          />
          <TextInputComponent
            placeholder='password'
            handleOnChangeText={(password) => this.setState({ password })}
          />
          <ButtonComponent
            title='Start'
            handleOnPress={() => console.log('start session')}
          />
        </View>
        <View>
          <Text>Register</Text>
          <TextInputComponent
            placeholder='fullname'
            handleOnChangeText={(text) => this.setState({ fullname: text })}
          />
          <TextInputComponent
            placeholder='alias'
            handleOnChangeText={(text) => this.setState({ alias: text })}
          />
          <TextInputComponent
            placeholder='email'
            handleOnChangeText={(text) => this.setState({ email: text })}
          />
          <TextInputComponent
            placeholder='phone'
            handleOnChangeText={(text) => this.setState({ phone: text })}
          />
          <TextInputComponent
            placeholder='document'
            handleOnChangeText={(text) => this.setState({ document: text })}
          />
          <ButtonComponent
            title='Start'
            handleOnPress={() => {
              const query = `
                query Users($user: inputUser) {
                  Users(data: $user) {
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
                  fullname: this.state.fullname,
                  alias: this.state.alias,
                  email: this.state.email,
                  phone: Number(this.state.phone),
                  document: Number(this.state.document)
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
                'readUser'
              )
            }}
          />
        </View>
      </View>
    )
  }
}
