import React, { Component } from 'react'
import { Text, View } from 'react-native'
import TextInputComponent from '../components/TextInputComponent'
import ButtonComponent from '../components/ButtonComponent'
import { setItem } from '../helpers/AsyncStorageHelper'

export default class LoginScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fullname: null,
      alias: null,
      email: null,
      phone: null,
      document: null,
      password: null
    }
  }

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
          setItem('user', result.data.Users[0])
          console.log('user:', result.data.Users[0])
          this.setState({ user: result.data.Users[0] })
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
            key='email'
            placeholder='@email'
            handleOnChangeText={(text) => this.setState({ email: text })}
          />
          <TextInputComponent
            key='password'
            placeholder='password'
            handleOnChangeText={(password) => this.setState({ password })}
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
                  password: this.state.password,
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
        <View>
          <Text>Register</Text>
          <TextInputComponent
            key='fullname'
            placeholder='fullname'
            handleOnChangeText={(text) => this.setState({ fullname: text })}
          />
          <TextInputComponent
            key='alias'
            placeholder='alias'
            handleOnChangeText={(text) => this.setState({ alias: text })}
          />
          <TextInputComponent
            key='email'
            placeholder='email'
            handleOnChangeText={(text) => this.setState({ email: text })}
          />
          <TextInputComponent
            key='password'
            placeholder='password'
            handleOnChangeText={(password) => this.setState({ password })}
          />
          <TextInputComponent
            key='phone'
            placeholder='phone'
            handleOnChangeText={(text) => this.setState({ phone: text })}
          />
          <TextInputComponent
            key='document'
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
                user: {
                  fullname: this.state.fullname,
                  alias: this.state.alias,
                  email: this.state.email,
                  password: this.state.password,
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
                'createUser'
              )
            }}
          />
        </View>
      </View>
    )
  }
}