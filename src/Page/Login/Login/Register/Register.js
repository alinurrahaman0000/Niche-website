
import React, { useState } from 'react';

import login from '../../login.jpg';
import { TextField,Button, CircularProgress, Alert } from '@mui/material';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history =useHistory();
    const {user, registerUser,isLoading,authError} =useAuth();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData ={...loginData};
         newLoginData[field] =value;
        setLoginData(newLoginData);

    }
   const handleLoginSubmit = e =>{
    //    alert('hello')
    // if(loginData.password !== loginData.password2){
    //     alert('Your Password did not match ')
    //     return
    // }
    registerUser(loginData.email, loginData.password,loginData.name ,history);

      e.preventDefault();
   }

    return (
        <div className="row">
            <div className="col-md-6 login">
                   <h2>Please Register</h2>

                  {!isLoading && <form onSubmit={handleLoginSubmit}>

                   <TextField 
                    sx={{width:'75%', m:1}}
                   id="standard-basic" 
                   label="Your Name"
                   name="name"
                   onBlur={handleOnBlur}
                    variant="standard" />

                    <TextField 
                    sx={{width:'75%', m:1}}
                   id="standard-basic" 
                   label="Your email"
                   name="email"
                   type="email"
                   onBlur={handleOnBlur}
                    variant="standard" />

                   <TextField 
                   sx={{width:'75%', m:1}}id="standard-basic"
                    label="Your Password" 
                    name="password"
                    onBlur={handleOnBlur}
                                     
                   type="password"        
                      variant="standard" />

                    <TextField 
                   sx={{width:'75%', m:1}}id="standard-basic"
                    label="Retype Your Password" 
                    name=" 
                    password2"
                    onBlur={handleOnBlur}
                                     
                   type="password"        
                      variant="standard" /> 
                    
                    <Button   sx={{width:'75%', m:1}} 
                    type="submit"
                    variant="contained">Register</Button>

                    <NavLink 
                    style={{textDecoration:'none'}}
                    to="/login">
                    <Button variant="text">Already Registere User? Please Login</Button>
                    </NavLink>
                   </form>}
                   {isLoading && <CircularProgress/> }
                   {user?.email && <Alert severity="success">User Created success !</Alert>}
                  {authError && <Alert severity="error">{authError}</Alert>
}
            </div>
            <div className="col-md-6">
            <img src={login} alt="" />
            </div>
        </div>
    );
};

export default Register;