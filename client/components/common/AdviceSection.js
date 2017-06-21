import React, { Component } from 'react';
import styles from './AdviceSection.css';
import {Link} from 'react-router'

export default class QuoteForm extends Component {

  constructor(props) {
     super(props);
  }

  render () {

    return (
      <div>
          <div className={`${styles.contactContainer} col-xs-12`}>

            <Link to="/quote" className={`${styles.getQuoteButton} btn btn-primary text-center form-control`}  href="#">GET A QUOTE</Link>

            <Link to="/quote" className={`${styles.getFreeAdviceButton} btn btn-primary text-center form-control`} href="#">GET FREE ADVICE</Link>

            <p>Or call an Independent UK adviser* on</p>
            <p className={`${styles.contactPhoneNumber}`} >0330 100 7110</p>
            <p>or</p>
            <p className={`${styles.contactPhoneNumber}`} >0800 316 6917*</p>

          </div>
      </div>

    )
  }
};
