
import HeaderSmall from '../../common/HeaderSmall';
import HeaderLarge from '../../common/HeaderLarge';
import LightHeader from '../../common/LightHeader';
import ExampleForm from '../../common/ExampleForm';
import React, { Component } from 'react';
import calendar_options from '../../data/calendar_options';


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
    window.emailjs.send("outlook","template_KzSBODTp",
    {
      to_name: "Insurance MK",
      from_name: FirstName,
      firstname: FirstName,
      surname: Surname,
      homenumber: HomeNumber
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
        <div style={styles.bodyContainer} className="pcolor1">

          <HeaderSmall
              text = "Get a quote now!"
          />

        <div className="clearfix" style={styles.inputContainer} >
          <div className="col-xs-4">
            Product
          </div>
          <div className="col-xs-8">
            <select className="form-control">
              <option value="Life Insurance">Life Insurance</option>
              <option value="Critical Illness">Critical Illness</option>
              <option value="Over 50's Insurance">Over 50's Insurance</option>
              <option value="Income Protection">Income Protection</option>
              <option value="Buildings &amp; Content">Buildings &amp; Contents</option>
              <option value="Landlord Insurance">Landlord Insurance</option>
            </select>
          </div>
        </div>


        <div className="clearfix" style={styles.inputContainer} >
          <div className="col-xs-4">
            Date Of Birth
          </div>
          <div className="col-xs-8">
            <div className="row-no-padding col-xs-4">
              <select className="form-control">
              	<option>Day</option>
              	{days_in_month}
              </select>
            </div>
            <div className="row-no-padding col-xs-4">
              <select name="" id="" className="form-control">
                <option>Month</option>
                {months_in_year}
              </select>
            </div>
            <div className="row-no-padding col-xs-4">
              <select name="" id="" className="form-control">
                <option>Year</option>
                {years}
              </select>
            </div>
          </div>
        </div>


        <div className="clearfix" style={styles.inputContainer} >
          <div className="col-xs-4">
            Title
          </div>
          <div className="col-xs-8">
            <select className="form-control">
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
            </select>
          </div>
        </div>


        <div className="clearfix" style={styles.inputContainer} >
          <div className="col-xs-4">
            Firstname
          </div>
          <div className="col-xs-8">
            <input id="quote-first-name" type="text" className="form-control"/>
          </div>
        </div>


        <div className="clearfix" style={styles.inputContainer} >
          <div className="col-xs-4">
            Last Name
          </div>
          <div className="col-xs-8">
            <input id="quote-last-name" type="text" className="form-control"/>
          </div>
        </div>


        <div className="clearfix" style={styles.inputContainer} >
          <div className="col-xs-4">
            Home Phone
          </div>
          <div className="col-xs-8">
            <input id="quote-homenumber" type="text" className="form-control"/>
          </div>
        </div>


        <div className="clearfix" style={styles.inputContainer} >
          <div className="col-xs-4">
            Mobile Phone
          </div>
          <div className="col-xs-8">
            <input type="text" className="form-control"/>
          </div>
        </div>


        <div className="clearfix" style={styles.inputContainer} >
          <div className="col-xs-4">
            Email
          </div>
          <div className="col-xs-8">
            <input type="text" className="form-control"/>
          </div>
          <br/>
          <div style={styles.buttonContainer} className="col-xs-offset-3 col-xs-6">
            <input onClick={this._submitForm.bind(this)} type="button" className="btn btn-primary text-center form-control" value="Submit"></input>

          </div>
        </div>


      </div>
    )
  }
};

let styles = {
  buttonContainer : {
    marginTop: "15px"
  },
  inputContainer: {
    paddingTop: "10px",
    paddingBottom: "15px"
  }
}

export default QuoteForm;
