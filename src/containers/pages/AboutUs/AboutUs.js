//Imported Package(s)from npm
import React, { Component } from 'react';

//Application imported modules
import Aux from '../../../HiherOrderCmp/AuxHoc';
import classes from './AboutUs.module.css';
import Spinner from '../../../components/UI/Spinner/Spinner';




class AboutUs extends Component{

state={
  
}

    render(){

        return(
            <Aux> 
                <div className = {classes.AboutUs}>
                   <p> Welcome to the About Us Page! <span>Coming Soon!!!</span></p>
                   <Spinner />
                
                </div>
            </Aux>);
  
};
}

export default AboutUs;