import React from 'react';

import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';
import Vision from './pages/Vision.jsx';


let routes = {
    childRoutes: [
        {
            component: Layout,
            // path: '/',
            childRoutes:[
            {
              path: '/',
              component: Home
            },
            {
              path: '/about',
              // component: About,
              getComponent(location, cb) {
                // cb(null,About);
                require.ensure([], function(require) {
                  cb(null,require('./pages/About.jsx'));
                });
              }
            },
            {
              path: '/vision',
              component: Vision,
              // getComponent(location, cb) {
              //   cb(null,Vision);
              //   // require.ensure([], function(require) {
              //   //   cb(null,require('./pages/Vision.jsx'));
              //   // });
              // }
            }]
        }
    ]
};
// let routes = {};
// let routes = (
//   <Router history={browserHistory}>
//     	<Route component={Layout}>
//     		<Route path="/" component={Home} />
//     		<Route path="/about" component={About}/>
//       	<Route path="/vision" component={Vision}/>
//     	</Route>
//   	</Router>
// );

export default routes;
