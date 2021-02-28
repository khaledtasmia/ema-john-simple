import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        // console.log(product);
        total = Math.round(total + product.price);
    }

let shipping = 0;
if(total > 15){
    shipping = 4.99;
}
else if(total > 0){
    shipping = 12.99;
}
else if(total > 35){
    shipping = 0;
}

const tax = Math.round(total / 10);
return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {total}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax: {tax}</small></p>
            <p>Total Price: {total+shipping+tax}</p>
        </div>
    );
};

export default Cart;