import React from 'react';
import styles from './Companies.css';

export default class Companies extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={`${styles.homeWelcomeTextContainer} text-center col-xs-12`}>
        <h2 className={`${styles.homeWelcomeh2}`} >Let us find the best deal for you</h2>

        <div className={`col-xs-12`}>
          <div className={`col-xs-4 col-xs-offset-4`}>
            <hr className={`${styles.homeTextHR}`} />
          </div>
        </div>


      </div>

    )
  }
}
