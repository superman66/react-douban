import React, { PropTypes } from 'react'
import { GridList, GridTile } from 'material-ui/GridList';
import { Link } from 'react-router'
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
    },
    gridList: {
        overflowY: 'auto',
    },
};
const propTypes = {
    items: PropTypes.array.isRequired
}

const ListItem = props => (
    <div style={styles.root}>
        <GridList style={styles.gridList}
            cellHeight={180}
        >
            {props.items.map((item) =>
                <Link to={`/movie/${item.id}`} key={item.id}>
                    <GridTile
                        title={item.title}
                        subtitle={<span>by <b>{item.directors.length && item.directors[0].name}</b></span>}
                        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                    >
                        <img src={item.images.large} />
                    </GridTile>
                </Link>
            )}
        </GridList>
    </div>
)

ListItem.propTypes = propTypes

export default ListItem
