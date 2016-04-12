import React from 'react';
import {render} from 'react-dom';
import { Redirect, Router, IndexRoute, Route, Link, browserHistory } from 'react-router'

import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Vision from './pages/Vision.jsx';

//render(<App/>, document.getElementById('app'));

render((
	<Router >
    	<Route component={Layout}>    	 	
    		<Route path="home" component={Home} />
    		<Route path="about" component={About}/>
      		<Route path="vision" component={Vision}/>
    	</Route>
    	<Redirect from='/' to='/home' />
  	</Router>
), document.getElementById('app'));

/*
<IndexRoute component={Home} />
history={browserHistory}
*/