// CSS
import elementProducts from '../../css/elements.css'
import Shadow from '../../css/shadow.css'
import Products from '../../css/products.css'

// Page specific CSS
import styles from './TermsAndConditions.css'

// React
import React from 'react'

export default class TermsAndConditions extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let menuItems = document.querySelectorAll("#main-menu li");

    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove("active");
    }

    document.getElementById("AboutMenuItem").classList.add("active");
  }

  render () {
    return (
      <div className={`page-body-container col-xs-12`}>
        <div className={`${Products.panelContentContainer} ${Shadow.containerShadow} container product-container`}>

          {/* Title */}

          <h3 className={`${Products.panelTitle} col-xs-12`}>Terms And Conditions</h3>
          <div className="col-xs-12">
            <div className="col-xs-12">
              <hr className={`${elementProducts.hr}`} />
            </div>
          </div>

          <div className={`${Products.panelTextContainer} col-xs-12`}>

            {/* Overview */}
            <p>Please read the following Terms and Conditions before using Simply life cover. By using this website you agree to be bound by its terms.</p>

            <br/>

            {/* Point 1 */}
            <h4 className={`${Products.sectionHeader}`} >1. Use of this site</h4>
            <div className={`${Products.sectionText}`}>
              <p>The rights in the designs, pictures, logos, photographs and content of this site are owned by or licensed to QuoteLifeCover.com. They are protected by copyright, trademarks and other intellectual property rights. You may not copy, reproduce, modify, distribute, republish, display, post or transmit any part of this site without the written permission of QuoteLifeCover.com. You may view or print individual pages only for your own personal use.</p>
            </div><br/>

            {/* Point 2 */}
            <h4 className={`${Products.sectionHeader}`} >2. Liability</h4>
            <div className={`${Products.sectionText}`}>
              <p>We try to ensure the accuracy of all of the content. However, we do not accept any liability for the use made by you of the content. The content of this site should only be used for information purposes and you should not rely on it to make (or refrain from making) any decision or take (or refrain from taking) any action.</p>
        			<p>The site is for your personal use and is not to be used for any commercial purpose. As a result, QuoteLifeCover.com will not be responsible in any circumstances for your loss of profits. QuoteLifeCover.com will also not be responsible for any loss including wasted expenditure, corruption or destruction of data unless the loss results from something QuoteLifeCover.com has done wrong.</p>
        			<p>QuoteLifeCover.com is not liable for any damages or losses resulting from your inability to use this site. QuoteLifeCover.com cannot promise that the site will be uninterrupted or entirely error free. Because of the nature of the internet, the site is provided on an "as available" basis. QuoteLifeCover.com will not be responsible to you if we are unable to provide the site for any reason beyond our control.</p>
            </div><br/>

            {/* Point 3 */}
            <h4 className={`${Products.sectionHeader}`} >3. Content and advertisements</h4>
            <div className={`${Products.sectionText}`}>
              <p>This site also provides links to and content from other internet sites and resources. Because QuoteLifeCover.com has no control over these sites and resources, you acknowledge and agree that QuoteLifeCover.com is not responsible for the availability of these external sites or resources and does not endorse and is not responsible for any content, advertising products, services or other materials on or available from these sites or resources.</p>
            </div><br/>

            {/* Point 4 */}
            <h4 className={`${Products.sectionHeader}`} >4. Data protection and privacy</h4>
            <div className={`${Products.sectionText}`}>
              <p>Any details which you provide to us from which we can identify you are held and processed in accordance with our Privacy Policy.</p>
            </div><br/>

            {/* Point 5 */}
            <h4 className={`${Products.sectionHeader}`} >5. Changes to the terms</h4>
            <div className={`${Products.sectionText}`}>
              <p>SimplyLifeCover may change the site or these terms at any time. If you use the site after SimplyLifeCover has changed the terms you will be bound by the new terms.</p>
            </div>

            {/* Point 6 */}
            <h4 className={`${Products.sectionHeader}`} >6. Governing law and jurisdiction</h4>
            <div className={`${Products.sectionText}`}>
              <p>These terms and your use of this site are governed by and construed in accordance with the laws of England and Wales and any disputes will be decided only by the Courts of England and Wales.</p>
        			<p>This site is owned and operated by QuoteLifeCover.com. If you have any queries, please <a href="/responsive-contact-us.cfm">contact us.</a></p>
        			<p>&nbsp;</p>
            </div>

            <p className="counter">To date we have helped <span>1000's</span> of people compare Protection quotes. <br/>We would love to do the same for you</p>

          </div>


        </div>
      </div>
    )
  }
}
