import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +88012 3456 7894</label>
            <i className='fa fa-envelope'></i>
            <label> homecare@dienquang.com</label>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
           <div class="head-top-right">
            <div class="single-link">
            <div class="my-account"><a href="#"><span class="">My Account</span></a></div>
             <div class="wishlist"><a href="#"><span class="">Wishlist</span></a></div>
             <div class="check"><a href="#"><span class="">Checkout</span></a></div>
             <div class="login"><a href="#"><span class="">Log In</span></a></div>
          </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Head