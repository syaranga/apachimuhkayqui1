import React, { Component } from 'react'
import { ScrollView, TouchableWithoutFeedbackBase, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TitleComponent from '../components/TitleComponent'
import GridComponent from '../components/GridComponent'
import BuyModalComponent from '../components/BuyModalComponent'

export class SearchScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        query: '{ Items { id, user_id, brand, model, description, price, image, user {id, fullname, alias, email, phone, document}}}'
      })
    })
      .then((result) => result.json())
      .then(({ data }) => this.setState({ items: data }))
      .catch((err) => console.error(err))
  }

  render () {
    return (
      <View>
        <ScrollView>
          <BuyModalComponent visible />
          <TitleComponent title='Search' />
          <GridComponent
            handleOnPress={(item) => {
              console.log('pressed!')
              console.log(item)
            }}
            data={[
              {
                image: 'https://www.barkyn.com/blog/img/uploads/2019/09/jonatan-burneo-NTyH57Qqiu8-unsplash-1.jpg',
                discount: '70%',
                price: '$9999'
              }
            ]}
            itemDimension={wp('25%')}
            styleItem={{
              height: wp('30%'),
              backgroundColor: 'gray'
            }}
          />
        </ScrollView>
      </View>
    )
  }
}

export default SearchScreen
