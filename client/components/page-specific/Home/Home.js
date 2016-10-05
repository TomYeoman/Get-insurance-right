
// Page specific
import QuoteForm from './QuoteForm';
import HomeJumbotron from './Jumbo/HomeJumbo';
import Information from './Information/Information';
import HomeTiles from './HomeTiles/HomeTiles';
import Companies from './Companies/Companies';
import QuestionForm from './QuestionForm/QuestionForm';

// React
import React from 'react'

// styles
import Logos from '../../css/logos.css'

export default class Home extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let menuItems = document.querySelectorAll("#main-menu li");

    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove("active");
    }

    document.getElementById("HomeMenuItem").classList.add("active");

    window.addEventListener('resize', () => this.forceUpdate())

  }

  render () {

    let width = window.innerWidth;
    console.log("resizing");
    if (width > 768) {
      return (
        <div className="row-no-padding">
          <div className={`col-xs-12`}>
            <HomeJumbotron/>
            <Information/>
            <HomeTiles />
            <Companies />
            <QuestionForm />
          </div>
        </div>

      )
    } else {
      return (
        <div className="row-no-padding">
          <div className={`col-xs-12`}>
            <HomeJumbotron/>
            <HomeTiles />
            <QuestionForm />
          </div>
        </div>
      )
    }
  }
}
