import React from 'react';

const CartBar = ({mycart}) => {
		return (
        <header className="bg-black-70 white cartBar w-100">
  <div className="f6 fw6 tracked">
  myCart<sup className="tcart">{mycart.length}</sup>
  </div>
</header>
    )
}
export default CartBar