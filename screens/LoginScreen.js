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
            title='Create'
            handleOnPress={() => {
              const query = `
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
                user: { ...this.state }
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
                'createUser'
              )
            }}
          />
        </View>
      </View>
    )
  }
}
