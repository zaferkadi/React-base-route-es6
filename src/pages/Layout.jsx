import React from 'react';
import { Router, Route, IndexLink, Link, browserHistory } from 'react-router';
import Header from './../components/Header.jsx';
import Footer from './../components/Footer.jsx';


class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Layout';
    }
    render() {

        return (
        	<div>
        	<Header/>
        	{this.props.children}
        	<Footer/>
        	</div>);
    }
}

export default Layout;
