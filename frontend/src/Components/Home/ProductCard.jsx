 import React from 'react'
 import {Link} from 'react-router-dom'
 import ReactStars from "react-rating-stars-component";


 export default function ProductCard({product}) {
  const options = {
    edit:false,
    color:"rbg(20, 20, 20, 0.8)",
    activeColor:"tomato",
    value:product.rating,
    isHalf:true,
     size:window.innerWidth<600?20:30,
      
 }
 
   return (
 <Link className='productCard' to={`/product/${product._id}`}>
 
 <img src={product.images[0].url} alt={product.name} />
 <p>{product.name}</p>
 <div>
    <ReactStars  {...options}/> <span>({product.numOfReviews})</span>
 </div>
 <span>{`₹${product.price}`}</span>
 </Link>   
   )
 }
 