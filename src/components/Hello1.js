import React, {Component} from 'react';


import {Form, FormControl, Button} from 'react-bootstrap';
class Hello extends React.Component {

  constructor(props) {
    super(props);
    console.log("in constructor")
    this.state = {show : false,value:''};
    console.log(this.state.show)

    this.HelloButton = this.HelloButton.bind(this);
    this.textChange = this.textChange.bind(this);
  }
  componentDidMount(){

  }
  componentDidUpdate(){
    try {
      this.nameInput.focus();

    } catch (e) {    
    }
  }

  HelloButton(event) {
    console.log("form submited");
    event.preventDefault();

      //this.setState({value: event.target.value});

    //const {show} = this.state;
    this.setState({show : true})
    //const {show} = this.state;

  }
  textChange(e) {


    this.setState({value: event.target.value});
    //const {show} = this.state;
    if(e.keyCode===13)
    this.setState({show : false})
  }


render() {
return (

<div className="Hello">
<form onClick={(e) => {e.preventDefault()}}>

     {
         this.state.show
           ?
           <input type="text"  value = {this.state.value} onKeyDown={this.textChange} ref={(input) => { this.nameInput = input; }}
           defaultValue=""/>
           : <button onClick = {this.HelloButton}>
                 Start conversation
                 </button>
       }
      </form>
</div>
    );
  }
}
class TextBox extends React.Component {
  componentDidMount(){
  //  this.nameInput.focus();
  }
 constructor(props) {
     super(props);
     this.handleKeyPress=this.handleKeyPress.bind(this)
   }
   handleKeyPress(e) {
    event.preventDefault();
      this.setState({value: event.target.value});
      console.log(e.keyCode)
      if(e.keyCode==13){
                alert('Enter clicked!!!');
                console.log("entered");
                this.setState({show : false})
                        }
                    }

  render() {
    return (
    <div>
    <label>
       ChatBox:
       <input type="text" onChange={this.textChange} onKeyDown={this.handleKeyPress}
       />
       </label>
     </div>
   );
 }
}
class Conversation  extends React.Component {
  render() {
    return (
      <div>
      <button onClick = {this.props.HelloButton}>
          Start conversation
          </button>
          </div>);
        }
}
export default Hello;
