//Imported Package(s)from npm
import React, { Component } from 'react';

//Application imported modules
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
    console.log(this.props.idToken);
}
    render(){

        
        
        return(
            <Aux> 
            <Toolbar close={this.sideDrawerToggleHandler} idToken={this.props.idToken}/>
            <SideDrawer idToken={this.props.idToken} openControl={this.state.showSideDrawer} closeControl={this.sideDrawerToggleHandler}/>
            <main className={classes.Layout}>{this.props.children}</main>
            </Aux>)
  
};
}

export default Layout