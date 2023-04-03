import React, { Component } from 'react'
import Display from './Display'
import "./Class.css"

  export default class Form extends Component {
    state={
        name: "",
        department:"",
        rating:"",
        clicked : true,
        data:[]
    }
    handleChange=(e)=> {
        this.setState({[e.target.name]:[e.target.value]})
        this.setState({[e.target.department]:[e.target.value]})
        this.setState({[e.target.rating]:[e.target.value]})

    }
       handleSubmit=()=>{
            const dataObj={
                name:this.state.name,
                department:this.state.department,
                rating:this.state.rating
            }
        const arr=this.state.data;
        arr.push(dataObj);
        this.setState({[this.state.data]:arr,clicked:false})
        }
        toggleFunction = () => {
          this.setState({clicked : !this.state.clicked})
              }
    
  render() {
    return (
      <>
      {this.state.clicked ?
      <div>
        <h1>EMPLOEE FEEDBACK FORM</h1>
        <div className="input-fields">
            <label>Name:</label>
      <input type="text" placeholder="Enter Name"  name="name" onChange={this.handleChange}></input><br></br>
      <label>Department:</label>
      <input type="text" placeholder="Enter Department"  name="department" onChange={this.handleChange}></input><br></br>
      <label>Rating:</label>
      <input type="text" placeholder=" Rating"  name="rating" onChange={this.handleChange}></input><br></br>
      <buttton onClick={this.handleSubmit} id="submit">Submit</buttton>
      </div>
       </div>:
        <div>
      <Display value={this.state.data} toggleFunc={this.toggleFunction}/>
      </div>
    }
        </>
    )
  }
}

  