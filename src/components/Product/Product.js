import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} />
            </div>
            <div className="product-details">
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>
                <br/>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className="buying-button" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>

            </div>
            </div>
    );
};

export default Product;