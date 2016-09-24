import React from 'react'
import {Link} from 'react-router'

export default () => {

    let styles = {
      body: {
        height:"200px"
      },
      title: {
        fontSize: "30px",
        color: "#808080",
        fontFamily: "cabin, sans-serif",
        fontWeight: "400"
      },
      img: {

      },
      phoneNumber: {
        color: "#599F44",
        fontSize: "36px",
        display:"inline"
      },
      twitter: {
        color: "#00aced",
        fontSize: "36px"
      },
      facebook: {
        color: "#4867aa",
        fontSize: "36px"
      },
      container: {
        height: "100px"
      },
      numberText: {
        color: "#404040",
      fontSize: "18px",
      fontFamily: "cabin, sans-serif",
      fontWeight: "400",
      fontStyle: "italic"
    },
    numberContainer: {
      textAlign: "center"
    }
    }
    return (
      <div className="header-container" >

        {/* If in mobile show the social media icons before banner--> */}
        <div className="hidden-sm hidden-md hidden-lg row-no-padding col-xs-12 col-sm-3">
          <i style={styles.facebook} className="pull-right fa fa-facebook-official" aria-hidden="true"></i>
            <i style={styles.twitter} className="pull-right fa fa-twitter-square" aria-hidden="true"></i>
        </div>

        <div className="logo-container row-no-padding col-xs-12">
          <img src="images/logo.png"></img>
        </div>




      </div>
    )
}
