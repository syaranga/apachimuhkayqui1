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
            textShadowColor: 'black',
            textShadowOffset: {
              width: hp('.3%'),
              height: hp('.3%')
            }
          }}
          style={{
            fontSize: hp('8%'),
            color: 'pink'
          }}
        />
        <TitleComponent
          title='dogs'
          styleContainer={{
            width: wp('50%'),
            marginHorizontal: wp('2.5%')
          }}
          style={{
            fontSize: hp('3%'),
            marginLeft: 4,
            fontWeight: 'bold',
            width: wp('92%'),
            paddingVertical: wp('3%'),
            margin: wp('10%'),
            borderWidth: 3
          }}
        />
        <TitleComponent
          title='ALL RESULTS'
          styleContainer={{
            width: wp('95%'),
            marginHorizontal: wp('2.5%')
          }}
          style={{
            fontSize: hp('2.5%'),
            fontWeight: 'bold',
            color: 'orange'
          }}
        />
        <TitleComponent
          title='(<)1 de 100(>)'
          styleContainer={{
            width: wp('87%'),
            marginHorizontal: wp('2.5%')
          }}
          style={{
            fontSize: hp('2.5%'),
            textAlign: 'center',
            marginLeft: 20,
            fontWeight: 'bold'
          }}
        />
        <GridComponent
          data={[
            {
              image: 'https://www.igbioscience.co.uk/wp-content/uploads/2019/01/Colostrum-and-Pets-03-800x600.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://ariumliving.com/sites/default/files/styles/pets_family/public/2019-11/Capture4_78.JPG?itok=8GeZc54_&itok=8GeZc54_',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://www.sosodours.com/wp-content/uploads//2019/07/Chien-plancher-odeur-urine.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://64.media.tumblr.com/283c85cde3ab54b0abf1b6c37d794769/a3b69c07d829cbf1-da/s1280x1920/98b0cba9ad35935fc514f69762fd1e8682adbb72.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://www.petscoop.com/wp-content/uploads/2019/07/dog-dogs-sunglasses-500x383.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://agauche.org/wp-content/uploads/2020/03/alvan-nee-T-0EW-SEbsE-unsplash-scaled.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://64.media.tumblr.com/854e1a15e196a1c1e56e23880fa5d7fe/8caa100b5b14e426-47/s1280x1920/1dab47d3949f43c3a328ab0209c068ff9cae1d9f.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://64.media.tumblr.com/d20f21bbd7040d61f9a48d3fa8f0b1c1/5f43d442d964bb65-28/s1280x1920/16b6d43c2ab4a6d7e577fdbcd2352026b4d4ee32.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://64.media.tumblr.com/f887cd1a1da0e370d9c8f15b8490eb5a/636716d6c6d8903a-66/s1280x1920/ecf7ceed69dde555ad921481d194891ccb4c6e2b.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://thecontemporarypet.com/wp-content/uploads/2019/09/San-Jose-Pets-440x550.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://static.thebark.com/sites/default/files/styles/feature/public/content/article/full/anya-potsiadlo-p8_rmeffu-w-unsplash.jpg?itok=Rs2OK95q',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://64.media.tumblr.com/1ff2c77f1b2649615fa684e666741256/be9b04dd987b8a24-f9/s1280x1920/168aba8b59506d46ce5a3e08a5758048f8d055b9.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://images.all-free-download.com/images/graphiclarge/animal_canine_cute_daytime_dog_friendship_grass_604160.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://64.media.tumblr.com/7c18f35b9137402257bd88e3840dd3f1/tumblr_p17zwcBySi1sf0xh9o1_500.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://www.hdnicewallpapers.com/Walls/Normal/Dog/Dog_Running_in_Sea.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://i1.wp.com/thezookeeperscompanion.com/wp-content/uploads/2019/09/cropped-header6.jpg?fit=1280%2C852&ssl=1',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://www.grownups.co.nz/wp-content/uploads/matt-nelson-259365-unsplash-300x200.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://mangoclinic.com/wp-content/uploads/2019/04/photo-1499938971550-7ad287075e0dixlibrb-1.2.1q80fmjpgcropentropycstinysrgbw1080fitmaxixideyJhcHBfaWQiOjQ3Mjg0fQ.jpeg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://64.media.tumblr.com/35c145b4406afe97d36194244764098f/85867409a08e8bcd-f6/s1280x1920/6bc2905ecfc8b7158ed20906d4ec79eea649c088.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://cdn.shopify.com/s/files/1/0015/5795/4621/files/home-raw-pet-food-prince-george_720x.jpg?v=1522104963',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'http://paws101.com/wp-content/uploads/2019/11/ReleaseCue-PawsitiveStepsDogTraining-277x300.png',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://cdn.shopify.com/s/files/1/0014/7672/2735/products/PAINT_36-60x60_large.jpg?v=1594068092',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://otonagram.jp/wp-content/uploads/2019/11/photo-1517849845537-4d257902454a.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://images.unsplash.com/photo-1516366434321-728a48e6b7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://64.media.tumblr.com/854e1a15e196a1c1e56e23880fa5d7fe/8caa100b5b14e426-47/s1280x1920/1dab47d3949f43c3a328ab0209c068ff9cae1d9f.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://64.media.tumblr.com/132b50d7ad0c3f8340dfab0f76580535/74328d250aa2afa4-e8/s1280x1920/07d0ddf03d13264131097f8c83cebcfb46b5df25.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://64.media.tumblr.com/d9a6caf7911d64a42b3b9fac992a0d23/8a332be838e5835e-24/s1280x1920/5bffc3d25ed81f9509bfc4c9b2988ed9c3ab7cdd.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://64.media.tumblr.com/0292a9344ca1ccafc4f8298ffff85d67/625fa80ae89bda6d-17/s1280x1920/7631e5c5a1ef5511c86c7ba2caccea4f6092ef5d.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://64.media.tumblr.com/913ced1e3a8225856c7d0bf14db219d1/1c6d379300291c76-8a/s1280x1920/3cf81ddc5aca3f1708aba1d7928f9640cf07004e.jpg',
              discount: '70%',
              price: '$9999'
            },
            {
              image: 'https://64.media.tumblr.com/1dd201c1f37fe20ed85cbadbaeff909c/06cdc75d0676125e-4f/s1280x1920/0a9f288892eb331ea5a3017c99e739142532de96.jpg',
              discount: '70%',
              price: '$9999'
            }
          ]}
          itemDimension={wp('60%')}
          styleItem={{
            height: wp('30%'),
            justifyContent: 'flex-end'
          }}
        />
        <TitleComponent
          title='(<)1 de 100(>)'
          styleContainer={{
            width: wp('87%'),
            marginHorizontal: wp('2.5%'),
            textShadowOffset: {
              width: hp('.3%'),
              height: hp('.3%')
            }
          }}
          style={{
            fontSize: hp('2.5%'),
            textAlign: 'center',
            marginLeft: 20,
            fontWeight: 'bold'
          }}
        />
      </ScrollView>
    )
  }
}
export default SearchScreen
