

// React
import React from 'react'

export default class Home extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let menuItems = document.querySelectorAll("#main-menu li");

    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove("active");
    }

    document.getElementById("HomeMenuItem").classList.add("active");
  }

  render () {
    return (
      <div className={`col-xs-12 row-no-padding`}>
        Hello
      </div>
    )
  }
}
