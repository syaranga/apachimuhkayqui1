import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

export class ProfileComponent extends Component {
  render () {
    return (
      <View style={styles.input}>
        <View style={styles.input1}>
          <TextInput
            returnKeyType='next'
            autoFocus
            placeholder='Ridhwan Nordin'
            onSubmitEditing={(event) => {
              this.refs.SecondInput.focus()
            }}
          />
        </View>
        <View style={styles.input2}>
          <TextInput
            ref='SecondInput'
            multiline
            maxLength={200}
            placeholder='@ridzjcob'
          />
        </View>
        <View style={styles.input3}>
          <TextInput
            ref='SecondInput'
            multiline
            maxLength={200}
            placeholder='ridhwanordin@gmail.com'
          />
        </View>
        <View style={styles.input4}>
          <TextInput
            ref='SecondInput'
            multiline
            maxLength={200}
            placeholder='987654321'
          />
        </View>
        <View style={styles.input5}>
          <TextInput
            ref='SecondInput'
            multiline
            maxLength={200}
            placeholder='60708090'
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    flex: 1,
    paddingLeft: 12,
    paddingRight: 30,
    textShadowColor: '#585858',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
    padding: 4
  },
  input1: {
    borderColor: 'black',
    borderWidth: 3,
    padding: 5,
    width: 195
  },
  input2: {
    bottom: 42,
    left: 200,
    borderColor: 'black',
    borderWidth: 3,
    padding: 5,
    width: 132
  },
  input3: {
    bottom: 15,
    borderColor: 'black',
    borderWidth: 3,
    padding: 5,
    width: 333
  },
  input4: {
    top: 10,
    borderColor: 'black',
    borderWidth: 3,
    padding: 5,
    width: 180
  },
  input5: {
    bottom: 32,
    left: 185,
    borderColor: 'black',
    borderWidth: 3,
    padding: 5,
    width: 148
  }
})

export default ProfileComponent
