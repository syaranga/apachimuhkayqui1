import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { FlatGrid } from 'react-native-super-grid'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export class AccountComponent extends Component {
  render () {
    return (
      <View>
        <View style={styles.context}>
          <View style={styles.user}>
            <Image style={[styles.avatar, this.props.styleAvatar]} source={{ uri: 'https://media-exp1.licdn.com/dms/image/C5603AQH5-cgGGJvI4A/profile-displayphoto-shrink_200_200/0?e=1601510400&v=beta&t=HwzDK_qAoTt8Xq8OqFPAKh9KftdFDzb8In6KaZ2NWwQ' }} />
            <View style={styles.userData}>
              <Text style={[styles.nickname, this.props.styleNickname]}>Ridhwan Nordin</Text>
              <Text style={[styles.alias, this.props.styleAlias]}>@ridzjcob</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.title}>PROFILE</Text>
          <MaterialCommunityIcons
                    name="chevron-down"
                    style={styles.icon}
                  />
          </View>
          <View style={this.props.head}>
            <Text style={styles.name}>Ridhwan Nordin</Text>  
            <View style={this.props.head1}>
            <Text style={styles.name1}>@ridzjcob</Text>  
         </View>
         </View>
       
        <View style={this.props.head2}>
            <Text style={styles.name3}>ridhwanordin@gmail.com</Text> 
        </View>
        <View style={this.props.hea4}>
            <Text style={styles.name4}>987654321</Text>  
            <View style={this.props.head5}>
            <Text style={styles.name5}>60708090</Text>  
         </View>
         </View>
        <View>
          <Text style={styles.title}>ADS {'+'} </Text>
        </View>
        <FlatGrid
          itemDimension={this.props.itemDimension}
          data={this.props.data}
          renderItem={({ item }) => (
            <View style={[styles.item, this.props.styleItem]}>
              <Image
                style={this.props.styleItem}
                source={{ uri: item.image }}
              />
              <View style={styles.content}>
                <FontAwesome5 name='trash-alt' size={15} color='black' />
              </View>
            </View>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  context: { flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
  user: { flex: 1, flexDirection: 'row' },
  avatar: {

  },
  userData: {},
  nickname: {},
  alias: {},
  title: {
    justifyContent: 'center',
    fontSize: '20',
    paddingTop: '20',
    margin: 10,
    fontWeight: 'bold'
  },
  item: {
    position: 'relative'
  },
  content: {
    position: 'absolute',
    right: 0,
    left: 75,
    width: 23,
    bottom: '5%',
    justifyContent: '',
    backgroundColor: 'white',
    padding: '5%',
    margin: '5%',
    borderRadius: '10%'
  },
  discount: {
    flex: 0.5,
    color: 'red',
    fontWeight: 'bold',
    marginLeft: '3%'
  },
  price: {
    flex: 0.5,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: '3%'
  },
  name : {
    marginHorizontal: 10,
    width: ('59%'),
    borderColor: '#000',
    borderWidth: 1.5,
    padding: ('3%'),
    fontSize: '100%', 
    marginVertical: -8,
  },
  name1 : {
    marginHorizontal: 10,
    width: ('34%'),
    borderColor: '#000',
    borderWidth: 1.5,
    padding: ('3.3%'),
    fontSize: '100%', 
    marginVertical: -38,
    flexDirection: 'row',
    position: 'absolute',
    left: '218px'
  },
  name3 : {
    marginHorizontal: 10,
    borderColor: '#000',
    borderWidth: 1.5,
    padding: ('3.5%'),
    fontSize: '100%', 
    marginVertical: 19, 
  },
  name4 : {
    marginHorizontal: 10,
    width: ('53.1%'),
    borderColor: '#000',
    borderWidth: 1.5,
    padding: ('3.5%'),
    fontSize: '100%', 
    marginVertical: -8
  },
  name5 : {
    marginHorizontal: 10,
    width: ('39.5%'),
    borderColor: '#000',
    borderWidth: 1.5,
    padding: ('3.6%'),
    fontSize: '100%', 
    marginVertical: -41,
    flexDirection: 'row',
    position: 'absolute',
    left: '198px'
  },
  icon:{
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    fontSize: '145%',
    marginVertical: 7,

    
  }
})

export default AccountComponent
