import React, { Component } from 'react'
import { Text, View } from 'react-native'
import TextInputComponent from '../components/TextInputComponent'
import ButtonComponent from '../components/ButtonComponent'

export default class LoginScreen extends Component {
  render () {
    return (
      <View>
        <Text> Login</Text>
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
          handleOnChangePress={() => console.log('start session')}
        />
        <View>
          <Text> REGISTER</Text>
          <TextInputComponent
            placeholder='fullname'
            handleOnChangeText={(text) => this.setState({ email: text })}
          />
          <TextInputComponent
            placeholder='alias'
            handleOnChangeText={(password) => this.setState({ password })}
          />
          <TextInputComponent
            placeholder='email'
            handleOnChangeText={(password) => this.setState({ password })}
          />
          <TextInputComponent
            placeholder='document'
            handleOnChangeText={(password) => this.setState({ password })}
          />
          <ButtonComponent
            title='create'
            handleOnChangePress={() => console.log('create')}
          />
        </View>
      </View>
    )
  }
}
