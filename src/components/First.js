import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
class Hello extends React.Component {
      constructor(props)
      {
      super(props);
      console.log("in constructor")
      this.state = {show : false,value:''};
      console.log(this.state.show)

      this.HelloButton = this.HelloButton.bind(this);
      this.textChange = this.textChange.bind(this);
      }
  componentDidMount()
  {
  }
  componentDidUpdate()
  {
      try
          {
             this.nameInput.focus();
          }
             catch (e)
          {
          }
  }
  HelloButton(event)
  {
    console.log("form submited");
    event.preventDefault();
    this.setState({show : true})
  }
  textChange(e)
  {
    this.setState({value: event.target.value});
    if(e.keyCode===13)
    this.setState({show : false})
  }
render()
{
   return (
        <div className="Hello">
           <form>
               {
                   this.state.show
                   ?
                   <input  style={tooltipStyle}>this is the tooltip! type="text"  value = {this.state.value} onKeyDown={this.textChange} ref={(input) => { this.nameInput = input; }}
                   defaultValue=""/>
                   : <button onClick = {()=>{this.setState({show:true})}}>
                        Start conversation
                     </button>
                }
               </form>
           </div>
    );
  }
}


export default Hello;
