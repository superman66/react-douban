import React, { Component, PropTypes } from 'react'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

import Close from 'material-ui/svg-icons/navigation/close';


class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            search: ''
        }
    }
    handleClean = () => {
        this.setState({search: ''})
    }
    handleBackButton = () => {
        const { router } = this.context;
        router.goBack();
    }
    handleInput = (e) => {
        this.setState({
            search: e.target.value,
            show: true
        });

    }
    renderCloseButton() {
        return this.state.show
            ?
            <IconButton
                onTouchTap={this.handleClean}>
                <Close />
            </IconButton>

            : null;
    }
    renderSearchInput() {
        return (
            <section>
                <Toolbar>
                    <ToolbarGroup firstChild={true} style={{ width: 100 + '%' }}>
                        <IconButton
                            onTouchTap={this.handleBackButton}>
                            <ArrowLeft />
                        </IconButton>
                        <TextField
                            fullWidth={true}
                            hintText="输入电影"
                            onChange={this.handleInput}
                            value={this.state.search}
                        />
                    </ToolbarGroup>
                    <ToolbarGroup lastChild={true} >
                        {/*{this.renderCloseButton}*/}
                        <IconButton
                            onTouchTap={this.handleClean}>
                            <Close />
                        </IconButton>
                    </ToolbarGroup>
                </Toolbar>
            </section>
        )
    }
    render() {
        return (
            <div>
                {this.renderSearchInput()}
            </div>
        )
    }
}
Search.contextTypes = {
    router: PropTypes.object
}

// Search.propTypes = propTypes


export default Search
