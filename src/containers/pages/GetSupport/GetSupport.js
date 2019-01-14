//Imported Package(s)from npm
import React, { Component } from 'react';

//Application imported modules
import Aux from '../../../HiherOrderCmp/AuxHoc';
import classes from './GetSupport.module.css';
import Spinner from '../../../components/UI/Spinner/Spinner';





class GetSupport extends Component{

    state={
        loading:true
      }
      
      clicked =()=>{
          setTimeout(()=>{
              this.setState({loading:false})
              return <h1>You just clicked here</h1>
          }, 1000)
      }
      

    render(){

        return(
            <Aux> 
               <div className = {classes.GetSupport}>
                   <p> Welcome to the Get started page Page! <span>Coming Soon!!!</span></p>
                   <Spinner />
                
                </div>
            </Aux>);
  
};
}

export default GetSupport;