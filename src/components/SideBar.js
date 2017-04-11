import React, { Component, PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Book from 'material-ui/svg-icons/av/library-books';
import Movie from 'material-ui/svg-icons/av/movie';
import Music from 'material-ui/svg-icons/av/library-music';
import Info from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';

const AboutLink = "/about";
class SideBar extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.setState({ 
            open: this.props.open,
            toggleBar: this.props.toggleBar
         });
    }
    handleClose(){
        console.log(this.state);

    }
    handleToggle(url, e) {
        const { toggleBar } = this.state;
        toggleBar && toggleBar(false);
        url && this.context.router.push(url);
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.props.open}
                    onRequestChange={(open) => this.state.toggleBar(open)}
                >
                    <section className="side-bar-info">
                        豆瓣
                    </section>
                    <MenuItem primaryText="电影" onTouchTap={this.handleToggle.bind(this, '/')} leftIcon={<Movie />} />
                    <MenuItem primaryText="读书(敬请期待)" onTouchTap={this.handleToggle} leftIcon={<Book />} />
                    <MenuItem primaryText="音乐(敬请期待)" onTouchTap={this.handleToggle} leftIcon={<Music />}/>
                    <Divider />
                    <MenuItem onTouchTap={this.handleToggle.bind(this, '/about')} primaryText="关于" leftIcon={<Info />}/>
                </Drawer>
            </div >
        )
    }
};

SideBar.contextTypes = {
    router: PropTypes.object,
    toggleBar: PropTypes.func,
    open: PropTypes.bool
}
export default SideBar;