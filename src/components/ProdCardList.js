import React from 'react';
import ProdCard from './ProdCard';

const ProdCardList = ({products,buyclick}) => {
	return (
		<div>
			{
				products.map((item,i)=>{
					return (<ProdCard key={i} product={products[i]} buyclick={buyclick}/>);
				})
			}
		</div>
	);
}
export default ProdCardList;