import React from "react";

import { ReactComponent as ShoppingLogo } from "../../assets/11.2 shopping-bag.svg.svg";
import { togglecartiddne } from "../../redux/cart/cart.action";

import "./cart-icon.style.scss";

const CartIcon = () => (
  <div className="cart-icon" onClick={togglecartiddne}>
    <ShoppingLogo className="shopping-logo" />
    <span className="item-count"> 0 </span>
  </div>
);

export default CartIcon;
