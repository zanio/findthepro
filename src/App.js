//Imported Package(s)from npm
import React, { Component } from 'react';
import { Route, Switch,withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

//Application imported modules
import './App.css';
import Aux from './HiherOrderCmp/AuxHoc';
import classes from './containers/Layout/Layout.module.css';
import Layout from './containers/Layout/Layout'
import Footer from '../container/footer/footer';

import * as actionCreator from '../store/actions/index';
import asyncComponent from '../Hoc/asyncComponent/asyncComponent';

//React Lazy Loading Effect
const asynHome = asyncComponent( () => {
  return import('./containers/pages/Home/Home');
}); 

const asynGetSupport = asyncComponent( () => {
  return import('./containers/pages/GetSupport/GetSupport');
}); 

const asynAboutUs = asyncComponent( () => {
  return import('./containers/pages/');
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

const asynLogout = asyncComponent( () => {
    return import('./containers/pages/Home/Home');
});

class App extends Component {

  state={

  }

 
  render() {
   
  
   return (
      <Aux >
      <Layout className={classes.Aux} idToken={this.props.idToken}
      >
      <Switch>
      <Route path="/success" component = {asynSuccess} /> 
      <Route path="/buggerBuilder"  component = {asynBuggerBuilder} />
      <Route path="/" exact component = {asynHome} />
      </Switch>
      
      </Layout>
      <Footer />
      </Aux>
    );
  }
}

const mapStateToProps = state =>{
  return {
    purchased:state.order.purchased,
    idToken:state.authReducer.idToken
  }
}

const mapDispatchToProps = dispatch => {
  return { 
      onTryAuto: ()=> dispatch(actionCreator.authCheckState()),
  };
}


export default withRouter( connect(mapStateToProps, mapDispatchToProps)(App));

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