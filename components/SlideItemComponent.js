import React, { Component } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

export default class SlideItemComponent extends Component {
  render () {
    return (
      <View>
        <ScrollView>
          <SlideComponent />
        </ScrollView>
      </View>
    )
  }
}

export class SlideComponent extends Component {
  render () {
    return (
      <View>
        {
          (this.props.data && this.props.data.length >= 1) && (
            this.props.data.map((item, index) => {
              return (
                <ItemComponent data={item} key={index} />
              )
            })
          )
        }
      </View>
    )
  }
}

export class ItemComponent extends Component {
  render () {
    return (
      <View>
        <Image />
        <Text>item</Text>
      </View>
    )
  }
}
