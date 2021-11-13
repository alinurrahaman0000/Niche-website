import React from 'react';
import Review from '../../Review/Review';
import Banner from '../Banner/Banner';
import Delivary from '../Delivary/Delivary';
import Products from '../Product/Products';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <Delivary></Delivary>
            
        </div>
    );
};

export default Home;