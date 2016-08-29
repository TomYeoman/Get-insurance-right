import React from 'react'

class ShadowContainer extends React.Component {
  render () {
    return (
      <div style={styles.container} className="clearfix header-small">
  			{this.props.children}
  		</div>
    )
  }
};

let styles = {
  container: {
    "PieBoxShadow": "6px 6px 8px #BFBFBF",
    "MozBoxShadow": "6px 6px 8px rgba(127, 127, 127, 0.5)",
    "WebkitBoxShadow": "6px 6px 8px -1px rgba(127, 127, 127, 0.5)",
    "boxShadow": "6px 6px 8px rgba(127, 127, 127, 0.5)",
    "borderColor": "#000000",
    "backgroundColor": "#EEEEE5",
    "paddingBottom": "10px",
    height: "150px"
  }
}

export default ShadowContainer;
