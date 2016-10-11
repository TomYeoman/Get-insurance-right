
import Logos from '../../css/logos.css'
import React from 'react'

export default class CompanyLogosSmall extends React.Component {

  constructor() {
    super();
  }

  render () {
    return (

      <div className={`${Logos.logoContainer} row-no-padding clearfix col-xs-12 text-center`}>
        <div className="col-xs-4 col-sm-2">
          <img className={`${Logos.aegon}`} src="images/logos/aegon.png" alt=""/>
        </div>
        <div className="col-xs-4 col-sm-2">
          <img className={`${Logos.ageas}`} src="images/logos/ageas.png" alt=""/>
        </div>
        <div className="col-xs-4 col-sm-2">
          <img className={`${Logos.aviva}`} src="images/logos/aviva.png" alt=""/>
        </div>
        <div className="col-xs-4 col-sm-2">
          <img className={`${Logos.brightgrey}`} src="images/logos/brightgrey.png" alt=""/>
        </div>
        <div className="col-xs-4 col-sm-2">
          <img className={`${Logos.friendlife}`} src="images/logos/friendlife.png" alt=""/>
        </div>
        <div className="col-xs-4 col-sm-2">
          <img className={`${Logos.lv}`} src="images/logos/lv.png" alt=""/>
        </div>

      </div>
    )
  }
}
