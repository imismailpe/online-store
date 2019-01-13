import React,{Component} from 'react';

class ErrorBoundary extends Component{
	constructor(props){
		super(props);
		this.state={
			hasError: false
		}
	}

	componentDidCatch(error,info){
		this.setState({hasError:true});
		console.log(error,info);
	}

	render(){
		if(this.state.hasError===true){
			return(<div>Oops something went wrong. here is the details.</div>);
		}
		else{
			return(this.props.children)
		}
	}
}
export default ErrorBoundary;