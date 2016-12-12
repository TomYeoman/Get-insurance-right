import React from 'react';
import { Route,IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/page-specific/Home/Home';
import LifeInsurance from './components/page-specific/LifeInsurance/LifeInsurance';
import CriticalIllness from './components/page-specific/CriticalIllness/CriticalIllness';
import About from './components/page-specific/About/About';
import Contact from './components/page-specific/Contact/Contact';

export default (

  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="/Home" component={Home} />
    <Route path="/LifeInsurance" component={LifeInsurance} />
    <Route path="/CriticalIllness" component={CriticalIllness} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
    <Route path="*" component={Home} / >
  </Route>

)
