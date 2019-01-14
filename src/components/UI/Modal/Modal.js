//Imported Package(s)from npm
import React, { Component } from 'react';

//Application imported modules
import classes from './Modal.module.css';
import Aux from '../../../HiherOrderCmp/AuxHoc';
import Backdrop from '../Backdrop/BackDrop';

class Modal extends Component{

  

  shouldComponentUpdate(nextProps, nextState){

    return nextProps.purchasing !== this.props.purchasing
    || nextProps.children !== this.props.children
  }

render(){

 /* let backdrop = null;
  if(this.props.purchasing){
    backdrop = <Backdrop purchasing={this.props.purchasing} />
  }*/

  return (
    <Aux>
    
      <Backdrop control={this.props.modalControl} click={this.props.click} />
   
  {this.props.modalControl ? <div className={classes.Modal}>{this.props.children}</div> :null}

     </Aux>
  )
}
} 


export default Modal;