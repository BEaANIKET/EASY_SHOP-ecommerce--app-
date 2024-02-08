import React, { useContext } from "react";
import './productdisplay.css' ;
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from '../Assets/star_dull_icon.png';
import Descriptionbox from "../DescriptionBox/Descriptionbox";
import { ShopContext } from "../../context/ShopContext";

const productDisplay =(props)=>{

    const {addToCart} = useContext(ShopContext);

    const {product} = props;
    return (
        <div className="productDisplay">
            <div className="productDisplay-left">
                <div className="productDisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productDisplay-img">
                    <img className="productDisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productDisplay-right">
                <h1>{product.name}</h1>
                <div className="productDisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(133)</p>
                </div>
                <div className="productDisplay-right-prices">
                    <div className="productDisplay-right-prices-old">${product.old_price}</div>
                    <div className="productDisplay-right-prices-new">${product.new_price}</div>
                </div>
                <div className="productDisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vitae fugit consectetur repellendus at neque nesciunt et repudiandae nobis eos labore rem accusamus recusandae facere doloribus molestias perspiciatis incidunt, illo impedit ullam aperiam? Eum nostrum doloremque accusantium, ad, tenetur odit molestiae culpa blanditiis ratione, voluptas accusamus nihil! Aspernatur, libero magni!
                </div>
                <div className="productDisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productDisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className="productDisplay-right-category"><span>Category :</span>Women , T-shirt, Crop Top</p>
                <p className="productDisplay-right-category"><span>Tags :</span>Moderm , Latest</p>
            </div>
        </div>
        
    )
}

export default productDisplay;