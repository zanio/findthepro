//Imported Package(s)from npm
import axios from 'axios';

//Application imported modules
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return{
        type:actionTypes.AUTH_START
    }
}

export const authSuccess = (idToken,localId, expireIn) => {
    return{
        type:actionTypes.AUTH_SUCCESS,
        idToken:idToken,
        localId:localId,
        expireIn:expireIn
    }
}

export const authFail = (err) => {
    return{
        type:actionTypes.AUTH_FAIL,
        err:err
    }
}


export const loggOut = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');

    return {
        type:actionTypes.AUTH_LOGGOUT
    }
}

export const checkAuthTimeout = (expirationTime) =>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(loggOut())
        },expirationTime*1000)
    }
}

export const auth = (email,password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData ={
            email:email,
            password:password,
            returnSecureToken:true
        }
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAJ7IRsbjyKYQUT0S2rIsiLzMkrmi-c-Mg'
        if(!isSignUp){
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAJ7IRsbjyKYQUT0S2rIsiLzMkrmi-c-Mg'
        }
        axios.post(url,authData)
        .then(response => {
            console.log(response)
            const expiration = new Date(new Date().getTime() + response.data.expiresIn * 1000)
            localStorage.setItem('token',response.data.idToken)
            localStorage.setItem('expirationDate', expiration)
            localStorage.setItem('userId', response.data.localId)
            dispatch(authSuccess(response.data.idToken,response.data.localId))
            dispatch(checkAuthTimeout(response.data.expiresIn))
        })
        .catch(err => {
            console.log(err);
            dispatch( authFail(err) )
        })
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type:actionTypes.SET_AUTH_REDIRECT_PATH,
        path:path
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(loggOut())
        }else{
            const expirationDate =new Date( localStorage.getItem('expirationDate'))
        if(expirationDate > new Date){
            console.log(expirationDate)
            const userId  = localStorage.getItem('userId')
            dispatch(authSuccess(token,userId));
        }
        
            dispatch(checkAuthTimeout(expirationDate.getTime() - new Date().getTime() / 1000 ))
        }
    }
}
