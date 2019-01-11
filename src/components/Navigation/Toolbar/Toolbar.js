import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../UI/Logo/Logo';
import NavItem from '../NavigationItems/NavItem';
import Hamburgger from '../../UI/Humburger/Humburger';

const Toolbar = (props)=>{

  return( 
       <header className={classes.Toolbar}>
        <Hamburgger  clicked ={props.close} />
    <div className={classes.Logo}>
        <Logo />
       </div>
        <nav className={classes.DesktopOnly}>
            <NavItem idToken={props.idToken} />
        </nav>
        
    </header>
    )
}

export default Toolbar;