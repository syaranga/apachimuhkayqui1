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
              image: 'https://agauche.org/wp-content/uploads/2020/03/alvan-nee-T-0EW-SEbsE-unsplash-scaled.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://fananimal.com/wp-content/uploads/2019/08/5-razas-de-perros-que-cambian-cuando-crecen.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://wowpooch.com/wp-content/uploads/2019/05/Best-Dog-Food-For-Giant-Breeds-1024x536.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.elmundodelperro.net/fotos/91/3249_18m_01_thumb_690.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/temas/caracteristicas_dalmata.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://t1.ea.ltmcdn.com/es/images/3/0/0/10_razas_de_perros_pequenos_blancos_24003_600.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://mott.pe/noticias/wp-content/uploads/2016/02/05.png',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://e.radio-capital.io/large/2018/11/14/294029_710541.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMBbMDXBnMRe9y4OxwKC-Fe76EAbu4y_KYIg&usqp=CAU',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://supercurioso.com/wp-content/uploads/2019/06/Razas-de-Perros-Bonitos-del-Mundo.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://img.europapress.es/fotoweb/fotonoticia_20160223095538-16021602279_420.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://media.telemundo51.com/2019/09/tlmd-french-bulldog-perro-ideal-apartamento-portada.jpg?fit=1200%2C675',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://i.pinimg.com/564x/c4/68/d0/c468d0bdf0fb88e1efcc4ebec2bb2574.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.mediterraneannatural.com/wp-content/uploads/2019/04/Guia-completa-de-las-razas-de-perros-dogo-argentino-3.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOyN8WnPfThqNimiWIJH4g1Tp2I1tJt2v-8w&usqp=CAU',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.micachorro.net/wp-content/uploads/2018/02/pastor-aleman.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://www.animalfiel.com/wp-content/uploads/2020/04/razas-perros-pequenos.jpg',
              discount: '70%',
              price: '$999.9'
            },
            {
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQlP1zBM3G3yhI9s063M_vPQzUeQ6zdxVBtg&usqp=CAU',
              discount: '70%',
              price: '$999.9'
            }

          ]}
          
          itemDimension={wp('25%')}
          styleItem={{
            height: wp('30%'),
            justifyContent: 'flex-end',
            padding: wp('.3%'),  
          }}
           precios= {{   
            marginVertical:wp('20%'),              
            flexDirection: 'row',            
            height: wp('5%'),
            width: wp('29.5%'),
            backgroundColor:'transparent',
            opacity: 0.6,
            backgroundColor:'white',
            position: 'absolute',
            top: '10px',
            left: '2px'   
           }}
           styleDiscount= {{
               flex: 0.5,
               color: 'red',
               fontWeight:'bold',
               marginHorizontal: 3
           }}
           stylePrice= {{
              flex: 0.5,
              fontWeight:'bold',
              marginVertical:wp('.1%')      
                 }}
        />
      </ScrollView>
    )
  }
}

export default SearchScreen
