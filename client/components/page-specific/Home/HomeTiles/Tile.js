import React, { Component } from 'react';
import Tile_ from './Tile.css';

export default class Tiles extends Component  {
  constructor(props) {
      super(props);
      this.state = {
          title: "",
          picture: ""
      }
  }

  _getQuoteClick(e) {

    e.preventDefault();
    alert("Clicked on get a quote");
  }

  render () {
    return (
  			<div>


            {/* Mobile View */}
            <div className={`${Tile_.tileContainer} hidden-sm hidden-md hidden-lg`}>
              <div className="col-sm-12 text-center">
                <img className={`${Tile_.tileImage}`} src={this.props.imgsrc}></img>
              </div>

              <div className="col-sm-12">
                <h4 className="clearfix text-center" style={styles.headings}>{this.props.title}</h4>
              </div>
            </div>

            {/* Desktop View */}
            <div className={`${Tile_.tileContainer} hidden-xs`}>

              <div className="col-sm-12">
                <h3 className={`${Tile_.tileHeader} clearfix text-center`}>{this.props.title}</h3>
              </div>

              <div className="col-sm-12 text-center">
                <img className={`${Tile_.tileImage}`} src={this.props.imgsrc}></img>
              </div>

              <div className="col-xs-8 col-xs-offset-2 ">
                <input onClick={this._getQuoteClick.bind(this)} type="button" className={`${Tile_.tileButton} btn btn-primary form-control text-center`} value="GET QUOTE"></input>
              </div>


            </div>
        </div>
    )
  }
};

// <div className="col-xs-6">
//   <input onClick={this._getQuoteClick.bind(this)} type="button" className="btn btn-primary form-control text-center" value="GET QUOTE"></input>
// </div>

let styles = {
  image: {
    width: "100%"
  },
  headings: {
    color: "#fff"
  }
}
