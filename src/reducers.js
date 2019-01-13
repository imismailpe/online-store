import {
	CHANGE_SEARCH_FIELD,
	ADD_TO_CART
} from './constants.js';

const initialStateSearch = {
	searchKeyword:  ""
}
const initialStateAddToCart ={
	item: ""
}

export const searchProdsR = (state=initialStateSearch, action={})=>{
	console.log(action.type)
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
			return Object.assign({},state,{searchKeyword:action.payload})
		default:
			return state;
	}
}

export const addToCartR = (state=initialStateAddToCart,action={}) =>{
	switch(action.type){
		case ADD_TO_CART:
			return Object.assign({}, state,{item:action.payload})
		default:
			return state;
	}
}