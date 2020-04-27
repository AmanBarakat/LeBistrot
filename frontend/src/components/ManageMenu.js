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
      <div className="platRow">
        <div className="platTitle">
          <h3>{plat.name}</h3>
          <button type="button" onClick={()=>this.setState({update:plat._id,name:plat.name,price:plat.price,image:plat.image})}> Edit </button>
          <button type="button" onClick={()=>this.delete(plat._id)}> Delete </button>
        </div>
        {this.renderFields(plat)}
      </div>
    )
  }
  renderFields(plat){
    if(this.state.update===plat._id){
      return(
        <div>
          <form>
            <input name="name" type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
            <input name="price" type="text" value={this.state.price} onChange={(e)=>this.setState({price:e.target.value})}/>
            <input name="image" type="text" value={this.state.image} onChange={(e)=>this.setState({image:e.target.value})}/>
          </form>
          <button type="button" onClick={()=>this.setState({update:""})}> Cancel </button>
          <button type="button" onClick={()=>this.modifyPlat()}> Save </button>
        </div>
      )
    }
  }
  renderNewPlat(){
    if(this.state.addNew){
      return(
        <div>
          <form>
            <input name="name" type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
            <input name="price" type="text" value={this.state.price} onChange={(e)=>this.setState({price:e.target.value})}/>
            <input name="image" type="text" value={this.state.image} onChange={(e)=>this.setState({image:e.target.value})}/>
          </form>
          <button type="button" onClick={()=>this.setState({addNew:false})}> Cancel </button>
          <button type="button" onClick={()=>this.addPlat()}> Save </button>
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
          <div>{a}</div>
          {this.state.addNew?'':<button type="button" onClick={()=>this.setState({addNew:true,update:"",name:"",price:""})}> Add </button>}
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
