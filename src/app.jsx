import React from 'react';
import {render} from 'react-dom';

import Routes from './routes.jsx';
//render(<App/>, document.getElementById('app'));

render((
	Routes
), document.getElementById('app'));

/*
<IndexRoute component={Home} />
history={browserHistory}
*/
