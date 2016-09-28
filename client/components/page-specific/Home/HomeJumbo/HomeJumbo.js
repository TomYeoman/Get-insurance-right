import React from 'react';
import styles from './HomeJumbo.css';

var Select = require('react-select');
var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

export default class App extends React.Component {
  constructor() {
    super();
  }

  logChange(val) {
      console.log("Selected: " + val)
  }

  render() {
    return (
      <div className={`${styles.jumboImage} jumbotron`}>
        <div className={`text-center`}>
          <h1 className={`${styles.jumboHeader}`}>a fresh new approach to life insurance</h1>
          <h3> Talk to one of our experts on</h3>
          <h2><span className={`${styles.jumboPhoneNumber}`}>07657 155 263</span> or <span className={`${styles.jumboPhoneNumber}`}>01908 411 142</span></h2>
          <div className={`col-sm-6 col-sm-offset-3 col-xs-12`}>
            <Select
                name="form-field-name"
                options={options}
                onChange={this.logChange.bind(this)}
                placeholder="I want to purchase..."
            />
          </div>
        </div>

        <div className={`${styles.jumboIcons} col-xs-3 col-xs-offset-2`}>

          <i className={`${styles.jumboLogo} fa fa-facebook-official`} aria-hidden="true"></i>
          <i className={`${styles.jumboLogo} fa fa-twitter-square`} aria-hidden="true"></i>
          <i className={`${styles.jumboLogo} fa fa-linkedin-square`} aria-hidden="true"></i>

        </div>

      </div>
    )
  }
}
