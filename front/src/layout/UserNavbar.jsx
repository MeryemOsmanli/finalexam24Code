import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'
import { MainContext } from '../context/MainProvider'
import "./usernavbar.scss"

function UserNavbar() {
    const {basket}=useContext(MainContext)
  return (
    <div>
        {/* <Link to="/">Home</Link>---
        <Link to="about">About</Link>---
        <Link to="basket">Basket{basket.length} </Link>---
        <Link to="wishlist">wishlist</Link>---
      <Link to="/admin">AdminHome</Link> */}
      <div className="user_navbar_background">
        <div className="user_navbar_contain container">
          <div className="user_navbaer_left">
            <h1>COLO<span>SHOP</span></h1>
          </div>
          <div className="user_navbaer_right">
            <ul>
              <li className='noneli'><Link to="/">HOME</Link></li>
              <li className='noneli'>SHOP</li>
              <li className='noneli'>PROMOTION</li>
              <li className='noneli'>PAGES</li>
              <li className='noneli'>BLOG</li>
              <li className='noneli'>CONTACT</li>
              <li className='noneli'>SEARCH</li>
              <li><Link to="basket"><i className="fa-solid fa-bag-shopping"></i> {basket.length} </Link></li>
              <li><Link to="wishlist"><i className="fa-regular fa-heart"></i></Link></li>
              <li><Link to="/admin"><i class="fa-solid fa-user"></i></Link></li>
              <li className='bars'><i class="fa-solid fa-bars-staggered"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserNavbar