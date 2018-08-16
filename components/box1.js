import React, {Component} from "react";

class Box extends React.Component{
	render(){

		return(
			<div className="box1" style={{'backgroundColor':this.props.style}} >
				<h2>{this.props.name}</h2>
				<hr className="divider"/>
				<p>{this.props.des}</p>	
				<center><button className="btn"> {this.props.bname}</button></center>
     		</div>
		)
	}
}

export default Box;