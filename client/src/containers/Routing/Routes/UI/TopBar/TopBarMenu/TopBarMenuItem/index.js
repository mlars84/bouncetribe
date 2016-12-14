import React, {Component} from 'react'
import S from 'styling/S'
import {Link} from 'react-router'

const topBarMenuItemBase = {
  display: 'flex',
  marginLeft: '15px'
}

const topBarMenuItem = new S({
  base: topBarMenuItemBase
})

class TopBarMenuItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  // handleTouchTap = (event) => {
  //   event.preventDefault()
  //   this.setState({
  //     open: true,
  //     anchorEl: event.currentTarget,
  //   })
  // }
  //
  // handleRequestClose = () => {
  //   this.setState({
  //     open: false,
  //   })
  // }
  //
  // componentWillReceiveProps = (newProps) => {
  //   if (newProps.isLoggedIn) {
  //     this.handleRequestClose()
  //   }
  // }

  // get hasDropDown() {
  //   if (this.props.dropDown) {
  //     return (
  //       <Popover
  //         open={this.state.open}
  //         anchorEl={this.state.anchorEl}
  //         anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
  //         targetOrigin={{horizontal: 'right', vertical: 'top'}}
  //         onRequestClose={this.handleRequestClose}
  //         animation={PopoverAnimationVertical}
  //       >
  //         {this.props.dropDown}
  //       </Popover>
  //     )
  //   }
  // }

  render() {
    return (
        <div
          style={{
            ...topBarMenuItem.all
          }}
        >
          <Link
            to={this.props.to}
          >
            <img
              src={this.props.icon}
              role='presentation'
              style={{
                maxHeight: '1em',
                marginRight: '5px',
                height: '100%'
              }}
            />
            <span>
              {this.props.text}
              {this.props.children}
            </span>
          </Link>

        </div>
    )
  }
}

export default TopBarMenuItem
