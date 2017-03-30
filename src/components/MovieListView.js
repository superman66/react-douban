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
import Loading from './Loading'
import { MOVIE_TYPE } from '../constants/API'

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        overflowY: 'auto',
    },
};

class MovieListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
            type: MOVIE_TYPE.IN_THEATERS
        }
    }

    componentWillMount() {
        this.fetchData();
    }
    fetchData() {
        const { fetchData } = this.props;
        fetchData(this.state.type);
    }
    handleChange = (type) => {
        this.setState({ type });
        this.fetchData();
    }
    renderList() {
        const { items } = this.props;
        return (
            <div style={styles.root}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                >
                    {items.map((item) =>
                        <GridTile
                            key={item.id}
                            title={item.title}
                            subtitle={<span>by <b>{item.directors[0].name}</b></span>}
                            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                        >
                            <img src={item.images.medium} />
                        </GridTile>
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
                <Tab label="正在上映" value={MOVIE_TYPE.IN_THEATERS}>
                    <Loading show={isLoading} />
                    {this.renderList()}
                </Tab>
                <Tab label="将要上映" value={MOVIE_TYPE.COMING_SOON}>
                   {this.renderList()}
                </Tab>
            </Tabs>

        )
    }
}

export default MovieListView;