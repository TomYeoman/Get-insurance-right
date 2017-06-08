import React from 'react';
import styles from './CompanyLogos.css';
import Logos from '../../css/logos.css'

export default class Companies extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={`${styles.homeWelcomeTextContainer} row-no-padding text-center col-xs-12`}>



        <div className={`container ${styles.logoContainer} row-no-padding col-xs-12`}>
          <div className="col-sm-6 row-no-padding">

            <div className="col-xs-3 col-sm-3 clearfix clearfix">
              <img className={`${Logos.logoLarge}`} src="images/logos/agean.png" alt=""/>
            </div>

            <div className="col-xs-3 col-sm-3 clearfix">
              <img className={`${Logos.logoLarge}`} src="images/logos/L&G.png" alt=""/>
            </div>

            <div className="col-xs-3 col-sm-3 clearfix">
              <img className={`${Logos.logoLarge}`} src="images/logos/zurich.png" alt=""/>
            </div>

            <div className="col-xs-3 col-sm-3 clearfix">
              <img className={`${Logos.logoLarge}`} src="images/logos/aig.png" alt=""/>
            </div>

          </div>

          <div className="col-sm-6 row-no-padding">
            <div className="col-xs-3 col-sm-3 clearfix">
              <img className={`${Logos.logoLarge}`} src="images/logos/asdamoney.png" alt=""/>
            </div>
            <div className="col-xs-3 col-sm-3 clearfix">
              <img className={`${Logos.logoLarge}`} src="images/logos/royallondon.png" alt=""/>
            </div>
            <div className="col-xs-3 col-sm-3 clearfix">
              <img className={`${Logos.logoLarge}`} src="images/logos/lv.png" alt=""/>
            </div>
            <div className="col-xs-3 col-sm-3 clearfix">
              <img className={`${Logos.logoLarge}`} src="images/logos/aviva.png" alt=""/>
            </div>

          </div>


        </div>


      </div>

    )
  }
}
