import React, {useState} from "react";
import "./Home.css";
import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import {FiTruck} from "react-icons/fi";
import {BsCurrencyDollar} from "react-icons/bs";
import {TbDiscount2} from "react-icons/tb";
import {FiHeadphones} from "react-icons/fi";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {AiOutlineEye} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";
import Homeproduct from "./Homeproduct";

const Home = () => {
  const [homeProduct, setHomeProduct] = useState(Homeproduct);
  return (
    <>
      <div className="top-banner">
        <div className="container">
          <div className="details">
            <h2>The best Note Book collection 2023</h2>
            <Link to="/product" className="link">
              Shop Here
              <BsArrowRight />
            </Link>
          </div>
          <div className="img-box">
            <img src="./img/slider-img.png" alt="slider-img" />
          </div>
        </div>
      </div>
      <div className="product-type">
        <div className="container">
          <div className="box">
            <div className="img-box">
              <img src="./img/Mobile Phone.png" alt="Mobile" />
            </div>
            <div className="details">
              <p>23 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="./img/smart watch.png" alt="watch" />
            </div>
            <div className="details">
              <p>18 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="./img/headphone.png" alt="headphone" />
            </div>
            <div className="details">
              <p>52 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="./img/cpu.png" alt="cpu" />
            </div>
            <div className="details">
              <p>63 products</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FiTruck />
            </div>
            <div className="details">
              <h3>Free Shipping</h3>
              <p>Order above $1000</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BsCurrencyDollar />
            </div>
            <div className="details">
              <h3>Return and Refund</h3>
              <p>Money Back Guaranteed</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <TbDiscount2 />
            </div>
            <div className="details">
              <h3>Member Discount</h3>
              <p>On Every Order</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FiHeadphones />
            </div>
            <div className="details">
              <h3>Customer Support</h3>
              <p>Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <h2>Top products</h2>
        <div className="container">
          {Homeproduct.map((element) => {
            return (
              <div className="box" key={element.id}>
                <div className="img-box">
                  <img src={element.Img} alt={element.Title} />
                  <div className="icon">
                   <li><AiOutlineShoppingCart /></li>
                   <li> <AiOutlineEye /></li> 
                   <li> <AiOutlineHeart /></li> 
                  </div>
                </div>
                <div className="details">
                  <p>{element.Cat}</p>
                  <h3>{element.Title}</h3>
                  <h4>{element.Price}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
