import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import SiteHeader from './SiteHeader';
import Footer from './Footer';

export default class App extends Component {

  componentDidMount() {
    window.addEventListener('resize', () => this.forceUpdate())
  }
  render() {
       let width = window.innerWidth;
       if (width > 768) {
         return (
           <div className="header-main-container">
             <div id="mainMenuBarAnchor"></div>

             <div className="row-no-padding">
               <div className="col-xs-12 sticky-header">
                 <div className="col-xs-offset-2 col-xs-2">
                   <SiteHeader />
                 </div>
                 <div className="col-xs-6">
                   <NavigationBar />
                 </div>
               </div>
             </div>

             {this.props.children}

             <Footer />

           </div>
         );
       } else {
         return (
           <div className="header-main-container">
             <NavigationBar />
             <SiteHeader />
             {this.props.children}
             <Footer />
           </div>
         );
       }
    }
}
