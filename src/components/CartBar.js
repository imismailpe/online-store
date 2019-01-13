import React from 'react';

const CartBar = ({mycart,showcart}) => {
		return (
        <header className="bg-black-70 white cartBar w-100">
  <div className="f6 fw6 tracked" onClick={showcart}>
  myCart<sup className="tcart">{mycart.length}</sup>
  {
  	mycart.forEach((eachitem)=>{
  		return `$<li className="white">{eachitem.total}</li>`
  	})
  }
  </div>
</header>
    )
}
export default CartBar