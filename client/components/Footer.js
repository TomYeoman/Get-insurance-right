
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
                        <ul className={``}>
                            <li><Link to="/TermsAndConditions" href="#">TERMS AND CONDITIONS</Link></li>
                            <li><Link to="/PrivacyPolicy" href="#">PRIVACY POLICY</Link></li>
                            <li><Link to="/Cookies" href="#">COOKIES</Link></li>
                            <li><Link to="/ComplaintsPolicy" href="#">COMPLAINTS POLICY</Link></li>
                        </ul>
                    </div>
                    <div className={`${Footer_.companyInfo} hidden-xs container text-center`}>
                        <p>QuoteLifeCover.com is a trading name of British Life Ltd, a company registered in England no. 05559125.
                        Registered Office Address: 1 Paper Mews, 330 High Street, Dorking, Surrey, United Kingdom, RH4 2TU</p>
                    </div>

                    <p className={`${Footer_.disclaimer} text-center`}> Simplylifeinsurance.com is an independent website created to help customers find the best possible life cover quote for their circumstances. We work with FCA authorised advisers who search and compare life insurance policies from leading life insurers for the best deals available. Our service is 100% free to use and you are under no obligation to accept any of the quotes you receive.</p>
                </div>
            </div>

        </div>
      </footer>
    )
  }
}
