import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TitleComponent from '../components/TitleComponent'
import GridComponent from '../components/GridComponent'

export class SearchScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.Allbig}>
        <TitleComponent
          title='Search'
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%'),
            textShadowColor: 'gray',
            backgroundColor: 'white',
            textShadowOffset: {
              width: hp('.3%'),
              height: hp('.3%')
            }
          }}
          style={{
            fontSize: hp('8%')
          }}
        />
        <GridComponent
          data={[
            {
              image: 'https://www.igbioscience.co.uk/wp-content/uploads/2019/01/Colostrum-and-Pets-03-800x600.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://images.unsplash.com/photo-1543554618-7e19c5e393d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=60',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.sosodours.com/wp-content/uploads/2019/07/Chien-plancher-odeur-urine.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://g77v3827gg2notadhhw9pew7-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/vladimir-kozlov-1239587-unsplash-800x500.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.petscoop.com/wp-content/uploads/2019/07/dog-dogs-sunglasses.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.vetmed.ucdavis.edu/sites/g/files/dgvnsk491/files/inline-images/test.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://fsmedia.imgix.net/93/eb/4e/ce/675b/404e/89a5/8952baabb731/lucrezia-carnelos-1344974-unsplashjpg.jpeg?crop=edges&fit=crop&auto=format%2Ccompress&h=600&w=1200',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'http://seagatecottage.co.uk/wp-content/uploads/2019/03/paul-thomas-1375986-unsplash.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://i.pinimg.com/originals/8b/34/a0/8b34a0601cbe7ce979e4db27a1d85eff.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://thecontemporarypet.com/wp-content/uploads/2019/09/San-Jose-Pets-440x550.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.mobile-vet.ro/blog/wp-content/uploads/2019/09/castrarea-si-sterilizarea-cainilor-250x200.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://images.squarespace-cdn.com/content/v1/55a874eee4b09d0a2c902961/1587065260154-IEP60EHABB2LH1MX2KAV/ke17ZwdGBToddI8pDm48kOQpH4LtoSo1b8f6XA_oQh57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbkoIc_gK7rc8W-kkU-7zjwvUvfvLMPJ_7WcmiQBAI-onzUolzAoWmkUeqkvGJHupA/image-asset.jpeg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://scontent.flim18-2.fna.fbcdn.net/v/t1.0-1/p720x720/82940551_100660484822356_3860967842945957888_o.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=5EW-9uL2gzcAX9QUlvN&_nc_ht=scontent.flim18-2.fna&_nc_tp=6&oh=c1e09e329ab6cbfbfa13a96050facac6&oe=5F456D33',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://64.media.tumblr.com/5900761eb6669939d28b6d42bd60c412/tumblr_onqfvfZyss1tvh80lo1_500.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://scontent.flim18-2.fna.fbcdn.net/v/t1.0-9/84717173_10156539159256829_226213655442620416_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=U21OMxVJpYoAX8kbq06&_nc_ht=scontent.flim18-2.fna&oh=9f20537168c54a039aa1de5d0bc9df70&oe=5F471D76',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://imgk.timesnownews.com/story/mitchell-orr-PUY5xUszd3Y-unsplash.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.mudbay.com/wp-content/uploads/2019/03/dogs-walking.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://bellaandduke.imgix.net/sneaky-elbow-h00rqvO5A-M-unsplash.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://ae01.alicdn.com/kf/HTB1IyURKbSYBuNjSspiq6xNzpXa1/vets-Rechargeable-battery-power-USB-FDX-B-ID64-ear-tag-small-mini-RFID-pets-scanner-for.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://scontent.flim18-1.fna.fbcdn.net/v/t1.0-1/p720x720/46780455_311330072843325_4934560425422356480_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=vvG2cm7U_xoAX-2axZQ&_nc_ht=scontent.flim18-1.fna&_nc_tp=6&oh=8d9adfedc4d76554daab6bbc91e9de14&oe=5F44A7D6',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://shadygrovedoodles.com/wp-content/uploads/2020/04/2020-04-03_15.39.58-375x500.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://i.scdn.co/image/839e7311f112271a539269c05e644d58f1d22278',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://mir-s3-cdn-cf.behance.net/projects/404/7e316472729771.Y3JvcCwxNDAwLDEwOTUsMCwxMjg.png',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://render.fineartamerica.com/images/rendered/square-dynamic/small/images/artworkimages/mediumlarge/1/-loving-you-forever-terri-thompson.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.lifeinahouse.net/wp-content/uploads/2020/05/dog-feature.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'http://seagatecottage.co.uk/wp-content/uploads/2019/03/paul-thomas-1375986-unsplash.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.t0Ww5PcCJU6O397ppeWrzQHaEK?pid=Api&rs=1',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://s3.amazonaws.com/filestore.rescuegroups.org/3182/pictures/animals/8036/8036925/60531123_100x87.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://img1.wsimg.com/isteam/ip/4564b83c-0baf-45e6-b6fd-7b70796d7d52/734949b1-f8ba-4c41-a59f-82d545a7039a.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg:true',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.pSBMYmYKgn4_6UC5o3bu3gHaNd?pid=Api&rs=1',
              discount: '70%',
              price: '$999.9'
            }
          ]}
          itemDimension={wp('25%')}
          styleItem={{
            backgroundColor: '',
            height: wp('30%'),
            width: wp('30%'),
            justifyContent: 'flex-end',
            padding: wp('.5%')

          }}
          bigprice={{
            height: wp('4.2%'),
            width: wp('29.2%'),
            marginVertical: wp('20%'),
            flexDirection: 'row',
            backgroundColor: 'white',
            position: 'absolute',
            top: '13px',
            left: '2px',
            opacity: 0.5
          }}
          discount={{
            backgroundColor: '',
            flex: 0.6,
            height: wp('4.5%'),
            color: 'red',
            fontSize: 16,
            marginHorizontal: wp('.9%'),
            fontFamily: 'monoscape',
            alignSelf: 'center',
            fontWeight: 'bold',
            opacity: 1.0,
            marginVertical: wp('9%')
          }}
          price={{
            backgroundColor: '',
            flex: 0.4,
            height: wp('4.5%'),
            color: 'black',
            fontSize: 16,
            marginHorizontal: wp('.9%'),
            fontFamily: 'monoscape',
            alignSelf: 'center',
            textAlign: 'right',
            fontWeight: 'bold',
            opacity: 1.0
          }}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  Allbig: { backgroundColor: 'white' }
})

export default SearchScreen
