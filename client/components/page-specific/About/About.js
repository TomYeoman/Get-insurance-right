
import Shadow from '../../css/shadow.css'
import Logos from '../../css/logos.css'
import CompanyLogosSmall from '../../common/CompanyLogos/CompanyLogosSmall'
import _About from './About.css'
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
      <div className={`col-xs-12 row-no-padding`}>
        <div className="container main-container">

          <div className="col-xs-12 col-sm-3">
            <h4>Personal Service</h4>
              <p>We have carefully selected specialist partners to bring you excellent independent advice and competitive quotations on Protection Insurance from the UK's leading insurers.
              Instead of pushy sales people, we offer a more personal service that provides a thorough market perspective and allows you to make an informed choice.</p>
          </div>

          <div className={`row-no-padding col-xs-12 col-sm-9`}>
            <div className={`${Shadow.containerShadow} col-xs-12`}>
              <h3 className="col-xs-12">Are you looking for...</h3>
              <div className="col-xs-12 col-sm-9">
                  <h4>Critical Illness Cover</h4>
                  <p>This provides a one-off tax free lump sum payment in the event of a serious illness like cancer or permanent disability caused by injury. </p>
              </div>
              <div className="col-xs-12 col-sm-3">
                <input type="button" className="btn btn-primary text-center" value="GET QUOTE"/>
              </div>
              <div className="col-xs-12 col-sm-9">
                  <h4>Life and Income Protection Insurance</h4>
                  <p>This provides monthly tax-free payments in the event that you cannot work due to long-term sickness or disability, and a lump-sum payment in the event of death.  </p>
              </div>
              <div className="col-sm-3">
                <input type="button" className="btn btn-primary text-center" value="GET QUOTE"/>
              </div>
            </div>
          </div>

          <CompanyLogosSmall />
        </div>
      </div>
    )
  }
}
