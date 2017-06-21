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
    $('html, body').animate({ scrollTop: 0 }, 'slow', function () {});

  }

  render () {
    return (
        <div className={`row-no-padding`}>
            <div className="col-xs-12 page-body-container">
                <div className={`${Products.panelContentContainer} ${Shadow.containerShadow} container product-container`}>
                    <div className={`col-xs-12`}>

                        {/* Title */}

                        <h3 className={`${Products.panelTitle} col-xs-12`}><span className={`bold`}>WHY</span> CHOOSE SIMPLY?</h3>
                        <div className="col-xs-12">
                          <div className="col-xs-12">
                            <hr className={`${elementProducts.hr}`} />
                          </div>
                        </div>


                        <div className={`${Products.panelTextContainer} col-xs-12`}>

                            {/* Section 1 */}
                            <div className="col-xs-12 col-sm-12">
                            <h4 className={`${Products.sectionHeader}`} >About us</h4>
                              <div className={`${Products.sectionText}`}>
                                  <p>Simplylifeinsurance.com offers customers access to the very best quotes and advice on Protection products available in the UK.</p>
                                  <br/>
                                  <p>In our view, the best intermediaries are generally smaller specialist firms who provide a more personalised service. We can still provide very competitive prices just like some of the more high profile web-brands, but we understand the importance to you, the customer, of value over simply price.</p>
                                <br/>
                                  <p>We search the whole of the market for the most suitable products and the best premiums so that you can compare the various options available and make an informed choice.All you need to do is provide us with details of the cover you require along with your contact details using the brief form provided, and one of our specialist advisers will contact you.</p>
                                  <br/>
                              </div>
                            </div>

                            {/* Section 2 */}
                            <div className="col-xs-12 col-sm-12">
                                <h4 className={`${Products.sectionHeader}`} >Where to find us</h4>
                                <div className={`${Products.sectionText}`}>
                                    <p>2nd floor </p>
                                    <p>Unit 10 Sovereign Court </p>
                                    <p>215 Witan Gate East </p>
                                    <p>Central Milton Keynes </p>
                                    <p>MK9 2DU </p>
                                    <br/>
                                    <p>Email: <a>info@simplylifeinsurance.co.uk</a></p>
                                    <p><span className="bold">Simplylifeinsurance</span> are based in Milton Keynes. We{`'`}re an appointed representative of LifeSearch partners, who are authorised and regulated by the financial conduct Authoritory</p>

                                </div>
                                <br/>
                                <div className="google-maps">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.2345619765997!2d-0.7672625338454399!3d52.039040729725905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877aaa21e7b71ff%3A0x26178980ed3d5517!2sMilton+Keynes+MK9+2DU!5e0!3m2!1sen!2suk!4v1498084556386" allowfullscreen></iframe>
                                </div>
                            </div>


                        </div>

                    </div>
                </div> {/* pagecontainer */}
            </div> {/* col-xs-12 */}
        </div>
    )
  }
}
