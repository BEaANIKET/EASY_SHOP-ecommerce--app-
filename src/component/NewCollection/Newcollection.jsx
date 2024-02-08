import React from "react";
import './newcollection.css'
import newcollection from '../Assets/new_collections'
import Item from "../Item/Item";

const Newcollection = ()=>{
    return (
        <div>
            <div className="newcollection">
                <h1>NEW COLLECTIONS</h1>
                <hr />
                <div className="newcollection-item">
                    {newcollection.map((item,i)=>{
                        return <Item id={item.id} key={i} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Newcollection;