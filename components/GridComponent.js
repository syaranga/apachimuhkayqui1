import React, { Component } from 'react'
import { Text, View, Image,StyleSheet } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'

export class GridComponent extends Component {
  render () {
    return (
      <View>
         <View style={this.props.head}>
            <Text style={styles.name}>dogs</Text>  
         </View>
         <View style={this.props.top_head}>
            <Text style={styles.result}>ALL RESULTS</Text>  
         </View>
         <View style={this.props.container}>
            <Text style={styles.containera}> (&lt;) 1 de 100 (&gt;) </Text>  
         </View>
        <FlatGrid
          itemDimension={this.props.itemDimension}
          data={this.props.data}
          renderItem={({ item }) => (
            <View style={this.props.styleItem}>
              <Image
                style={{ resizeMode: 'cover', height:('102%'),
                width:('102%')}}
                source={{ uri: item.image }}
              />
              <View style={this.props.precios}>
                 <Text style={[styles.discount, this.props.styleDiscount]}>{item.discount}</Text>
                 <Text style={[styles.price, this.props.stylePrice]}>{item.price}</Text>
              </View>
            </View>
          )}  
        /> 
       <View style={this.props.container}>
            <Text style={styles.contenedor}> (&lt;) 1 de 100 (&gt;) </Text>  
         </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  name : {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderColor: '#000',
    borderWidth: 1,
    padding: ('4%'),
    fontSize: '100%',  
  },
  result :{
    marginVertical: 14,
    marginHorizontal: 10,
    fontWeight: 'bold'
  },
  containera:{
  textAlign: 'center',
  fontSize: '100%'
  },
  contenedor:{
  textAlign: 'center',
  fontSize: '100%',
  padding: ('5%')
  }
})
export default GridComponent
