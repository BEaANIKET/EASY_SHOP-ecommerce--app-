import React from "react";
import Hero from "../component/hero/Hero";
import Popular from "../component/popular/Popular";
import Offers from "../component/Offers/Offers";
import Newcollection from "../component/NewCollection/Newcollection";
import News from "../component/News/News";
import Footer from "../component/Footer/Footer";

const Shop =()=>{
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <Newcollection/>
            <News/>
        </div>
    )
}

export default Shop;