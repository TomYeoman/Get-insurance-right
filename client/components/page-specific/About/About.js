
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
        <div className="col-xs-12">
          <div className={`${Products.lifeInsuranceContainer} ${Shadow.containerShadow} container product-container`}>

            <div className={`col-xs-12`}>

              <h2>Getting the RIGHT life insurance means getting the RIGHT advice</h2>

            <br/>
              <p>It's amazing how many people buy life insurance without getting professional advice, only to find that the policy has insufficient cover. So before you buy life insurance speak to us, we won't just get you an affordable life insurance policy, we'll get you the RIGHT policy.</p>
  <br/>
              <h3>Our advisors can help you decide: </h3>

              <h6><i className={`${styles.facheck} fa fa-check`} aria-hidden="true"></i> How long your term life assurance policy needs to be</h6>

              <h6><i className={`${styles.facheck} fa fa-check`} aria-hidden="true"></i> How much life cover you need</h6>

              <h6><i className={`${styles.facheck} fa fa-check`} aria-hidden="true"></i> What type of life assurance is best for your needs</h6>

              <h6><i className={`${styles.facheck} fa fa-check`} aria-hidden="true"></i> And once we've found you low cost life insurance, we'll even complete the paperwork!</h6>
  <br/>
              <p>When buying insurance it is essential to find the RIGHT insurer based on your health, hobbies and lifestyle as this will have a major effect on the final premium you will pay. We are passionate in finding you the RIGHT insurer with the very best cover for your individual circumstances, whilst making sure we secure you the most competitive rates in the marketplace today.</p>
            </div>

          </div> {/* pagecontainer */}
        </div> {/* col-xs-12 */}
      </div>
    )
  }
}
