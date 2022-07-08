import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAILURE,

    PRODUCTS_DETAILS_REQUEST,
    PRODUCTS_DETAILS_SUCCESS,
    PRODUCTS_DETAILS_FAILURE,
    CLEAR_ERRORS,
} from "../constants/productConstants";


export  const  productReducer =(state={products:[]},action)=>{
  switch (action.type) {
      case ALL_PRODUCTS_REQUEST:  
          return {
              loading:true,
              products:[]
          }
          case ALL_PRODUCTS_SUCCESS:
            return {
                loading:false,
                products:action.payload.products,
                productCount: action.payload.productCount,
                resultPerPage:action .payload.resultPerPage
            }
            case ALL_PRODUCTS_FAILURE:
          
                return {
                    loading:false,
                    error:action.payload,
                }
                case CLEAR_ERRORS:
          
                    return {
                      ...state,
                        error: null,
                    };
      default:
          return state
  }
};


export  const  productDetailsReducer =(state={product:{}},action)=>{
    switch (action.type) {
        case PRODUCTS_DETAILS_REQUEST:  
            return {
                loading:true,
                ...state,
            }
            case PRODUCTS_DETAILS_SUCCESS:
              return {
                  loading:false,
                  product:action.payload,
               
              }
              case PRODUCTS_DETAILS_FAILURE:
            
                  return {
                      loading:false,
                      error:action.payload,
                  }
                  case CLEAR_ERRORS:
            
                      return {
                        ...state,
                          error: null,
                      };
        default:
            return state
    }
  };