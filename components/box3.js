import React, {Component} from "react";

class Box extends React.Component{
	render(){

		return(
			<div className="st2">

				<img src={this.props.image} width="100%"/>
     			<h2>{this.props.ville}</h2>
     		</div>
		)
	}
}

export default Box;