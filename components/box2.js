import React, {Component} from "react";

class Box extends React.Component{
	render(){

		return(
			<div className="st">
				<h3>{this.props.chiffres}</h3>
				<br/><br/>
				<h4>{this.props.des}</h4>
     		</div>
		)
	}
}

export default Box;