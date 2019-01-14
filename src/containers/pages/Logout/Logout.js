//Imported Package(s)from npm
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

//Application imported modules
import Aux from '../../../HiherOrderCmp/AuxHoc';
import Form from '../../Forms/Form';
import * as actionCreator from '../../../Store/actions/index'




class Logout extends Component{

state={
  
}
componentDidMount(){
    this.props.onLogout()
}

render(){
    return(
        <Redirect to='/' />
    );
}
}
const mapDispatchToProps = dispatch=>{
return {
    onLogout:()=>dispatch(actionCreator.loggOut())
}
}

export default connect(null,mapDispatchToProps)(Logout)