
// Common
import HeaderSmall from '../../common/HeaderSmall';
import HeaderLarge from '../../common/HeaderLarge';
import LightHeader from '../../common/LightHeader';
import TextQuote from '../../common/TextQuote';
import ShadowContainer from '../../common/ShadowContainer';

// Page specific
import QuoteForm from './QuoteForm';
import CoverTile from './CoverTile';

// React
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

        <div className="home-image-container col-xs-12 col-sm-6 col-md-7">
          <div className="fixed-bg"></div>
          <div className="home-page-quote">
            <TextQuote text='"The service they provided was both professional and friendly. Having got my life insurance through Get Insurance Right, I am very pleased that I went through them. I would recommend this site to anyone looking for cheap cover."'/>
          </div>
        </div>

        <div className="text-center col-xs-12 col-sm-6 col-md-5">
          <QuoteForm/>
        </div>

        <div className="cover-tile-container ptop col-xs-12">

          <div className="col-xs-12 col-sm-4">
            <ShadowContainer>
              <CoverTile
                title="Life Insurance"
                imgsrc="images/caucasian_family.png"
              />
            </ShadowContainer>
          </div>
          <div className="col-xs-12 col-sm-4">
            <ShadowContainer>
              <CoverTile
                title="Critical Illness"
                imgsrc="images/doctor_scope_.png"
              />
            </ShadowContainer>
          </div>
          <div className="col-xs-12 col-sm-4">
            <ShadowContainer>
              <CoverTile
                title="Over 50's Insurance"
                imgsrc="images/6744289-happy-elderly-seniors-couple-in-love-isolated-over-white-background.jpg"
              />
            </ShadowContainer>
          </div>
          <div className="col-xs-12 col-sm-4">
            <ShadowContainer>
              <CoverTile
                title="Income Protection"
                imgsrc="images/money.png"
              />
            </ShadowContainer>
          </div>
          <div className="col-xs-12 col-sm-4">
            <ShadowContainer>
              <CoverTile
                title="Buildings & Contents"
                imgsrc="images/house.jpg"
              />
            </ShadowContainer>
          </div>
          <div className="col-xs-12 col-sm-4">
            <ShadowContainer>
              <CoverTile
                title="Landlord Insurance"
                imgsrc="images/buy_fix_hold.png"
              />
            </ShadowContainer>
          </div>

        </div>
      </div>

    )
  }
});

let styles = {
  image: {
    maxWidth: "100%"
  },
  textQuote : {
    marginTop:"15px"
  }
}

export default Home;
