
import React from 'react'
import Footer_ from './Footer.css';
import {Link} from 'react-router'


export default class Footer extends React.Component {

  constructor() {
    super();
  }

  render () {
    return (
      <footer className="footer row-no-padding">
        <div className="col-xs-12">
          <div className={`${Footer_.sectionTop}`}>
             <div className="row-no-padding footerMenuTop container">

               <div className={`hidden-xs col-sm-3`}>

                 <i className={`${Footer_.facebook} fa fa-facebook-official`} aria-hidden="true"></i>
                 <i className={`${Footer_.twitter} fa fa-twitter-square`} aria-hidden="true"></i>
                 <i className={`${Footer_.linkedin} fa fa-linkedin-square`} aria-hidden="true"></i>

               </div>
                <div className="row-no-padding">
                   <ul className={`col-xs-12 col-sm-9 text-center`}>
                     <li className={`${Footer_.borderRight} col-xs-3 col-sm-3`}><Link to="/Home" href="#">HOME</Link></li>
                     <li className={`${Footer_.borderRight} col-xs-3 col-sm-3`}><Link to="/LifeInsurance" href="#">LIFE INSURANCE</Link></li>
                     <li className={`${Footer_.borderRight} col-xs-3 col-sm-3`}><Link to="/About" href="#">WHY CHOOSE SIMPLY</Link></li>
                     <li className={`col-xs-3 col-sm-3`}><Link to="/Contact" href="#">CONTACT</Link></li>
                   </ul>
                </div>

             </div>

          </div>
          <div className={`${Footer_.sectionBottom}`}>
            <div className={`footerMenuBottom`}>
              <div className="footerMenu container">
                <p className={`${Footer_.footerText} hidden-xs`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada vitae leo et tempor. In dui augue, eleifend a euismod at, ultricies non metus. Donec posuere ac ipsum sed maximus. Etiam volutpat orci eget posuere placerat. Fusce tristique odio nec augue tempor, in gravida sapien vestibulum. Donec a dui eget magna semper blandit. Donec luctus velit ex, ut suscipit nulla iaculis vitae. </p>

                <ul className={``}>
                  <li><Link to="/TermsAndConditions" href="#">TERMS AND CONDITIONS</Link></li>
                  <li><Link to="/PrivacyPolicy" href="#">PRIVACY POLICY</Link></li>
                  <li><Link to="/Cookies" href="#">COOKIES</Link></li>
                  <li><Link to="/ComplaintsPolicy" href="#">COMPLAINTS POLICY</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
