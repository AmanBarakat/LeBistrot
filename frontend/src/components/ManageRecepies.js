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
      <div className="platRow">
        {recette.name}
        {this.renderFields(recette)}
        <button type="button" onClick={()=>this.setState({update:recette._id,ingredients:recette.ingredients,temps:recette.temps,personnes:recette.personnes,name:recette.name,instructions:recette.instructions})}> Edit </button>
        <button type="button" onClick={()=>this.delete(recette._id)}> Delete </button>
      </div>
    )
  }
  renderIngredients(recette){
    let a=[];
    recette.ingredients.forEach((ingredient)=>{
      a.push(
        <div className="ingredientRow">
          {ingredient}
        </div>
      )
    })
    return a;
  }
  renderAddNewIngredient(){
    return(
      <div>
        <input name="newIngredient" type="text" value={this.state.newIngredient} onChange={(e)=>this.setState({newIngredient:e.target.value})}/>
        <button type="button" onClick={()=>this.setState({addingNewIngredient:false})}> Cancel </button>
        <button type="button" onClick={()=>{
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
              <div>Temps:</div>
              <input name="temps" type="text" value={this.state.temps} onChange={(e)=>this.setState({temps:e.target.value})}/>
            </div>
            <div className="inputRow">
              <div>Personnes:</div>
              <input name="personnes" type="text" value={this.state.personnes} onChange={(e)=>this.setState({personnes:e.target.value})}/>
            </div>
            <div className="inputRow">
              <div>Photo:</div>
              <input name="image" type="text" value={this.state.image} onChange={(e)=>this.setState({image:e.target.value})}/>
            </div>
            {this.renderIngredients(recette)}
            {this.state.addingNewIngredient?"":<button type="button" onClick={()=>this.setState({addingNewIngredient:true})}>Add ingredient</button>}
            {this.state.addingNewIngredient?this.renderAddNewIngredient(recette):""}
            <div className="inputRow">
              <div>Instructions:</div>
              <textarea name="instructions" value={this.state.instructions} onChange={(e)=>this.setState({instructions:e.target.value})}/>
            </div>
          </form>
          <button type="button" onClick={()=>this.setState({update:""})}> Cancel </button>
          <button type="button" onClick={()=>this.modifyRecette()}> Save </button>
        </div>
      )
    }
  }
  renderNewRecette(){
    if(this.state.addNew){
      return(
        <div>
          <form>
            <div className="inputRow">
              <div>Name:</div>
              <input name="name" type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
            </div>
            <div className="inputRow">
              <div>Photo:</div>
              <input name="image" type="text" value={this.state.image} onChange={(e)=>this.setState({image:e.target.value})}/>
            </div>
            <div className="inputRow">
              <div>Temps:</div>
              <input name="temps" type="text" value={this.state.temps} onChange={(e)=>this.setState({temps:e.target.value})}/>
            </div>
            <div className="inputRow">
              <div>Personnes:</div>
              <input name="personnes" type="text" value={this.state.personnes} onChange={(e)=>this.setState({personnes:e.target.value})}/>
            </div>
            <div className="inputRow">
              <div>Ingredients: (one by line)</div>
              <textarea name="ingredients" type="text" value={this.state.ingredientsText} onChange={(e)=>this.setState({ingredientsText:e.target.value})}/>
            </div>
            <div className="inputRow">
              <div>Instructions:</div>
              <textarea name="instructions"value={this.state.instructions} onChange={(e)=>this.setState({instructions:e.target.value})}/>
            </div>
          </form>
          <button type="button" onClick={()=>this.setState({addNew:false})}> Cancel </button>
          <button type="button" onClick={()=>this.addRecette()}> Save </button>
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
          <div>{a}</div>
          {this.state.addNew?'':<button type="button" onClick={()=>this.setState({addNew:true,update:"",temps:"",image:"",ingredients:[],instructions:"",personnes:"",name:""})}> Add </button>}
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
