import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
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
              height: hp('.2%')
            }
          }}
          style={{
            fontSize: hp('8%')
          }}
        />

        <Text style={{
          marginHorizontal: wp('2.5%'),
          fontSize: hp('3.5%')
        }}
        >ALL RESULTS
        </Text>
        <Text
          style={{
            justifyContent: 'center',
            marginHorizontal: wp('40%'),
            textShadowColor: 'gray'
          }}
        >
          1 de 100
        </Text>
        <GridComponent

          data={[
            {
              image: 'https://www.igbioscience.co.uk/wp-content/uploads/2019/01/Colostrum-and-Pets-03-800x600.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://i.pinimg.com/originals/92/bc/89/92bc89884e968423c55007726f065937.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.sosodours.com/wp-content/uploads//2019/07/Chien-plancher-odeur-urine.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://wowpooch.com/wp-content/uploads/2019/05/Best-Dog-Food-For-Giant-Breeds-1024x536.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.wVamKxkb41uHY9v4xHnnkwHaEo?w=267&h=180&c=7&o=5&pid=1.7',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: ' https://agauche.org/wp-content/uploads/2020/03/alvan-nee-T-0EW-SEbsE-unsplash-scaled.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: ' https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpuTAMR6U1JJpGZcWugH1ejbRByGODufSPhA&usqp=CAU',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://t1.ea.ltmcdn.com/es/images/7/1/2/img_convivencia_entre_perros_macho_y_hembra_22217_orig.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://thumbs.dreamstime.com/z/tres-perros-marrones-lindos-que-se-incorporan-y-miran-123126717.jpg',
              discount: '70%',
              price: '$999.9'
            }

          ]}
          itemDimension={wp('25%')}
          styleItem={{
            height: wp('35%'),
            justifyContent: 'flex-end',
            padding: wp('.5%'),
            backgroundColor: 'white'
          }}
        />
      </ScrollView>
    )
  }
}

export default SearchScreen
