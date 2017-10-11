import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
class Task extends React.Component {
  componentDidMount(){
   this.nameInput.focus();
 }
  constructor(props) {
    super(props);
    this.state = {value: '',listelem:[]};
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.textChange = this.textChange.bind(this);
  }

  buttonClick(event){
    // alert('entered text was submitted: ' + this.state.value);
    event.preventDefault();
    var text = this.state.text;
    console.log("form submited",text);

    this.setState({listelem:[...this.state.listelem,this.state.value]})
    this.setState({value:''});

    //const {show} = this.state;
    this.setState({show : false})
  }
  textChange(event) {


    this.setState({value: event.target.value});
    //const {show} = this.state;
    this.setState({show : true})
  }

render() {
console.log(this.state.listelem)
  let nodes=[]
  for(var i=0;i<this.state.listelem.length;i++) {
    nodes.push(<li key={i}>{this.state.listelem[i]}</li>)
  }
return (
<div className="Task">
      <form onSubmit={this.buttonClick}>
        <label>
          Entertext:
          <input type="text" value={this.state.value} onChange={this.textChange} ref={(input) => { this.nameInput = input; }}
          defaultValue=" "/>

        </label>
        {
            this.state.show
              ? <SubmitButton />
              : null
          }
          <ul>
        {nodes}
        </ul>
</form>
</div>
    );
  }
}
class SubmitButton extends React.Component {
  render() {
    return (
      <div>  <button type="submit">
          Submit
          </button>
          </div>);

  }
}

export default Task;
