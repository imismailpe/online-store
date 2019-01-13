import React from 'react';
import ProdCard from './ProdCard';


const CategorizedProductList = (clickedCategory,products)=>{
	console.log("click function");
	this.categorizedProducts = products.filter(filteredProduct =>{
		return filteredProduct.category.includes(clickedCategory)
  	});
  	this.categorizedProducts.map((item,i)=>{
  		return (<ProdCard key={i} product={this.categorizedProducts}/>);
  	})
  	console.log(`filtered products ${this.categorizedProducts.length}`);
}


export default CategorizedProductList;