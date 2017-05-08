import React, { Component, PropTypes } from 'react';
import {
    Tabs,
    Tab,
} from 'material-ui';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Header from '../../containers/header'
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Link } from 'react-router'
import Loading from '../Loading'
import { MOVIE_TYPE } from '../../constants/API'
import ListItem from './ListItem'


const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    tabs: {
        display: 'block',
    },
    gridList: {
        overflowY: 'auto',
    },
    colLIst: {
        padding: '5px'
    }
};

class MovieListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: MOVIE_TYPE.IN_THEATERS,
            items: []
        }
    }
    getChildContext() {
        return {
            toggleBar: this.props.toggleBar,
            open: this.props.open
        }
    }
    componentWillMount() {
        this.fetchData(this.state.type);
    }
    fetchData(type) {
        const { fetchData } = this.props;
        fetchData(type);
    }
    componentWillReceiveProps(nextProps){
        if (this.props.items != nextProps.items) {
            this.setState({ items: nextProps.items })
        }
    }
    handleChange = (type) => {
        this.setState({ items: [], type });
        this.fetchData(type);
    }
    render() {
        const { loading } = this.props;
        const { items } = this.state;
        return (
            <div>
                <Header toggleBar={this.props.toggleBar} open={this.props.open} />
                <Tabs
                    value={this.state.type}
                    onChange={this.handleChange}
                    
                >
                    <Tab label="正在上映" value={MOVIE_TYPE.IN_THEATERS} style={styles.tabs} >
                        <Loading show={loading} />
                        {!loading && <ListItem items={items}/>}
                    </Tab>
                    <Tab label="将要上映" value={MOVIE_TYPE.COMING_SOON} style={styles.tabs}>
                        <Loading show={loading} />
                        {!loading && <ListItem items={items}/>}
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

MovieListView.childContextTypes = {
    toggleBar: PropTypes.func,
    open: PropTypes.bool
}

MovieListView.propTypes = {
    loading: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired
}
export default MovieListView;