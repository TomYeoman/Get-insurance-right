import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import SiteHeader from './SiteHeader';
import Footer from './Footer';

export default class App extends Component {

  componentDidMount() {
    window.addEventListener('resize', () => this.forceUpdate())

    $mainMenuBar.addClass('stick');
    $mainMenuBar.removeClass('docked-header');
    $mainMenuBar.removeClass('pulse animated');
    // $mainMenuBar.removeClass('undocked-header');
    $mainMenuBarAnchor.height($mainMenuBar.height());

  }
  render() {
       let width = window.innerWidth;
       if (width >= 768) {
         return (
          <div className="header-main-container">
           <div className="content">

             <div id="mainMenuBarAnchor"></div>

             <div className="row-no-padding">
               <div className="row-no-padding sticky-header">
                 <div className="row-no-padding col-xs-12 col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2">
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
           </div>

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
