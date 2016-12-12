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
        <div className="col-xs-12">
          <div className={`${Products.lifeInsuranceContainer} container main-container`}>

            <div className={`row-no-padding col-xs-12 col-sm-12`}>
              <div className={`${Shadow.containerShadow} col-xs-12`}>
                <h3 className="col-xs-12 text-center">Life Insurance</h3>

                <div className="col-xs-12">
                  <div className="col-xs-12">
                    <hr className={`${elementProducts.hr}`} />
                  </div>
                </div>

                <div className={`${Products.productContainer} col-xs-12`}>
                  {/* Section 1 */}
                  <div className="col-xs-12 col-sm-9">
                      <h4>What is Life Insurance</h4>
                      <p>A Life Insurance policy provides a lump sum of money for family members in the event of the policyholder's death during the term of the policy. It is primarily designed to help protect immediate family members and possibly other dependents from financial hardship by providing the means to pay off the mortgage on the family home and/or by providing income to the surviving spouse to maintain their standard of living.</p>
                      <p>Most life insurance policies cover a fixed term, often linked to the duration of a mortgage, and therefore Life Insurance can also be known as <strong>Term Life Insurance, Mortgage Protection, Mortgage Life Insurance </strong>and<strong> Term Assurance.</strong></p>
                  </div>

                  <div className="col-xs-12 col-sm-3">
                    <input type="button" className="btn btn-primary text-center" value="GET QUOTE"/>
                  </div>


                  {/* Section 2 */}
                  <div className="col-xs-12 col-sm-9">
                      <h4>What type of Life Insurance is required?</h4>
                      <p>If the policy is to be used solely to cover a repayment mortgage, then a <strong>decreasing term life insurance</strong> product is usually the best choice, as the amount of money the policyholder has been insured for decreases in line with the value of the outstanding mortgage balance.</p>
                      <p>Conversely, a <strong>level term life insurance</strong> product is usually the best choice for an <strong>interest-only mortgage</strong>, where the value of the outstanding mortgage balance remains constant during the term of the policy.</p>
                      <p>Level term life insurance is also the preferred choice for the other main usage for term life insurance, namely providing family protection until the children leave home, or until the surviving spouse has retired. It is often advisable to consider an index-linked policy in this instance to counteract the effects of inflation on the value calculated to provide sufficient protection for the family. This is also sometimes known as Increasing Term Assurance.</p>
                      <p>Where you are looking to cover a <strong>repayment mortgage AND provide additional family protection</strong>, the best option may well be to apply for two policies, one decreasing term to cover the repayment mortgage and one level term to provide the additional family protection. The other option is to simply apply for a level term policy on the basis that over time the policy will be increasingly geared towards the additional family protection element as the value of the outstanding mortgage loan decreases, and at the same time it will cover increases in inflation.</p>
                  </div>
                  <div className="col-sm-3">
                    <input type="button" className="btn btn-primary text-center" value="GET QUOTE"/>
                  </div>


                  {/* Section 3 */}
                  <div className="col-xs-12 col-sm-9">
                      <h4>How much Life Insurance cover is required?</h4>
                      <p>The amount of cover required is always going to depend on an individual'???'s circumstances. Essentially, you need to work out the financial impact to your family in the event of your death, and how much money they would need to survive.</p>                    <span className={`${Products.moreInfoLink}`}>More information..</span>
                  </div>

                  {/* Section 4 */}
                  <div className="col-xs-12 col-sm-9">
                      <h4>Additional Cover</h4>
                      <p>Most leading life insurance policies include <strong>Terminal Illness Insurance</strong> at no extra cost. In the event that the policyholder is diagnosed with a terminal illness (defined as where life expectancy is less than 12 months), then the insurer will agree to pay the amount of money insured on diagnosis rather than death. However, this benefit is not generally available during the last 18 months of the life insurance policy.</p>
                      <p>Further cover can be provided with <strong>Critical Illness Insurance</strong>, which pays out the amount of money insured should the policyholder be diagnosed with having one of the specified Critical Illnesses. Not all companies have the same Critical Illnesses, so it is important that the policyholder is familiar with the inclusions and exclusions before any documentation is signed.</p>                </div>
                  <div className="col-sm-3">
                    <input type="button" className="btn btn-primary text-center" value="GET QUOTE"/>
                  </div>

                </div>

                <h3 className="col-xs-12 text-center">Mortgage Protection</h3>

                <div className="col-xs-12">
                  <div className="col-xs-12">
                    <hr className={`${elementProducts.hr}`} />
                  </div>
                </div>



                <div className="col-sm-3">
                  <input type="button" className="btn btn-primary text-center" value="GET QUOTE"/>
                </div>
              </div>


            </div>
            <CompanyLogosSmall />

          </div>
        </div>
      </div>
    )
  }
}
