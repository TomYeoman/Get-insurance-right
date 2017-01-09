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

        <div>
          <h4 className={`${styles.smallerText}`}>We are an independant insurance firm who pride ourself on excellent service and believe our </h4>
          <h4 className={`${styles.smallerText}`}>customer relationships are what make us special.</h4>
          <br/>

          <h4 className={`${styles.smallerText}`}>We are experienced in catering for a broad range of circumstances, and our dedicated hands on team</h4>
          <h4 className={`${styles.smallerText}`}>will guarantee to find you the best deal. </h4>
          <br/>

        </div>
      </div>

    )
  }
}
