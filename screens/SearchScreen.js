import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TitleComponent from '../components/TitleComponent'
import GridComponent from '../components/GridComponent'

export class SearchScreen extends Component {
  render () {
    return (
      <ScrollView>
        <TitleComponent
          title='Search'
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
        <GridComponent
          data={[
            {
<<<<<<< HEAD
              image: 'https://www.terranovacnc.com/wp-content/uploads/2018/10/jonatan-burneo-788265-unsplash-scaled.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.insidehook.com/wp-content/uploads/2020/03/dog_adoptions_coronavirus.jpg?fit=4000%2C2674',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://64.media.tumblr.com/e37f98b27aab088f3951ef1f62835796/00eba40805112bfd-db/s1280x1920/a9a92f1bbf0402757cfc95860d6eb76703828c52.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.adiestrar-perros.com/blog/wp-content/uploads/2019/10/Two-dogs-1080x675.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://canna-pet.com/wp-content/uploads/2019/05/jenny-marvin-1265841-unsplash.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://cdn.shopify.com/s/files/1/0248/8729/6077/articles/1_bbGSypCPuFoVzncKdcElfg_2670x.jpeg?v=1584767393',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://st.focusedcollection.com/9163412/i/650/focused_176669450-stock-photo-brown-labrador-dog-posing-shore.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://miro.medium.com/max/7214/0*MLWCIROxXBu7i12n',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://i1.wp.com/glamorouspuppies.com/wp-content/uploads/2019/05/GlamPup_Post_Guide_1.jpg?fit=857%2C1200&ssl=1',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://cdn.hk01.com/di/media/images/3036477/org/248e7f27fa9b7684e042fc45e7371887.jpg/p2yyASHpWN-Fu3AE_rn38zj3IyBZlU_LQLtO6kC7Tuo',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://miro.medium.com/max/7744/1*-w_DAw9x8lNyIkbnvv1NPw.jpeg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://capuybigotes.com/wp-content/uploads/2020/04/Imagen-destacada_Mesa-de-trabajo-1-16.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://revistaminha.pt/wp-content/uploads/2019/09/anoir-chafik-2_3c4dIFYFU-unsplash-1080x700.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://skidawaytimes.com/wp-content/uploads/2018/04/20637789_1700677909976225_2179060765362220686_n.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.mundosano.com/__export/1593142131163/sites/elimparcial/img/2020/06/25/dogs-1246588_1920.jpg_423682103.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://s3-ap-northeast-1.amazonaws.com/static.lovely-media.jp/production/imgs/images/000/112/968/original.?1527717463',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://wamiz-international-prod.azureedge.net/media/cache/upload_og-image/article/main-picture/5c3d9c8052935873909725.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://miro.medium.com/max/9216/0*vjGEeATG3dK63iJ3',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://magarticles.magzter.com/articles/10496/415296/5e4dde9fab191/Love-Unconditionally.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.happets.com/blog/wp-content/uploads/2020/04/jay-wennington-CdK2eYhWfQ0-unsplash-1-1-1-1180x787.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://images-na.ssl-images-amazon.com/images/I/81wMB2xwkdL.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://images.squarespace-cdn.com/content/582a403fe58c62e99d839398/1561407089126-AJVN2HUV0TF0NEMYY9AQ/image-asset.jpeg?format=1500w&content-type=image%2Fjpeg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://mliq8vbttm5n.i.optimole.com/f5wiKvI-3_-5yxWi/w:auto/h:auto/q:75/https://blundellcashmere.com/wp-content/uploads/2019/01/Diferenciar-cashmere-de-calidad-Blundell-Blog-e1551262153912.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://i.pinimg.com/originals/6d/c3/04/6dc3041c2fc87e2106cb76b7d188181a.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://st.focusedcollection.com/9163412/i/650/focused_176669450-stock-photo-brown-labrador-dog-posing-shore.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://miro.medium.com/max/7214/0*MLWCIROxXBu7i12n',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://i1.wp.com/glamorouspuppies.com/wp-content/uploads/2019/05/GlamPup_Post_Guide_1.jpg?fit=857%2C1200&ssl=1',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.adiestrar-perros.com/blog/wp-content/uploads/2019/10/Two-dogs-1080x675.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://canna-pet.com/wp-content/uploads/2019/05/jenny-marvin-1265841-unsplash.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://cdn.shopify.com/s/files/1/0248/8729/6077/articles/1_bbGSypCPuFoVzncKdcElfg_2670x.jpeg?v=1584767393',
              discount: '70%',
              price: '$999.9'
=======
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
              image: 'https://th.bing.com/th/id/OIP.NlxrAImhJZuBjrE5_LyqYAAAAA?pid=Api&w=141&h=212&c=7',
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
>>>>>>> ae025929dc7c811d0fcb1e7600a1e6a3c50fbe6c
            }
          ]}
          itemDimension={wp('25%')}
          styleItem={{
            height: wp('30%'),
<<<<<<< HEAD
            justifyContent: 'flex-end'
=======
            backgroundColor: 'gray'
>>>>>>> ae025929dc7c811d0fcb1e7600a1e6a3c50fbe6c
          }}
        />
      </ScrollView>
    )
  }
}

export default SearchScreen
