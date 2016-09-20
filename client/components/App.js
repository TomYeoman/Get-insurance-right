import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import SiteHeader from './SiteHeader';

export default class App extends Component {

  componentDidMount() {
    window.addEventListener('resize', () => this.forceUpdate())
  }
  render() {
       let width = window.innerWidth;
       if (width > 768) {
         return (
           <div className="container">
             <SiteHeader />
               <NavigationBar />

             {this.props.children}
           </div>
         );
       } else {
         return (
           <div className="container">
             <NavigationBar />
             <SiteHeader />
             {this.props.children}
           </div>
         );
       }
    }
}
