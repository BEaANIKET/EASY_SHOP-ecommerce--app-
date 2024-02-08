import React, { useContext } from "react";
import './css/catagory.css'
// import all_product from '../component/Assets/all_product'
import Item from "../component/Item/Item";
import '../component/Item/item.css'
import dropdown_icon from '../component/Assets/dropdown_icon.png'
import { ShopContext } from "../context/ShopContext";

const Shopcatagory = (props)=>{

    const {all_product} = useContext(ShopContext);
    return (
        <div className="catagory">
            <img className="catagory-img" src={props.banner} alt="" />
            <div className="catogary-sortindex">
                <p>
                    <span> Shoping 1-12</span> out of 36 products
                </p>
                <div className="catagory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="catagory-item">
                {all_product.map((item,i)=>{
                    if(item.category === props.category)
                        return <Item id={item.id} key={i} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    else
                        return null;
                })}
            </div>
            <div className="catogary-loadmore">
                Explore More
            </div>
        </div>
    )
}

export default Shopcatagory;