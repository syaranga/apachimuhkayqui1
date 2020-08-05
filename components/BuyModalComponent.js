import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Entypo } from '@expo/vector-icons'

export class BuyModalComponent extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.buy}>Buy</Text>
            <View style={{ marginTop: hp('2%'), position: 'absolute', right: 0 }}>
              <Entypo name='heart' size={26} color='#FA4CA4' />
            </View>
          </View>
          <View>
            <Image
              style={styles.buyImage}
              source={{ uri: 'https://www.barkyn.com/blog/img/uploads/2019/09/jonatan-burneo-NTyH57Qqiu8-unsplash-1.jpg' }}
            />
          </View>
          <View style={styles.content}>
            <View style={styles.avatarWrapper}>
              <Image
                style={styles.avatarImage}
                source={{ uri: 'https://images.unsplash.com/profile-1561381043166-4a4993b5f33d?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff' }}
              />
              <View style={styles.user}>
                <Text style={styles.userName}>Ridwhan Nordin</Text>
                <Text style={styles.userAlias}>@ridzjcob</Text>
              </View>
            </View>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}> $9876.54</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => this.navigate.pop()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}> Add to cart</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    marginTop: '19%',
    marginHorizontal: wp('2.5%'),
    backgroundColor: 'white',
    width: wp('95%'),
    height: hp('78%'),
    alignItems: 'center',
    borderRadius: 8
  },
  buy: {
    textShadowColor: 'gray',
    fontSize: 30,
    textShadowOffset: {
      width: hp('.3%'),
      height: hp('.3%')
    }
  },
  buyImage: {
    height: hp('49%'),
    width: wp('90%'),
    marginTop: '3%'
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '2.5%'
  },
  avatarWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  avatarImage: {
    height: 28,
    width: 28,
    borderRadius: 14
  },
  user: {
    marginLeft: '2%'
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 11.5
  },
  userAlias: {
    fontSize: 11.5
  },
  priceWrapper: {
  },
  price: {
    fontSize: 34,
    position: 'relative',
    bottom: 10
  },
  addWrapper: {
    borderWidth: 1.5,
    borderWidthColor: 'black',
    borderRadius: 25,
    paddingVertical: hp('2.3%'),
    marginTop: wp('1%')
  },
  addText: {
    textAlign: 'center'
  }
})
export default BuyModalComponent
