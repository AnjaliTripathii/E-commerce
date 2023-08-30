import React from 'react';
import {AiOutlineInstagram} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {FiTwitter} from 'react-icons/fi';
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="about">
            <div className="logo">
              <img src="./img/logo.png" alt="logo" />
            </div>
            <div className="details">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, quos?</p>
              <div className="icon">
                <li><AiOutlineInstagram/></li>
                <li><BsFacebook/></li>
                <li><FiTwitter/></li>
              </div>
            </div>
          </div>
          <div className="account">
            <h3>My Account</h3>
            <ul>
              <li>Account</li>
              <li>Order</li>
              <li>Cart</li>
              <li>Shipping</li>
              <li>Return</li>
            </ul>
          </div>
          <div className="page">
          <h3>Pages</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
