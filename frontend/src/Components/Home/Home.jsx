import React, { Fragment, useEffect } from 'react'
import {CgMouse} from 'react-icons/cg'
import "./Home.css"
import Product from './ProductCard.jsx'
import MetaData from '../MetaData'
import { clearErrors, getProduct } from '../../actions/productAction'
import {useSelector, useDispatch} from 'react-redux'
import Loader from "../loader/loader"
import { useAlert } from 'react-alert'



// const product = {
//  name:"Blue TShirt",
//  images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
//   price:"₹300",
//   _id:"Sahil"
// }

export default function Home() {
  const alert = useAlert()
const dispatch=useDispatch()
 const {loading,error,products,productCount}=useSelector(
   (state) => state.products
   );

useEffect(()=>{
  if(error){
    alert.error(error)
    dispatch(clearErrors())
  }
  dispatch(getProduct())
},[dispatch,error,alert])
  
  




  return (
   <Fragment>
     {loading ?(<Loader/>):
     (
        <>
        <MetaData title="WelCome To Hobes😋 "/>
        <div className='banner'>
          <p>Welcome to Hobes</p>
          <h1>Find Amazing Sweets Products Below</h1>
          <a href="#container">
          <button>
            Scroll<CgMouse/>
          </button>
          </a>
        </div>
     
     <h2 className='homeHeading'>Featured Products</h2>
     <div className="container" id='container'>
     {/* <Product product={product}/>
     <Product product={product}/>
     <Product product={product}/>
     <Product product={product}/>
     <Product product={product}/>
     <Product product={product}/>
     <Product product={product}/>
     <Product product={product}/> */}
     {products && products.map((product)=>(
       <Product product={product}/>
     ))}
     </div>
        </>
    ) }
   </Fragment>
  )
}
