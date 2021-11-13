import React from 'react';
import { Link } from 'react-router-dom';
import './Items.css'
const Items = ({product}) => {

    const {name,price,location,img,_id} =product;

    return (
        <div  className="items">
         <img src={img} alt="" />
         <h3>{name}</h3>
         <h4>Price:{price}</h4>
         <p className="text-info">{location}</p>
            <Link to={`/booking/${_id}`}>
            <button>Purchase</button>
            </Link>

        </div>
    );
};

export default Items;