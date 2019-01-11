//Imported Package(s)from npm
import React from 'react';

//Application imported modules
import Aux from '../../../HiherOrderCmp/AuxHoc';
import classes from './Home.module.css';




class Home extends Component{

state={
  
}


    render(){

        return(
            <Aux> 
                <div className={classes.Home}>
                    Welcome to the Home Page
                </div>
            </Aux>)
  
};
}

export default Home;