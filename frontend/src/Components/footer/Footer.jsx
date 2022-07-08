import React from 'react'
import PlayStore from "../../images/playstore.png"
import AppStore from "../../images/Appstore.png"
 import "./Footer.css"
export default function Footer() {
  return (
    <footer id="footer">
    <div className='leftFooter'>
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={PlayStore} alt="playstore"/>
        <img src={AppStore} alt="appstore"/>
    </div>
  
  <div className='midFooter'>
    
  <h1>Hobes.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; SahilShekh</p>
  </div>

   <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/shekhsahil055/">Instagram</a>
        <a href="https://www.facebook.com/sahil.shekh.583">Facebook</a>
      </div> 



    </footer>
  )
}
