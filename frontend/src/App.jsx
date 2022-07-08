
import './App.css';
import Header from "./Components/navbar/Header";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
// import {ReactNavbar} from "overlay-navbar"
import WebFont from "webfontloader"
import React from 'react';
import Footer from './Components/footer/Footer';
import Home from './Components/Home/Home.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import Products from './Components/Products/Products.jsx';
import Search from './Components/Search/Search.jsx';
import SingleProduct from './Components/Products/SingleProduct';
import LoginSignUp from './Components/User/LoginSignup';
function App() {

React.useEffect(() => {

  WebFont.load({
    google: {
      families: ['Roboto:300,400,500,700', 'sans-serif']
    }
  });
} , [])

  return (
    
    <Router>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/product/:id" element={<ProductDetails/>}/>
      <Route exact path="/singleproduct/:name" element={<SingleProduct/>}/>

      <Route exact path="/products" element={<Products/>}/>
      <Route exact path="/search" element={<Search/>}/>

      <Route exact path="/login" element={<LoginSignUp/>}/>

      </Routes>
      <Footer />
      </Router>
      
    
  );
}

export default App;
