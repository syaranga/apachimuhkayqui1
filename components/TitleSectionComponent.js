import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export class TitleSectionComponent extends Component {
  render () {
    return (
      <View style={[styles.container, this.props.styleContainer]}>
        <Text style={styles.text}>
          {this.props.title}
        </Text>
        <MaterialIcons style={styles.icon} name='keyboard-arrow-right' />
      </View>
    )
  }
}

export default TitleSectionComponent

const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'row', justifyContent: 'space-between'
  },
  text: { fontSize: 24 },
  icon: { fontSize: 24, alignSelf: 'center' }
})