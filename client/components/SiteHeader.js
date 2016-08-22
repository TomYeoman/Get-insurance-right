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
        color: "green",
        fontSize: "36px"
      },
      facebook: {
        color: "black",
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
      <div style={styles.body} >
        <div style={styles.container} className="col-xs-12 col-sm-4">
          <img src="images/mainlogo.png"></img>
        </div>

        <div className="col-xs-12 col-sm-8">

          <div className="col-xs-12 col-sm-12">


            <div style={styles.numberContainer} className="col-xs-12 col-sm-9">
              <div className="col-xs-12 col-sm-12">

                <div className="col-xs-12 col-sm-12">
                    <i style={styles.phoneNumber} className="fa fa-phone-square" aria-hidden="true"></i>
                  <p style={styles.phoneNumber} > 0800 644 6511</p>
                </div>
              </div>

              <div style={styles.numberText} className="col-xs-12 col-sm-12">
                <p >Call today for a free quotation</p>
              </div>
            </div>

              <div className="col-xs-12 col-sm-3">
                <i style={styles.phoneNumber} className="pull-right fa fa-facebook-official" aria-hidden="true"></i>
                  <i style={styles.phoneNumber} className="pull-right fa fa-twitter-square" aria-hidden="true"></i>
              </div>

          </div>
            <div className="col-xs-12 col-sm-12">
              <p style={styles.title}> The RIGHT advice at the RIGHT price </p>
            </div>

        </div>


      </div>
    )
}
