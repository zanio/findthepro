//Imported Package(s)from npm
import React, { Component } from 'react';
import { withRouter, Route, Redirect, Link } from 'react-router-dom'
import Axios from 'axios';

//Application imported modules
import Aux from '../../../HiherOrderCmp/AuxHoc';
import classes from './Home.module.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Artisians from '../Artisians/Artisians';
import doctor from '../../../assets/doctor.jpg';
import wood from '../../../assets/furniture.jpg';
import painter from '../../../assets/paint.jpg';
import cleaner from '../../../assets/clean.jpg';




class Home extends Component{

state={
  isFormValid:true,
  minLength:3,
  stateSearch:'Lagos',
  stateInNigeria:[],
  catergory:'',
  required:true,
  Artisians:[],
  loading:true,
  keyFilter:null,
  anwser:null,
  divSearch:null
}

componentDidMount(){
    Axios.get('http://locationsng-api.herokuapp.com/api/v1/states')
    .then((response)=>{
        const stateInNigeria =[];
        for(let i=0;i<response.data.length; i++){
            stateInNigeria.push(response.data[i].name)
        }
        this.setState({stateInNigeria:stateInNigeria})
        
        
    })
    .catch(err=>{
        console.log(err)
    })
}

stateSearchInputHandler =(e)=>{
    e.preventDefault();
    this.setState({stateSearch:e.target.value})
    console.log(this.state.stateSearch)
}

categoryInputHandler =(e)=>{
    
    e.preventDefault();
    this.setState({catergory:e.currentTarget.value})
    console.log(this.state.catergory)
    this.stateSearchInputValidation();
}
stateSearchInputValidation(){
    const rule = this.state.required;
    if(rule){
        return this.setState({isFormValid:false});
    }  
}
onSearchRetrieveHandler =(e)=>{
    e.preventDefault();
        Axios.get(`https://findthepro-76eb9.firebaseio.com/work/${this.state.catergory}.json`)
        .then((response)=>{
            let Artisians = [];
           for(let keys in response.data){
            Artisians.push(response.data[keys]) 
           }
            Artisians = Artisians; 
           const divSearch = Artisians.map(art=>art)
           console.log(divSearch)
            //console.log(Artisians);
            this.setState({Artisians:Artisians,divSearch:divSearch});
            //console.log(typeof response.data)
            //console.log(Artisians)
            this.props.history.push({
                pathname: '/Artisians',
                state: { divSearch: this.state.divSearch,
                category:this.state.catergory,
             }
              })
        })
        .catch(err=>{
            console.log(err)
            this.setState({loading:true});
        })
       
        
        
        
       
}


    render(){
        

            let searcByState = <option value="Lagos">Lagos</option>;

            if(this.state.stateInNigeria){
                searcByState = this.state.stateInNigeria.filter(filtered=>{
                    return filtered !== 'Lagos'
                }).map(statesNg =><option key={statesNg} value={statesNg}>{statesNg}</option>)
            }
        
        

        return(
            <Aux> 

                <div>

                <div className={classes.Home}>
                <div></div>
                        <p><span>FindThePro</span> Fast and Easy
                    </p>
                    <p>Search For skilled and Professional Personnel, it very simple to use, simply
                        Select from the category and filter the state and hit the search button.
                         Easy as never before! </p>
                        <form>
                        
                        <div className={classes.Center}>
                <select onChange={(e)=>this.stateSearchInputHandler(e)}>
                <option value={this.state.stateSearch}>Lagos</option>
                {searcByState}
                </select>

                <select onChange={(e)=>this.categoryInputHandler(e)}>
                <option value="search by state">Category</option>
                <option value='Painter'>Painter</option>
                <option value='Doctor'>Doctor</option>
                <option value='Furniture'>Furniture</option>
                </select>
                </div>
                        <Button clicked ={this.onSearchRetrieveHandler} disabled= {this.state.isFormValid} btnType="Success">Search</Button>
                        </form>
                    </div>
                   
                   <div class="container" style={{padding:'2em 0'}}>
                        <p style={{color:'#777', paddingTop:'1em', fontSize:'1.6em',textAlign:'center'}}>Some of Our Popular Category</p>
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                            <div className={classes.Category}>
                            <img src={cleaner}/>
                            </div>
                            <button class="btn btn-block btn-lg btn-default" >Painting Service</button>
                            </div>

                            <div class="col-lg-6 col-md-6">
                            <div className={classes.Category}>
                            <img src={doctor}/>
                            </div>
                            <button class="btn btn-block btn-lg btn-default" >Furniture Services</button>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                            <div className={classes.Category}>
                            <img src={cleaner}/>
                            </div>
                            <button class="btn btn-block btn-lg btn-default" >Cleaning services</button>
                            </div>

                            <div class="col-lg-6 col-md-6">
                            <div className={classes.Category}>
                            
                            <img src={doctor}/>
                            </div>
                            <button class="btn btn-block btn-lg btn-default" >Doctor Services</button>
                            
                            </div>
                        </div>
                   </div>
                </div>
               
            </Aux>)
  
};
}

export default withRouter(Home);

//  <input onChange={(e)=>this.SearchInputHandler(e)} type="text" placeholder="Search for Artisians and professional Near You"/>
