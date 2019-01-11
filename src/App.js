import React, { Component } from 'react';
import { Route, Switch,withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import '../App.css';
import Aux from './HiherOrderCmp/AuxHoc';
import classes from '../components/layout/layout.css';
import Layout from '../components/layout/layout'
import Footer from '../container/footer/footer';

import * as actionCreator from '../store/actions/index';
import asyncComponent from '../Hoc/asyncComponent/asyncComponent';


const asynSuccess = asyncComponent( () => {
  return import('../components/UI/SuccessMessage/success');
}); 

const asynOrders = asyncComponent( () => {
  return import('./orders/oders');
}); 

const asynBuggerBuilder = asyncComponent( () => {
  return import('./buggerBuilder/BuggerBuilder');
}); 

const asynCheckout = asyncComponent( () => {
  return import('../container/Checkout/Checkout');
}); 

const asynHome = asyncComponent( () => {
  return import('./Home/Home');
});

const asynLogin = asyncComponent( () => {
  return import('../container/Auth/Auth');
});

const asynLogout = asyncComponent( () => {
    return import('./Auth/Logout/Logout');
});

class App extends Component {

  state={

  }

  componentDidMount(){
    this.props.onTryAuto();
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