import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import logo from "../../images/hobesco.jpg"
// import Image from "../../images/user.png"
import {CgProfile} from "react-icons/cg"
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineShoppingCart} from "react-icons/ai"

  
  const Header = () => {
    return <ReactNavbar 
    burgerColorHover= "#eb4034"
    logo={logo}
    logoWidth= "20vmax"
    navColor1= "white"
    logoHoverSize= "10px"
    logoHoverColor= "#eb4034"
    link1Text= "Home"
    link2Text= "Products"
    link3Text= "Contact"
    link4Text= "About"
    link1Url= "/"
    link2Url= "/products"
    link3Url= "/contact"
    link4Url= "/about"
    link1Size= "1.3vmax"
    link1Color= "rgba(35 35 350.8)"
    nav1justifyContent= "flex-end"
    nav2justifyContent= "flex-end"
    nav3justifyContent= "flex-start"
    nav4justifyContent= "flex-start"
    link1ColorHover= "#eb4034"
    link1Margin= "1vmax"
    profileIcon={true}
    ProfileIconElement={CgProfile}
    profileIconUrl="/Login"
    // profileIconUrl= "/login"
    searchIcon={true}
    SearchIconElement={AiOutlineSearch}
    searchIconUrl="/search"
    cartIcon={true}
    CartIconElement={AiOutlineShoppingCart}
    profileIconColor= "rgba(35 35 350.8)"
    searchIconColor= "rgba(35 35 350.8)"
    cartIconColor= "rgba(35 35 350.8)"
    profileIconColorHover= "#eb4034"
    searchIconColorHover= "#eb4034"
    cartIconColorHover= "#eb4034"
    cartIconMargin= "1vmax"
    
    
    
    />;
  };
  export default Header;
