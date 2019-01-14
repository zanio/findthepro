//Imported Packages from npm
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

//Application imported modules
import Input from  '../../components/inputs/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Form.module.css';
import * as actionCreator from '../../Store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import { checkValidity } from '../../shared/utility';

class Auth extends Component{
    state={
        controls:{
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Enter your Email'
                },
                value:'',
                validation:{
                    required:true,
                    isEmail:true,
                    regex:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                },
                valid:false,
                touched:false
            },
            password:{
                elementType:'input',
                elementConfig:{
                    type:'password',
                    placeholder:'choose a password'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:6,
                    maxLength:20
                },
                valid:false,
                touched:false
            }
    
        },
        isSignUp:true
    }



InputchangedHandler = (event,inputIdentifier) => {
    const updatedcontrols = {
        ...this.state.controls
    };
  const updatedInputElement = {
        ...updatedcontrols[inputIdentifier]
    };
    updatedInputElement.value = event.target.value;

    updatedInputElement.valid = checkValidity(updatedInputElement.value,
        updatedInputElement.validation)

    updatedInputElement.touched = true;
    updatedcontrols[inputIdentifier]= updatedInputElement

   let formIsValid = true;

   for(let inputIdentifier in updatedcontrols){
       formIsValid = updatedcontrols[inputIdentifier].valid && formIsValid
   }

    this.setState({controls:updatedcontrols,formIsValid:formIsValid})
}

sendToServerHandler= (event)=>{
    event.preventDefault();
    this.props.onAuthSend(this.state.controls.email.value,this.state.controls.password.value,this.state.isSignUp);
    
}

switchAuthHandler= ()=>{
    const newstate ={
        ...this.state
    }
    this.setState({isSignUp:!newstate.isSignUp})
}
    render(){
        let isAutheticated = null;
//if user is authenticated, forward to front page...
        if(this.props.idToken){

            isAutheticated =<Redirect to={this.props.authRedirectPath}/>
        }

        let TransformedArray = []

        for (let key  in this.state.controls){

            TransformedArray.push({
                id:key,
                config:this.state.controls[key]
            });
        }
        const dynamicInput = TransformedArray.map( inputValue =>{ 
            return <Input key={inputValue.id}
            elementType={inputValue.config.elementType} 
            elementConfig={inputValue.config.elementConfig}
            value={inputValue.config.value} 
            invalid = {!inputValue.config.valid}
            touched = {inputValue.config.touched}
            shouldValidate = {inputValue.config.validation}
            clicked={(event) => this.InputchangedHandler(event,inputValue.id)}
            />

            });

            let loginDetails = (
                <form id="form" onSubmit ={(e)=>this.sendToServerHandler(e)}>

                            {dynamicInput}

                            <Button 
                            
                            disabled={!this.state.formIsValid}
                                    btnType="Success">
                                   Sign Up
                            </Button>
                </form>
            );

            if(this.props.loadingSpinner){
                loginDetails = <Spinner />
            }

            if(this.props.errorMessage){

                loginDetails = <p style={{fontSize:'1.2em',paddingBottom:'10px'}}>{this.props.errorMessage.response.data.error.message}
                <FontAwesomeIcon className={classes.Font}size="2x" icon={faExclamationCircle} /></p>
            }
        
        return(
            
        <div className={classes.Login}>
        {isAutheticated}
           {loginDetails}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        loadingSpinner: state.authReducer.loading,
        errorMessage:state.authReducer.error,
        idToken:state.authReducer.idToken,
        authRedirectPath:state.authReducer.authRedirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuthSend: (email,password,isSignUp) => dispatch(actionCreator.auth( email,password, isSignUp) ),
        onSetAuthRedirecPath:(path)=>dispatch(actionCreator.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Auth));