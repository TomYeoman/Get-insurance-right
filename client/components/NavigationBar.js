import React from 'react'
import {Link} from 'react-router'

export default () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>

                <div id="main-menu" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                      <li id="AboutMenuItem"><Link to="/Home" href="#">Home</Link></li>
                      <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Products <span className="caret"></span></a>
                          <ul className="dropdown-menu">
                              <li><Link to="/Home" href="#">Life Insurance</Link></li>
                              <li><Link to="/About" href="#">Critical Illness</Link></li>
                              <li><Link to="/About" href="#">Over 50's insurance</Link></li>
                              <li><Link to="/About" href="#">Buildings and contents</Link></li>
                              <li><Link to="/About" href="#">Landlord Insurance</Link></li>
                          </ul>
                      </li>
                      <li id="AboutMenuItem"><Link to="/About" href="#">Why get insurance right?</Link></li>
                      <li id="ContactMenuItem"><Link to="/Contact" href="#">About us</Link></li>
                      <li id="ContactMenuItem"><Link to="/Contact" href="#">Our happy customers</Link></li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
