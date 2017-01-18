// React
import { browserHistory } from 'react-router'
import React, { Component } from 'react';

// CSS
import styles from './Tile.css';

export default class Tiles extends Component  {
  constructor(props) {
      super(props);
      this.state = {
          title: "",
          picture: ""
      }

      this._getQuoteClick = this._getQuoteClick.bind(this);
  }

  _getQuoteClick(route) {
    browserHistory.push(route)
  }

  render () {
    return (
  			<div>
            {/* Mobile View */}
            <div className={`${styles.tileContainer} hidden-sm hidden-md hidden-lg`}>
              <div className="col-sm-12 text-center">
                <img className={`${styles.tileImage}`} src={this.props.imgsrc}></img>
              </div>

              <div className="col-sm-12">
                <h4 className={`${styles.tileHeader} clearfix text-center`} style={styles.headings}>{this.props.title}</h4>
              </div>
            </div>

            {/* Desktop View */}
            <div className={`${styles.tileContainer} hidden-xs`}>

              <div className="col-sm-12">
                <h3 className={`${styles.tileHeader} clearfix text-center`}>{this.props.title}</h3>
              </div>

              <div className="col-sm-12 text-center">
                <img className={`${styles.tileImage}`} src={this.props.imgsrc}></img>
              </div>

              <div className="col-xs-8 col-xs-offset-2 ">
                <input id={this.props.id} onClick={ () => this._getQuoteClick(this.props.route)} type="button" className={`${styles.tileButton} btn btn-primary form-control text-center`} value="GET QUOTE"></input>
              </div>

            </div>
        </div>
    )
  }
};
