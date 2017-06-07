//Common
import elementProducts from '../../css/elements.css'
import Shadow from '../../css/shadow.css'
import Logos from '../../css/logos.css'
import CompanyLogosSmall from '../../common/CompanyLogos/CompanyLogosSmall'
import Products from '../../css/products.css'

// React
import React from 'react'
import {Link} from 'react-router'

export default class Home extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let menuItems = document.querySelectorAll("#main-menu li");

    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove("active");
    }

    document.getElementById("ProductsMenuItem").classList.add("active");
  }

  render () {
    return (
      <div className={`row-no-padding`}>
        <div className="page-body-container col-xs-12">
          <div className={`${Products.panelContentContainer} ${Shadow.containerShadow} container main-container`}>

            {/* Title */}

            <h3 className={`${Products.panelTitle} col-xs-12`}>Critical Illness</h3>
            <div className="col-xs-12">
              <div className="col-xs-12">
                <hr className={`${elementProducts.hr}`} />
              </div>
            </div>

            {/* Product description container */}

            <div className={`${Products.panelTextContainer} col-xs-12`}>

              {/* Section 1 */}
              <div className="col-xs-12 col-sm-7">
                <h4 className={`${Products.sectionHeader}`} >What is Life & Critical Illness Cover</h4>
                <div className={`${Products.sectionText}`}>
                  <p>A Life Insurance policy provides a lump sum of money for family members in the event of the policyholder's death during the term of the policy. It is primarily designed to help protect immediate family members and possibly other dependents from financial hardship by providing the means to pay off the mortgage on the family home and/or by providing income to the surviving spouse to maintain their standard of living.</p>
                  <p>Most Life &amp; Critical Illness Cover policies cover a fixed term, often linked to the duration of a mortgage, and therefore Life Insurance can also be known as <strong>Term Life Insurance, Mortgage Protection, Mortgage Life Insurance </strong>and<strong> Term Assurance.</strong></p>
                </div>
              </div>

              {/* Side Contact information */}

              <div className={`${Products.contactContainer} col-xs-12 col-sm-offset-1 col-sm-3`}>

                <Link to="/quote" className={`${Products.getQuoteButton} btn btn-primary text-center form-control`}  href="#">GET A QUOTE</Link>

                <input type="button" className={`${Products.getFreeAdviceButton} btn btn-primary text-center form-control`} value="GET FREE ADVICE"/>

                <p>Or call an Independent UK adviser* on</p>
                <p className={`${Products.contactPhoneNumber}`} >0330 100 7110</p>
                <p>or</p>
                <p className={`${Products.contactPhoneNumber}`} >0800 316 6917*</p>

              </div>

              {/* Section 2 */}
              <div className="col-xs-12 col-sm-11">
              <h4 className={`${Products.sectionHeader}`} >What type of Life & Critical Illness Cover is required</h4>
                <div className={`${Products.sectionText}`}>
                  <p>Most Life &amp; Critical Illness Cover policies cover a fixed term, often linked to the duration of a mortgage, and therefore Life Insurance can also be known as <strong>Term Life Insurance, Mortgage Protection, Mortgage Life Insurance </strong>and<strong> Term Assurance.</strong></p>
                  <p>Conversely, a <strong>level term Life &amp; Critical Illness Cover</strong> product is usually the best choice for an <strong>interest-only mortgage</strong>, where the value of the outstanding mortgage balance remains constant during the term of the policy.</p>
                  <p>Level term life insurance is also the preferred choice for the other main usage for term life insurance, namely providing family protection until the children leave home, or until the surviving spouse has retired. It is often advisable to consider an index-linked policy in this instance to counteract the effects of inflation on the value calculated to provide sufficient protection for the family. This is also sometimes known as Increasing Term Assurance.</p>
                  <p>Where you are looking to cover a <strong>repayment mortgage AND provide additional family protection</strong>, the best option may well be to apply for two policies, one decreasing term to cover the repayment mortgage and one level term to provide the additional family protection. The other option is to simply apply for a level term policy on the basis that over time the policy will be increasingly geared towards the additional family protection element as the value of the outstanding mortgage loan decreases, and at the same time it will cover increases in inflation.</p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="col-xs-12 col-sm-9">
                <h4 className={`${Products.sectionHeader}`} >How much Life & Critical Illness Cover is required?</h4>
                  <div className={`${Products.sectionText}`}>
                    <p>Where you are looking to cover a <strong>repayment mortgage AND provide additional family protection</strong>, the best option may well be to apply for two policies, one decreasing term to cover the repayment mortgage and one level term to provide the additional family protection. The other option is to simply apply for a level term policy on the basis that over time the policy will be increasingly geared towards the additional family protection element as the value of the outstanding mortgage loan decreases, and at the same time it will cover increases in inflation.</p>
                    <p>* If you have taken out some form of protection insurance with a loan, then it is possible that this already includes a life insurance element, which means the loan can be ignored for the purposes of this exercise, but it is worth checking.</p>
                  </div>
              </div>

              {/* Section 4 */}
              <div className="col-xs-12 col-sm-9">
                  <h4 className={`${Products.sectionHeader}`}>Additional Cover</h4>
                  <div className={`${Products.sectionText}`}>
                    <p>Most leading life insurance policies include <strong>Terminal Illness Insurance</strong> at no extra cost. In the event that the policyholder is diagnosed with a terminal illness (defined as where life expectancy is less than 12 months), then the insurer will agree to pay the amount of money insured on diagnosis rather than death. However, this benefit is not generally available during the last 18 months of the life insurance policy.</p>
                    <p>Further cover can be provided with <strong>Critical Illness Insurance</strong>, which pays out the amount of money insured should the policyholder be diagnosed with having one of the specified Critical Illnesses. Not all companies have the same Critical Illnesses, so it is important that the policyholder is familiar with the inclusions and exclusions before any documentation is signed.</p>                </div>
                </div>
              </div>

              <CompanyLogosSmall />

          </div>

        </div>

      </div>
    )
  }
}
