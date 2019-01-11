//Imported Package(s)from npm
import React from 'react';

//Application imported modules
import classes from './Hambugger.css';


const Hamburgger = (props)=>( 
<div className={classes.Humbugger} onClick={props.clicked}>
        <span></span>
        <span></span>
        <span></span>
    </div>
)
export default Hamburgger;