import React, {Component} from 'react';

import ManageMenu from './ManageMenu'
import ManageRecepies from './ManageRecepies';
import ManageBookings from './ManageBookings';
class Admin extends Component {
  constructor(props) {
    super(props)
    this.state={
      tab:"menu"
    }
  }
  render() {
    return (
      <div className="pageAdmin">
      <h1>Content and Booking Management</h1>
        <div className="tabs">
          <h2 className={this.state.tab==="menu"?"active":""} onClick={()=>{this.setState({tab:"menu"})}}>Manage Menu</h2>
          <h2 className={this.state.tab==="recepies"?"active":""} onClick={()=>{this.setState({tab:"recepies"})}}>Manage Recepies</h2>
          <h2 className={this.state.tab==="reservations"?"active":""} onClick={()=>{this.setState({tab:"reservations"})}}>Manage Reservations</h2>
        </div>
           {this.state.tab==="menu"?<ManageMenu />:''}
           {this.state.tab==="recepies"?<ManageRecepies />:''}
           {this.state.tab==="reservations"?<ManageBookings />:''}
      </div>
    );
  }
}
export default Admin;
