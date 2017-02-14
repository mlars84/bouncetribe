import React, {Component} from 'react'
import Dialog from 'material-ui/Dialog'
import ImageUploader from 'components/ImageUploader'

export default class ImageEditor extends Component {

  render() {
    return (
      <Dialog
        title={'Edit Your Image'}
        open={this.props.open}
        onRequestClose={this.props.onRequestClose}
        contentStyle={{
          height: '800px',
          width: '800px'
        }}
      >
        <ImageUploader
          self={this.props.user}
          fileSuccess={this.props.portraitSuccess}
        />
      </Dialog>
    )
  }
}