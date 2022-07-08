import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    CLEAR_ERRORS
} from "../constants/userContant.jsx"

import axios from "axios";
export  const  login =(email,password)=> async(dispatch)=>{
    
    try{
        dispatch({type:LOGIN_REQUEST});
       const config = { headers: { 'Content-Type': 'application/json' } };
     
       const {data} = await axios.post(`/api/v1/login`,{email,password},config);
        

        dispatch({type:LOGIN_SUCCESS,payload:data.user});
    }catch(error){
        dispatch({type:LOGIN_FAILURE,payload:error.response.data.error});
    }
}

//Clear Errors
export const clearErrors = () =>async(dispatch)=>{
    dispatch({type:CLEAR_ERRORS});
    
    }