import axios from 'axios';
import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAILURE,
    PRODUCTS_DETAILS_REQUEST,
    PRODUCTS_DETAILS_SUCCESS,
    PRODUCTS_DETAILS_FAILURE,
    CLEAR_ERRORS,
} from "../constants/productConstants";

export const  getProduct=()=> async(dispatch)=>{
  try {
      dispatch({type : ALL_PRODUCTS_REQUEST})
      let link = "https://hope-ecommerce.herokuapp.com/api/v1/products";
    //   http://localhost:4000/api/v1/products?type=price&value=${price}
        const {data} = await axios.get(link);
        dispatch({
            type : ALL_PRODUCTS_SUCCESS,
            payload:data,
        });
  } catch (error) {
      dispatch({
          type:ALL_PRODUCTS_FAILURE,
          payload:error.response.data.message,
      });
  }
};

export const  getProductDetails=(id)=> async(dispatch)=>{
    try {
        dispatch({type : PRODUCTS_DETAILS_REQUEST})
  
          const {data} = await axios.get(`https://hope-ecommerce.herokuapp.com/api/v1/product/${id}`);
          dispatch({
              type : PRODUCTS_DETAILS_SUCCESS,
              payload:data.product,
          });
    } catch (error) {
        dispatch({
            type:PRODUCTS_DETAILS_FAILURE,
            payload:error.response.data.message,
        });
    }
  };
  export const  getHomeProduct=(page,price,category,ratings)=> async(dispatch)=>{
    try {
        dispatch({type : ALL_PRODUCTS_REQUEST})
        let link = `https://hope-ecommerce.herokuapp.com/api/v1/products?type=price&value=${price}&ratings[gte]=${ratings}`;


    if(category){
        link=`https://hope-ecommerce.herokuapp.com/api/v1/products?type=category&value=${category}&ratings[gte]=${ratings}`;
    }


      //   http://localhost:4000/api/v1/products?type=price&value=${price}
          const {data} = await axios.get(link);
          dispatch({
              type : ALL_PRODUCTS_SUCCESS,
              payload:data,
          });
    } catch (error) {
        dispatch({
            type:ALL_PRODUCTS_FAILURE,
            payload:error.response.data.message,
        });
    }
  };
  

//Clear Errors
export const clearErrors = () =>async(dispatch)=>{
dispatch({type:CLEAR_ERRORS});

}