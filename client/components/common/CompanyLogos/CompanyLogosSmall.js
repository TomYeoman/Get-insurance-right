import styles from './CompanyLogos.css';

import Logos from '../../css/logos.css'
import React from 'react'

export default class CompanyLogosSmall extends React.Component {

  constructor() {
    super();
  }

  render () {
    return (

      <div className={`${Logos.logoContainer} row-no-padding clearfix col-xs-12 text-center`}>

        <div className="col-xs-12">
          <h2 className={`${styles.homeWelcomeh2}`} >Let us find the best deal for you</h2>
          <div className={`col-xs-12`}>
            <div className={`col-xs-4 col-xs-offset-4`}>
              <hr className={`${styles.homeTextHR}`} />
            </div>
          </div>
        </div>

        <div className="col-xs-4 col-sm-2">
          <img className={`${Logos.logoLarge}`} src="images/logos/L&G.png" alt=""/>
        </div>
        <div className="col-xs-4 col-sm-2">
          <img className={`${Logos.logoLarge}`} src="images/logos/zurich.png" alt=""/>
        </div>
        <div className="col-xs-4 col-sm-2">
          <img className={`${Logos.logoLarge}`} src="images/logos/aig.png" alt=""/>
        </div>
        <div className="col-xs-4 col-sm-2">
          <img className={`${Logos.logoLarge}`} src="images/logos/lv.png" alt=""/>
        </div>
        <div className="col-xs-4 col-sm-2">
          <img className={`${Logos.logoLarge}`} src="images/logos/aviva.png" alt=""/>
        </div>
        <div className="col-xs-4 col-sm-2">
          <img className={`${Logos.logoLarge}`} src="images/logos/asdamoney.png" alt=""/>
        </div>


      </div>
    )
  }
}
