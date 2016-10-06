import React from 'react'
import {Link} from 'react-router'
import SiteHeader_ from './SiteHeader.css';

export default () => {
    return (
      <div className="header-container" >

        <div className="logo-container row-no-padding col-xs-12">
          <Link to="/Home" href="#"><img className={`${SiteHeader_.logo}`} src="images/logo.png"></img></Link>
        </div>

      </div>
    )
}
