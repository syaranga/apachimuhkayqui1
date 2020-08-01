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
            backgroundColor: 'white',
            width: wp('100%'),
            paddingHorizontal: wp('2.5%'),
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
<<<<<<< HEAD
              image: 'https://images.unsplash.com/photo-1543554618-7e19c5e393d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=60',
=======
              image: 'https://420intel.com/sites/default/files/field/image/how-to-use-cbd-to-calm-dogs-during-the-holidays.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://www.sosodours.com/wp-content/uploads/2019/07/Chien-plancher-odeur-urine.jpg',
=======
              image: 'https://www.sosodours.com/wp-content/uploads//2019/07/Chien-plancher-odeur-urine.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://g77v3827gg2notadhhw9pew7-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/vladimir-kozlov-1239587-unsplash-800x500.jpg',
=======
              image: 'https://www.adiestrar-perros.com/blog/wp-content/uploads/2019/10/Two-dogs-1080x675.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://www.petscoop.com/wp-content/uploads/2019/07/dog-dogs-sunglasses.jpg',
=======
              image: 'https://conductcan.com/wp-content/uploads/2019/01/Socializaci%C3%B3n_perro_conductcan-1080x600.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://www.vetmed.ucdavis.edu/sites/g/files/dgvnsk491/files/inline-images/test.jpg',
=======
              image: 'https://agauche.org/wp-content/uploads/2020/03/alvan-nee-T-0EW-SEbsE-unsplash-scaled.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://fsmedia.imgix.net/93/eb/4e/ce/675b/404e/89a5/8952baabb731/lucrezia-carnelos-1344974-unsplashjpg.jpeg?crop=edges&fit=crop&auto=format%2Ccompress&h=600&w=1200',
=======
              image: 'https://t2.ea.ltmcdn.com/es/images/5/6/2/10_caracteristicas_de_los_perros_24265_600.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'http://seagatecottage.co.uk/wp-content/uploads/2019/03/paul-thomas-1375986-unsplash.jpg',
=======
              image: 'https://perrosdemalaga.com/wp-content/uploads/2014/04/adulto-o-cachorro.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://i.pinimg.com/originals/8b/34/a0/8b34a0601cbe7ce979e4db27a1d85eff.jpg',
=======
              image: 'https://p0.piqsels.com/preview/891/865/93/two-white-and-black-french-bulldogs-sitting-in-front-of-closed-door.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://thecontemporarypet.com/wp-content/uploads/2019/09/San-Jose-Pets-440x550.jpg',
=======
              image: 'https://scontent-lim1-1.xx.fbcdn.net/v/t1.0-9/p960x960/67178538_499629030809394_367468640112476160_o.jpg?_nc_cat=101&_nc_sid=2d5d41&_nc_ohc=4TqQ2UCwcV0AX8Tp8uq&_nc_ht=scontent-lim1-1.xx&_nc_tp=6&oh=f147a2e469fcb0cb95d05420ddae5acb&oe=5F428001',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://www.mobile-vet.ro/blog/wp-content/uploads/2019/09/castrarea-si-sterilizarea-cainilor-250x200.jpg',
=======
              image: 'https://blog.mascotaysalud.com/wp-content/uploads/2019/10/DIENTES-DE-PERROS.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://images.squarespace-cdn.com/content/v1/55a874eee4b09d0a2c902961/1587065260154-IEP60EHABB2LH1MX2KAV/ke17ZwdGBToddI8pDm48kOQpH4LtoSo1b8f6XA_oQh57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbkoIc_gK7rc8W-kkU-7zjwvUvfvLMPJ_7WcmiQBAI-onzUolzAoWmkUeqkvGJHupA/image-asset.jpeg',
=======
              image: 'https://capuybigotes.com/wp-content/uploads/2020/04/Imagen-destacada_Mesa-de-trabajo-1-16-1160x560.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://scontent.flim18-2.fna.fbcdn.net/v/t1.0-1/p720x720/82940551_100660484822356_3860967842945957888_o.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=5EW-9uL2gzcAX9QUlvN&_nc_ht=scontent.flim18-2.fna&_nc_tp=6&oh=c1e09e329ab6cbfbfa13a96050facac6&oe=5F456D33',
=======
              image: 'https://www.lucesdemiciudad.com.ar/wp-content/uploads/2019/07/perros-unsplash.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://64.media.tumblr.com/5900761eb6669939d28b6d42bd60c412/tumblr_onqfvfZyss1tvh80lo1_500.jpg',
=======
              image: 'https://p1.piqsels.com/preview/245/447/739/tire-swing-swing-playground-fun-dog-puppy.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://scontent.flim18-2.fna.fbcdn.net/v/t1.0-9/84717173_10156539159256829_226213655442620416_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=U21OMxVJpYoAX8kbq06&_nc_ht=scontent.flim18-2.fna&oh=9f20537168c54a039aa1de5d0bc9df70&oe=5F471D76',
=======
              image: 'https://www.bitute.co/SVsitefiles/contenido/med/043ea2_se%c3%b1ales_de_una_mascota_sana.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://imgk.timesnownews.com/story/mitchell-orr-PUY5xUszd3Y-unsplash.jpg',
=======
              image: 'https://blog.mascotaysalud.com/wp-content/uploads/2019/10/DIENTES-DE-PERROS.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
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
<<<<<<< HEAD
              image: 'https://ae01.alicdn.com/kf/HTB1IyURKbSYBuNjSspiq6xNzpXa1/vets-Rechargeable-battery-power-USB-FDX-B-ID64-ear-tag-small-mini-RFID-pets-scanner-for.jpg',
=======
              image: 'https://i0.wp.com/robbreport.mx/wp-content/uploads/2020/06/ian-dooley-5kmrpfjitsc-unsplash-scaled.jpg?resize=1024%2C1536&ssl=1',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://scontent.flim18-1.fna.fbcdn.net/v/t1.0-1/p720x720/46780455_311330072843325_4934560425422356480_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=vvG2cm7U_xoAX-2axZQ&_nc_ht=scontent.flim18-1.fna&_nc_tp=6&oh=8d9adfedc4d76554daab6bbc91e9de14&oe=5F44A7D6',
=======
              image: 'https://media.hedgeapple.com/cache/af/d2/afd2cf102d466db43d5df124967b1207.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://shadygrovedoodles.com/wp-content/uploads/2020/04/2020-04-03_15.39.58-375x500.jpg',
=======
              image: 'https://www.altudog.com/blog/wp-content/uploads/2019/11/ryan-walton-AbNO2iejoXA-unsplash-1.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://i.scdn.co/image/839e7311f112271a539269c05e644d58f1d22278',
=======
              image: 'https://www.altudog.com/blog/wp-content/uploads/2019/11/photo-1505628346881-b72b27e84530.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://mir-s3-cdn-cf.behance.net/projects/404/7e316472729771.Y3JvcCwxNDAwLDEwOTUsMCwxMjg.png',
=======
              image: 'https://www.art2glassuk.com/art2glass/glass-coaster-002016-lg.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://render.fineartamerica.com/images/rendered/square-dynamic/small/images/artworkimages/mediumlarge/1/-loving-you-forever-terri-thompson.jpg',
=======
              image: 'https://cdn.shopify.com/s/files/1/1869/2585/articles/FOTOSBLOGBARK2_900x.jpg?v=1574110428',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://www.lifeinahouse.net/wp-content/uploads/2020/05/dog-feature.jpg',
=======
              image: 'https://www.okchicas.com/wp-content/uploads/2015/11/Adorables-cachorros-que-no-parecen-reales-23.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'http://seagatecottage.co.uk/wp-content/uploads/2019/03/paul-thomas-1375986-unsplash.jpg',
=======
              image: 'https://i.pinimg.com/originals/7c/b3/f7/7cb3f742164d4cba39eb27f874083243.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://th.bing.com/th/id/OIP.t0Ww5PcCJU6O397ppeWrzQHaEK?pid=Api&rs=1',
=======
              image: 'https://m.encuentra24.com/files//or_fh_l/co/10/45/51/74/10455174_3e96f4.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://s3.amazonaws.com/filestore.rescuegroups.org/3182/pictures/animals/8036/8036925/60531123_100x87.jpg',
=======
              image: 'https://images.clarin.com/2019/12/19/la-nariz-de-los-perros___H4ZBI56K_600x338__1.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://img1.wsimg.com/isteam/ip/4564b83c-0baf-45e6-b6fd-7b70796d7d52/734949b1-f8ba-4c41-a59f-82d545a7039a.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg:true',
=======
              image: 'https://static.vix.com/es/sites/default/files/imj/hogartotal/L/Las-mejores-razas-de-perros-para-apartamentos-5.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            },
            {
<<<<<<< HEAD
              image: 'https://th.bing.com/th/id/OIP.pSBMYmYKgn4_6UC5o3bu3gHaNd?pid=Api&rs=1',
=======
              image: 'https://www.nationalgeographic.com.es/medio/2019/02/25/de-tal-palo-tal-astilla_2fc89eb0_800x800.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.technemexico.com/wp-content/uploads/2019/04/beagle-perros-mas-bonitos-del-mundo.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://i.pinimg.com/originals/88/ae/25/88ae256157a96c5cbf11c2763eaa3cec.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://t1.ea.ltmcdn.com/es/images/5/4/0/img_cuidados_del_pomerania_23045_600_square.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://estaticos.elperiodico.com/resources/jpg/0/7/boo-perro-mas-bonito-1548235035870.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.conectaadiestramiento.com/wp-content/uploads/2018/11/perros-reactivos-cachorros.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://s1.1zoom.me/b5256/993/Dogs_Belgian_Puppy_Run_Shepherd_552233_600x800.jpg',
>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
              discount: '70%',
              price: '$999.9'
            }
          ]}
<<<<<<< HEAD
=======

>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
          itemDimension={wp('25%')}
          styleItem={{
            backgroundColor: '',
            height: wp('30%'),
            width: wp('30%'),
            justifyContent: 'flex-end',
<<<<<<< HEAD
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
=======
            backgroundColor: 'cyan'

>>>>>>> 16d04b913d592a7a7041e4ef19a2ad044cc89b56
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
