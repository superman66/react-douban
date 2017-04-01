import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import SideBar from './SideBar'
// const propTypes = {
//   propTypesb
// }

// const defaultProps = {
//   defaultProps
// }

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  handleClick = () => {
    this.setState({ open: true });
  }
  render() {
    return (
      <div>
        <AppBar
          title="React 豆瓣"
          onLeftIconButtonTouchTap={this.handleClick}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <SideBar open={this.state.open} />
      </div>
    )
  }
}

// Header.propTypes = propTypes

// Class.defaultProps = defaultProps

export default Header
