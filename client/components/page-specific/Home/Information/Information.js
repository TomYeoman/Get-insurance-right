import React from 'react';
import styles from './Information.css';

export default class Information extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={`${styles.homeWelcomeTextContainer} text-center col-xs-12`}>
        <h2 className={`${styles.homeWelcomeh2}`} >Welcome to Simply Life Insurance</h2>

        <div className={`col-xs-12`}>
          <div className={`col-xs-4 col-xs-offset-4`}>
            <hr className={`${styles.homeTextHR}`} />
          </div>
        </div>

        <br/>
        <br/>

        <h3>Life Insurance, Critical Illness, Over 50's Insurance, Income Protection, Buildings and</h3>
        <h3>Content, Landlord Insurance.</h3>
        <br/>

        <h4>We are an independant insurance firm who pride ourself on excellent service and believe our </h4>
        <h4>customer relationships are what make us special.</h4>
        <br/>

        <h4>We are experienced in caterating for a broad range of circumstances, and our dedicated hands on team</h4>
        <h4>will guarentee to find you the best deal. </h4>
        <br/>

      </div>

    )
  }
}
