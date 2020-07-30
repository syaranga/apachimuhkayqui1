import React, { Component } from 'react'
import Masonry from 'react-native-masonry'

export class MasonryComponent extends Component {
  render () {
    return (
      <Masonry
        columns={2}
        bricks={[
          { uri: 'https://www.bing.com/images/blob?bcid=Tr-vMCzTfZwBMg' },
          { uri: 'https://www.bing.com/images/blob?bcid=TqLrO9rz4ZwBKA' },
          { uri: 'https://www.bing.com/images/blob?bcid=Tuu2CeGELJwBlg' },
          { uri: 'https://www.bing.com/images/blob?bcid=Tr7AlKTV2pwBMw' },
          { uri: 'https://static.seattletimes.com/wp-content/uploads/2017/02/41ea8bde4534470fae6c8240acad1476-780x1169.jpg' },
          { uri: 'https://thedogbookcompany.com/wp-content/uploads/2019/10/French-Bulldog-Pictures-Adventure.jpg' },
          { uri: 'https://www.bing.com/images/blob?bcid=TuQhZSCDUJwBTQ' },
          { uri: 'https://images.wallpaperscraft.com/image/paint_lines_stains_142949_1366x768.jpg' },
          { uri: 'https://c.pxhere.com/photos/b9/da/photo-81144.jpg!d' }

        ]}
      />
    )
  }
}

export default MasonryComponent
