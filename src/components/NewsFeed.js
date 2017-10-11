import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
class NewsFeed extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = {value: '',list:[],details: '',username: '',desc: '',color: 'white',likes: 0,saveButton: false,editIndex:''};
		this.submitPost = this.submitPost.bind(this);
		this.textChange = this.textChange.bind(this);
		this.colorChange = this.colorChange.bind(this);
		this.deletePost = this.deletePost.bind(this);
		this.likesCount = this.likesCount.bind(this);
		this.editPost = this.editPost.bind(this);
		this.savePost=this.savePost.bind(this)

	}
	submitPost(event){
		event.preventDefault();
		var details = {
			username: this.state.username,
			desc: this.state.desc,
			color: this.state.color,
			datetime: new Date(),
			likes: 0
		}
		this.state.list.push(details)
		this.setState({list:this.state.list},{username:''},{desc: ''},{nodes: this.state.nodes})
	}
	textChange(event){
		let name=event.target.name;
		let x={}
		x[name]=event.target.value
		this.setState(x);
	}
	colorChange(event) {
		this.setState({color: event.target.value});
	}
	deletePost(event){
		event.preventDefault()
		this.state.list.splice(event.target.id,1)
		this.setState({list: this.state.list});
	}
	likesCount(event,e){
		if(event === 'add'){
			this.state.list[e.target.id].likes++
		}
		else{
			this.state.list[e.target.id].likes--
		}
			this.setState({list: this.state.list});
	}
	editPost(event){
		this.setState({username : this.state.list[event.target.id].username})
		this.setState({desc : this.state.list[event.target.id].desc})
		this.setState({color :this.state.list[event.target.id].color})
		this.setState({saveButton : true})
		this.setState({editIndex:event.target.id})
	}
	savePost(event){
			var details = {
			username: this.state.username,
			desc: this.state.desc,
			color: this.state.color,
			datetime: new Date(),
			likes: 0
		}
		let list=this.state.list;
		list[this.state.editIndex]=details
		this.setState({list:list},{username:''},{desc: ''})
		this.setState({saveButton: false})
	}
	 render()
	{
		let nodes=[]
		for(var i=0;i<this.state.list.length;i++) {
			nodes.push(<li key={i}>
							<div>
								{this.state.list[i].username}
							</div>
							<div>
								<span style={{backgroundColor:this.state.list[i].color}}>{this.state.list[i].desc}</span>
								<div>
								<button onClick={this.deletePost} id={i}>Delete</button>
								<button onClick={this.editPost} id={i}>Edit</button>
								<input type='button' id={i} onClick={this.likesCount.bind(this, 'add')} value = 'Like'/>
								 {this.state.list[i].likes}
								<input type='button' id={i} onClick={this.likesCount.bind(this, 'sub')} value = 'Unlike'/>
							</div>
							</div>
						 </li>)
		}
		return (
			<div className="NewsFeed">
					<select value={this.state.color} onChange={this.colorChange}>
						<option value="white">white</option>
						<option value="red">red</option>
						<option value="yellow">yellow</option>
						<option value="blue">blue</option>
					</select>
					    Username
						<input type="text" name="username" value={this.state.username} onChange={this.textChange}/>
						<br></br>
						description
						<input type="text" value={this.state.desc} name="desc" onChange={this.textChange}/>

						{
							this.state.saveButton?
							<button onClick= {this.savePost} id={i}>save</button>
							:<button onClick = {this.submitPost}>Post</button>
						}
						<br></br>Till now u didnt post anything lets start!!!
						<br></br>
						<ul>{nodes}</ul>
			</div>
		);
	}
}
export default NewsFeed;
