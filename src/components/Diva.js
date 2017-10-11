import React from 'react';
import $ from 'jquery'
import Promise from 'bluebird';

import  * as request from 'superagent';
class Diva extends React.Component {
constructor(props) {
super(props);

this.state = {show : false,show2 : false,success:[]};
this.button1Click = this.button1Click.bind(this);
this.button2Click = this.button2Click.bind(this);

};
componentDidMount() {
var self=this
new Promise(function(resolve, reject){
         $.ajax({
             url:  "https://dev.netenrich.us/api/generic/time-zone/",
             type: 'GET',
             data: {},
             processData : true,
             cache : false,
             contentType: 'application/json',
             dataType: 'json',
             beforeSend: function() {
             },
             complete: function(response){
             resolve(response);
             },
             success: function(success) {
             resolve(success);
             self.setState({success:success})
             console.log(success,'success')
               },
             error: function(error) {
             reject(error);
             }
         });
     });
}

button1Click(event)  {
    console.log("form submited");
    event.preventDefault();
    this.setState({show : true})
    this.setState({show2 : false})
  }
button2Click(event)  {
    console.log("form submited");
    event.preventDefault();
    this.setState({show : false})
    this.setState({show2 : true})

  }
  createTdElement(objKey){
    return <td>{objKey}</td>
  }
  createTd(value){
    var tableValues=[],self=this
    var objKey=Object.keys(value)
    for(var key in value){
      tableValues.push(self.createTdElement(value[key]))
    }
    return tableValues
  }


render() {
  let nodes=[],names=[],codes=[]
  for(var i=0;i<this.state.success.length;i++) {
    nodes.push(<tr>{this.createTd(this.state.success[i])}</tr>)
}


  console.log(this.state.success,'sucesadsadsfdsa')
      return (
        <div>
        <button onClick = {this.button1Click}>HOME</button>
        &nbsp;
        <button type="button" onClick = {this.button2Click} >SERVICE</button>
         <div className="table-responsive">


         <form>

            {
                this.state.show
                ?
                <h1>Welcome to home page</h1>
                : null
              }
              {
                this.state.show2
                ?
                <table id="location" className="table table-striped table-bordered" >
                <thead>
                <tr>
                <th>time_zone_id</th>
                <th>name  </th>
                <th>code</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                {nodes}
                </tr>

              </tbody>
              </table>

                : null
              }

         </form>
         </div>
         </div>

      );
   }
}


export default Diva;
