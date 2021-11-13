import React from 'react';
import { Link } from 'react-router-dom';
import NoFond from '../Not-Found/nopagee.jpg'
const NotFound = () => {
    return (
        <div>
            <img  src={NoFond}alt="" />
            <br />
            <Link to="/"><button>Go to Home</button></Link>
        </div>
 

    );
};

export default NotFound;