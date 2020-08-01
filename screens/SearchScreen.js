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
              image: 'https://420intel.com/sites/default/files/field/image/how-to-use-cbd-to-calm-dogs-during-the-holidays.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.sosodours.com/wp-content/uploads//2019/07/Chien-plancher-odeur-urine.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.adiestrar-perros.com/blog/wp-content/uploads/2019/10/Two-dogs-1080x675.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://conductcan.com/wp-content/uploads/2019/01/Socializaci%C3%B3n_perro_conductcan-1080x600.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://agauche.org/wp-content/uploads/2020/03/alvan-nee-T-0EW-SEbsE-unsplash-scaled.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://t2.ea.ltmcdn.com/es/images/5/6/2/10_caracteristicas_de_los_perros_24265_600.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://perrosdemalaga.com/wp-content/uploads/2014/04/adulto-o-cachorro.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://p0.piqsels.com/preview/891/865/93/two-white-and-black-french-bulldogs-sitting-in-front-of-closed-door.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://scontent-lim1-1.xx.fbcdn.net/v/t1.0-9/p960x960/67178538_499629030809394_367468640112476160_o.jpg?_nc_cat=101&_nc_sid=2d5d41&_nc_ohc=4TqQ2UCwcV0AX8Tp8uq&_nc_ht=scontent-lim1-1.xx&_nc_tp=6&oh=f147a2e469fcb0cb95d05420ddae5acb&oe=5F428001',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://blog.mascotaysalud.com/wp-content/uploads/2019/10/DIENTES-DE-PERROS.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://capuybigotes.com/wp-content/uploads/2020/04/Imagen-destacada_Mesa-de-trabajo-1-16-1160x560.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.lucesdemiciudad.com.ar/wp-content/uploads/2019/07/perros-unsplash.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://p1.piqsels.com/preview/245/447/739/tire-swing-swing-playground-fun-dog-puppy.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.bitute.co/SVsitefiles/contenido/med/043ea2_se%c3%b1ales_de_una_mascota_sana.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://blog.mascotaysalud.com/wp-content/uploads/2019/10/DIENTES-DE-PERROS.jpg',
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
              image: 'https://i0.wp.com/robbreport.mx/wp-content/uploads/2020/06/ian-dooley-5kmrpfjitsc-unsplash-scaled.jpg?resize=1024%2C1536&ssl=1',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://media.hedgeapple.com/cache/af/d2/afd2cf102d466db43d5df124967b1207.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.altudog.com/blog/wp-content/uploads/2019/11/ryan-walton-AbNO2iejoXA-unsplash-1.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.altudog.com/blog/wp-content/uploads/2019/11/photo-1505628346881-b72b27e84530.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.art2glassuk.com/art2glass/glass-coaster-002016-lg.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://cdn.shopify.com/s/files/1/1869/2585/articles/FOTOSBLOGBARK2_900x.jpg?v=1574110428',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.okchicas.com/wp-content/uploads/2015/11/Adorables-cachorros-que-no-parecen-reales-23.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://i.pinimg.com/originals/7c/b3/f7/7cb3f742164d4cba39eb27f874083243.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://m.encuentra24.com/files//or_fh_l/co/10/45/51/74/10455174_3e96f4.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://images.clarin.com/2019/12/19/la-nariz-de-los-perros___H4ZBI56K_600x338__1.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://static.vix.com/es/sites/default/files/imj/hogartotal/L/Las-mejores-razas-de-perros-para-apartamentos-5.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
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
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.barkyn.com/blog/img/uploads/2019/09/jonatan-burneo-NTyH57Qqiu8-unsplash-1.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://www.insidehook.com/wp-content/uploads/2020/03/dog_adoptions_coronavirus.jpg?fit=1795%2C1200',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.roXztmu92HGfZmh-T6x4awHaHa?pid=Api&w=203&h=203&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://www.bing.com/images/blob?bcid=TtybFVvDHJsBsw',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.Trws725tqh9vm5LNukOOrwHaE5?pid=Api&w=84&h=84&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.dDMUv2x_HRcYmfXRjHusGQAAAA?pid=Api&w=120&h=86&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.02jiiV5WLMpG5BfavUvXUQAAAA?pid=Api&w=100&h=70&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.K778MHeRxj6tkhi7bVZHtwHaE7?pid=Api&w=84&h=84&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.zFngqtjyu0nHsZooU_MmZwAAAA?pid=Api&w=100&h=100&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.Rh1abxgSzyV-U32eBTr4HgAAAA?pid=Api&w=84&h=84&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.fN8lBBz-56V3jOMap2hZrAAAAA?pid=Api&w=90&h=90&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.m_QjqiyuLb9aAKeachidUAHaHa?pid=Api&w=84&h=84&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.02jiiV5WLMpG5BfavUvXUQAAAA?pid=Api&w=100&h=70&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.K778MHeRxj6tkhi7bVZHtwHaE7?pid=Api&w=84&h=84&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.zFngqtjyu0nHsZooU_MmZwAAAA?pid=Api&w=100&h=100&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.Rh1abxgSzyV-U32eBTr4HgAAAA?pid=Api&w=84&h=84&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.fN8lBBz-56V3jOMap2hZrAAAAA?pid=Api&w=90&h=90&c=7',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.m_QjqiyuLb9aAKeachidUAHaHa?pid=Api&w=84&h=84&c=7',
              discount: '70%',
              price: '$9999'
            }
          ]}
          itemDimension={wp('25%')}
          styleItem={{
            backgroundColor: '',
            height: wp('30%'),
            width: wp('30%'),
            justifyContent: 'flex-end'
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
