import React, { Component } from 'react'
import { ScrollView, Text, View, StatusBar } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import TitleComponent from '../components/TitleComponent'
import TextInputComponent from '../components/TextInputComponent'
import TitleSectionComponent3 from '../components/TitleSectionComponent3'
import SwiperComponent from '../components/SwiperComponent'
import GalleryComponent from '../components/GalleryComponent'
import GalleryComponent2 from '../components/GalleryComponent2'
import TitleSectionComponent from '../components/TitleSectionComponent'
import SimpleGalleryComponent from '../components/SimpleGalleryComponent'
import CartComponent from '../components/CartComponent'
/** import MasonryComponent from '../components/MasonryComponent'**/
/** import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'**/

export default class AddAdScreen extends Component {
  render () {
    return (
      <ScrollView>
        <TitleComponent title='Add Ad' />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'space-between',
            marginTop: wp('2%')
          }}
        >
          <View style={{ flex: 0.65 }}>
            <TextInputComponent
              placeholder='../../img.png'
            />
          </View>
          <View style={{ flex: 0.30 }}>
            <TextInputComponent placeholder='Select image' />
          </View>
        </View>
        <View style={{ marginTop: wp('2%') }}>
          <TextInputComponent
            placeholder='Metal earnings'
          />
        </View>
        <View style={{ marginTop: wp('2%') }}>
          <TextInputComponent
            placeholder='Special design'
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'space-between',
            marginTop: wp('2%')
          }}
        >
          <View style={{ flex: 0.55 }}>
            <TextInputComponent
              placeholder='$ 1500'
            />
          </View>
          <View style={{ flex: 0.40 }}>
            <TextInputComponent
              placeholder='$ 1200'
            />
          </View>
        </View>
        <TitleSectionComponent3
          title='PREVIEWS'
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <SwiperComponent
          autoplay
          loop
          data={[
            { image: 'https://agauche.org/wp-content/uploads/2020/03/alvan-nee-T-0EW-SEbsE-unsplash-scaled.jpg' }
          ]}
          styleContainer={{
            height: hp('50%'),
            width: wp('100%'),
            marginBottom: wp('2.5%')
          }}
          styleItem={{
            height: hp('50%'),
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <GalleryComponent
          data={[
            {
              image: 'http://i1.wp.com/johnlewisglass.com/wp-content/uploads/2016/04/8-1.png?w=640',
              avatar: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg',
              nickname: 'ridhwan nordin',
              alias: '@ridzjcob',
              price: '$/. 9876.54'
            }
          ]}
          styleContainer={{
            height: hp('55%'),
            width: wp('100%'),
            marginBottom: wp('2.5%')
          }}
          styleItem={{
            height: hp('50%'),
            width: wp('95%'),
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
        <TitleSectionComponent title='Color' />
        <SimpleGalleryComponent
          data={[
            { image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg' },
            { image: 'https://i.pinimg.com/originals/cb/78/2b/cb782bd9da27e7b6dcd7974d2bb3a42e.jpg' },
            { image: 'https://newcastlebeach.org/images/man-picture.jpg' },
            { image: 'https://i.pinimg.com/originals/cb/78/2b/cb782bd9da27e7b6dcd7974d2bb3a42e.jpg' },
            { image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg' },
            { image: 'http://i1.wp.com/johnlewisglass.com/wp-content/uploads/2016/04/8-1.png?w=640' }
          ]}
        />
        <GalleryComponent2
          data={[
            {
              avatar: 'https://www.infobae.com/new-resizer/d09N_vgiOAqH_NojJDsUET2Dk2s=/1200x900/filters:format(jpg):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/5NQ4QLPS7VFF3A7MYAKGMNE7OA.jpg',
              nickname: 'Metal earrnings',
              alias: 'Special Desing',
              price: '$/. 9999',
              price2: '$/. 9999'
            }
          ]}
          styleContainer={{
            height: hp('55%'),
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
        <View style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          flex: 1,
          flexDirection: '',
          justifyContent: 'space-between'
        }}
        >
          <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ flex: 1, fontWeight: 'bold', width: 100, height: 10 }}>Metal Earrin</Text>
              <Text style={{ flex: 1, color: '#D4C6C3' }}>Special Desin</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: 'red', fontWeight: 'bold' }}>70%</Text>
              <Text>$9999</Text>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ justifyContent: 'space-around', flex: 1, flexDirection: 'row', width: 25, backgroundColor: 'white', padding: '3%', margin: '3%', borderRadius: '1%' }}>
              <AntDesign name='minus' size={15} color='black' />
              <Text>1</Text>
              <AntDesign name='plus' size={15} color='black' />
            </View>
            <View style={{ width: 25, backgroundColor: 'white', padding: '3%', margin: '3%', borderRadius: '3%' }}>
              <MaterialIcons name='add-shopping-cart' size={15} color='black' />
            </View>
          </View>
        </View>

        <StatusBar hidden />
        <CartComponent
          data={[
            {
              uri: 'https://www.barkyn.com/blog/img/uploads/2019/09/jonatan-burneo-NTyH57Qqiu8-unsplash-1.jpg',
              renderFooter: this.renderFooterCart
            },
            {
              uri: 'https://i.pinimg.com/originals/bb/27/f8/bb27f8490461fe47fd23e7231eb6fce8.jpg',
              renderFooter: this.renderFooterCart
            },
            {
              uri: 'https://i.pinimg.com/originals/cf/87/3d/cf873d9087c8596ee5599f1aaf3ed107.jpg',
              renderFooter: this.renderFooterCart
            },
            {
              uri: 'http://www.wiebelhuskyskleekai.com/scrapbook/lookatthat.JPG',
              renderFooter: this.renderFooterCart
            },
            {
              uri: 'https://previews.123rf.com/images/isselee/isselee1106/isselee110600349/9749224-perro-pastor-alem%C3%A1n-8-meses-de-edad-sentado-frente-a-fondo-blanco.jpg',
              renderFooter: this.renderFooterCart
            },
            {
              uri: 'https://i.pinimg.com/originals/bb/27/f8/bb27f8490461fe47fd23e7231eb6fce8.jpg',
              renderFooter: this.renderFooterCart
            }
          ]}
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', paddingTop: wp('5%'), marginBottom: wp('5%'), borderBottomColor: 'black', borderBottomWidth: 2 }}>98765.34</Text>
        </View>
      </ScrollView>
    )
  }
}
