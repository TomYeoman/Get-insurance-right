import React from 'react'
import {Link} from 'react-router'
import SiteHeader_ from './SiteHeader.css';

export default () => {
    return (
      <div className="header-container" >

        <div>
            <Link to="/Home" href="#">
              <img className={`${SiteHeader_.logo}`} src="images/logo.png"></img>
            </Link>
        </div>

      </div>
    )
}

// 
// <div className={`${SiteHeader_.socialMediaContainer} hidden-sm hidden-md hidden-lg col-xs-12`}>
//   <i className={`${SiteHeader_.socialMedia} fa fa-facebook-official`} aria-hidden="true"></i>
//   <i className={`${SiteHeader_.socialMedia} fa fa-twitter-square`} aria-hidden="true"></i>
//   <i className={`${SiteHeader_.socialMedia} fa fa-linkedin-square`} aria-hidden="true"></i>
// </div>
