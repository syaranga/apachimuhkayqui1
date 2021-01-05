import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet, StatusBar } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import TitleComponent from '../components/TitleComponent'
import TextInputComponent from '../components/TextInputComponent'
import TitleSectionComponent1 from '../components/TitleSectionComponent1'
import GalleryComponent from '../components/GalleryComponent'
import SimpleGalleryComponent from '../components/SimpleGalleryComponent'
import MasonryComponent from '../components/MasonryComponent'
import GalleryAddComponent from '../components/GalleryAddComponent'

export default class AddadScreen extends Component {
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
              placeholder=' ../ ../img.png '
            />
          </View>
          <View style={{ flex: 0.30 }}>
            <TextInputComponent placeholder=' Select image ' />
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
              placeholder='  $ 1200   '
            />
          </View>
        </View>
        <TitleSectionComponent1
          title='PREVIEWS'
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <GalleryComponent
          data={[
            {
              image: 'https://www.sosodours.com/wp-content/uploads//2019/07/Chien-plancher-odeur-urine.jpg',
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

        <SimpleGalleryComponent
          data={[
            { image: 'https://www.dzoom.org.es/wp-content/uploads/2017/06/12-consejos-modelos-femeninas_portada.jpg' },
            { image: 'https://www.agenciademodelosyedecanes.com/media/widgetkit/modelos-hombres-en-toluca-5162a67b89b097b90a36c7ff723349bf.jpg' },
            { image: 'https://images.clarin.com/2015/03/24/ryWMj2uR7l_340x340.jpg' },
            { image: 'https://img.freepik.com/foto-gratis/retrato-guapo-sonriente-elegante-joven-modelo-vestido-camisa-cuadros-roja-hombre-moda-posando_158538-4910.jpg?size=626&ext=jpg' },
            { image: 'https://modaellos.com/wp-content/uploads/2017/11/Foto-consejos-modelo-hombre-traje-istock-600x400.jpg' },
            { image: 'https://i.pinimg.com/236x/92/57/9e/92579e9cd1c777b0df7793b5db522431--actors-images-brant-daugherty.jpg' }
          ]}
        />
        <GalleryAddComponent
          data={[
            {
              avatar: 'https://www.sosodours.com/wp-content/uploads//2019/07/Chien-plancher-odeur-urine.jpg',
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
              <Text style={{ flex: 1, fontWeight: 'bold', width: 1, height: 10 }} />
              <Text style={{ flex: 1, color: '#D4C6C3' }} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: 'red', fontWeight: 'bold' }} />
              <Text />
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ justifyContent: 'space-around', flex: 1, flexDirection: 'row', width: 25, backgroundColor: 'white', padding: '3%', margin: '3%', borderRadius: '1%' }} />

          </View>
        </View>

        <StatusBar hidden />
        <MasonryComponent
          data={[
            {
              uri: 'https://agauche.org/wp-content/uploads/2020/03/alvan-nee-T-0EW-SEbsE-unsplash-scaled.jpg',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://www.sosodours.com/wp-content/uploads//2019/07/Chien-plancher-odeur-urine.jpg',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://p0.piqsels.com/preview/989/487/624/closeup-zoom-bokeh-abstract.jpg',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://c.pxhere.com/photos/b9/da/photo-81144.jpg!d',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://p0.piqsels.com/preview/589/846/331/portrait-eyes-pure-golden.jpg',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://s3.us-west-1.wasabisys.com/kadence/kt_22_image_03-min.jpg',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://s-media-cache-ak0.pinimg.com/600x315/b5/7e/37/b57e3755560125c82f3a2c20f20e6223.jpg',
              renderFooter: this.renderFooterMasonry
            },
            {
              uri: 'https://static.seattletimes.com/wp-content/uploads/2017/02/41ea8bde4534470fae6c8240acad1476-780x1169.jpg',
              renderFooter: this.renderFooterMasonry
            }
          ]}
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
        />
        <View style={styles.input5}>
          <View style={{ flex: 0.65 }}>
            <TextInputComponent
              placeholder=' Add ads'
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({

  input5: {
    bottom: 15,
    left: 150,
    padding: 5,
    width: 100
  }
})
