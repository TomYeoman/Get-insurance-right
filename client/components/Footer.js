
import React from 'react'
import Footer_ from './Footer.css';
import {Link} from 'react-router'


export default class Footer extends React.Component {

  constructor() {
    super();
  }

  render () {
    return (
      <footer>
        <div className="row-no-padding">
          <div className="col-xs-12">
            <div className={`${Footer_.sectionTop}`}>
               <div className="footerMenuTop container col-xs-8 col-xs-offset-2">

                 <div className={`hidden-xs col-xs-3`}>

                   <i className={`${Footer_.facebook} fa fa-facebook-official`} aria-hidden="true"></i>
                   <i className={`${Footer_.twitter} fa fa-twitter-square`} aria-hidden="true"></i>
                   <i className={`${Footer_.linkedin} fa fa-linkedin-square`} aria-hidden="true"></i>

                 </div>

                 <ul className={``}>
                   <li><Link to="/Home" href="#">HOME</Link></li>
                   <li><Link to="/Home" href="#">LIFE INSURANCE</Link></li>
                   <li><Link to="/Home" href="#">LIFE INSURANCE</Link></li>
                   <li><Link to="/Home" href="#">CRITICAL ILLNESS</Link></li>
                   <li><Link to="/Home" href="#">OVER 50'S INSURANCE</Link></li>
                   <li><Link to="/Home" href="#">BUILDINGS AND CONTENTS</Link></li>
                   <li><Link to="/Home" href="#">LANDLORD INSURANCE</Link></li>
                   <li><Link to="/Home" href="#">WHY CHOOSE SIMPLY</Link></li>
                 </ul>
               </div>

            </div>
            <div className={`${Footer_.sectionBottom}`}>
              <div className={`footerMenuBottom`}>
                <div className="footerMenu container col-xs-8 col-xs-offset-2">
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada vitae leo et tempor. In dui augue, eleifend a euismod at, ultricies non metus. Donec posuere ac ipsum sed maximus. Etiam volutpat orci eget posuere placerat. Fusce tristique odio nec augue tempor, in gravida sapien vestibulum. Donec a dui eget magna semper blandit. Donec luctus velit ex, ut suscipit nulla iaculis vitae. </p>

                  <ul className={``}>
                    <li><Link to="/Home" href="#">TERMS AND CONDITIONS</Link></li>
                    <li><Link to="/Home" href="#">PRIVACY POLICY AND COOKIES</Link></li>
                    <li><Link to="/Home" href="#">COMPLAINTS POLICY</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </footer>
    )
  }
}
