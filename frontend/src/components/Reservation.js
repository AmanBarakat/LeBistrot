import React, {Component} from 'react';
import menu1 from '../images/menu1.jpeg';
import menu2 from '../images/menu2.jpeg';
import menu3 from '../images/menu3.jpeg';
import logo from './logo.svg';
import '../font-awesome/font-awesome.min.css';

import './re.css'
import ReservationsDataService from '../service/ReservationsDataService';
import InputMoment from "input-moment"
import moment from "moment"
class Reservation extends Component{
	  constructor(props) {
			super(props)
			this.state={
				m: moment(),
				akal:false,
				name:"",
				personnes:"",
				type:'',
				date:"",
				resDate:"",
				resTime:"",
				startDate: new Date()
			}
		}
	componentDidMount() {
			console.log("ana hon");
	}

	addReservation() {
		let res={
			dateres:this.state.resDate,
			name:this.state.name,
			typeres:this.state.type,
			timeres:this.state.resTime,
			personnes:this.state.personnes,
		}
		console.log(res);
			ReservationsDataService.add(res)
					.then(
							response => {
									this.setState({ akal: true,resTime:"",resDate:"",name:"",type:"",personnes:"" },()=>console.log(this.state.akal))
							}
					)
	}
	handleChange = date => {
		let ndate = date._d;
    this.setState({

			resDate:ndate.toLocaleDateString(),
			resTime:ndate.toLocaleTimeString()
    });
  }
	 onRadioChange = (e) => {
		this.setState({
			type: e.target.value
		});
}
		render(){
		return(
			<div>
				<div className="today_menu">
					<h1>Reserve a table</h1>
					<div className="container form-style-1">
					{this.state.akal?<div class="alert alert-success" role="alert">
					Your booking has been confirmed!
					</div>:""}
					<div className="flexContainer">
					<div>
					<div className="inputRow">
							<label>Date & Time:</label>
						<InputMoment
							  moment={this.state.m}
							  onChange={this.handleChange}
							  onSave={this.handleSave}
							  minStep={1} // default
							  hourStep={2} // default
							  prevMonthIcon="fas chevron fa-chevron-left" // default
							  nextMonthIcon="fas chevron fa-chevron-right" // default
							/>
			      </div>
			      </div>
			      <div>
					<div className="inputRow">
						<label>Name:</label>
						<input type="text" name="name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
					</div>
					<div className="inputRow">
						<label>Personnes:</label>
						<input type="text" name="personnes" value={this.state.personnes} onChange={(e)=>this.setState({personnes:e.target.value})}/>
					</div>
					<div className="inputRow radioBox">
					<div>
					<label>
						<input
							type="radio"
							value="outdoor"
							checked={this.state.type==="outdoor"}
							onChange={this.onRadioChange} />
							<span>Outdoor</span>
						</label>
						</div>
						<div className="right">
						<label>
							<input
								type="radio"
								value="indoor"
								checked={this.state.type==="indoor"}
								onChange={this.onRadioChange} />
								<span>Indoor</span>
							</label>
						</div>
						</div>
						<button type="button" className="button subscription__form__submit" onClick={()=>this.addReservation()}> Book </button>
						</div>
						</div>


					</div>
				</div>
			</div>
			);

	}
}
export default Reservation;
