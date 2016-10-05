
import Shadow from '../../css/shadow.css'
import Logos from '../../css/logos.css'
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

    document.getElementById("HomeMenuItem").classList.add("active");
  }

  render () {
    return (
      <div className={`col-xs-12 row-no-padding`}>
        <div className="container main-container">
          <div className="col-xs-12 col-sm-3">
            <p>Let us help you save money on Critical Illness Cover</p>
          </div>
          <div className={`row-no-padding col-xs-12 col-sm-9`}>
            <div className={`${Shadow.containerShadow} col-xs-12`}>

              <h3 className="col-xs-12">Are you looking for...</h3>

              <div className="col-xs-9">
                  <h4>Critical Illness Cover</h4>
                  <p>This provides a one-off tax free lump sum payment in the event of a serious illness like cancer or permanent disability caused by injury. </p>
              </div>
              <div className="col-xs-3">
                <input type="button" className="btn btn-primary text-center" value="GET QUOTE"/>
              </div>

              <div className="col-xs-9">
                  <h4>Life and Income Protection Insurance</h4>
                  <p>This provides monthly tax-free payments in the event that you cannot work due to long-term sickness or disability, and a lump-sum payment in the event of death.  </p>
              </div>
              <div className="col-xs-3">
                <input type="button" className="btn btn-primary text-center" value="GET QUOTE"/>
              </div>


            </div>

            <div className={`${Logos.logoContainer} row-no-padding clearfix col-xs-12 text-center`}>
              <div className="col-xs-6 col-sm-2">
                <img className={`${Logos.aegon}`} src="images/logos/aegon.png" alt=""/>
              </div>
              <div className="col-xs-6 col-sm-2">
                <img className={`${Logos.ageas}`} src="images/logos/ageas.png" alt=""/>
              </div>
              <div className="col-xs-6 col-sm-2">
                <img className={`${Logos.aviva}`} src="images/logos/aviva.png" alt=""/>
              </div>
              <div className="col-xs-6 col-sm-2">
                <img className={`${Logos.brightgrey}`} src="images/logos/brightgrey.png" alt=""/>
              </div>
              <div className="col-xs-6 col-sm-2">
                <img className={`${Logos.friendlife}`} src="images/logos/friendlife.png" alt=""/>
              </div>
              <div className="col-xs-6 col-sm-2">
                <img className={`${Logos.lv}`} src="images/logos/lv.png" alt=""/>
              </div>

            </div>

          </div>
        </div>
      </div>
    )
  }
}
