//Imported Package(s)from npm
import React, { Component } from 'react';

//Application imported modules
import Aux from '../../../HiherOrderCmp/AuxHoc';
import classes from './Download.module.css';
import Spinner from '../../../components/UI/Spinner/Spinner';




class Download extends Component{

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
               {this.state.loading ? <div onClick={()=>this.clicked()} className={classes.Download}>
                    Welcome to the Download Page
                </div>: <Spinner />}
            </Aux>);
  
};
}

export default Download;