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
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Goose-Alaskan_Husky.jpg/800px-Goose-Alaskan_Husky.jpg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://www.sosodours.com/wp-content/uploads/2019/07/Chien-plancher-odeur-urine.jpg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://www.sosodours.com/wp-content/uploads/2019/07/Chien-plancher-odeur-urine.jpg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://dogbreedadvice.com/wp-content/uploads/2019/05/large_dog-601x400.jpg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://www.sosodours.com/wp-content/uploads/2019/07/Chien-plancher-odeur-urine.jpg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://www.sosodours.com/wp-content/uploads/2019/07/Chien-plancher-odeur-urine.jpg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://www.sosodours.com/wp-content/uploads/2019/07/Chien-plancher-odeur-urine.jpg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://www.sosodours.com/wp-content/uploads/2019/07/Chien-plancher-odeur-urine.jpg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/African_wild_dog%2C_Lycaon_pictus_at_Savuti%2C_Chobe_National_Park%2C_Botswana.jpg/800px-African_wild_dog%2C_Lycaon_pictus_at_Savuti%2C_Chobe_National_Park%2C_Botswana.jpg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://i.ytimg.com/vi/dQMI4ClMqkQ/maxresdefault.jpg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://wpcluster.dctdigital.com/inspiralist/wp-content/uploads/sites/106/2019/05/dogs-1-940x705.jpg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://fsmedia.imgix.net/93/eb/4e/ce/675b/404e/89a5/8952baabb731/lucrezia-carnelos-1344974-unsplashjpg.jpeg?crop=edges&fit=crop&auto=format%2Ccompress&h=600&w=1200',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://doctorvet.it/wp-content/uploads/2019/09/respirazione-artificiale-per-cani-2880x1800.jpg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://dogperday.com/wp-content/uploads/2019/10/article3-1.jpg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'http://www.estetclassic.com/wp-content/uploads/2020/06/boris1.jpg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Goose-Alaskan_Husky.jpg/800px-Goose-Alaskan_Husky.jpg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bullterier_089_LM.jpg/800px-Bullterier_089_LM.jpg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://usercontent2.hubstatic.com/14776761_f520.jpg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://th.bing.com/th/id/OIP.3gJNA2MlCrKKS3GuOneHswAAAA?pid=Api&w=160&h=180&c=7',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://cdn1.ashleyshaw.ca/wp-content/uploads/2017/09/17221150/marion-michele-66097.jpg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://i.pinimg.com/originals/16/af/f6/16aff6526625c16c100c40831c451c81.jpg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://t1.ea.ltmcdn.com/en/images/8/5/2/what_foods_should_a_dog_with_kidney_disease_eat_258_300_150.jpg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://mangoclinic.com/wp-content/uploads/2019/04/photo-1499938971550-7ad287075e0dixlibrb-1.2.1q80fmjpgcropentropycstinysrgbw1080fitmaxixideyJhcHBfaWQiOjQ3Mjg0fQ.jpeg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Bossplotthound.JPG/245px-Bossplotthound.JPG',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://cdn.shopify.com/s/files/1/0015/5795/4621/files/home-raw-pet-food-prince-george_600x600@2x.jpg?v=1522104963',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://images.unsplash.com/photo-1504826260979-242151ee45b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=60',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://ashlandhillshotel.com/wp-content/uploads/2019/09/alan-king-KZv7w34tluA-unsplash.jpg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://usercontent2.hubstatic.com/14263837_f496.jpg',
              discount: '0%',
              price: '8.5'
            },
            {
              image: 'https://www.fitbark.com/wp-content/uploads/2020/05/FitBark_dogs_running_sandy_sunset-scaled.jpeg',
              discount: '0%',
              price: '8.5'
            }
          ]}
          itemDimension={wp('25%')}
          styleItem={{
            borderRadius: wp('2%'),
            padding: wp('.5%'),
            height: wp('30%'),
            justifyContent: 'flex-end'
          }}
          styleText={{
            backgroundColor: '#d3d3d3',
            flexDirection: 'row',
            justifyContent: 'space-Between'
          }}
          styleDiscont={{
            color: 'red',
            fontSize: hp('3%')
          }}
        />
      </ScrollView>
    )
  }
}
export default SearchScreen
