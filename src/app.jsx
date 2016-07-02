import React from 'react';
import {render} from 'react-dom';
import { Redirect, Router, IndexRoute, Route, Link, browserHistory } from 'react-router';
import _ from "lodash";

import Routes from './routes.jsx';
// import Home from './pages/Home.jsx';

// render(<Home/>, document.getElementById('app'));

render(
	<Router history={browserHistory} routes={Routes} />
	, document.getElementById('app'));

/*
<IndexRoute component={Home} />
history={browserHistory}
*/