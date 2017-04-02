import React, { PropTypes } from 'react'
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import Book from 'material-ui/svg-icons/av/library-books';
import Movie from 'material-ui/svg-icons/av/movie';
import Music from 'material-ui/svg-icons/av/library-music';
import Info from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import GoBackBar from './GoBackBar';

const Class = props => (
    <div>
        <GoBackBar history={props.history} title='关于'/>
        <header className="about">
            React 豆瓣
            <p className="sub-title">学习 react + react-router + redux 的一个入门项目</p>
        </header>
        <MenuItem primaryText="电影" leftIcon={<Movie />} />
        <MenuItem primaryText="读书" leftIcon={<Book />} />
        <MenuItem  leftIcon={<Music />}>音乐</MenuItem>
        <Divider />
        <MenuItem  leftIcon={<Info />}>关于</MenuItem>
    </div>
)


export default Class
