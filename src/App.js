//Imported Package(s)from npm
import React, { Component } from 'react';
import { Route, Switch,withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

//Application imported modules
import './App.css';
import Aux from './HiherOrderCmp/AuxHoc';
import classes from './containers/Layout/Layout.module.css';
import Layout from './containers/Layout/Layout'
import Footer from './components/Footer/Footer';

import * as actionCreator from './Store/actions/index';
import asyncComponent from './HiherOrderCmp/asyncComponent/asyncComponent';

//React Lazy Loading Effect ( Code Spliting )
const asynHome = asyncComponent( () => {
  return import('./containers/pages/Home/Home');
}); 

const asynGetSupport = asyncComponent( () => {
  return import('./containers/pages/GetSupport/GetSupport');
}); 

const asynAboutUs = asyncComponent( () => {
  return import('./containers/pages/AboutUs/AboutUs');
}); 

const asynDownload = asyncComponent( () => {
  return import('./containers/pages/Download/Download');
}); 

const asynRegister = asyncComponent( () => {
  return import('./containers/pages/Register/Register');
});

const asynLogin = asyncComponent( () => {
  return import('./containers/pages/Login/Login');
});

const asynArtisians = asyncComponent( () => {
  return import('./containers/pages/Artisians/Artisians');
});

const asynLogout = asyncComponent( () => {
    return import('./containers/pages/Logout/Logout');
})

const asynFundAccount = asyncComponent( () => {
  return import('./containers/pages/FundAccount/FundAccount');
})

const asynContactUs = asyncComponent( () => {
  return import('./containers/pages/MyAccount/ContactUs/ContactUs');
})

const asynInbox = asyncComponent( () => {
  return import('./containers/pages/MyAccount/Inbox/Inbox');
})

const asynProfile = asyncComponent( () => {
  return import('./containers/pages/MyAccount/Profile/Profile');
});

const asynHomeSignIn = asyncComponent( () => {
  return import('./containers/pages/HomeSignIn/Home');
})

class App extends Component {

  state={

  }

  componentDidMount(){
    this.props.onTryAuto();
  }

 
  render() {
   
    let Routes =(
      <Switch>
        <Route path="/get-support" component = {asynGetSupport} />
        <Route path="/download"  component = {asynDownload} /> 
        <Route path="/about-us" exact  component = {asynAboutUs} />
        <Route path="/register" component = {asynRegister} /> 
        <Route path="/Artisians"  component = {asynArtisians} />
        <Route path="/Login" component = {asynLogin} />
        <Route path="/" exact component = {asynHome} />
        <Redirect to ="/"/>
      </Switch>
    )

    if(this.props.idToken){

     Routes = ( 
     <Switch>
        <Route path="/get-support" component = {asynGetSupport} />
        <Route path="/download"  component = {asynDownload} />  
        <Route path="/Artisians"  component = {asynArtisians} />
      <Route path="/logout"  component = {asynLogout} /> 
      <Route path="/My-Account/inbox"  component = {asynInbox} />
      <Route path="/My-Account/profile"  component = {asynProfile} /> 
      <Route path="/My-Account/contact-us"  component = {asynContactUs} />
      <Route path="/fund-account"  component = {asynFundAccount} />
      <Route path="/logout"  component = {asynLogout} /> 
      <Route path="/" exact component = {asynHomeSignIn} />
      <Redirect to ="/"/>
      </Switch>
      )
    }
  
   return (
      <Aux >
      <Layout className={classes.Layout} idToken={this.props.idToken}
      >
      {Routes}
      
      </Layout>
      <Footer />
      </Aux>
    );
  }
}

const mapStateToProps = state =>{
  return {
    idToken:state.authReducer.idToken
  }
}

const mapDispatchToProps = dispatch => {
  return { 
      onTryAuto: ()=> dispatch(actionCreator.authCheckState()),
  };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
/* 
When using the react-router-dom, 
For the root url i.e '/' you can use 
exact to tell the browser 
that only if the '/' is visited that 
when it should be loaded, when using 
the Switch method load seconday path 
before the maain url, i.e '/checkout'
 before '/' and wrap all in 
switch component
*/