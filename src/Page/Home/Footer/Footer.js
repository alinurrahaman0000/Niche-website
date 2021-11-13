import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
               <div>
          
            <div className="row footer bg-dark text-white">
<div className="col-md-4">
<h3 className="letest">Services</h3>
 <NavLink to="/">Delivary </NavLink> <br />
 <NavLink to="/">Orthodontics</NavLink><br />
 <NavLink to="/"> Treatment</NavLink><br />
 <NavLink to="/">Whitening</NavLink><br />
 <NavLink to="/"> Extraction</NavLink><br />
 <NavLink to="/">Routine Exam</NavLink><br />

</div>
<div className="col-md-4">
   <h3 className="letest">Useful Links</h3>
   <NavLink to="/">Home</NavLink><br />
   <NavLink to="/">Product</NavLink><br />
   <NavLink to="/">ManageProduct</NavLink><br />
   <NavLink to="/">Add product</NavLink><br />
   <NavLink to="/">Log in</NavLink><br />
   <NavLink to="/">Log Out</NavLink><br />
  
</div>
<div className="col-md-4 under text-white">
   <h3 className="letest">Desing</h3>
     <p>United States</p>
   <p>Phone: + 123463564</p>
   <p>support@dentalcare.com</p>
   <p>Email: alinurrahaman0000@gmail.com</p>
</div>
<p><small className="letest">All Right Recived By @Alinur Rahaman</small></p>
</div>
        </div>
        </div>
    );
};

export default Footer;