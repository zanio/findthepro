//Imported Package(s)from npm
import React from 'react';

//Application imported modules
import classes from './Backdrop.module.css'

const Backdrop = (props) => (
    props.control ? <div className={classes.Backdrop} onClick = {props.click} ></div> : null
);

export default Backdrop ;