import React, { Component } from 'react';
import {
    Tabs,
    Tab,
} from 'material-ui';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Link } from 'react-router'
import Loading from '../Loading'
import { MOVIE_TYPE } from '../../constants/API'


const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    tabs: {
        position: 'fixed',
        top: 0
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
            value: 'a',
            type: MOVIE_TYPE.IN_THEATERS,
            items: []
        }
    }
    componentWillMount() {
        this.fetchData(this.state.type);
    }
    fetchData(type) {
        const { fetchData } = this.props;
        fetchData(type);
    }
    componentWillUpdate(nextProps, nextState) {
        if (nextState.items != nextProps.items) {
            this.setState({ items: nextProps.items })
        }

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.type !== this.state.type) {
            // this.fetchData(this.state.type);
        }
    }
    handleChange = (type) => {
        this.setState({ items: [], type });
        this.fetchData(type);
    }
    renderList() {
        const { items } = this.state;
        return (
            <div style={styles.root}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                >
                    {items.map((item) =>
                        <Link to={`/movie/${item.id}`} key={item.id}>
                            <GridTile
                                title={item.title}
                                subtitle={<span>by <b>{item.directors[0].name}</b></span>}
                                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                            >
                                <img src={item.images.large}/>
                            </GridTile>
                        </Link>
                    )}
                </GridList>
            </div>
        )
    }
    render() {
        const { hasErrored, isLoading } = this.props;

        return (
            <Tabs
                value={this.state.type}
                onChange={this.handleChange}
            >
                <Tab label="正在上映" value={MOVIE_TYPE.IN_THEATERS} >
                    <Loading show={isLoading} />
                    {!isLoading && this.renderList()}
                </Tab>
                <Tab label="将要上映" value={MOVIE_TYPE.COMING_SOON}>
                    <Loading show={isLoading} />
                    {!isLoading && this.renderList()}
                </Tab>
            </Tabs>

        )
    }
}

export default MovieListView;