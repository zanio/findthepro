//Imported Package(s)from npm
import React from 'react';

//Application imported modules
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css'

const NavigationItem = (props)=>(
    
            <li className={classes.NavigationItem}>
              <NavLink to={props.link} exact = {props.exact}
              activeClassName={classes.active}
              > {props.children} </NavLink>
            </li>    
);

export default NavigationItem;