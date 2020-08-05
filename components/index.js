import React, { Component } from 'react'
import { Navigator } from 'react-native'
import BuyModalComponent from './BuyModalComponent'
import GridComponent from './GridComponent'

export class GalleryComponent extends Component {
  constructor () {
    super()
    this.renderScene = this.renderScene.bind(this)
  }

  renderScene (route, navigator) {
    if (route.name === 'GridComponent') {
      return <GridComponent navigator={navigator} />
    } else if (route.name === 'BuyModalComponent') {
      return <BuyModalComponent navigator={navigator} />
    }
  }

  render () {
    return (
      <Navigator
        initialRoute={{ name: 'GridComponent' }}
        renderScene={this.renderScene}
      />
    )
  }
}
