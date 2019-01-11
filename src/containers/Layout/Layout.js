import React, { Component } from 'react';
import Aux from '../../HiherOrderCmp/AuxHoc';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';



class Layout extends Component{

state={
    showSideDrawer:  false
}

sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer:true})
}

sideDrawerToggleHandler = ()=>{
    this.setState(prevState =>{
        return { showSideDrawer:!prevState.showSideDrawer}
    });
}
    render(){

        
        
        return(
            <Aux> 
            <Toolbar close={this.sideDrawerToggleHandler} idToken={this.props.idToken}/>
            <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerToggleHandler}/>
            <main className={classes.Layout}>{this.props.children}</main>
            </Aux>)
  
};
}

export default Layout