import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import ButtonIconComponent from '../components/ButtonIconComponent'

export default class SlideItemComponent extends Component {
  render () {
    return (
      <ScrollView
        horizontal
        style={styles.container}
      >
        {
          (this.props.data && this.props.data.length >= 1) && (
            this.props.data.map((item, index) => {
              return (
                <ItemComponent data={item} key={index} />
              )
            })
          )
        }
      </ScrollView>
    )
  }
}

export class ItemComponent extends Component {
  render () {
    return (
      <View style={styles.item}>
        <Image
          style={{ flex: 1 }}
          source={{ uri: this.props.data.image }}
        />
        <ForegroundItemComponent {...this.props} />
      </View>
    )
  }
}

export class ForegroundItemComponent extends Component {
  render () {
    return (
      <View style={styles.foreground}>
        <View style={{ paddingVertical: wp('2.5%'), backgroundColor: 'rgba(255,255,255,0.5)' }}>
          <View style={[styles.rowWrapper]}>
            <View style={[styles.row, { flex: 0.9 }]}>
              <Text>{this.props.data.brand}</Text>
              <Text>{this.props.data.original_price}</Text>
            </View>
          </View>
          <View style={[styles.rowWrapper]}>
            <View style={[styles.row, { flex: 0.9 }]}>
              <Text>{this.props.data.model}</Text>
              <Text>{this.props.data.price}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.rowWrapper, { paddingVertical: wp('2.5%') }]}>
          <View style={[styles.row, { flex: 0.9 }]}>
            <ButtonIconComponent />
            <ButtonIconComponent />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp('2.5%')
  },
  item: {
    position: 'relative',
    width: wp('46.25%'),
    height: wp('46.25%') * 1.32,
    marginRight: wp('2.5%')
  },
  foreground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignContent: 'flex-end'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between'
  },
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center'
  }
})
