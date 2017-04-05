import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/AppBar';
import SideBar from './SideBar'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  handleToggler = () => {
    const { toggleBar } = this.props;
    toggleBar && toggleBar(true);
  }
  componentWillMount() {
    this.setState((prevState, props) => {
      open: this.props.open
    })
  }
  render() {
    return (
      <div>
        <AppBar
          title="React 豆瓣"
          onLeftIconButtonTouchTap={this.handleToggler}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <SideBar  open={this.props.open} toggleBar={this.props.toggleBar}/>
      </div>
    )
  }
}

Header.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleBar: PropTypes.func.isRequired
}


export default Header
