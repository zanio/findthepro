//Imported Package(s)from npm
import React from 'react';

//Application imported modules
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavigationItem from './NavigationItems/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = (props) => (

    <ul className={classes.NavItem}>
        
    <NavigationItem link="/" exact>Home</NavigationItem>
      <NavigationItem link="/get-support" exact>Get Support</NavigationItem>
      <NavigationItem link="/about-Us" exact>About Us</NavigationItem>
      {!props.idToken ? <NavigationItem link="/register" exact> Register</NavigationItem>:null}
      {props.idToken ? <NavigationItem link="/download">Download the App</NavigationItem>:null} 
      
      {!props.idToken ? <NavigationItem link="/login">Login</NavigationItem>
      :<NavigationItem link="/logout">LogOut</NavigationItem>}
        </ul>

);

  
  export default NavigationItems;