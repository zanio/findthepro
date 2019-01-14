//Imported Package(s)from npm
import React, { Component } from 'react';

//Application imported modules
import Aux from '../../../HiherOrderCmp/AuxHoc';
import classes from './Register.module.css';
import FormRegister from '../../Forms/FormRegister';


class Registeration extends Component{

state={
  
}


    render(){

        return(
            <Aux> 
                <div className={classes.Register}>
                <div class="container">
                   <p><span>Register</span> to Start Using Our Services</p>
                   <FormRegister/>
                </div>
                </div>
            </Aux>);
  
};
}

export default Registeration;