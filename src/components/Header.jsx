import React from 'react';
import {  Link } from 'react-router';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
    }
    render() {
        return <ul className="nav">
                <li>
                <Link className="link" activeClassName='link-active' to="/home">Home</Link>
                </li>
          		<li>
                <Link className="link" activeClassName='link-active' to="about">About</Link>
                </li>
          		<li>
                <Link className="link" activeClassName='link-active' to="vision">Vision</Link>
                </li>
        	</ul>;
    }
}

export default Header;
