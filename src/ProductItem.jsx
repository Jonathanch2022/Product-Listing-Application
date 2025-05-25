import { useState } from "react"


function ProductItem(props) {

    return (

        <div className="product-item">
            <div className="item-container">
                <label className="product-name">{props.name}</label>
                <img src={props.image} alt="Product Image"></img>
                <label className="product-price">${props.price}</label>
                <div className="product-id">ID: {props.id}</div>
                <p className="product-description">{props.description}</p>
            </div>
        </div>

    );

}
export default ProductItem;
