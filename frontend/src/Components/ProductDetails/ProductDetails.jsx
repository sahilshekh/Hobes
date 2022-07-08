import React, { Fragment, useEffect } from 'react'
import Carousel from "react-material-ui-carousel"
import "./ProductDetails.css"
import { useSelector,useDispatch } from 'react-redux'
import { clearErrors, getProductDetails } from '../../actions/productAction'
import { useParams } from 'react-router-dom'
import { Rating } from "@material-ui/lab";
import ReviewsCard from './ReviewsCard'
import Loader from '../loader/loader'
import {useAlert} from "react-alert"
const ProductDetails = () => {
  const alert = useAlert()
  const {id} = useParams()
  console.log(id)
    const dispatch = useDispatch()
    
    useEffect(() => {
      if(error){
        alert.error(error)
        dispatch(clearErrors())
      }
      dispatch(getProductDetails(id))
    }, [dispatch,id,alert])
    const {product ,loading,error } = useSelector((state )=> state.productDetails)

    const options = {
      size: "large",
      value: product.ratings,
      readOnly: true,
      precision: 0.5,
    };
  return (
    <Fragment>
      {loading ? <Loader/>:(
          <>
     
          <div className='ProductDetails'> 
            <div>
                    {product.images &&
                    product.images.map((item,i)=>(
                      
                        <img
                        className='CarouselImage'
                        key={item.url}
                        src={item.url}
                          alt={`${i}Slide`}
                          />
                    
                    ))}
            </div>
        
            <div>
               <div className='detailsBlock-1'>
                      <h2>{product.name}</h2>
                      <p>Product #{product._id}</p>
               </div>
               <div className='detailsBlock-2'>
                    <Rating{...options}/>
                    <span>({product.numOfReviews} Reviews)</span>
               </div>
                <div className='detailsBlock-3'>
                  <h1>{`₹${product.price}`}</h1>
                  <div className='detailsBlock-3-1'>
                    <div className='detailsBlock-3-1-1'>
                      <button>-</button>
                      <input type="number" value="1" />
                      <button>+</button>
                    </div>{' '}
                    <button>Add to Cart</button>
                  </div>
                  <p>Status:{" "}
                  <b className={product.Stock < 1 ? "redColor":"greenColor"}>
                    {product.Stock<1?"OutOfStock":"InStock"}
                  </b>
                  </p>
                </div>
                <div className='detailsBlock-4'>
                  <h2>Product Details</h2>
                  Description:<p>{product.description}</p>
              </div>
              <button className='submitReview'>Submit Review</button>
            </div>
            </div>
            <h3 className='reviewsHeading'>REVIEWS</h3>
      
            {product.reviews && product.reviews[0] ?(
              <div className='reviews'>
                {product.reviews && product.reviews.map((review)=><ReviewsCard review={review}/>)}
              </div>
            ):(
              <p className='noReviews'>No Reviews Yet</p>
            )}
          </>
      )}
    </Fragment>
  )
}

export default ProductDetails
