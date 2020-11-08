import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ScrollView, TextInput, Button } from 'react-native'

export class CoinsComponent extends Component {
  render () {
    return (
      <View>
        <View>
          <View style={styles.input}>
            <TextInput
              returnKeyType='next'
              autoFocus
              onSubmitEditing={(event) => {
                this.refs.SecondInput.focus()
              }}
            />
          </View>
          <Text style={styles.title}>$ 200</Text>
        </View>
        {
          this.props.data.map((item, index) => {
            return (
              <View key={index} style={[styles.categoryWrapper, { marginLeft: index < 1 ? 0 : 8 }]}>
                <CointComponent1 styleCategoryImage={this.props.styleCategoryImage} data={item} />
              </View>
            )
          })
        }
        <View style={styles.input2}>
          <TextInput
            returnKeyType='next'
            autoFocus
            placeholder='1234 4567 7891 3282'
            onSubmitEditing={(event) => {
              this.refs.SecondInput.focus()
            }}
          />
        </View>
        <View style={styles.input3}>
          <TextInput
            returnKeyType='next'
            autoFocus
            placeholder='12/23'
            onSubmitEditing={(event) => {
              this.refs.SecondInput.focus()
            }}
          />
        </View>
        <View style={styles.input4}>
          <TextInput
            returnKeyType='next'
            autoFocus
            placeholder='123'
            onSubmitEditing={(event) => {
              this.refs.SecondInput.focus()
            }}
          />
        </View>
        <View style={styles.input5}>
          <TextInput
            returnKeyType='next'
            autoFocus
            placeholder='$ 1005'
            onSubmitEditing={(event) => {
              this.refs.SecondInput.focus()
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Upload coins'
            color='#EFB810'
          />
        </View>
        <View style={styles.input6}>
          <TextInput
            returnKeyType='next'
            autoFocus
            placeholder='$ 1005'
            onSubmitEditing={(event) => {
              this.refs.SecondInput.focus()
            }}
          />
        </View>
        <View style={styles.input7}>
          <TextInput
            returnKeyType='next'
            autoFocus
            placeholder='$ 100'
            onSubmitEditing={(event) => {
              this.refs.SecondInput.focus()
            }}
          />
        </View>
        <View style={styles.button1}>
          <Button
            title='Download coins'
            color='chartreuse'
          />
        </View>
      </View>
    )
  }
}

export class CointComponent1 extends Component {
  render () {
    return (
      <View style={styles.category}>
        <Image
          style={[styles.categoryImage2, this.props.styleCategoryImage2]}
          source={{ uri: this.props.data.money }}
        />
        <Image
          style={[styles.categoryImage, this.props.styleCategoryImage]}
          source={{ uri: this.props.data.image }}
        />
        <Text style={styles.categoryText}>
          {this.props.data.name}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1
  },
  slide: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  categoryWrapper: {},
  category: {},
  categoryImage2: {
    width: 48,
    height: 48,
    left: 10,
    borderRadius: 12,
    bottom: 45
  },
  categoryImage: {
    width: 48,
    height: 48,
    left: 2,
    borderRadius: 12,
    bottom: 310
  },
  categoryText: {
    textAlign: 'center'
  },
  input: {
    backgroundColor: 'rgba(239, 184, 16, 0.7)',
    top: 25,
    left: 65,
    width: 265,
    textAlign: 'right',
    fontSize: 20,
    padding: 5
  },
  title: {
    textAlign: 'center',
    bottom: 8,
    left: 118,
    fontSize: 20
  },
  input2: {
    bottom: 310,
    left: 15,
    borderColor: 'black',
    borderWidth: 3,
    padding: 5,
    width: 175,
    textAlign: 'center'
  },
  input3: {
    bottom: 352,
    left: 200,
    borderColor: 'black',
    borderWidth: 3,
    padding: 5,
    width: 70,
    textAlign: 'center'
  },
  input4: {
    bottom: 394,
    left: 280,
    borderColor: 'black',
    borderWidth: 3,
    padding: 5,
    width: 60,
    textAlign: 'center'
  },
  input5: {
    bottom: 370,
    left: 15,
    borderColor: 'black',
    borderWidth: 3,
    padding: 5,
    width: 160
  },
  button: {
    bottom: 415,
    left: 190,
    width: 140,
    borderRadius: 50,
    padding: 8
  },
  input6: {
    borderColor: 'black',
    borderWidth: 3,
    textAlign: 'right',
    width: 330,
    bottom: 395,
    padding: 5,
    left: 15
  },
  input7: {
    borderColor: 'black',
    borderWidth: 3,
    textAlign: 'right',
    width: 150,
    bottom: 376,
    padding: 5,
    left: 15
  },
  button1: {
    bottom: 418,
    left: 170,
    width: 180,
    borderRadius: 50,
    padding: 1
  }
})

export default CoinsComponent
