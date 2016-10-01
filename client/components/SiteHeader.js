import React from 'react'
import {Link} from 'react-router'

export default () => {
    return (
      <div className="header-container" >

        <div className="logo-container row-no-padding col-xs-12">
          <Link to="/Home" href="#"><img src="images/logo.png"></img></Link>
        </div>

      </div>
    )
}
