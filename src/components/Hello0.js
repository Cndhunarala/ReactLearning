import React, {Component} from 'react';


import {Form, FormControl, Button} from 'react-bootstrap';
class Hello extends React.Component {

  constructor(props) {
    super(props);
    console.log("in constructor")
    this.state = {show : false};
    //console.log(this.state.show)

    this.HelloButton = this.HelloButton.bind(this);

  }
  // handleKeyPress(e) {
  //   console.log(e)
  //   alert('Enter clicked!!!');
  //
  //     if(e.charCode===13){
  //     }
  //
  // }
  HelloButton(event) {
    event.preventDefault();
    console.log("form submited");
      //this.setState({value: event.target.value});

    //const {show} = this.state;
    this.setState({show : true})
  }

render() {
return (
<div className="Hello">

      <button onClick = {this.HelloButton}>
          Start conversation
          </button>
        {
            this.state.show
              ? <SubmitButton />
              : null
          }

</div>
    );
  }
}
class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.state.show)
    this.handleKeyPress=this.handleKeyPress.bind(this)

  }
  handleKeyPress(e) {
    event.preventDefault();
      this.setState({value: event.target.value});

    console.log(e.keyCode)

      if(e.keyCode===13){
        alert('Enter clicked!!!');

      }

  }
  componentDidMount(){
   this.nameInput.focus();
 }

  render() {
    return (
    <div>
      <label>
         ChatBox:
         <textarea type="text" onKeyDown={this.handleKeyPress}
         ref={(input) => { this.nameInput = input; }}
         />

       </label>
     </div>
   );
 }
}

export default Hello;
