//Imported Package(s)from npm
import React, { Component } from 'react';

//Application imported modules
import Aux from '../../../HiherOrderCmp/AuxHoc';
import Form from '../../Forms/Form';
import classes from './Login.module.css';




class Login extends Component{

state={
  
}

    render(){

        return(
            <Aux> 
                <div className={classes.Login}>
                <div class="container">
                   <p ><span>Login</span> In to Your User Account</p>
                    <Form />
                </div>
                </div>
            </Aux>);
  
};
}

export default Login;