import React, { Component } from 'react'
import Masonry from 'react-native-masonry'

export class MasonryComponent extends Component {
  render () {
    return (
      <Masonry
        sorted
        columns={2}
        bricks={[
          { uri: 'https://mister-mango.omni.la/ProductCatalog/Workspace.CWDQQL6GUIJMS/ProductCatalog.CYGEG4Q3GFXVC/1500x1500/CYGENQJ2HZBAI.jpg' },
          { uri: 'https://lafrikileria.com/30851-thickbox_default/set-tetera-y-taza-pusheen-cat.jpg' },
          { uri: 'https://i.linio.com/p/36989c11b7177b765901574de2f5e383-product.jpg' },
          { uri: 'https://home.ripley.com.pe/Attachment/WOP_5/2084208145112/2084208145112_2.jpg' },
          { uri: 'https://www.missbaby.com/media/catalog/product/cache/1/image/5306ff6d921ab100b0d82fbffb63947e/s/w/sw9-1008-0290.jpg' },
          { uri: 'https://i.pinimg.com/originals/c0/b3/e8/c0b3e8ea34b92fcdce7746225c190f36.jpg' }
        ]}
      />
    )
  }
}

export default MasonryComponent
