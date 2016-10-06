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
  			<div styles={`${Tile_.tileContainer}`}>
          <div className="row-no-padding">
            <div className="col-xs-12">
              <h3 style={styles.headings}>{this.props.title}</h3>
            </div>
          </div>

          <div className="row-no-padding">

            <div className="col-xs-6">
              <input onClick={this._getQuoteClick.bind(this)} type="button" className="btn btn-primary form-control text-center" value="GET QUOTE"></input>
            </div>
            <div className="col-xs-6">
              <img style={styles.image} src={this.props.imgsrc}></img>
            </div>
          </div>

        </div>
    )
  }
};

let styles = {
  image: {
    width: "100%"
  },
  headings: {
    color: "#fff"
  }
}
