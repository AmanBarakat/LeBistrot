import React, {Component} from 'react';
import ReservationsDataService from '../service/ReservationsDataService'
import DataTable from 'react-data-table-component';
import moment from "moment"
class ManageBookings extends Component {
  constructor(props) {
    super(props)
    this.state={
      reservations:{}
    }
  }
  componentDidMount() {
      this.refreshReservations();
  }
refreshReservations(){
  ReservationsDataService.retrieveAllReservations()
      .then(
          response => {
              this.setState({ reservations: response.data },()=>console.log(this.state.reservations))
          }
      )
}
  render() {
    const columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Date',
    selector: 'date',
    sortable: true,
    cell: row => <div>{row.date.substring(0,10)}</div>,
  },
  {
    name: 'Personnes',
    selector: 'personnes',
    sortable: true,
  },
  {
    name: 'Temps',
    selector: 'time',
    sortable: true,
  },
  {
    name: 'Type',
    selector: 'type',
    sortable: true,
  },
];

    return (
    <div>

       <DataTable
            title="Reservations data"
            columns={columns}
            data={this.state.reservations}
          />
    </div>
    )
  }
}
export default ManageBookings;
