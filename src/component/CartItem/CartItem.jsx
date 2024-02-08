import React, { useContext } from "react";
import './cartitem.css'
import { ShopContext } from "../../context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png'


const CartItem = ()=>{

    const {getTotalCartAmount,all_product , cartItem,removeFromCart} = useContext(ShopContext);

    return (
        <div className="cartitems">
            <div className="cartitem-formet-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e)=>{
                if(cartItem[e.id] > 0){
                    return <div>
                                <div className="cartitem-formet cartitem-formet-main">
                                    <img src={e.image} className="cartitem-product-icon" alt="" />
                                    <p>{e.name}</p>
                                    <p>${e.new_price}</p>
                                    <button className="cartitem-quantity">{cartItem[e.id]}</button>
                                    <p>${e.new_price * cartItem[e.id]}</p>
                                    <img className="cartitem-remove-icon" src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                                </div>
                                <hr />
                            </div>
                }
                return null;
            })}

            <div className="cartitem-down">
                <div className="cartitem-total">
                    <h1>cart Total</h1>
                    <div>
                        <div className="cartitem-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <div className="cartitem-total-item">
                            <p>Total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                    </div>
                    <button>PROCEED TO CHEAKOUT</button>
                </div>
                <div className="cartitem-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitem-promobox">
                        <input placeholder="Enter code" type="text" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;