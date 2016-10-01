import React, { Component } from 'react';
import styles from './QuestionForm.css';

// Common
import HeaderSmall from '../../../common/HeaderSmall';
import HeaderLarge from '../../../common/HeaderLarge';
import LightHeader from '../../../common/LightHeader';
import ExampleForm from '../../../common/ExampleForm';

// Data
import calendar_options from '../../../data/calendar_options';


export default class QuoteForm extends Component {

  constructor(props) {
     super(props);
   }

  componentDidMount() {
    let menuItems = document.querySelectorAll("#main-menu li");
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove("active");
    }
    document.getElementById("ContactMenuItem").classList.add("active");
  }

  _submitForm(e) {

    e.preventDefault();
    console.log("Trying to send email")

    let FirstName = document.getElementById("quote-first-name").value;
    let Surname = document.getElementById("quote-last-name").value;
    let HomeNumber = document.getElementById("quote-homenumber").value;
    alert(FirstName);

    // parameters: service_id, template_id, template_parameters
    // window.emailjs.send("outlook","template_KzSBODTp",
    // {
    //   to_name: "Insurance MK",
    //   from_name: FirstName,
    //   firstname: FirstName,
    //   surname: Surname,
    //   homenumber: HomeNumber
    // })
    // .then(function(response) {
    //    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    // }, function(err) {
    //    console.log("FAILED. error=", err);
    // });

  }

  render () {

    // Generate all the dropdown options based off the caledar data saved in data/caledar_options.js
    let days_in_month = calendar_options.days.map((item) =>
      <option value={item}>{item}</option>
    );

    let months_in_year = calendar_options.months.map((item) =>
      <option value={item}>{item}</option>
    );

    let years = calendar_options.years.map((item) =>
      <option value={item}>{item}</option>
    );

    return (
      <div>
          <div className={`${styles.bodyContainer} col-xs-12`}>
            <div className={`col-xs-12 clearfix ${styles.bubbleContainer}`}>

              <div className={`${styles.bubble} col-xs-12 col-sm-8 col-sm-offset-2`}>
                <h1>I have a question?</h1>
                <div className="row-no-padding col-xs-12 col-sm-6">
                    <input type="text" placeholder = "Name" className={`${styles.formInput} form-control`}/>
                    <input type="text" placeholder = "Email" className={`${styles.formInput} form-control`}/>
                    <div className={`${styles.reccomendedContact}`}>
                      <i className={`fa fa-facebook-official`} aria-hidden="true"></i>
                      <label> Recommend</label>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <textarea placeholder="Message" name="questionText" id="" cols="30" rows="10" className={`${styles.formTextarea} form-control`}></textarea>
                </div>
              </div>

            </div>
          </div>
      </div>

    )
  }
};
