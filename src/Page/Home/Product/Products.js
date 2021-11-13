import React, { useEffect, useState } from 'react';
import './Products.css'
import Items from '../Items/Items';




const Products = () => {

const [products, setProducts] =useState([]);
useEffect(() =>{
    fetch('https://peaceful-retreat-83325.herokuapp.com/product')
    .then(res =>res.json())
    .then(data => setProducts(data));
},[])

    return (
         <div id="products">
            <h2 className="text-primary mt-5">Our Products</h2>


         <div className="products-container">
           {
               products.map(product =><Items
               key={product.id}
               product={product}
               ></Items>)
            }
         </div>
        </div>
        
      
    );
};

export default Products


