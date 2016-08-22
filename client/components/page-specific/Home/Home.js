
import HeaderSmall from '../../common/HeaderSmall';
import HeaderLarge from '../../common/HeaderLarge';
import LightHeader from '../../common/LightHeader';
import QuoteForm from './QuoteForm';

import React from 'react'

let styles = {
  image: {
    maxWidth: "100%"
  }
}
let Home = React.createClass({
  componentDidMount: function() {
    let menuItems = document.querySelectorAll("#main-menu li");

    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove("active");
    }

    document.getElementById("HomeMenuItem").classList.add("active");
  },

  render () {
    return (
      <div>

      <div className="col-xs-7">
          <img style={styles.image} src="images/happy_family_playing.jpg"></img>
        </div>

        <div className="text-center col-xs-5">
          <QuoteForm/>
        </div>

      </div>

    )
  }
});

export default Home;
