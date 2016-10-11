import React from 'react';
import styles from './CompanyLogos.css';
import Logos from '../../css/logos.css'

export default class Companies extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={`${styles.homeWelcomeTextContainer} text-center col-xs-12`}>

        <div className="col-xs-12">
          <h2 className={`${styles.homeWelcomeh2}`} >Let us find the best deal for you</h2>
          <div className={`col-xs-12`}>
            <div className={`col-xs-4 col-xs-offset-4`}>
              <hr className={`${styles.homeTextHR}`} />
            </div>
          </div>
        </div>

        <div className={`container ${styles.logoContainer} row-no-padding clearfix text-center`}>
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
            <img className={`${Logos.lv}`} src="images/logos/legalandgeneral.png" alt=""/>
          </div>
          <div className="col-xs-6 col-sm-2">
            <img className={`${Logos.partnership}`} src="images/logos/lv.png" alt=""/>
          </div>
          <div className="col-xs-6 col-sm-2">
            <img className={`${Logos.ageas}`} src="images/logos/partnership.png" alt=""/>
          </div>
          <div className="col-xs-6 col-sm-2">
            <img className={`${Logos.aviva}`} src="images/logos/provident.png" alt=""/>
          </div>
          <div className="col-xs-6 col-sm-2">
            <img className={`${Logos.brightgrey}`} src="images/logos/pru.png" alt=""/>
          </div>
          <div className="col-xs-6 col-sm-2">
            <img className={`${Logos.friendlife}`} src="images/logos/zurich.png" alt=""/>
          </div>
          <div className="col-xs-6 col-sm-2">
            <img className={`${Logos.lv}`} src="images/logos/lv.png" alt=""/>
          </div>

        </div>


      </div>

    )
  }
}
