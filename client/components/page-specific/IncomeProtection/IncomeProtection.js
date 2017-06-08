//Common
import elementProducts from '../../css/elements.css'
import Shadow from '../../css/shadow.css'
import Logos from '../../css/logos.css'
import CompanyLogosLarge from '../../common/CompanyLogos/CompanyLogosLarge.js'
import AdviceSection from '../../common/AdviceSection'

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

        $('html, body').animate({ scrollTop: 0 }, 'slow', function () {});
  }

  render () {
    return (
      <div className={`row-no-padding`}>
        <div className="page-body-container col-xs-12">
          <div className={`${Products.panelContentContainer} ${Shadow.containerShadow} container main-container`}>

            {/* Title */}

            <h3 className={`${Products.panelTitle} col-xs-12`}>Income Protection</h3>
            <div className="col-xs-12">
              <div className="col-xs-12">
                <hr className={`${elementProducts.hr}`} />
              </div>
            </div>

            {/* Product description container */}

            <div className={`${Products.panelTextContainer} col-xs-12`}>

              {/* Section 1 */}
              <div className="col-xs-12 col-sm-7">
                <h4 className={`${Products.sectionHeader}`} >What is Income Protection?</h4>
                <div className={`${Products.sectionText}`}>
                  <p><strong>Income Protection</strong> is a generic term covering a range of insurance products that protect individuals and their families from a loss of income caused by extended periods of sickness, disability or unemployment.</p>
                  <p>Many people wrongly assume the Welfare State will provide for them in times of need, but the reality is that the <strong>State benefits</strong> available <strong>only provide a very basic level of support</strong> and therefore most people in the UK should have additional income protection insurance in place to maintain their existing standards of living if they become sick or endure a disability as a result of an accident.</p>
                  <p>The hard facts* are these:</p>
                  <ul>
            				<li>2.2 million people of working age will be off work for at least 6 months at any one time through sickness or disability</li>
            				<li>Over 1.7 million people are claiming Income Support</li>
            				<li>Over 2.5 million people are claiming Incapacity Benefit</li>
            				<li>Over 2.6 million people are claiming Disability Living Allowance</li>
            			</ul>
                  <p>(Source: Department of Work and Pensions)</p>
                  <p>Employers, large and small, can and do provide a lot of <strong>employee benefits</strong>in addition to the monthly salary, and some will provide discretionary benefits in times of great need, but not all do this beyond 4 weeks and not all outcomes will necessarily be covered, so it is important to provide some level of protection yourself, even if it is a top-up to State Benefits and existing employee benefits.</p>
                  <p>There are two main types of insurance policies associated with Income Protection:</p>
                  <p>1. Long Term Income Protection, also known as Permanent Health Insurance</p>
                  <p>2. Short Term Income Protection, also known as Accident and Sickness Insurance or ASU (Accident, Sickness &amp; Unemployment)</p>
                </div>
              </div>

              {/* Side Contact information */}

              <div className="hidden-xs col-sm-offset-1 col-sm-3">
                <AdviceSection />
              </div>

              {/* Section 2 */}
              <div className="col-xs-12 col-sm-11">
              <h4 className={`${Products.sectionHeader}`} >Long Term Income Protection</h4>
                <div className={`${Products.sectionText}`}>
                  <p>Where you are looking to cover a <strong>repayment mortgage AND provide additional family protection</strong>, the best option may well be to apply for two policies, one decreasing term to cover the repayment mortgage and one level term to provide the additional family protection. The other option is to simply apply for a level term policy on the basis that over time the policy will be increasingly geared towards the additional family protection element as the value of the outstanding mortgage loan decreases, and at the same time it will cover increases in inflation.</p>
                  <p>These types of policies can never be cancelled by the insurer and most will allow you to make several claims so long as the circumstances are legitimate. Depending on the premium that you{`'`}re prepared to pay, the monthly payments can be index-linked to that they keep pace with inflation and the rising cost of living.</p>                </div>
              </div>

              {/* Section 3 */}
              <div className="col-xs-12 col-sm-9">
                <h4 className={`${Products.sectionHeader}`} >Short Term Income Protection</h4>
                  <div className={`${Products.sectionText}`}>
                    <p>The amount of cover required is always going to depend on an individual{"'"}s circumstances. Essentially, you need to work out the financial impact to your family in the event of your death, and how much money they would need to survive.</p>
                    <p>Some insurers also offer <strong>Unemployment Insurance</strong>, either as a separate standalone policy, or more usually combined with Accident and Sickness Insurance to create an <strong>ASU Policy</strong>, though these tend to be restricted to 12 months{"''"} worth of benefits . These products are not suitable for people who are self-employed. </p>
                  </div>
              </div>

              {/* Section 4 */}
              <div className="col-xs-12 col-sm-9">
                  <h4 className={`${Products.sectionHeader}`}>Additional Cover</h4>
                  <div className={`${Products.sectionText}`}>
                    <p>Most leading life insurance policies include <strong>Terminal Illness Insurance</strong> at no extra cost. In the event that the policyholder is diagnosed with a terminal illness (defined as where life expectancy is less than 12 months), then the insurer will agree to pay the amount of money insured on diagnosis rather than death. However, this benefit is not generally available during the last 18 months of the life insurance policy.</p>
                    <p>Further cover can be provided with <strong>Critical Illness Insurance</strong>, which pays out the amount of money insured should the policyholder be diagnosed with having one of the specified Critical Illnesses. Not all companies have the same Critical Illnesses, so it is important that the policyholder is familiar with the inclusions and exclusions before any documentation is signed.</p>
                </div>
              </div>

              <div className="hidden-md hidden-lg col-xs-12">
                <AdviceSection />
              </div>

              <CompanyLogosLarge />

            </div> {/* productContainer */}
          </div> {/* pagecontainer */}
        </div> {/* col-xs-12 */}
      </div>
    )
  }
}
