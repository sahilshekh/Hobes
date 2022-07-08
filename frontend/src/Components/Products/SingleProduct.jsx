import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Metadata from "../../Components/MetaData.jsx"

const SingleProduct = () => {
  
    const {name} = useParams()

const [singleData,setData] = useState([])

useEffect(()=>{
singleProduct()
},[])

    const singleProduct = ()=>{
        axios.get(`https://hope-ecommerce.herokuapp.com/api/v1/singleproduct?type=name&pname=${name}`).then((res)=>{
             console.log(res)
             setData(res.data)
        })
        .catch((e)=>{
             console.log(e)
        })
    }
  return (
      <>
    <Metadata title="your product🙂"/>
      <div>
       {singleData.map((product)=>(
           <div>
 <h1>{product.name}</h1>
 <img src={product.images[0].url} alt={product.name} />
 <p>{product.description}</p>
 <p>{`₹${product.price}`}</p>
 <p>{product.rating}</p>
 <p>{product.numOfReviews}</p> 
 </div> 
       ))}
      </div>
      </>
      
    
  )
}

export default SingleProduct
