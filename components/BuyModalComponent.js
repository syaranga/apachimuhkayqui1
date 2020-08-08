import React, { Component } from 'react'
import { TextInput, StyleSheet, View, Modal } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TitleComponent from './TitleComponent'
import GalleryComponent from './GalleryComponent'

export class BuyModalComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View style={{
        width: wp('100%'),
        height: hp('100%'),
        zIndex: 50,
        position: 'absolute',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'rgba(0,0,0,.5)'
      }}
      >
        <Modal
          visible={this.props.visible}
          style={{
            width: wp('90%'),
            height: hp('77%'),
            marginHorizontal: wp('5%'),
            borderRadius: wp('5%'),
            backgroundColor: 'white'
          }}
        >
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
              fontSize: hp('8%')
            }}
          />
          <GalleryComponent
            data={[
              {
                image: 'http://i1.wp.com/johnlewisglass.com/wp-content/uploads/2016/04/8-1.png?w=640',
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg',
                nickname: 'ridhwan nordin',
                alias: '@ridzjcob',
                price: '$9876.54'
              },
              {
                image: 'https://images.unsplash.com/photo-1561229980-b674f5893cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                avatar: 'https://manofmany.com/wp-content/uploads/2019/06/50-Long-Haircuts-Hairstyle-Tips-for-Men-2.jpg',
                nickname: 'clem onojeghuo',
                alias: '@clemono2',
                price: '$9876.54'
              },
              {
                image: 'https://i.pinimg.com/originals/b0/b8/21/b0b821853ad3de7e3a4c957817ba5a2d.jpg',
                avatar: 'https://newcastlebeach.org/images/man-picture.jpg',
                nickname: 'jon tyson',
                alias: '@jontyson',
                price: '$9876.54'
              },
              {
                image: 'https://scontent.flim22-1.fna.fbcdn.net/v/t1.0-9/p960x960/67139255_489779711566046_9015261501061070848_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_eui2=AeEDK5RDKsTynS2JYj7NfGqIqq9RepxIss2qr1F6nEiyzSNaqwzA2XoIqj4Eyk3Ty39qkDW5_5OfXNywPytfMYee&_nc_ohc=9hy-4b-XawMAX_IZloB&_nc_ht=scontent.flim22-1.fna&_nc_tp=6&oh=a6a82659a6dff635a49b398a24133999&oe=5F3E6583',
                avatar: 'https://i.pinimg.com/originals/cb/78/2b/cb782bd9da27e7b6dcd7974d2bb3a42e.jpg',
                nickname: 'simon zhu',
                alias: '@smnzhu',
                price: '$9876.54'
              }
            ]}
            styleContainer={{
              height: hp('55%'),
              width: wp('90%'),
              marginBottom: wp('2.5%')
            }}
            styleItem={{
              height: hp('50%'),
              width: wp('85%'),
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
              fontSize: hp('3%')
            }}
            styleAlias={{
              fontSize: hp('2%')
            }}
          />
        </Modal>
      </View>
    )
  }
}

export default BuyModalComponent