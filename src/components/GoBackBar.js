import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import FlatButton from 'material-ui/FlatButton';


const styles = {
    title: {
        cursor: 'pointer',
    },
};


class GoBackBar extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    handleTouchTap = () => {
        const { goBack } = this.props;
        goBack();
    }
    render() {
        return (
            <AppBar
                title={<span style={styles.title}>{this.props.title}</span>}
                onLeftIconButtonTouchTap={this.handleTouchTap}
                iconElementLeft={<IconButton><ArrowLeft /></IconButton>}
            />
        )
    }
}

export default GoBackBar;