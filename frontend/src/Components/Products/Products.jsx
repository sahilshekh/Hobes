import React, { Fragment, useEffect, useState } from 'react'
import "./Products.css"
import {useSelector,useDispatch} from 'react-redux'
import {  getProductDetails } from '../../actions/productAction'
import Loader from '../loader/loader'
import ProductCard from '../Home/ProductCard'
import  Pagination  from 'react-js-pagination'
import  Slider from '@material-ui/core/Slider'
import  Typography  from '@material-ui/core/Typography'
import { useParams } from 'react-router-dom'
import { clearErrors, getHomeProduct } from '../../actions/productAction'
import { useAlert } from 'react-alert'
import Metadata from "../../Components/MetaData.jsx"





const categories = [

  "Cakes",
"Small cakes and pastries",
"Confection",
"Custards",
"Deep-fried",
"Frozen",
"Gelatin",
"Pastries",
]


function Products() {
  const alert = useAlert()
  const dispatch=useDispatch()
  const [price , setPrice] = useState(1000)
  const [currentPage, setCurrentPage] = useState("");
  const [category, setCategory] = useState("");
  const[ratings,setRating]=useState(0)

  const setCurrentPageNo =(e)=>{
     setCurrentPage(e)
     }
   const {error,loading,products,resultPerPage,productsCount}=useSelector(
     (state) => state.products
     );
     const priceHandler =(event ,newPrice)=>{
        setPrice(newPrice)
        console.log(newPrice)
     }
  
  useEffect(()=>{
    if(error){
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getHomeProduct(currentPage,price,category,ratings))
  },[dispatch,error,alert,currentPage,price,category,ratings])







  //   const dispatch = useDispatch()
 
    
  //   const {products,loading,resultPerPage,productsCount} = useSelector((state )=> state.products)

  //  const setCurrentPageNo =(e)=>{
  //   setCurrentPage(e)
  //  }

  //   useEffect(() => {  
  //      dispatch(getProduct())
  //   }, [dispatch])
  return (
  <Fragment>
      {loading?(<Loader/>):(<Fragment>
  
  <Metadata title="PRODUCTS...."/>

          <h2 className='productsHeading'>Products</h2>
   <div className='products'>
       {products && products.map((product)=>(
              <ProductCard key={product._id} product={product}/>
                                                                    
         ))}
        
   </div>
     <div className='filterBox'>
   <Typography>price</Typography>
   <Slider 
   value={price}
   onChange={priceHandler}
   valueLabelDisplay="auto"
   aria-labelledby='range-slider'
   min={0}
    max={1000}
   />


<Typography>Categories</Typography>
      <ul className='categoryBox'>
         {categories.map((category)=>(
            <li
             key={category._id}
              className="category-link"
              onClick={()=>setCategory(category)}
              >
                {category}
            
            </li>

         ))}
      </ul>
   <fieldset>
     <Typography component="legend">
     Rating Above</Typography>
     <Slider 
     value={ratings}
     onChange={(e,newRating)=>setRating(newRating)}
     aria-labelledby='continuous-slider'
      min={0}
      max={5}
      valueLabelDisplay="auto"
     />
   </fieldset>

     </div>
  
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
        
          </Fragment>
          
          )}
  </Fragment>
  ) 
}

export default Products
