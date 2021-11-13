import React, { useEffect, useState } from 'react';
import './ManageProduct.css'

const ManageProduct = () => {
    const[product,setProduct] = useState([])

    useEffect(()=>{
        fetch('https://peaceful-retreat-83325.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])

    const handleDelete=id =>{
        const url=`https://whispering-cliffs-17887.herokuapp.com/product/${id}`
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
           
            if(data.deleteCount){
                alert('Delete successfu')
                const remaining =product.filter(product =>product._id !==id);
            setProduct(remaining);
            }
            
        })
    }

    return (
        <div >
            <h1>Manage Product</h1>
            {
                product.map(product =><div key={product._id}>
                    <h3  className="mt-5">{product.name}</h3>
                    <img src={product.img} alt="" />
                    <br />
                    <button className='btn' onClick={()=> handleDelete(product._id)}>Delete</button>

                </div>)
            }
        </div>
    );
};

export default ManageProduct;