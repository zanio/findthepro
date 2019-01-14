import React, { Component } from 'react';

import Modal from '../../components/UI/modal/Modal';
import Aux from '../aux';

const withErrorHandler = (WrapperComponent,Axios) => {

    return class extends Component {
        state={
            error:null,
            status:null
        }


        componentWillMount(){

            // Meaning of the code:
            //Before  I return the request object i want to set the error to null

            this.reqInterceptors = 
            Axios.interceptors.request.use(request =>{
                this.setState({error:null,
                    status:request.status})
                    
                return request;
            });

            // Meaning of the code:
            //I return the response object and set my error handling state to the incoming error object

            this.resInterceptors =
             Axios.interceptors.response.use(response => {
                this.setState({status:response.status});
                return response
             } , error => {
                    this.setState({error:error});
                    
            });
        }

      componentWillUnmount(){
            Axios.interceptors.request.eject(this.reqInterceptors);
            Axios.interceptors.response.eject(this.resInterceptors);

        }

        errorConfirmedHandler = ()=>{
            this.setState({error:null})
        }

        render(){

           // console.log(this.state.error);
        return (
            <Aux>
                <Modal modalControl={this.state.error}
                click={this.errorConfirmedHandler}>
                
                   <p style={{wordSpacing:'.009em',color:'red;',fontSize:'22px;'}}> {this.state.error? this.state.error.message:null} </p>
                    
                    </Modal>
            <WrapperComponent {...this.props} />

            </Aux>
        );
    }
}

}

export default withErrorHandler