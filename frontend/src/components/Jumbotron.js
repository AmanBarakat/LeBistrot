import React, {Component} from 'react';
import logo from './logo.svg';

class Jumbotron extends Component{
	render(){
		return(
			 <div className="jumbotron">
			 	<div className="overlay">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
						<img src={logo}  className="img-responsive logo" alt="our best restourant" />
						</div>
						<div className="col-md-8">
						<h1> Le Bistrot de Rémy</h1>
						<h2>The secret is at the table</h2>
							<a href="/reservation" className="button subscription__form__submit">Book your table now! </a>
						</div>
					</div>
				</div>
				</div>
			</div>
			);
	}

}

export default Jumbotron;
