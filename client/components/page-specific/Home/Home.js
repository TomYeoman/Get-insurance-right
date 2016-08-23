
import HeaderSmall from '../../common/HeaderSmall';
import HeaderLarge from '../../common/HeaderLarge';
import LightHeader from '../../common/LightHeader';
import TextQuote from '../../common/TextQuote';
import QuoteForm from './QuoteForm';
import ShadowContainer from '../../common/ShadowContainer';

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
          <TextQuote text='"The service they provided was both professional and friendly. Having got my life insurance through Get Insurance Right, I am very pleased that I went through them. I would recommend this site to anyone looking for cheap cover."'/>
        </div>

        <div className="text-center col-xs-5">
          <QuoteForm/>
        </div>

        <div className="col-xs-12">

          <div className="col-xs-3">
            <ShadowContainer>
              <TextQuote text='"TEEEEST"'/>
            </ShadowContainer>

          </div>

        </div>
      </div>

    )
  }
});

export default Home;
