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
      <NavigationItem link="/get-support">Get Support</NavigationItem>

      {props.idToken ? <NavigationItem link="/fund-account" >Fund Account</NavigationItem>:
    <NavigationItem link="/about-us">About Us</NavigationItem> }

      {props.idToken ? <NavigationItem link="/My-Account">My Account<ul>
      <NavigationItem link="/My-Account/inbox">Inbox</NavigationItem>
      <NavigationItem link="/My-Account/profile">Profile</NavigationItem>
      <NavigationItem link="/My-Account/contact-us">Contact Us</NavigationItem>
      </ul>
      
      </NavigationItem>:
      <NavigationItem link="/register">Register</NavigationItem>}

      {props.idToken ? <NavigationItem link="/download">Download the App</NavigationItem>:null} 
      
      {!props.idToken ? <NavigationItem link="/login">Login</NavigationItem>
      :<NavigationItem link="/logout">LogOut</NavigationItem>}
        </ul>

);

  
  export default NavigationItems;