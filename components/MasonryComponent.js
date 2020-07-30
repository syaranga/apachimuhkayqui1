import React, { Component } from 'react'
import Masonry from 'react-native-masonry'

export class MasonryComponent extends Component {
  render () {
    return (
      <Masonry
        columns={2}
        bricks={[
          { uri: 'https://yt3.ggpht.com/a-/AAuE7mAYRTVdQUhzgE3VgI4omF0As2VXwVF64XQnhw=s100-mo-c-c0xffffffff-rj-k-no' },
          { uri: 'https://64.media.tumblr.com/avatar_9248f219a5d3_64.pnj' },
          { uri: 'https://images1.miaminewtimes.com/imager/u/125x70/9190880/img_0015.jpg' },
          { uri: 'http://www.welsh-pony.pl/beautye.jpg' },
          { uri: 'https://www.salonmaggieg.com.au/wp-content/uploads/2018/12/slider2-1.jpg' },
          { uri: 'https://irecommend.img.c3.r-99.com/sites/default/files/imagecache/200i/user-images/153585/dsc08436.jpg' },
          { uri: 'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkI5mBEhIua0OUOL_hnynR6KaKTM5SRkZCeTgDn6uOyic' },
          { uri: 'https://petsfans.com/wp-content/uploads/2019/06/photo-1561312176-5aedf7172115.jpg' },
          { uri: 'https://i1.sndcdn.com/artworks-000218389528-yz0ptp-t200x200.jpg' }
        ]}
      />
    )
  }
}

export default MasonryComponent
