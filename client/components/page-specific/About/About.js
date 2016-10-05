
import Shadow from '../../css/shadow.css'
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
          <div className={`${Shadow.containerShadow} col-xs-12 col-sm-9`}>
            <div className="col-xs-6">
                <h3>Are you looking for...</h3>
                <h4>Critical Illness Cover</h4>
                <p>This provides a one-off tax free lump sum payment in the event of a serious illness like cancer or permanent disability caused by injury. </p>
            </div>
            <div className="col-xs-3">
              <input type="button" className="btn btn-primary text-center" value="GET QUOTE"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
