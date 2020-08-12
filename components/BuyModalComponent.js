import React, { Component } from 'react'
import { Text, View, Modal, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TitleComponent from './TitleComponent'
import GalleryComponent from './GalleryComponent'
import { Entypo } from '@expo/vector-icons'

export class BuyModalComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View style={styles.modalContainer}>
        <Modal
          visible={this.props.visible}
          style={styles.modalStyle}
        >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TitleComponent
              title='Buy'
              styleContainer={{
                width: wp('95%'),
                marginHorizontal: wp('2.5%'),
                textShadowColor: 'gray',
                textShadowOffset: {
                  width: hp('.3%'),
                  height: hp('.3%')
                }
              }}
              style={{
                fontSize: hp('7%')
              }}
            />
            <Entypo
              name='heart' size={30} color='#F011A2'
              style={styles.entypoIcon}
            />
          </View>

          <GalleryComponent
            data={[
              {
                image: 'https://www.barkyn.com/blog/img/uploads/2019/09/jonatan-burneo-NTyH57Qqiu8-unsplash-1.jpg',
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg',
                nickname: 'Ridhwan nordin',
                alias: '@ridzjcob',
                price: '9876.54'
              },
              {
                image: 'https://www.insidehook.com/wp-content/uploads/2020/03/dog_adoptions_coronavirus.jpg?fit=1795%2C1200',
                avatar: 'https://manofmany.com/wp-content/uploads/2019/06/50-Long-Haircuts-Hairstyle-Tips-for-Men-2.jpg',
                nickname: 'Clem onojeghuo',
                alias: '@clemono2',
                price: '9876.54'
              },
              {
                image: 'https://th.bing.com/th/id/OIP.roXztmu92HGfZmh-T6x4awHaHa?pid=Api&w=203&h=203&c=7',
                avatar: 'https://newcastlebeach.org/images/man-picture.jpg',
                nickname: 'Jon tyson',
                alias: '@jontyson',
                price: '9876.54'
              },
              {
                image: 'https://www.bing.com/images/blob?bcid=TtybFVvDHJsBsw',
                avatar: 'https://i.pinimg.com/originals/cb/78/2b/cb782bd9da27e7b6dcd7974d2bb3a42e.jpg',
                nickname: 'Simon zhu',
                alias: '@smnzhu',
                price: '9876.54'
              }
            ]}
            styleContainer={{
              height: hp('55%'),
              width: wp('95%'),
              marginBottom: wp('2.5%')
            }}
            styleItem={{
              height: hp('50%'),
              width: wp('90%'),
              marginHorizontal: wp('2.5%')
            }}
            styleAvatar={{
              height: hp('7%'),
              width: hp('7%'),
              borderRadius: hp('7%')
            }}
            stylePrice={{
              fontSize: hp('5%')
            }}
            styleNickname={{
              fontSize: hp('3%'),
              fontWeight: 'bold'
            }}
            styleAlias={{
              fontSize: hp('2%')
            }}
          />
          <View style={styles.addButton}>
            <Text style={styles.addText}>Add to Cart</Text>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    width: wp('100%'),
    height: hp('100%'),
    zIndex: 50,
    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  modalStyle: {
    width: wp('95%'),
    height: hp('77.5%'),
    marginHorizontal: wp('2.5%'),
    borderRadius: wp('3%'),
    backgroundColor: 'white',
    paddingBottom: hp('2%')
  },
  entypoIcon: {
    position: 'absolute',
    right: 0,
    marginTop: hp('3%'),
    marginRight: wp('3%')
  },
  addButton: {
    borderWidth: 2,
    paddingVertical: hp('2.2%'),
    alignItems: 'center',
    marginHorizontal: wp('2.5%'),
    borderRadius: wp('20%')
  },
  addText: {
    fontWeight: '600'
  }
})
export default BuyModalComponent
