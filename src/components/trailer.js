import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Embed, Dimmer } from 'semantic-ui-react'

export default class ModalExampleControlled extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        open={this.props.handleOpen}
        basic
        size='small'
      >
        <Header content='Trailer' />
        <Modal.Content>
          <Embed id={this.props.movietrailer['results'][0]['key']} placeholder='' source='youtube' />
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.props.handleOpen} inverted>
            <Icon name='checkmark' /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
