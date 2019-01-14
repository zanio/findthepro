//Imported Package(s)from npm
import React from 'react';

//Application imported modules
import logo from '../../../assets/FindThePro.png';
import classes from './Logo.module.css'

const Logo =()=>{
 return(
     <div className={classes.Logo}>
         <img src={logo} alt="FindThePro Logo" />
     </div>
 );
}

export default Logo;