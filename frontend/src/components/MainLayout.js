import React, {Component} from 'react';

import logo from './logo.svg';
import Navbar from './Navbar';

import Page from './Page'
import Jumbotron from './Jumbotron';
import Footer from './Footer';
class MainLayout extends Component {
  render() {
    return (
      <div>
       <Navbar />
       <Jumbotron />
       <Page />
       <Footer />
      </div>
    );
  }
}
export default MainLayout;
