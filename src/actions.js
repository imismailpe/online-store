import {
	CHANGE_SEARCH_FIELD,
	ADD_TO_CART
} from './constants.js';

export const setSearchField = (text)=>{
	//console.log(text);
	return ({
		type: CHANGE_SEARCH_FIELD,
		payload: text
	})
}

export const clickedACategory = (cat)=>{
	console.log(cat);
}
export const addToCart = (item) => {
	return({
		type: ADD_TO_CART,
		payload: item
	})
}