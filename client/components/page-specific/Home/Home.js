
import HeaderSmall from '../../common/HeaderSmall';
import HeaderLarge from '../../common/HeaderLarge';
import LightHeader from '../../common/LightHeader';

import React from 'react'

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
            <HeaderSmall
                text = "You've landed on home!"
            />
          <p>
            Click on some tabs to move about
          </p>
        </div>
    )
  }
});

export default Home;
