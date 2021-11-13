import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const {productId} =useParams();
    const [product,setProduct]=useState({})
    

useEffect(() =>{
fetch(`https://peaceful-retreat-83325.herokuapp.com/product/${productId}`)
    .then(res =>res.json())
    .then(data =>setProduct(data));

},[productId])


    return (
        <div>
            <h1>Purchase Now</h1>
            <br /><br />
            <h2>Order Name :  {product.name}</h2>
            <br />
            <img src={product.img} alt="" /><br /> <br />
            <h4>Order ID  :  {productId}</h4>
            <p>Location: {product.location}</p>
            <Link to="/home#home"> <button>Conform Order</button></Link>
           
            
        </div>
    );
};

export default Booking;