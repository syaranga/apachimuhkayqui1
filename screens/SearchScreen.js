  
import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import TitleComponent from '../components/TitleComponent'
import GridComponent from '../components/GridComponent'
import TextInputComponent from '../components/TextInputComponent'

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
      .then(({ data }) => this.setState({ items: data.Items }))
      .catch((err) => console.error(err))
  }

  render () {
    return (
      <ScrollView>
        <TitleComponent title='Search' />
        <TextInputComponent
          placeholder='Text to search'
          style={{ marginHorizontal: wp('2.5%') }}
          handleOnChangeText={(text) => {
            fetch('http://localhost:4000/graphql', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
              },
              body: JSON.stringify({
                query: '{ Items(brand: "' + text + '") { id, user_id, brand, model, description, price, image, user {id, fullname, alias, email, phone, document}}}'
              })
            })
              .then((result) => result.json())
              .then(({ data }) => this.setState({ items: data.Items }))
              .catch((err) => console.error(err))
          }}
        />
        <GridComponent
          handleOnPress={(item) => {
            console.log('pressed!')
            console.log(item)
          }}
          data={this.state.items}
          itemDimension={wp('25%')}
          styleItem={{
            height: wp('30%'),
            backgroundColor: 'gray'
          }}
        />
      </ScrollView>
    )
  }
}

export default SearchScreen