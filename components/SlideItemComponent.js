import React, { Component } from 'react'
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default class SlideItemComponent extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView} horizontal showsHorizontalScrollIndicator={false}>
          <View style={[styles.slide, this.props.styleSlide]}>
            {
              this.props.data.map((item, index) => {
                return (
                  <View key={index} style={[styles.categoryWrapper, { marginLeft: index < 1 ? 0 : 8 }]}>
                    <SlideItemComponent1 styleCategoryImage={this.props.styleCategoryImage} data={item} />
                  </View>
                )
              })
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}

export class SlideItemComponent1 extends Component {
  render () {
    return (
      <View style={styles.category}>
        <Image
          style={[styles.categoryImage, this.props.styleCategoryImage]}
          source={{ uri: this.props.data.image }}
        />
        <MaterialIcons style={styles.icon} name='add-shopping-cart' />
        <MaterialIcons style={styles.icon2} name='favorite-border' />
        <Text style={styles.categoryText}>
          {this.props.data.name}
          Metal Earrings  $/. 4444.5
        </Text>
        <Text style={styles.categoryText1}>
          {this.props.data.name}
          Special Design  $/. 999.9
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1
  },
  slide: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  categoryWrapper: {},
  category: {},
  categoryImage: {
    width: 45,
    height: 45
  },
  categoryText: {
    textAlign: 'center',
    left: 5,
    top: 115,
    fontSize: 13,
    backgroundColor: 'rgba(50,0,0,0.2)',
    position: 'absolute'
  },
  categoryText1: {
    textAlign: 'center',
    color: 'white',
    left: 5,
    top: 135,
    fontSize: 13,
    backgroundColor: 'rgba(50,0,0,0.2)',
    position: 'absolute'
  },
  icon: {
    fontSize: 24,
    position: 'absolute',
    left: 4,
    top: 165,
    padding: 5,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 3
  },
  icon2: {
    fontSize: 24,
    position: 'absolute',
    left: 129,
    top: 165,
    padding: 5,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 3
  }
})