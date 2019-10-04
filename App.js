import React, { Component } from 'react';
import './App.css';

/*Simple code to add items dynamically to list(array) and update UI in ReactJS*/

class App extends Component {

  constructor(props){
    super(props);
    console.log(props);
    /*Defining state*/ 
    this.state={
      fruits:["Apple","Orange"],
      fruitName:''
    };

    /*Bind functions */
    this.handleFruitName = this.handleFruitName.bind(this);
    this.addFruitName = this.addFruitName.bind(this);
  }

  /*
  Handle inputs 
   */
handleFruitName(event){
  this.setState({fruitName : event.target.value})
}

/*Add input to array */
addFruitName(event){
event.preventDefault();
this.setState(prevState =>{
  const fruits = [...prevState.fruits,prevState.fruitName]
  return{
    fruits,fruitName:''
  }
})

}
  render() {

return(<div className="container">
<div className="row">
  <div className="col-sm-6">
      <form className="form-group" onSubmit={this.addFruitName}>
        <label>Enter Fruits Name</label>
        <input name="fruitnames" type="text" value={this.state.fruitName}
          placeholder="(ex:lemon)" onChange={this.handleFruitName}/>
          <button className="btn btn-primary" type="submit">Add Fruit to the list</button>
      </form>
  </div>
  <div className="col-sm-6">
    <ul className="list-group">
      {/*Show list */
        this.state.fruits.map((x) =>
        <li key={x} className="list-group-item list-group-item-success">{x}</li>)}
    </ul>
  </div>
</div>
</div>)  
  }
}
export default App;
