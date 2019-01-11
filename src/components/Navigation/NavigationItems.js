import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavigationItem from './NavigationItems/NavigationItem';
import classes from './NavigationItems.module.css';





const NavigationItems = (props)=>(

    <ul className={classes.NavItem}>
        
    <NavigationItem link="/" exact> Home </NavigationItem>
      <NavigationItem link="/buggerBuilder" exact> Burger Builder </NavigationItem>

      {props.idToken ? <NavigationItem link="/orders"> Order History </NavigationItem>:null} 
      
      {!props.idToken ? <NavigationItem link="/login"> Login </NavigationItem>
      :<NavigationItem link="/logout">LogOut </NavigationItem>}
        </ul>

);



  
  export default withRouter(NavigationItems);