import React from 'react';
import { Route,IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/page-specific/Home/Home';
import LifeInsurance from './components/page-specific/LifeInsurance/LifeInsurance';
import CriticalIllness from './components/page-specific/CriticalIllness/CriticalIllness';
import IncomeProtection from './components/page-specific/IncomeProtection/IncomeProtection';
import Over50s from './components/page-specific/Over50s/Over50s';
import About from './components/page-specific/About/About';
import Contact from './components/page-specific/Contact/Contact';
import QuoteForm from './components/common/QuoteForm';

export default (

  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="/Home" component={Home} />
    <Route path="/LifeInsurance" component={LifeInsurance} />
    <Route path="/CriticalIllness" component={CriticalIllness} />
    <Route path="/IncomeProtection" component={IncomeProtection} />
    <Route path="/Over50s" component={Over50s} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
    <Route path="/quote" component={QuoteForm} />
    <Route path="*" component={Home} / >
  </Route>

)

// <Route path="/quote" component={QuoteForm} />
