import React, {Component} from 'react';
import PlatsDataService from '../service/PlatsDataService'
class ManageMenu extends Component {
  constructor(props) {
    super(props)
    this.state={
      plats:{},
      price:"",
      update:"",
      image:"",
      name:""
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
  delete(id){
    PlatsDataService.deletePlat(id)
      .then(
        response => {
          this.refreshPlats()
        }
      )
  }
  modifyPlat(){
    PlatsDataService.modifyPlat(this.state.update,{name:this.state.name,price:this.state.price,image:this.state.image})
        .then(
            response => {
                this.setState({ update: "" },()=>this.refreshPlats())
            }
        )
  }
  addPlat(){
    PlatsDataService.addPlat({name:this.state.name,price:this.state.price,image:this.state.image})
        .then(
            response => {
                this.setState({ addNew: false },()=>this.refreshPlats())
            }
        )
  }
  renderPlat(plat){
    return(
      <div className="platCol">
          <img className="recettePhoto" src={plat.image} alt="plat"/>
          <h3>{plat.name}</h3>
          <button type="button" className="edit" onClick={()=>this.setState({update:plat.id,name:plat.name,price:plat.price,image:plat.image})}> Edit </button>
          <button type="button" className="delete" onClick={()=>this.delete(plat.id)}> Delete </button>
        {this.renderFields(plat)}
      </div>
    )
  }
  renderFields(plat){
    if(this.state.update===plat.id){
      return(
        <div>
          <form>
            <div className="inputRow">
              <label>Name:</label>
              <input name="name" type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
            </div>
            <div className="inputRow">
              <label>Price:</label>
              <input name="price" type="text" value={this.state.price} onChange={(e)=>this.setState({price:e.target.value})}/>
            </div>
            <div className="inputRow">
              <label>Photo:</label>
              <input name="image" type="text" value={this.state.image} onChange={(e)=>this.setState({image:e.target.value})}/>
            </div>
            <button type="button" className="save small addIng" onClick={()=>this.modifyPlat()}> Save </button>
          </form>
        </div>
      )
    }
  }
  renderNewPlat(){
    if(this.state.addNew){
      return(
        <div>
          <form className="form-style-1">
          <h2>New menu entry:</h2>
          <div className="inputRow">
            <label>Name:</label>
            <input name="name" type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
          </div>
            <div className="inputRow">
              <label>Price:</label>
              <input name="price" type="text" value={this.state.price} onChange={(e)=>this.setState({price:e.target.value})}/>
            </div>
            <div className="inputRow">
              <label>Photo:</label>
              <input name="image" type="text" value={this.state.image} onChange={(e)=>this.setState({image:e.target.value})}/>
            </div>
            <button type="button" className="save" onClick={()=>this.addPlat()}> Add to menu </button>
          </form>
        </div>
      )
    }
  }
  renderPlats(){
    if(this.state.plats.length){
      let a=[]
      this.state.plats.forEach((plat) => {
        a.push(this.renderPlat(plat))
      })
      return (
        <div>
        <div className="flexContainer form-style-1 spaceBetween">{a}</div><div className="flexContainer form-style-1 spaceBetween">{a}</div>
          {this.state.addNew?'':<button type="button" className="add" onClick={()=>this.setState({addNew:true,update:"",name:"",price:"",image:""})}> Add more to menu </button>}
          {this.renderNewPlat()}
        </div>
      );
    }
    else{
      return(

          <div>

            {this.state.addNew?'':<button type="button" className="add" onClick={()=>this.setState({addNew:true,update:"",name:"",price:"",image:""})}> Add more to menu </button>}
            {this.renderNewPlat()}
          </div>
        );
    }
  }
  render() {
    return(
      <div>
        {this.renderPlats()}
      </div>
    )
  }
}
export default ManageMenu;
