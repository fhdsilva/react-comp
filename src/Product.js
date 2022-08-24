import React from "react";
import './Product.css'


function Product({title, image, price, rating}) {
    return (
        <div className="product">
            <div className="procuct_info">
                <p>{title}</p>
                
            <p className="product_price">
                <small>R$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {Array(rating)
                .fill()
                .map((_,i)=>(
                <p>*</p>))}
            </div>
        </div>
            <img src={image}/>
            <button>Add Basket</button>
        </div>
    )
}

export default Product;