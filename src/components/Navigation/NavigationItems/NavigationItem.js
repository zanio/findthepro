//Imported Package(s)from npm
import React from 'react';

//Application imported modules
import { NavLink } from 'react-router-dom';

import classes from './NavList.module.css'

const NavigationItem = (props)=>(
    
            <li className={classes.NavList}>
              <NavLink to={props.link} exact = {props.exact}
              activeClassName={classes.active}
              > {props.children} </NavLink>
            </li>    
);

export default NavigationItem;