import React, { Component } from 'react';

import classes from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faRecycle, faLaptop} from '@fortawesome/free-solid-svg-icons';
import NavigationItems from '../Navigation/NavigationItems';

class Footer extends Component{
    render(){
        return(
            <div className={classes.Footer}>
             <NavigationItems/>
                <p>&copy; 2018 Aniefiok Akpan made with <FontAwesomeIcon className={classes.Font}
                 icon={faLaptop} color='coral'
                 /> 
                </p>
               
                </div>
        )
    }
}

export default Footer;