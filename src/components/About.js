import React, { PropTypes } from 'react'
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import Book from 'material-ui/svg-icons/av/library-books';
import Code from 'material-ui/svg-icons/action/code';
import Web from 'material-ui/svg-icons/av/web';
import Email from 'material-ui/svg-icons/communication/email'
import Info from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import GoBackBar from './GoBackBar';

const Class = props => (
    <div>
        <GoBackBar goBack={props.router.goBack} title='关于' />
        <header className="about">
            React 豆瓣
            <p className="sub-title">学习 react + react-router + redux 的一个入门项目</p>
        </header>
        <Subheader inset={true}>项目地址</Subheader>
        <MenuItem leftIcon={<Code />}>
            <a href="https://github.com/superman66/react-douban">GitHub地址</a>
        </MenuItem>
        <Divider />
        <Subheader inset={true}>联系我</Subheader>
        <MenuItem leftIcon={<Email />}>supermanchc@gmail.com</MenuItem>
        <MenuItem leftIcon={<Web />}>
            <a href="http://www.iamsuperman.cn">www.iamsuperman.cn</a>
        </MenuItem>

    </div>
)


export default Class
