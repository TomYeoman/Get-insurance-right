import React from 'react';
import NavigationBar from './NavigationBar';
import SiteHeader from './SiteHeader';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <SiteHeader />
        <NavigationBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
