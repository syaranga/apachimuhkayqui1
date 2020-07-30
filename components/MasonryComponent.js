import React, { Component } from 'react'
import Masonry from 'react-native-masonry'

export class MasonryComponent extends Component {
  render () {
    return (
      <Masonry
        columns={2}
        bricks={[
          { uri: 'https://i.pinimg.com/736x/5b/ba/65/5bba65ac948ecffde16047bcd6b662fe.jpg', icons: 'ios-heart', bagroupColor: 'red' },
          { uri: 'https://i.pinimg.com/564x/8d/b7/ea/8db7eafbcd6763e4ca68a5a13dbad8e9.jpg' },
          { uri: 'https://1.bp.blogspot.com/-fqD5xc_Iwko/WbLdk5wmtII/AAAAAAAABMk/Q7KvCmxk3jQ-4XKqXtEPdBtQdkxLkMS-QCEwYBhgL/s1600/49.jpg' }   ,   
          { uri: 'https://i.pinimg.com/originals/e1/42/0e/e1420ee7d48c9596d19e98c23b583044.png' }
        ]}
      />
    )
  }
}

export default MasonryComponent
