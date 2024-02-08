import React from "react";
import './reletedproduct.css'
import data_product from "../Assets/data";
import Item from "../Item/Item";

const Reletedproduct =()=>{
    return(
        <div>
            <div className="reletedproducts">
                <h1>Telated Products</h1>
                <hr />
                <div className="reletedproduct-item">
                    {data_product.map((item,i)=>{
                        return <Item id={item.id} key={i} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Reletedproduct;