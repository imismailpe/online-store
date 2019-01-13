import React from 'react';


const ProdCard = ({product,buyclick}) => {
	return (
		<div className="productCard">
				<div className="white prodImg">
				    <img src={`${product.image}${product.name}palakad`} className="grow" alt={product.name}/>
				    <div className="f5 f4-ns tl link prodName twrap bg-black-70">
				    	{product.name}
				    </div>
				    <div className="prodDesc bg-black-50">
					    <h2 className="f5 ph3 dib">{`Rs.${product.price}`}</h2>
						    <button className="f6 link ph3 pv2 mb2 dib white buttonSm" value={`${product.name}`} onClick={buyclick}>
						    Add to Cart
						    </button>
						<div className="f6 twrap">
					    {product.description.substring(0,50)+".."}
					</div>
					</div>
				</div>
		</div>
		);
}
export default ProdCard;