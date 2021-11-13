import { TextField ,Button, Alert} from '@mui/material';
import React, { useState } from 'react';

const Admin = () => {

    const [email, setEmail] = useState('')
    const [success ,setSuccess] =useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
const user = {email};
        fetch('https://whispering-cliffs-17887.herokuapp.com/users/admin',{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        .then( res => res.json())
        .then(data =>{
            if (data.modifiedCount){
                console.log(data);
               
                setSuccess(true);
            }
            
        })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField
            sx={{width:'50%'}}
            label="Email"  
            type="email" 
             onBlur={handleOnBlur}                   
            id="standard-basic"  variant="standard" />
            <Button type ="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Make Admin successfully</Alert>}
        </div>
    );
};

export default Admin;