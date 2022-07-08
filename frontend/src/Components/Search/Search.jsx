import React, { Fragment, useState } from 'react'
import "./Search.css"
import ProductCard from '../Home/ProductCard'
import {useNavigate} from "react-router-dom"
import Metadata from "../../Components/MetaData.jsx"

function Search() {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();
    console.log( ProductCard)
    
    const searchSubmitHandler = (e) => {
      e.preventDefault();
      const single = keyword
    navigate(`/singleproduct/${single}`)
      // console.log(history)
    };
  return (
  <Fragment>
     <Metadata title="Search Sweets With 🙂"/>
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input type="text" placeholder="Search a products ..."
         className="searchInput" 
         onChange={(e)=>setKeyword(e.target.value)} 
         />
 
  <input type="submit" value="Search" />
      </form>
  </Fragment>
  )
}

export default Search
