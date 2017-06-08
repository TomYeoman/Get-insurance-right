import elementProducts from '../../css/elements.css'
import Shadow from '../../css/shadow.css'
import Logos from '../../css/logos.css'
import CompanyLogosSmall from '../../common/CompanyLogos/CompanyLogosSmall'
import styles from './PrivacyPolicy.css'
import Products from '../../css/products.css'

// React
import React from 'react'

export default class Home extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let menuItems = document.querySelectorAll("#main-menu li");

    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove("active");
    }

    document.getElementById("AboutMenuItem").classList.add("active");
    $('html, body').animate({ scrollTop: 0 }, 'slow', function () {});
  }

  render () {
    return (
      <div className={`page-body-container col-xs-12`}>
        <div className={`${Products.panelContentContainer} ${Shadow.containerShadow} container product-container`}>

          {/* Title */}

          <h3 className={`${Products.panelTitle} col-xs-12`}>Privacy Policy</h3>
          <div className="col-xs-12">
            <div className="col-xs-12">
              <hr className={`${elementProducts.hr}`} />
            </div>
          </div>

          <div className={`${Products.panelTextContainer} col-xs-12`}>

            {/* Overview */}

            <p>SimpleLifeCover.com is committed to ensuring that your privacy is protected. This Policy explains how we use the information we collect about you; how you can instruct us if you prefer to limit the use of that information; and procedures that we have in place to safeguard your privacy.</p>
            <p>Please read this Privacy Policy carefully, since as soon as you start using our website, you will be regarded as having read and accepted this Privacy Policy. You must not use our website if you do not accept this Privacy Policy.</p>
            <br/>

            {/* Point 1 */}
            <h4 className={`${Products.sectionHeader}`} >1. Passing on information about you</h4>
            <div className={`${Products.sectionText}`}>
              <p>Please be aware that once you have provided us with information about you, you will be regarded as having given your consent to us disclosing your personal information to a third party that we have carefully selected <strong>solely for the purposes of obtaining a quotation</strong> for you or comparing different products and services as requested by you.</p>
            </div><br/>

            {/* Point 2 */}
            <h4 className={`${Products.sectionHeader}`} >2. The information we collect and how we use it</h4>
            <div className={`${Products.sectionText}`}>
              <p>We will collect personal information about you when you complete the online form. We will periodically review your personal information to ensure that we do not keep it for longer than is necessary. We may use your personal information to communicate with you and/or to process a transaction between you and a third party.</p>
            </div><br/>

            {/* Point 3 */}
            <h4 className={`${Products.sectionHeader}`} >3. Security</h4>
            <div className={`${Products.sectionText}`}>
              <p>The internet is not a secure medium. However we have put in place various security procedures as set out in this policy. Firewalls are used to block unauthorised traffic to the servers and the actual servers are located in a secure location which can only be accessed by authorised personnel. We also keep your information confidential. Our internal procedures the storage, access and disclosure of your information.</p>
            </div><br/>

            {/* Point 4 */}
            <h4 className={`${Products.sectionHeader}`} >4. Cookies</h4>
            <div className={`${Products.sectionText}`}>
              <p>We use cookies. A cookie is a small file that is stored on your computer's hard drive by your web browser. They allow us to understand what areas of the website are of interest to our visitors and allow us to provide a better user experience. These cookies do not track individual user information, and all our cookie data is encrypted and cannot be read by other websites. It is possible to 'turn off' the cookies in your browser and this will not affect the functionality of the web site. You can find out more information about cookies including how to switch cookies on or off i.e. accept or refuse cookies from <a href="http://www.aboutcookies.org/" target="_blank">www.aboutcookies.org</a>.</p>
            </div><br/>

            {/* Point 5 */}
            <h4 className={`${Products.sectionHeader}`} >5. Your Rights</h4>
            <div className={`${Products.sectionText}`}>
              <p>You have certain rights under the Data Protection Act 1998. For example, we will always let you have a copy of all personal information we have about you should you request it. We may charge you a fee for a copy of such information.</p>
              <p>If you have any requests or queries concerning your personal information or wish to correct or change any information we have about you, please contact us by writing to:<br/>
      				TODO</p>
              <p>Effective as of 1 June 2008.</p>
            </div>

            <p className="counter">To date we have helped <span>1000's</span> of people compare Protection quotes. <br/>We would love to do the same for you</p>

          </div>


        </div>
      </div>
    )
  }
}
