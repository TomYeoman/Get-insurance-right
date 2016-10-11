import React from 'react';
import { Route,IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/page-specific/Home/Home';
import About from './components/page-specific/About/About';
import About2 from './components/page-specific/About2/About';
import Contact from './components/page-specific/Contact/Contact';

export default (

  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="/Home" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/About2" component={About2} />
    <Route path="/Contact" component={Contact} />
    <Route path="*" component={Home} / >
  </Route>

)
