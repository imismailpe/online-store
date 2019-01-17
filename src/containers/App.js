import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../containers/App.css';
import ProdCardList from '../components/ProdCardList';
import NavBar from '../components/NavBar';
import CartBar from '../components/CartBar';
import {Products} from '../components/Products';
import CategoryList from '../components/CategoryList';
import CartModal from '../components/CartModal';
import ErrorBoundary from '../components/ErrorBoundary';
import {setSearchField,addToCart} from '../actions.js';

const mapStateToProps = state =>{
	return {
		searchKeyword: state.searchProdsR.searchKeyword,
		item: state.addToCartR.item
	}
}
const mapDispatchToProps = (dispatch) => {
	//this.setCategorizedProducts(this.filteredProducts.category);
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onBuyClick: (event) => dispatch(addToCart(event.target.value))
	}
}

class App extends Component {
	filteredProducts = [];
	filteredCategory = [];
	categorizedProducts = [];
	cartProducts = [];
	myCart = [];
	constructor(){
		super();
		this.state = {
			products:Products,
			//searchKeyword:'',
			filteredCategory : '',
			myCart : '',
			cartProducts:'',
			show: false
		}
	}
	/*
	not required. changed to redux
	onSearchChange = (event)=>{
		this.setState({searchKeyword:event.target.value})
		this.setCategorizedProducts(this.filteredProducts.category);
	}
	*/
	componentDidMount(){
	/*
		//fetching from internet
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(onlineprods => {this.setState({products:onlineprods})});
	*/
	}
	addItemToCart = ()=>{
		const currentItem=this.props.item;
		if(this.myCart.filter(eachItem => eachItem.name===currentItem).length===0){
			const selectedProduct=this.state.products.filter(product=>product.name===currentItem)[0];
			console.log("selectedProduct=",selectedProduct);
			console.log("currentItem=",currentItem);
			const newItem=new Object();
			newItem.name=selectedProduct.name;
			newItem.price=selectedProduct.price;
			newItem.quantity=1;
			newItem.total=selectedProduct.price;
			this.myCart.push(newItem);
			console.log("added new item : ",this.myCart);
		}
		else{
			this.myCart.filter(eachItem => eachItem.name===currentItem)[0].quantity+=1;
			console.log("updated quantity : ",this.myCart);
		}
		console.log(this.myCart.filter(eachItem => eachItem.name===currentItem)[0]);
	}
	onShowCart = ()=>{
		console.log("cart : ",this.myCart);
		this.setState({show: true})
	}
	onHideCart = ()=>{
		this.setState({show: false})
	}
	setCategorizedProducts = (filteredCategory)=>{
		this.categorizedProducts = this.state.products.filter(product =>{
			return product.category.includes(filteredCategory);
			//console.log("categorizedProducts is ",this.categorizedProducts);
	  	});
		
  		//console.log(`filtered products length-${this.categorizedProducts.length}`);
	}
	onCategoryClick = (event)=>{
		this.setState({filteredCategory:event.target.value})
		//console.log("clicked category is ",event.target.value);
		//change electronics to this.state.filteredCategory
  		this.setCategorizedProducts(this.state.filteredCategory);
  		this.filteredProducts = this.categorizedProducts;
  		//this.categorizedProducts.map((item,i)=>{
	  	//	return (<ProdCardList products={this.categorizedProducts}/>);
  		//})
	}

  render() {
  	//redux.
  	const {searchKeyword,onSearchChange,onBuyClick,item} = this.props;
  	this.filteredProducts = this.state.products.filter(product =>{
  		//without redux
  		//return product.name.toLowerCase().includes(this.state.searchKeyword.toLowerCase());
  		return product.name.toLowerCase().includes(searchKeyword.toLowerCase());
  	});
  	
  	this.categorizedProducts = this.state.products.filter(product =>{
		return product.category.includes(this.state.filteredCategory);
		//console.log("categorizedProducts is ",this.categorizedProducts);
	});
	if(this.props.item.length>0){
		this.addItemToCart();
	}
    
    return (
    	<div className="bg-light-white tc">
    	<ErrorBoundary>
	    	<div>
	    		<NavBar searchchange={onSearchChange}/>
	    	</div>
	    	<div className="bg-light-blue">
		        <CategoryList products={this.filteredProducts} categoryclick={this.onCategoryClick}>
		        </CategoryList>
	        </div>
	     	<div className="container">
		        <ProdCardList products={this.filteredProducts} buyclick={onBuyClick}>
		        </ProdCardList>
	        </div>
	        <div>
	    		<CartBar mycart={this.myCart} show={this.state.show} showcart={this.onShowCart} hidecart={this.onHideCart}/>
	    	</div>
        </ErrorBoundary>
        </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);