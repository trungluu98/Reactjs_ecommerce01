import React from "react"
import logo from "../../components/assets/images/Devil.png"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={logo} alt='' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            
            <select class="category-items" name="category" >
            <option>Men</option>
                      <option>Women</option>
                       <option>Jewellery</option>
                        <option>Electronics</option>
                          <option>Kid</option>
                            <option>Bootees Bags</option>
                               <option>Clothing</option>
                                  <option>Footwear</option>
                                       <option>T-Shirts</option>
                                          <option>Polo-Shirts</option>
                  <option selected="selected" >All Category</option>
                </select>
                
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
