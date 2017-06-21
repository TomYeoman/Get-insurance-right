import React from 'react';
import styles from './HomeJumbo.css';
import { browserHistory } from 'react-router'

var Select = require('react-select');
var options = [
    { value: 'LifeInsurance', label: 'Life Insurance' },
    { value: 'CriticalIllness', label: 'Critical Illness' },
    { value: 'Over50s', label: `Over 50's Insurance` },
    { value: 'IncomeProtection', label: 'Income Protection' }
];

export default class App extends React.Component {
  constructor() {
    super();
  }

  logChange(val) {
      browserHistory.push(val.value)
  }

  render() {
    return (
      <div className={`${styles.jumboContainer} jumbotron col-xs-12 col-sm-10 col-lg-8 col-sm-offset-1 col-lg-offset-2`}>

        <div className={`text-center`}>
          <div className={`${styles.textContainer} col-xs-12`}>
            <h1 className={`${styles.jumboHeader}`}>a fresh new approach to life insurance</h1>
            <h4 className={`${styles.subHeading}`}>talk to one of our experts on</h4>
            <span className={`${styles.phoneNumber}`}>07657 155 263</span> <h3 className={`${styles.phoneNumberMiddle}`}> / </h3> <span className={`${styles.phoneNumber}`}>01908 411 142</span>
          </div>

          <div className={`${styles.selectContainer} pulse animated col-sm-10 col-sm-offset-1 col-xs-12`}>
            <Select
                name="form-field-name"
                options={options}
                onChange={this.logChange.bind(this)}
                placeholder="I want advice on…"
            />
          </div>
        </div>

      </div>
    )
  }
}
