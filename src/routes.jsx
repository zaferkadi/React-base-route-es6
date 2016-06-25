import React from 'react';
import { Redirect, Router, IndexRoute, Route, Link, browserHistory } from 'react-router'

import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Vision from './pages/Vision.jsx';

let routes = (
  <Router history={browserHistory}>
    	<Route component={Layout}>
    		<Route path="/" component={Home} />
    		<Route path="/about" component={About}/>
      	<Route path="/vision" component={Vision}/>
    	</Route>
  	</Router>
);

export default routes;
