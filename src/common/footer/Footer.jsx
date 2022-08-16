import React from "react"
import "./style.css"


const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>DeVil </h1>
            <p>Tất cả vì khách hàng .</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <button class='fa-brands fa-google-play'></button>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <button class='fa-brands fa-app-store-ios'></button>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li></li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
                   <li><a title="Paypal" href="#"><img src="../../assets/images/payment/1.png" alt="Paypal" /></a></li>
                   <li><a title="Visa" href="#"><img src="../../assets/images/payment/2.png" alt="Visa" /></a></li>
                   <li><a title="Bank" href="#"><img src="../../assets/images/payment/3.png" alt="Bank" /></a></li>
                   <li class="hidden-xs"><a title="Mastercard" href="#"><img src="../../assets/images/payment/4.png" alt="Mastercard" /></a></li>
                  <li><a title="Discover" href="#"><img src="../../assets/images/payment/5.png" alt="Discover" /></a></li>
            </ul>
          </div>
        </div>
        </footer>
    </>
  )
}

export default Footer
