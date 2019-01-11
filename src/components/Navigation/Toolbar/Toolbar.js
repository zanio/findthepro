//Imported Package(s)from npm
import React from 'react';

//Application imported modules
import classes from './Toolbar.module.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems';
import Hamburgger from '../../UI/Humburger/Humburger';

const Toolbar = (props)=>{

  return( 
       <header className={classes.Toolbar}>
        <Hamburgger  clicked ={props.close} />
    <div className={classes.Logo}>
        <Logo />
       </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems idToken={props.idToken} />
        </nav>
        
    </header>
    )
}

export default Toolbar;