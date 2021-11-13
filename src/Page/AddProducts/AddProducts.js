import axios from 'axios';
import React from 'react';

import { useForm } from "react-hook-form";

const Products = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);


        axios.post('https://peaceful-retreat-83325.herokuapp.com/product' ,data)
        .then(res =>{
            if(res.data.insertedId){
                alert('Product added succesfully')
                reset();
            }
        })
    }

    return (
        <div>
           <h2> Please Add  a Product</h2> 
           <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Name", { required: true, maxLength: 20 })} placeholder ="name" /> <br />  <br />
      <input {...register("location",)} placeholder="location"/> <br /> <br />
      <input type="number" {...register("price",)} placeholder="price" /> <br /> <br />
      <input {...register("img",)} placeholder="img url" /><br /> <br />
      <input type="submit" />
    </form>
        </div>
    );
};

export default Products;