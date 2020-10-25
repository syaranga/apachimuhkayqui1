import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native'

export default class CategoriesComponent extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView} horizontal>
          <View style={[styles.slide, this.props.styleSlide]}>
            {
              this.props.data.map((item, index) => {
                return (
                  <View key={index} style={[styles.categoryWrapper, { marginLeft: index < 1 ? 0 : 8 }]}>
                    <CategoryComponent data={item} />
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

export class CategoryComponent extends Component {
  render () {
    return (
      <View style={styles.category}>
        <Image
          style={styles.categoryImage}
          source={{ uri: this.props.data.image }}
        />
        <Text style={styles.categoryText}>
          {this.props.data.name}
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
    width: 48,
    height: 48,
    borderRadius: 48
  },
  categoryText: {
    textAlign: 'center'
  }
})
