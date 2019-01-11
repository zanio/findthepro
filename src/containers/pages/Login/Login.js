//Imported Package(s)from npm
import React from 'react';

//Application imported modules
import Aux from '../../../HiherOrderCmp/AuxHoc';
import classes from './Login.module.css';




class GetStarted extends Component{

state={
  
}

    render(){

        return(
            <Aux> 
                <div className={classes.Login}>
                    Welcome to the Login Page
                </div>
            </Aux>);
  
};
}

export default GetStarted;