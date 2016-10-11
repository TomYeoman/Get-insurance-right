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
               <div className="sticky-header">
                 <div className="container">
                   <div className="col-xs-3">
                     <SiteHeader />
                   </div>
                   <div className="col-xs-9">
                     <NavigationBar />
                   </div>
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
              <div className="col-xs-12">
                <SiteHeader />
              </div>
              <div className="col-xs-12">
                <NavigationBar />
              </div>

             {this.props.children}
             <Footer />
           </div>
         );
       }
    }
}
