import elementProducts from '../../css/elements.css'
import Shadow from '../../css/shadow.css'
import Logos from '../../css/logos.css'
import CompanyLogosSmall from '../../common/CompanyLogos/CompanyLogosSmall'
import styles from './About.css'
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
  }

  render () {
    return (
        <div className={`row-no-padding`}>
            <div className="col-xs-12 page-body-container">
                <div className={`${Products.panelContentContainer} ${Shadow.containerShadow} container product-container`}>
                    <div className={`col-xs-12`}>

                        <h3 className={`${Products.panelTitle} col-xs-12`}>About us</h3>
                        <div className="col-xs-12">
                          <div className="col-xs-12">
                            <hr className={`${elementProducts.hr}`} />
                          </div>
                        </div>

                        <div className={`${Products.panelTextContainer} col-xs-12`}>
                            <p>Simplylifeinsurance.com offers customers access to the very best quotes and advice on Protection products available in the UK.</p>
                            <p>In our view, the best intermediaries are generally smaller specialist firms who provide a more personalised service. We can still provide very competitive prices just like some of the more high profile web-brands, but we understand the importance to you, the customer, of value over simply price.</p>

                            <p>We search the whole of the market for the most suitable products and the best premiums so that you can compare the various options available and make an informed choice.All you need to do is provide us with details of the cover you require along with your contact details using the brief form provided, and one of our specialist advisers will contact you.</p>
                            <br/>

                        </div>

                        <h3 className={`${Products.panelTitle} col-xs-12`}>Where to find us</h3>
                        <div className="col-xs-12">
                          <div className="col-xs-12">
                            <hr className={`${elementProducts.hr}`} />
                          </div>
                        </div>

                        <div className={`${Products.panelTextContainer} col-xs-12`}>

                            <p>QuoteLifeCover.com is a trading name of British Life Ltd, a company registered in England no. 05559125.</p>
                            <p>Registered Office Address: 1 Paper Mews, 330 High Street, Dorking, Surrey, United Kingdom, RH4 2TU</p>

                            <div className="google-maps">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7098.94326104394!2d78.0430654485247!3d27.172909818538997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1385710909804"></iframe>
                            </div>
                        </div>
                    </div>
                </div> {/* pagecontainer */}
            </div> {/* col-xs-12 */}
        </div>
    )
  }
}
