import React from 'react';
import styles from './Information.css';

export default class Information extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={`${styles.homeWelcomeTextContainer} text-center col-xs-12`}>
        <h2 className={`${styles.homeWelcomeh2}`} >Save money on your life insurance, simple</h2>

        <div className={`col-xs-12`}>
          <div className={`col-xs-2 col-xs-offset-5`}>
            <hr className={`${styles.homeTextHR}`} />
          </div>
        </div>

        <br/>
        <br/>

        <h3>We help 100’s of people obtain competitive quotes from the UK’s leading insurers</h3>
        <br/>

        <h4>Life Insurance, Critical Illness, Over 50's Insurance, Income Protection, Buildings and</h4>
        <h4>Content, Landlord Insurance.</h4>
        <br/>

      </div>

    )
  }
}
