//Imported Package(s)from npm
import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom'
import Axios from 'axios';

//Application imported modules
import Aux from '../../../HiherOrderCmp/AuxHoc';
import classes from './Artisians.module.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Home from '../Home/Home'




class Artisians extends Component{
    


componentDidMount(){
    console.log(this.props)
}





    render(){
        //slet {data} = this.props.location.state.divSearch;
        const description = this.props.location.state.divSearch.map((dt,i)=>{
           return( <div key={dt.Name}  class="col-lg-4 col-md-12" >
           <div className={classes.ArtisiansIndividual}>
                <p><span>Name: </span>{dt.Name}</p>
                <p><span>description: </span>{dt.Description}</p>
                <p><span>star: </span>{dt.Star}</p>
                <p><span>Intro: </span>{dt.Profile}</p>
                <Button btnType="Success">See Full Profile</Button>
                <Button btnType="Danger">Hire</Button>
                </div>
            </div>)
        })

        return(
            <Aux> 
                <div className={classes.Artisians}>
                <h2 style={{textAlign:'center',fontSize:'1.5em'}}> {this.props.location.state.category+'s'} in Lagos</h2>
                <div class="container">
                <div class="row">
                    {description}
                    <Button btnType="Danger">Load More</Button> 
                    </div>
                    </div>
                </div>
                
            </Aux>)
  
};
}

export default withRouter(Artisians);

//  <input onChange={(e)=>this.SearchInputHandler(e)} type="text" placeholder="Search for Artisians and professional Near You"/>
