import React from 'react';
import './Delibary.css'

import img1 from '../../../delivary/ddd.png'
import img3 from '../../../delivary/rrr.png'
import img4 from '../../../delivary/yyy.png'



const Delivary = () => {
    return (
        <div className="container">
            <h2 id="delivary" className ='text-primary mt-5'>TO DAY DELIBARY</h2>
            <div className="row">
                <div>
                    <img  src={img1} alt="" />
                    <h4 className="text-info mb-5"> Location:Dhaka</h4>
                </div>
                <div>
                <img src={img4} alt="" />
                <h4 className="text-info mb-5"> Location:Jamalpur</h4>
                </div>
                <div className="text-info mb-5">
                      <img src={img3} alt="" />
                <h4> Location:Hazrabari</h4>
                </div>
               
               
             
                    
            </div>

        </div>
    );
};

export default Delivary;