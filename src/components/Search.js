import React, { Component, PropTypes } from 'react'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import { GridList, GridTile } from 'material-ui/GridList';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Close from 'material-ui/svg-icons/navigation/close';
import ListItem from './movie/ListItem'
import { Link } from 'react-router'
import Loading from './Loading'


const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        overflowY: 'auto',
    },
    colLIst: {
        padding: '5px'
    }
};
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            search: '',
            items: []
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.items != nextProps.items) {
            this.setState({ items: nextProps.items })
        }
    }
    handleClean = () => {
        this.setState({ search: '' })
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
    handleSubmit(e) {
        const { searchMovie } = this.props;
        if (e.keyCode == '13') {
            const params = {
                q: this.state.search
            }
            searchMovie && searchMovie(params);
        }
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
                            onKeyUp={(e) => this.handleSubmit(e)}
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
        const { loading } = this.props;
        const { items } = this.state;
        return (
            <div>
                {this.renderSearchInput()}
                <Loading show={loading} />
                {items.length > 0 && <ListItem items={items} />}
            </div>
        )
    }
}
Search.contextTypes = {
    router: PropTypes.object
}

// Search.propTypes = propTypes


export default Search
