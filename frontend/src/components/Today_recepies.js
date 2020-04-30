import React, {Component} from 'react';
import menu1 from '../images/menu1.jpeg';
import RecettesDataService from '../service/RecettesDataService';


class Today_recepies extends Component{
  constructor(props) {
    super(props)
    this.state={
      recettes:{}
    }
  }
componentDidMount() {
    this.refreshRecettes();
}
refreshRecettes() {
    RecettesDataService.retrieveAllRecettes()
        .then(
            response => {
                this.setState({ recettes: response.data },()=>console.log(this.state.recettes))
            }
        )
}
renderIngredients(recette){
  let a=[];
  let ingredients=recette.ingredients.split(";");
  ingredients.forEach((ingredient) => {
    a.push(
      <li>{ingredient}</li>
    )
  })
  return(
    <ul>
    {a}
    </ul>
  )
}
renderRecettes(){
  let recettes=[];
  this.state.recettes.forEach((recette)=>{
    recettes.push(
      <div className="rowRecette">
        <h2>{recette.name}</h2>
          <blockquote>
             {recette.instructions}
           </blockquote>
          <div className="row">
            <div className="col-md-4">
              <img src={recette.image} className="img-responsive img-thumbnail img-recette" alt="our menu today" />
            </div>
            <div className="col-md-8">
              <h3>Personnes:</h3>
              {recette.personnes}
              <h3>Temps:</h3>
              {recette.temps}
              <h3>Ingredients</h3>
              {this.renderIngredients(recette)}
            </div>
          </div>
        </div>
    )
  }
)
  return recettes
}
  render(){
    return(
      <div className="today_recepies">
        <div className="container">
          <div className="row">
              <div className="col-md-12 ">
                <h1 className="text-center">Today Recepies</h1>
             </div>
          </div>
          {this.state.recettes.length?this.renderRecettes():''}
        </div>
      </div>
      );
  }
}

  export default Today_recepies;
