import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TitleComponent from '../components/TitleComponent'
import TextInputComponent from '../components/TextInputComponent'
import CreditCardDisplay from 'react-native-credit-card-display'
import TitleSectionComponent1 from '../components/TitleSectionComponent1'
import CheckoutComponent from '../components/CheckoutComponent'
import GalleryAddComponent from '../components/GalleryAddComponent'

export default class CheckoutScreen extends Component {
  render () {
    return (
      <ScrollView>
        <TitleComponent
          title='Checkout'
        />
        <View style={styles.input1}>
          <CreditCardDisplay
            number={400000111777000}
            cvc={123}
            expiration='04/01/21'
            name='Jhony F. Garcia'
            since='2021'
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'space-between',
            marginTop: wp('1%')
          }}
        >
          <View style={styles.input2}>
            <View>
              <View>
                <TextInputComponent
                  placeholder='  1234 567 7891 3182  '
                />
              </View>
            </View>
          </View>
          <View style={styles.input3}>
            <View style={{ flex: 0.20 }}>
              <TextInputComponent
                placeholder=' 12/03 '
              />
            </View>
          </View>
        </View>
        <View style={styles.input4}>
          <View style={{ marginTop: wp('2%') }}>
            <TextInputComponent
              placeholder=' 123 '
            />
          </View>
        </View>
        <TitleSectionComponent1
          title='ADDREES'
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <View style={styles.input5}>
          <View style={{ flex: 0.65 }}>
            <TextInputComponent
              placeholder='   Sheraton Lima Hotel & Convention Center '
            />
          </View>
        </View>
        <TitleSectionComponent1
          title='ORDERS'
          styleContainer={{
            width: ('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <GalleryAddComponent
          data={[
            {
              avatar: 'https://www.igbioscience.co.uk/wp-content/uploads/2019/01/Colostrum-and-Pets-03-800x600.jpg',
              nickname: 'Metal earrnings',
              alias: 'Special Desing',
              price: '$/. 9999',
              price2: '$/. 9999'
            }
          ]}
          styleContainer={{
            height: hp('15%'),
            width: wp('100%'),
            marginBottom: wp('2.5%')
          }}
          styleItem={{
            height: hp('50%'),
            width: wp('95%'),
            marginHorizontal: wp('2.5%'),
            top: 20
          }}
          styleAvatar={{
            height: hp('10%'),
            width: hp('10%'),
            borderRadius: hp('7%')
          }}
          stylePrice={{
            fontSize: hp('3%'),
            top: 20
          }}
          stylePrice2={{
            fontSize: hp('3%'),
            top: 20
          }}
          styleNickname={{
            fontSize: hp('3%'),
            top: 20
          }}
          styleAlias={{
            fontSize: hp('2%'),
            top: 20
          }}
        />
        <GalleryAddComponent
          data={[
            {
              avatar: 'https://www.igbioscience.co.uk/wp-content/uploads/2019/01/Colostrum-and-Pets-03-800x600.jpg',
              nickname: 'Metal earrnings',
              alias: 'Special Desing',
              price: '$/. 9999',
              price2: '$/. 9999'
            }
          ]}
          styleContainer={{
            height: hp('15%'),
            width: wp('100%'),
            marginBottom: wp('2.5%')
          }}
          styleItem={{
            height: hp('50%'),
            width: wp('95%'),
            marginHorizontal: wp('2.5%'),
            top: 20
          }}
          styleAvatar={{
            height: hp('10%'),
            width: hp('10%'),
            borderRadius: hp('7%')
          }}
          stylePrice={{
            fontSize: hp('3%'),
            top: 20
          }}
          stylePrice2={{
            fontSize: hp('3%'),
            top: 20
          }}
          styleNickname={{
            fontSize: hp('3%'),
            top: 20
          }}
          styleAlias={{
            fontSize: hp('2%'),
            top: 20
          }}
        />
        <GalleryAddComponent
          data={[
            {
              avatar: 'https://www.igbioscience.co.uk/wp-content/uploads/2019/01/Colostrum-and-Pets-03-800x600.jpg',
              nickname: 'Metal earrnings',
              alias: 'Special Desing',
              price: '$/. 9999',
              price2: '$/. 9999'
            }
          ]}
          styleContainer={{
            height: hp('15%'),
            width: wp('100%'),
            marginBottom: wp('2.5%')
          }}
          styleItem={{
            height: hp('50%'),
            width: wp('95%'),
            marginHorizontal: wp('2.5%'),
            top: 20
          }}
          styleAvatar={{
            height: hp('10%'),
            width: hp('10%'),
            borderRadius: hp('7%')
          }}
          stylePrice={{
            fontSize: hp('3%'),
            top: 20
          }}
          stylePrice2={{
            fontSize: hp('3%'),
            top: 20
          }}
          styleNickname={{
            fontSize: hp('3%'),
            top: 20
          }}
          styleAlias={{
            fontSize: hp('2%'),
            top: 20
          }}
        />
        <GalleryAddComponent
          data={[
            {
              avatar: 'https://www.igbioscience.co.uk/wp-content/uploads/2019/01/Colostrum-and-Pets-03-800x600.jpg',
              nickname: 'Metal earrnings',
              alias: 'Special Desing',
              price: '$/. 9999',
              price2: '$/. 9999'
            }
          ]}
          styleContainer={{
            height: hp('15%'),
            width: wp('100%'),
            marginBottom: wp('2.5%')
          }}
          styleItem={{
            height: hp('50%'),
            width: wp('95%'),
            marginHorizontal: wp('2.5%'),
            top: 20
          }}
          styleAvatar={{
            height: hp('10%'),
            width: hp('10%'),
            borderRadius: hp('7%')
          }}
          stylePrice={{
            fontSize: hp('3%'),
            top: 20
          }}
          stylePrice2={{
            fontSize: hp('3%'),
            top: 20
          }}
          styleNickname={{
            fontSize: hp('3%'),
            top: 20
          }}
          styleAlias={{
            fontSize: hp('2%'),
            top: 20
          }}
        />
        <GalleryAddComponent
          data={[
            {
              avatar: 'https://www.igbioscience.co.uk/wp-content/uploads/2019/01/Colostrum-and-Pets-03-800x600.jpg',
              nickname: 'Metal earrnings',
              alias: 'Special Desing',
              price: '$/. 9999',
              price2: '$/. 9999'
            }
          ]}
          styleContainer={{
            height: hp('15%'),
            width: wp('100%'),
            marginBottom: wp('2.5%')
          }}
          styleItem={{
            height: hp('50%'),
            width: wp('95%'),
            marginHorizontal: wp('2.5%'),
            top: 20
          }}
          styleAvatar={{
            height: hp('10%'),
            width: hp('10%'),
            borderRadius: hp('7%')
          }}
          stylePrice={{
            fontSize: hp('3%'),
            top: 20
          }}
          stylePrice2={{
            fontSize: hp('3%'),
            top: 20
          }}
          styleNickname={{
            fontSize: hp('3%'),
            top: 20
          }}
          styleAlias={{
            fontSize: hp('2%'),
            top: 20
          }}
        />
        <GalleryAddComponent
          data={[
            {
              avatar: 'https://www.igbioscience.co.uk/wp-content/uploads/2019/01/Colostrum-and-Pets-03-800x600.jpg',
              nickname: 'Metal earrnings',
              alias: 'Special Desing',
              price: '$/. 9999',
              price2: '$/. 9999'
            }
          ]}
          styleContainer={{
            height: hp('15%'),
            width: wp('100%'),
            marginBottom: wp('2.5%')
          }}
          styleItem={{
            height: hp('50%'),
            width: wp('95%'),
            marginHorizontal: wp('2.5%'),
            top: 20
          }}
          styleAvatar={{
            height: hp('10%'),
            width: hp('10%'),
            borderRadius: hp('7%')
          }}
          stylePrice={{
            fontSize: hp('3%'),
            top: 20
          }}
          stylePrice2={{
            fontSize: hp('3%'),
            top: 20
          }}
          styleNickname={{
            fontSize: hp('3%'),
            top: 20
          }}
          styleAlias={{
            fontSize: hp('2%'),
            top: 20
          }}
        />
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', paddingTop: wp('5%'), marginBottom: wp('5%'), borderBottomColor: 'black', borderBottomWidth: 2 }} />
        </View>
        <CheckoutComponent />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  input1: {
    padding: 5,
    width: 80,
    bottom: 5,
    right: 98,
    left: 22
  },
  input2: {
    right: 300,
    padding: 5,
    width: 170,
    bottom: 5,
    left: 22
  },
  input3: {
    padding: 5,
    width: 62,
    bottom: 5,
    right: 98
  },
  input4: {
    bottom: 65,
    left: 270,
    padding: 19,
    width: 80
  },
  input5: {
    padding: 20,
    width: 360,
    height: 80
  }
})
