import React from 'react'
import {Link} from 'react-router'
import Navigation_ from './NavigationBar.css';

export default () => {
    return (
      <nav className="navbar navbar-default navbar-right">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div id="navbar" className="navbar-collapse collapse" aria-expanded="false">
              <ul id="main-menu" className="nav navbar-nav">
                <li id="HomeMenuItem"><Link to="/Home" href="#">HOME</Link></li>
                <li id="ProductsMenuItem" className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">PRODUCTS <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                        <li><Link to="/LifeInsurance" href="#">LIFE INSURANCE</Link></li>
                        <li><Link to="/CriticalIllness" href="#">CRITICAL ILLNESS</Link></li>
                        <li><Link to="/IncomeProtection" href="#">INCOME PROTECTIOn</Link></li>
                        <li><Link to="/Over50s" href="#">OVER 50'S INSURANCE</Link></li>
                    </ul>
                </li>
                <li id="AboutMenuItem"><Link to="/About" href="#">ABOUT US</Link></li>
                <li id="ContactMenuItem"><Link to="/Contact" href="#">WHY CHOOSE SIMPLY?</Link></li>

              </ul>
            </div>
          </div>
        </nav>
    )
}
