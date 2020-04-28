import React, {Component} from 'react';
import RecettesDataService from '../service/RecettesDataService'
class ManageRecepies extends Component {
  constructor(props) {
    super(props)
    this.state={
      recettes:{},
      temps:"",
      personnes:"",
      instructions:"",
      ingredients:[],
      newIngredient:"",
      update:"",
      addNew:false,
      addingNewIngredient:false,
      name:""
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
  delete(id){
    RecettesDataService.deleteRecette(id)
      .then(
        response => {
          this.refreshRecettes()
        }
      )
  }
  modifyRecette(){
    RecettesDataService.modifyRecette(this.state.update,
      {
        name:this.state.name,
        temps:this.state.temps,
        personnes:this.state.personnes,
        image:this.state.image,
        instructions:this.state.instructions,
        ingredients:this.state.ingredients,
      })
        .then(
            response => {
                this.setState({ update: "" },()=>this.refreshRecettes())
            }
        )
  }
  addRecette(){
    let ingredients = this.state.ingredientsText.split(/\r?\n/);
    RecettesDataService.addRecette({
      name:this.state.name,
      temps:this.state.temps,
      personnes:this.state.personnes,
      image:this.state.image,
      instructions:this.state.instructions,
      ingredients:ingredients,
    }).then(
          response => {
              this.setState({ addNew: false },()=>this.refreshRecettes())
          }
      )
  }
  renderRecette(recette){
    return(
      <div className="platCol">
          <div>
            <img src={recette.image} alt="recette" className="recettePhoto"/>
          </div>
          <h2>{recette.name}</h2>
          {this.renderFields(recette)}
          {this.state.update.length?"":<div><button type="button" className="edit" onClick={()=>this.setState({update:recette._id,ingredients:recette.ingredients,temps:recette.temps,personnes:recette.personnes,image:recette.image,name:recette.name,instructions:recette.instructions})}> Edit </button>
          <button type="button" className="delete" onClick={()=>this.delete(recette._id)}> Delete </button></div>}
      </div>
    )
  }
  renderIngredients(recette){
    let a=[];
    recette.ingredients.forEach((ingredient)=>{
      a.push(<div>{ingredient}</div>)
    })
    return (
      <div className="inputRow">
        <label>Ingredients:</label>
        {a}
      </div>
    );
  }
  renderAddNewIngredient(){
    return(
      <div className="flexContainer">
        <input name="newIngredient" type="text" value={this.state.newIngredient} onChange={(e)=>this.setState({newIngredient:e.target.value})}/>
        <button type="button" className="save small" onClick={()=>{
          this.state.ingredients.push(this.state.newIngredient);
          this.setState({addingNewIngredient:false,newIngredient:""})
        }}> Save </button>
      </div>
    )
  }
  renderFields(recette){
    if(this.state.update===recette._id){
      return(
        <div>
          <form>
            <div className="inputRow">
              <label>Temps:</label>
              <input name="temps" type="text" value={this.state.temps} onChange={(e)=>this.setState({temps:e.target.value})}/>
            </div>
            <div className="inputRow">
              <label>Personnes:</label>
              <input name="personnes" type="text" value={this.state.personnes} onChange={(e)=>this.setState({personnes:e.target.value})}/>
            </div>
            <div className="inputRow">
              <label>Photo:</label>
              <input name="image" type="text" value={this.state.image} onChange={(e)=>this.setState({image:e.target.value})}/>
            </div>
            {this.renderIngredients(recette)}
            {this.state.addingNewIngredient?"":<button type="button" className="save small addIng" onClick={()=>this.setState({addingNewIngredient:true})}>Add ingredient</button>}
            {this.state.addingNewIngredient?this.renderAddNewIngredient(recette):""}
            <div className="inputRow">
              <label>Instructions:</label>
              <textarea name="instructions" value={this.state.instructions} onChange={(e)=>this.setState({instructions:e.target.value})}/>
            </div>
          </form>
          <button type="button" className="save" onClick={()=>this.modifyRecette()}> Save changes </button>
        </div>
      )
    }
  }
  renderNewRecette(){
    if(this.state.addNew){
      return(
        <div>
          <form className="form-style-1">
          <h2>New recepie:</h2>
            <div className="inputRow">
              <label>Name:</label>
              <input name="name" type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
            </div>
            <div className="inputRow">
              <label>Photo:</label>
              <input name="image" type="text" value={this.state.image} onChange={(e)=>this.setState({image:e.target.value})}/>
            </div>
            <div className="inputRow">
              <label>Temps:</label>
              <input name="temps" type="text" value={this.state.temps} onChange={(e)=>this.setState({temps:e.target.value})}/>
            </div>
            <div className="inputRow">
              <label>Personnes:</label>
              <input name="personnes" type="text" value={this.state.personnes} onChange={(e)=>this.setState({personnes:e.target.value})}/>
            </div>
            <div className="inputRow">
              <label>Ingredients: (one by line)</label>
              <textarea name="ingredients" type="text" value={this.state.ingredientsText} onChange={(e)=>this.setState({ingredientsText:e.target.value})}/>
            </div>
            <div className="inputRow">
              <label>Instructions:</label>
              <textarea name="instructions"value={this.state.instructions} onChange={(e)=>this.setState({instructions:e.target.value})}/>
            </div>
            <button type="button" className="save" onClick={()=>this.addRecette()}> Save </button>
          </form>
        </div>
      )
    }
  }
  renderRecettes(){
    if(this.state.recettes.length){
      let a=[]
      this.state.recettes.forEach((recette) => {
        a.push(this.renderRecette(recette))
      })
      return (
        <div>
          <div className="flexContainer  form-style-1 spaceBetween">{a}</div>
          {this.state.addNew?'':<button type="button" className="add" onClick={()=>this.setState({addNew:true,update:"",temps:"",image:"",ingredients:[],instructions:"",personnes:"",name:""})}> Add new recepie</button>}
          {this.renderNewRecette()}
        </div>
      );
    }
  }
  render() {
    return(
      <div>
        {this.renderRecettes()}
      </div>
    )
  }
}

export default ManageRecepies;
