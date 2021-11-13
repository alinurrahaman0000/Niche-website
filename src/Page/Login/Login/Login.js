import React, { useState } from 'react';
import './login.css'
import login from '../../Login/login.jpg'
import { TextField,Button, CircularProgress,Alert } from '@mui/material';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {user,loginUser,isLoading,signInWithGoogle}=useAuth();

    const location = useLocation();
    const history =useHistory();


        const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData ={...loginData};
         newLoginData[field] =value;
        setLoginData(newLoginData);

    }
   const handleLoginSubmit = e =>{
   loginUser(loginData.email, loginData.password,location,history);
        e.preventDefault();
   }
const handleGoogleSingIn = () =>{
    signInWithGoogle(location,history)
}

    return (
        <div className="row">
            <div className="col-md-6 login">
                   <h2>Please Login</h2>

                   <form onSubmit={handleLoginSubmit}>

                   <TextField 
                    sx={{width:'75%', m:1}}
                   id="standard-basic" 
                   label="Your email"
                   name="email"
                   onBlur={handleOnChange}
                    variant="standard" />

                   <TextField 
                   sx={{width:'75%', m:1}}id="standard-basic"
                    label="Your Password" 
                    name="password"
                    onBlur={handleOnChange
                    
                    }
                   type="password"        
                      variant="standard" />
                    
                    <Button   sx={{width:'75%', m:1}} 
                    type="submit"
                    variant="contained">Login</Button>

                    <NavLink 
                    style={{textDecoration:'none'}}
                    to="/register">
                    <Button variant="text">New User? Please Register</Button>
                    </NavLink>

                    {isLoading && <CircularProgress/> }
                   {user?.email && <Alert severity="success">User Created success !</Alert>}
                   

                   </form>
        <p>----------------------------------------</p>
        <p>----------------------------------------</p>
        <Button onClick ={handleGoogleSingIn} variant="contained">Google Sign In</Button>
                 
            </div>
            <div className="col-md-6">
            <img src={login} alt="" />
            </div>
        </div>
    );
};

export default Login;