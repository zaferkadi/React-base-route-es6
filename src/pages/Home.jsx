import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Home';
    }
    render() {
        return <div>Home</div>;
    }
}
// we need to export using commonJS since webpack can only dynamically load modules using require
// webpack 2 will soon be using system.import
// module.exports = Home;
export default Home;
