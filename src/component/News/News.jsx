import React from "react";
import './news.css'

const News =()=>{
    return (
        <div className="news">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and updated</p>
            <div className="news-msg">
                <input placeholder="Your Email id" className="news-input" type="email" />
                <button className="news-btn">Subscribe</button>
            </div>
        </div>
    )
}

export default News;