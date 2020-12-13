import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

export class OrdersComponent extends Component {
  render () {
    return (
      <View>
        <View>
          <View style={styles.inputG}>
            <View style={styles.input1}>
              <Text style={styles.text1}>Arrived</Text>
            </View>
            <View style={styles.input2}>
              <Text style={styles.text2}>5948254712</Text>
            </View>
            <View style={styles.input3}>
              <Text style={styles.text3}>06/08/2020</Text>
            </View>
            <View style={styles.input4}>
              <Text style={styles.text4}>Stores</Text>
            </View>
            <View style={styles.input5}>
              <Text style={styles.text5}>4</Text>
            </View>
            <View style={styles.input6}>
              <Text style={styles.text6}>Packages</Text>
            </View>
            <View style={styles.input7}>
              <Text style={styles.text7}>6</Text>
            </View>
            <View style={styles.input8}>
              <Text style={styles.text8}>Price</Text>
            </View>
            <View style={styles.input9}>
              <Text style={styles.text9}>$ 600.00</Text>
            </View>
            <View style={styles.input10}>
              <Text style={styles.text10}>Show more</Text>
            </View>
          </View>

          <View style={styles.inputG1}>
            <View style={styles.input1}>
              <Text style={styles.text11}>Transiting</Text>
            </View>
            <View style={styles.input2}>
              <Text style={styles.text2}>5948254712</Text>
            </View>
            <View style={styles.input3}>
              <Text style={styles.text3}>06/08/2020</Text>
            </View>
            <View style={styles.input4}>
              <Text style={styles.text4}>Stores</Text>
            </View>
            <View style={styles.input5}>
              <Text style={styles.text5}>4</Text>
            </View>
            <View style={styles.input6}>
              <Text style={styles.text6}>Packages</Text>
            </View>
            <View style={styles.input7}>
              <Text style={styles.text7}>6</Text>
            </View>
            <View style={styles.input8}>
              <Text style={styles.text8}>Price</Text>
            </View>
            <View style={styles.input9}>
              <Text style={styles.text9}>$ 600.00</Text>
            </View>
            <View style={styles.input10}>
              <Text style={styles.text10}>Show more</Text>
            </View>
          </View>

          <View style={styles.inputG2}>
            <View style={styles.input1}>
              <Text style={styles.text12}>Transiting</Text>
            </View>
            <View style={styles.input2}>
              <Text style={styles.text2}>5948254712</Text>
            </View>
            <View style={styles.input3}>
              <Text style={styles.text3}>06/08/2020</Text>
            </View>
            <View style={styles.input4}>
              <Text style={styles.text4}>Stores</Text>
            </View>
            <View style={styles.input5}>
              <Text style={styles.text5}>4</Text>
            </View>
            <View style={styles.input6}>
              <Text style={styles.text6}>Packages</Text>
            </View>
            <View style={styles.input7}>
              <Text style={styles.text7}>6</Text>
            </View>
            <View style={styles.input8}>
              <Text style={styles.text8}>Price</Text>
            </View>
            <View style={styles.input9}>
              <Text style={styles.text9}>$ 600.00</Text>
            </View>
            <View style={styles.input10}>
              <Text style={styles.text10}>Show more</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputG: {
    flex: 1,
    borderColor: 'green',
    borderWidth: 2,
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
    bottom: 16,
    left: 5,
    fontSize: 15
  },
  text3: {
    bottom: 36,
    left: 230,
    fontSize: 15
  },
  text4: {
    bottom: 34,
    left: 5,
    fontSize: 14
  },
  text5: {
    bottom: 50,
    left: 300,
    fontSize: 14
  },
  text6: {
    bottom: 48,
    left: 5,
    fontSize: 14
  },
  text7: {
    bottom: 68,
    left: 300,
    fontSize: 14
  },
  text8: {
    bottom: 62,
    left: 5,
    fontSize: 14
  },
  text9: {
    bottom: 80,
    left: 255,
    fontSize: 14
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