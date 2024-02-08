import React from "react";
import all_product from "../component/Assets/all_product";
import { useParams } from "react-router-dom";
import Breatcrums from "../component/Breadcrum/Breadcrums";
import ProductDisplay from "../component/ProductDisplay/ProductDisplay";
import Descriptionbox from "../component/DescriptionBox/Descriptionbox";
import Reletedproduct from "../component/Releateproduct/Reletedproduct";

const Product =()=>{
       const {productId} = useParams();
       const product = all_product.find((e)=> e.id === Number(productId));
    return (
        <div>
            <Breatcrums product={product}/>
            <ProductDisplay product={product}/>
            <Descriptionbox/>
            <Reletedproduct/>
        </div>
    )
}

export default Product;