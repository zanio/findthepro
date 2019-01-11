import * as actionTypes from '../actions/actionTypes';

const initialState ={

    idToken:null,
    localId:null,
    error:null,
    loading:false,
    authRedirectPath:'/'
}

const authLogout =(state=initialState, action)=>{
    return {
        ...state,
        idToken:null,
        localId:null
    }
}

const authReducer =(state=initialState, action)=>{

    switch(action.type){
        case actionTypes.AUTH_START:
        return {
            ...state,
            error:null,
            loading:true
        }

        case actionTypes.AUTH_SUCCESS:
        return{
            ...state,
            error:null,
            loading:false,
            idToken:action.idToken,
            localId:action.localId,
          
        }

        case actionTypes.AUTH_FAIL:
        return{
            ...state,
            error:action.err,
            loading:false
        }

        case actionTypes.SET_AUTH_REDIRECT_PATH:
        return{
            ...state,
            authRedirectPath:action.path
        }

        case actionTypes.AUTH_LOGGOUT:
        return authLogout(state,action)
                                                                                                                                        
        default:return state
        
    }
    
}
export default authReducer;