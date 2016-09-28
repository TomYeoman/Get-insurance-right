
import React from 'react'
import Footer_ from './Footer.css';


export default class Footer extends React.Component {

  constructor() {
    super();
  }

  render () {
    return (
      <footer className={`row-no-padding col-xs-12`}>
        <div className={`${Footer_.sectionTop}`}>
          <div>
             ...
          </div>
        </div>
        <div className={`${Footer_.sectionBottom}`}>
          <div>
             ...
          </div>
        </div>
      </footer>
    )
  }
}
