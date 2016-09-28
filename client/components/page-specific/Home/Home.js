
// Common
import HeaderSmall from '../../common/HeaderSmall';
import HeaderLarge from '../../common/HeaderLarge';
import LightHeader from '../../common/LightHeader';
import TextQuote from '../../common/TextQuote';
import ShadowContainer from '../../common/ShadowContainer';
import Slider from 'react-slick';

// Page specific
import QuoteForm from './QuoteForm';
import CoverTile from './CoverTile';
import HomeJumbotron from './HomeJumbo/HomeJumbo';

// React
import React from 'react'

var Select = require('react-select');

var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

let Home = React.createClass({
  componentDidMount: function() {
    let menuItems = document.querySelectorAll("#main-menu li");


    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove("active");
    }

    document.getElementById("HomeMenuItem").classList.add("active");
  },

  logChange: function(val) {
      console.log("Selected: " + val);
  },

  render () {
    return (
      <div className = "col-xs-12 row-no-padding">

        <HomeJumbotron/>


        <div style={styles.homeWelcomeTextContainer} className="text-center col-xs-12">
          <h2 style={styles.homeWelcomeh2} >Welcome to Simply Life Insurance</h2>

          <div className="col-xs-12">
            <div className="col-xs-4 col-xs-offset-4">
              <hr style={styles.homeTextHR} />
            </div>
          </div>
          <br/>
            <br/>

          <h3>Life Insurance, Critical Illness, Over 50's Insurance, Income Protection, Buildings and</h3>
          <h3>Content, Landlord Insurance.</h3>
          <br/>

          <h4>We are an independant insurance firm who pride ourself on excellent service and believe our </h4>
          <h4>customer relationships are what make us special.</h4>
          <br/>

          <h4>We are experienced in caterating for a broad range of circumstances, and our dedicated hands on team</h4>
          <h4>will guarentee to find you the best deal. </h4>
          <br/>

        </div>

        <div className="cover-tile-container ptop col-xs-12">
          <div className="col-xs-12 col-sm-4">
            <ShadowContainer>
              <CoverTile
                title="Life Insurance"
                imgsrc="images/icon_lifeinsurance.png"
              />
            </ShadowContainer>
          </div>
          <div className="col-xs-12 col-sm-4">
            <ShadowContainer>
              <CoverTile
                title="Critical Illness"
                imgsrc="images/icon_illness.png"
              />
            </ShadowContainer>
          </div>
          <div className="col-xs-12 col-sm-4">
            <ShadowContainer>
              <CoverTile
                title="Over 50's Insurance"
                imgsrc="images/icon_over50s.png"
              />
            </ShadowContainer>
          </div>
          <div className="col-xs-12 col-sm-4">
            <ShadowContainer>
              <CoverTile
                title="Income Protection"
                imgsrc="images/icon_incomeprotection.png"
              />
            </ShadowContainer>
          </div>
          <div className="col-xs-12 col-sm-4">
            <ShadowContainer>
              <CoverTile
                title="Buildings & Contents"
                imgsrc="images/icon_buildingcontent.png"
              />
            </ShadowContainer>
          </div>
          <div className="col-xs-12 col-sm-4">
            <ShadowContainer>
              <CoverTile
                title="Landlord Insurance"
                imgsrc="images/icon_landlord.png"
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
  },
  jumboImage: {
    background : "transparent",
    height:"500px",
    position: "relative"
  },
  jumboHeader: {
    color: "#e5860f",
    fontSize: "50px"
  },
  jumboPhoneNumber: {
    fontWeight:"bold"
  },
  jumboIcons : {
    position: "absolute",
    bottom: '0',
    marginBottom: "20px"
  },
  jumboLogo: {
    color: "#34454f",
    fontSize: "40px",
    marginLeft: "20px"
  },
  homeTextHR : {
    borderBottom:"5px solid RGB(131,169,192)"
  },
  homeWelcomeTextContainer : {
    backgroundColor:"#f8f8e0"
  },
  homeWelcomeh2 : {
    fontWeight:"bold"
  }
}

export default Home;
