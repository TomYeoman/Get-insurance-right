import React, { Component } from 'react';

export default class CoverTile extends Component  {
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

        <div className="col-xs-8">
          <h3>{this.props.title}</h3>
          <input onClick={this._getQuoteClick.bind(this)} type="button" className="btn btn-primary text-center" value="Submit"></input>
        </div>

        <div className="row-no-padding col-xs-4">
          <img style={styles.image} src={this.props.imgsrc}></img>
        </div>

        </div>
    )
  }
};

let styles = {
  image: {
    width: "100%"
  }
}
