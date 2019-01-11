//Imported Package(s)from npm
import React from 'react';

//Application imported modules
import Aux from '../../../HiherOrderCmp/AuxHoc';
import classes from './AboutUs.module.css';




class AboutUs extends Component{

state={
  
}

    render(){

        return(
            <Aux> 
                <div className={classes.AboutUs}>
                    Welcome to the AboutUs Page
                </div>
            </Aux>);
  
};
}

export default AboutUs;