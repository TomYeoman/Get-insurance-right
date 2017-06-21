import React, { Component } from 'react';
import styles from './QuoteForm.css';

// Common
import HeaderSmall from './HeaderSmall';
import HeaderLarge from './HeaderLarge';
import LightHeader from './LightHeader';
import ExampleForm from './ExampleForm';
import CompanyLogosSmall from './CompanyLogos/CompanyLogosSmall'

// Data
import calendar_options from '../data/calendar_options';


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

    let name = document.getElementById("form-name").value;
    let email = document.getElementById("form-email").value;
    let contactNum = document.getElementById("form-number").value;
    let message = document.getElementById("form-message").value;


    // parameters: service_id, template_id, template_parameters
    window.emailjs.send("outlook","template_KzSBODTp",
    {
      to_name: "Simply Insurance",
      from_name: name,
      name: name,
      email: email,
      contactNum: contactNum,
      message: message
    })
    .then(function(response) {
       console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    }, function(err) {
       console.log("FAILED. error=", err);
    });

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
          <div className={`${styles.bodyContainer} container col-xs-12`}>

            <div className={`col-xs-12 clearfix ${styles.bubbleContainer}`}>

              <div className={`${styles.bubble} col-xs-12 col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2`}>

                <div className="col-xs-12">
                  <h1>GET A QUOTE NOW</h1>
                </div>

                <div className="col-xs-12 col-sm-6">
                    <input id="form-name" type="text" placeholder = "Name" className={`${styles.formInput} form-control`}/>
                    <input id="form-email" type="text" placeholder = "Email" className={`${styles.formInput} form-control`}/>
                    <input id="form-number" type="text" placeholder = "Contact Number (Optional)" className={`${styles.formInput} form-control`}/>
                    <select className={`${styles.formInput} form-control`} name="" id="">
                      <option selected="selected" value="General">Enquiry topic...</option>
                      <option value="Select enquiry topic">Life insurance</option>
                      <option value="Select enquiry topic">Critical illness</option>
                      <option value="Select enquiry topic">Income protection</option>
                      <option value="Select enquiry topic">Over 50's insurance</option>
                      <option value="Select enquiry topic">General</option>
                    </select>


                </div>
                <div className="col-xs-12 col-sm-6">
                  <textarea id="form-message" placeholder="Message" name="questionText" cols="30" rows="10" className={`${styles.formTextarea} form-control`}></textarea>
                </div>
                <div className={`${styles.submitContainer} col-xs-12 col-sm-4 col-sm-offset-4`}>
                  <input onClick={this._submitForm.bind(this)} type="button" className="btn btn-secondary text-center form-control" value="Submit"></input>
                </div>
              </div>

            </div>
          </div>
      </div>

    )
  }
};
