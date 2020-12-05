import React, { Component } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

export default class SlideItemComponent extends Component {
  render () {
    return (
      <View>
        <ScrollView>
          <SlideComponent
            data={this.props.data}
          />
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
      <View style={{ height: 200, width: 100 }}>
        <Image
          style={{ flex: 1 }}
          source={{ uri: this.props.data.image }}
        />
        <Text>{this.props.data.brand}</Text>
      </View>
    )
  }
}
