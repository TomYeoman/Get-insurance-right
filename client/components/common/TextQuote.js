import React from 'react'

let styles = {
  mainContainer : {
    "borderColor": "#000000",
    "MozBorderRadius": "10px",
    "WebkitBorderRadius": "10px",
    "KhtmlBorderRadius": "10px",
    "borderRadius": "10px",
    "padding": "15px"
  },
  innerContainer : {
    "borderColor": "15px",
    "backgroundColor": "white",
    padding:"15px"
  }
}

class TextQuote extends React.Component {
    render () {
        return (
            <div style={styles.mainContainer} className="pcolor1 clearfix header-small">
                <div style={styles.innerContainer} className="text-center">
                  <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
};

export default TextQuote;
