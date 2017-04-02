import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

function handleTouchTap(history) {
    console.log(history);
    alert('onTouchTap triggered on the title component');
}

const styles = {
    title: {
        cursor: 'pointer',
    },
};

/**
 * 带有后退按钮的Bar
 */
const GoBackBar = (props) => {
    const { history } = props;
    return (
        <AppBar
            title={<span style={styles.title}>{props.title}</span>}
            onLeftIconButtonTouchTap={(history) => handleTouchTap(history)}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        />
    );
}

export default GoBackBar;