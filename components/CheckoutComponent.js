import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

export class OrdersComponent extends Component {
  render () {
    return (
      <View style={styles.inputG}>
        <View style={styles.text2}>
          <Text style={styles.text2}>Cumulative</Text>
        </View>
        <View style={styles.text3}>
          <Text>$/. 28.00</Text>
        </View>
        <View style={styles.text4}>
          <Text style={styles.text4}>Delivery</Text>
        </View>
        <View style={styles.text5}>
          <Text style={styles.text5}>$/. 7.20</Text>
        </View>
        <View style={styles.text6}>
          <Text style={styles.text6}>Service</Text>
        </View>
        <View style={styles.text7}>
          <Text style={styles.text7}>$/. 7.20</Text>
        </View>
        <View style={styles.text8}>
          <Text style={styles.text8}>Summary</Text>
        </View>
        <View style={styles.text9}>
          <Text style={styles.text9}>$/. 35.20</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputG: {
    flex: 1,
    padding: 5,
    borderRadius: 10,
    width: 337,
    left: 10,
    top: 20,
    height: 130
  },
  text1: {
    backgroundColor: 'green',
    width: 110,
    borderRadius: 5,
    textAlign: 'center',
    color: 'white',
    bottom: 25,
    left: 222
  },
  text2: {
    bottom: 20,
    left: 0,
    fontSize: 15
  },
  text3: {
    bottom: 42,
    left: 280,
    fontSize: 15
  },
  text4: {
    bottom: 32,
    left: 1,
    fontSize: 14
  },
  text5: {
    bottom: 55,
    left: 280,
    fontSize: 14
  },
  text6: {
    bottom: 48,
    left: 2,
    fontSize: 14
  },
  text7: {
    bottom: 68,
    left: 280,
    fontSize: 14
  },
  text8: {
    bottom: 65,
    left: 0,
    fontSize: 14,
    fontWeight: 900
  },
  text9: {
    bottom: 85,
    left: 280,
    fontSize: 14,
    fontWeight: 900
  },
  text10: {
    bottom: 78,
    left: 240,
    fontSize: 14
  },
  inputG1: {
    flex: 1,
    borderColor: 'orange',
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    width: 337,
    left: 10,
    top: 50,
    height: 130
  },
  text11: {
    backgroundColor: 'orange',
    width: 110,
    borderRadius: 5,
    textAlign: 'center',
    color: 'white',
    bottom: 25,
    left: 222
  },
  inputG2: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    width: 337,
    left: 10,
    top: 80,
    height: 130
  },
  text12: {
    backgroundColor: 'red',
    width: 110,
    borderRadius: 5,
    textAlign: 'center',
    color: 'white',
    bottom: 25,
    left: 222
  }
})

export default OrdersComponent
