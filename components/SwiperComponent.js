import React, { Component } from 'react'
<<<<<<< HEAD
import { Text, View, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper/src'

const styles = StyleSheet.create({
    container: {fix: 1,justifyContent: 'center', textAlign: 'center'}
})
export class SwiperComponent extends Component {
    constructor(props) {
        super(props)
        this.state= {}
    }

    render () {
        return (
         <Swiper>
            {
              this.props.data.map ((item, index)=> {
                return (
                    <View key={index} style= {styles.container}>
                       <Text> {item} </Text>
                    </View>
                )
              })
            }            
         </Swiper>
        )
    }
=======
import { Text, View, StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper/src'

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', textAlign: 'center' }
})

export class SwiperComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View style={[this.props.styleContainer]}>
        <Swiper>
          {
            this.props.data.map((item, index) => {
              return (
                <View key={index} style={styles.container}>
                  <Image
                    style={{ height: '100%', width: '100%', resizeMode: 'cover' }}
                    source={{ uri: item.image }}
                  />
                  {/* <Text> {item.text} </Text> */}
                </View>
              )
            })
          }
        </Swiper>
      </View>
    )
  }
>>>>>>> 5c4a6c2bb5689158e28846e919b7c56ceaacc715
}

export default SwiperComponent
