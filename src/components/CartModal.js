import React from 'react';
import ProdCardList from './ProdCard';

const CartModal = ({mycart})=>{
	return(
		<div className="CartModal">
		<ProdCardList products={mycart}/>
		</div>
		)
}
export default CartModal;