import React, {Component} from 'react';
import menu1 from '../images/menu1.jpeg';
import menu2 from '../images/menu2.jpeg';
import menu3 from '../images/menu3.jpeg';
import logo from './logo.svg';
import PlatsDataService from '../service/PlatsDataService';

class Today_menu extends Component{
	  constructor(props) {
			super(props)
			this.state={
				plats:{}
			}
		}
	componentDidMount() {
			this.refreshPlats();
	}

	refreshPlats() {
			PlatsDataService.retrieveAllPlats()
					.then(
							response => {
									this.setState({ plats: response.data },()=>console.log(this.state.plats))
							}
					)
	}
	renderOneCol(plat){
		if(plat){
			return (
				<div className="col-md-4">
						 <div className="panel panel-body">
						 <h2>{plat.name}</h2>
							 <div className="panel-body">
								 <img src={plat.image} className="img-responsive img-thumbnail" alt="our menu today" />
								 <ul className="menu-info nav navbar-nav">
										 <li><img src={logo}  className="img-responsive img-circle author-menu" alt="our best restourant" /></li>
									 <li><h3><em>Price: $ {plat.price} </em></h3></li>
									 <i class="fa fa-star" aria-hidden="true"></i>
									 <i class="fa fa-star" aria-hidden="true"></i>
									 <i class="fa fa-star" aria-hidden="true"></i>
									 <i class="fa fa-star" aria-hidden="true"></i>
									 <i class="fa fa-star" aria-hidden="true"></i>
								 </ul>
							 </div>
					 </div>
				 </div>
			)
		}
	}
	renderPlats(){
		let a = []
		let i=0
		for(i; i <= this.state.plats.length;i=i+3){
			a.push(
				<div className="row">
					{this.renderOneCol(this.state.plats[i])}
					{this.renderOneCol(this.state.plats[i+1])}
					{this.renderOneCol(this.state.plats[i+2])}
				</div>
			)
		}
		return a
	}
	render(){
		return(
			<div>
				<div className="today_menu">
					<h1>Menu</h1>
					<div className="container">
						{this.state.plats.length?this.renderPlats():''}
				</div>
				</div>
			</div>
			);

	}
}
export default Today_menu;
