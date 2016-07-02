import React from 'react';

import template from './About.html.rt';
class About extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'About';
    }
    render() {
        return template();
    }
}
module.exports = About;
export default About;
