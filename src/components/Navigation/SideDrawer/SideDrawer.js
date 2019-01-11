//Imported Package(s)from npm
import React from 'react';

//Application imported modules
import classes from './SideDrawer.module.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems';
import Backdrop from '../Backdrop/BackDrop';
import Aux from '../../../HiherOrderCmp/AuxHoc';


const SideDrawer = (props)=>{

    let attachedSideDrawer = [classes.SideDrawer, classes.Closed]

     if(props.open){
        attachedSideDrawer = [classes.SideDrawer, classes.Open]
     }
    
   return( 
     
       <Aux>
           
     <Backdrop control = {props.openControl} click={props.closeControl}/> 
    
   <div className={attachedSideDrawer.join(' ')} onClick={props.close}>
   
        <div className = {classes.Logo}> 
           <Logo /> 
        </div>
            <nav>
            <NavigationItems />
            </nav>
        </div>
        </Aux>
);
}
export default SideDrawer;