import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/AppBar';
import SideBar from './SideBar'
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  componentWillMount() {
    this.setState((prevState, props) => {
      open: this.props.open
    })
  }
  handleToggler = () => {
    const { toggleBar } = this.props;
    toggleBar && toggleBar(true);
  }

  handleRightButtonTouch = () => {
    const { router } = this.context;
    router.push('/search');
  }
  render() {
    return (
      <div>
        <AppBar
          title="React 豆瓣"
          onLeftIconButtonTouchTap={this.handleToggler}
          iconElementRight={<IconButton><Search /></IconButton>}
          onRightIconButtonTouchTap={this.handleRightButtonTouch}
        />
        <SideBar open={this.props.open} toggleBar={this.props.toggleBar} />
      </div>
    )
  }
}

Header.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleBar: PropTypes.func.isRequired
}

Header.contextTypes = {
  router: PropTypes.object
}
export default Header
